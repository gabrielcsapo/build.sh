/**
 * @module lib/pipeline
 */

const shell = require('shelljs');
const Async = require('async');
const bluse = require('bluse');
const { EventEmitter2 } = require('eventemitter2');

function run(data, callback) {
  const start = process.hrtime();
  let child = shell.exec(data.name, {
    cwd: process.cwd(),
    async: true,
    silent: true
  });
  child.stdout.on('data', (m) => {
    data.output += m.toString('utf8');
  });
  child.stderr.on('data', (m) => {
    data.output += m.toString('utf8');
  });
  child.on('exit', (code) => {
    const end = process.hrtime(start);

    data.state = code === 0 ? 'success' : 'fail';
    data.time = ((end[0] * 1e9) + end[1]) / 1e6;
    callback();
  });
}

function fuzzyExists(array, string) {
  var found = array.sort().filter((value) => value.indexOf(string) > -1, [])[0];
  // make sure we trim off the value deliminator from previous run
  if(found && found.substr(0, 1) == ':') {
    found = found.substr(1, found.length);
  }
  return found;
}

/**
 * runs a group of concurrent task
 * @param  {Array} tasks - a group of concurrent tasks
 * @param  {Array=} refinedSteps - an array of strings that represent runnable parts of the pipeline
 * @return {EventEmitter}
 */
module.exports = function Pipeline(tasks, refinedSteps=[]) {
  let allowedSteps = [];
  const possibleSteps = Object.keys(bluse(tasks));
  if(refinedSteps.length > 0) {
    allowedSteps = refinedSteps;
  } else {
    allowedSteps = possibleSteps;
  }
  const emitter = new EventEmitter2({
    wildcard: true
  });

  let results = [];
  let failed = false;

  Async.eachOfLimit(Object.keys(tasks), 1, (stage, index, callback) => {
    process.nextTick(() => {
      var exists = fuzzyExists(allowedSteps, stage);
      if(!exists) {
        return callback();
      }

      let pipe = {
        name: stage,
        children: [],
        stages: [],
        state: 'unknown',
        id: Date.now() + Math.random().toString(36).substr(2, 10)
      };
      emitter.emit('stage:start', stage)
      Async.eachOfLimit(tasks[stage], 1, (command, index, callback) => {
        process.nextTick(() => {
          if(typeof command === 'object') {
            var newAllowed = allowedSteps.filter((a) => a.indexOf(stage) > -1).map((a) => a.replace(stage, '')).filter((a) => a !== '');

            let child = new Pipeline(command, newAllowed);

            child.on('end', (results) => {
              pipe.children = pipe.children.concat(results);
              return callback();
            });
          } else {
            // check if the sub process is allowed to be run
            if(exists !== stage && exists.indexOf(command) === -1) {
              return callback();
            }

            emitter.emit('stage:start:command', stage, command);

            let data = {
              name: command,
              state: 'unknown',
              output: '',
              time: 0,
              id: Date.now() + Math.random().toString(36).substr(2, 10)
            };
            if(!failed) {
              run(data, () => {
                failed = (data.state === 'fail');

                pipe.state = data.state === 'fail' ? 'fail' : 'success';
                pipe.stages.push(data);
                return callback();
              });
            } else {
              // the pipeline has failed let's update the remaining tasks as uncomplete
              pipe.stages.push(data);
              return callback();
            }
          }
        })
      }, () => {
        emitter.emit('stage:end', pipe)

        results.push(pipe);
        return callback();
      });
    })
  }, (error) => {
    if(error) {
      emitter.emit('error', error);
    } else {
      emitter.emit('end', results)
    }
  });

  return emitter;
}
