const test = require('tape');

const Pipeline = require('../lib/pipeline');

test('pipeline', (t) => {
  t.plan(2);

  t.test('should run sequential tasks', (t) => {
    let events = [];
    const p = Pipeline({
        "stage1": [
          "echo 'hello world'",
          "echo 'second task'"
        ],
        "stage2": [
          "ls -lh"
        ]
    });

    p.on('stage:start', (stage) => {
      events.push(stage);
    });

    p.on('stage:start:command', (stage, command) => {
      events.push(`${stage}${command}`);
    });

    p.on('error', (error) => {
      t.fail(error);
    });

    p.on('end', (results) => {
      t.deepEqual(events, ['stage1echo \'second task\'', 'stage2', 'stage2ls -lh']);
      t.equal(results[0].name, 'stage1');
      t.equal(results[0].state, 'success');
      t.equal(results[0].stages.length, 2)

      t.equal(results[0].stages[0].output, 'hello world\n');
      t.equal(results[0].stages[0].state, 'success');
      t.equal(results[0].stages[1].output, 'second task\n');
      t.equal(results[0].stages[1].state, 'success');

      t.equal(results[1].name, 'stage2');
      t.equal(results[1].state, 'success');
      t.equal(results[1].stages.length, 1)

      t.end();
    });
  });

  t.test('should fail tasks when one fails', (t) => {
    let events = [];
    const p = Pipeline({
        "stage1": [
          "echo 'hello world'",
          "echo 'second task'"
        ],
        "stage2": [
          "alkdsjfa1"
        ],
        "neverun": [
          "ls -lh"
        ]
    });

    p.on('stage:start', (stage) => {
      events.push(stage);
    });

    p.on('stage:start:command', (stage, command) => {
      events.push(`${stage}${command}`);
    });

    p.on('error', (error) => {
      t.fail(error);
    });

    p.on('end', (results) => {
      t.deepEqual(events, ['stage1echo \'second task\'', 'stage2', 'stage2alkdsjfa1', 'neverun', 'neverunls -lh'])
      t.equal(results[0].state, 'success');

      t.equal(results[1].state, 'fail');
      t.equal(results[1].stages[0].output, '/bin/sh: alkdsjfa1: command not found\n');

      t.equal(results[2].state, 'unknown');
      t.equal(results[2].stages[0].state, 'unknown');
      t.end();
    });
  });

});
