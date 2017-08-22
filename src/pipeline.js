/**
 * @module src/pipeline
 */

const shell = require('shelljs');
const Async = require('async');
const EventEmitter = require('events');

/**
 * runs a group of concurrent task
 * @method pipeline
 * @param  {Array} tasks - a group of concurrent tasks
 * @return {EventEmitter}
 */
module.exports = function Pipeline(tasks) {
  const emitter = new EventEmitter();

  let results = [];
  let failed = false;

  Async.eachOfLimit(Object.keys(tasks), 1, (stage, index, callback) => {
    emitter.emit('stage:start', stage)

    let pipe = {
      title: stage,
      stages: [],
      state: 'unknown'
    };
    Async.eachOf(tasks[stage], (command, index, callback) => {
      emitter.emit('stage:start:command', stage, command);

      let start = process.hrtime();
      let data = {
        title: command,
        state: 'unknown',
        output: ''
      };
      if(!failed) {
        let child = shell.exec(command, {
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

          failed = (code === 1);

          pipe.state = code === 1 ? 'fail' : 'success';
          data.state = code === 0 ? 'success' : 'fail';
          data.time = ((end[0] * 1e9) + end[1]) / 1e6;
          pipe.stages.push(data);
          callback();
        });
      } else {
        // the pipeline has failed let's update the remaining tasks as uncomplete
        pipe.stages.push(data);
        callback();
      }
    }, () => {
      emitter.emit('stage:end', stage)

      results.push(pipe);
      callback();
    });
  }, (error) => {
    if(error) {
      emitter.emit('error', error);
    } else {
      emitter.emit('end', results)
    }
  });

  return emitter;
}
