const test = require('tape');

const Pipeline = require('../lib/pipeline');

test('pipeline', (t) => {
  t.plan(2);

  t.test('should run sequential tasks', (t) => {
    let events = [];
    const p = new Pipeline({
        "stage1": [
          "echo 'hello world'",
          "echo 'second task'"
        ],
        "stage2": [
          "ls -lh"
        ]
    });

    p.events.on('start', (stage) => {
      events.push(stage.name);
    });

    p.run(() => {
      const results = p.getReport();

      t.deepEqual(events, [ 'stage1', 'stage2' ]);

      t.equal(results.children[0].name, 'stage1');
      t.equal(results.children[0].state, 'success');
      t.equal(results.children[0].children.length, 2)

      t.equal(typeof results.children[0].children[0].output[0], 'object');
      t.ok(results.children[0].children[0].output[0].date);
      t.equal(results.children[0].children[0].output[0].type, 'stdout');
      t.equal(results.children[0].children[0].output[0].content, 'hello world\n');
      t.equal(results.children[0].children[0].state, 'success');
      t.ok(results.children[0].children[0].time);

      t.equal(typeof results.children[0].children[1].output[0], 'object');
      t.ok(results.children[0].children[1].output[0].date);
      t.equal(results.children[0].children[1].output[0].type, 'stdout');
      t.equal(results.children[0].children[1].output[0].content, 'second task\n');
      t.equal(results.children[0].children[1].state, 'success');
      t.ok(results.children[0].children[1].time);

      t.equal(results.children[1].name, 'stage2');
      t.equal(results.children[1].state, 'success');
      t.equal(results.children[1].children.length, 1)

      t.end();
    });
  });

  t.test('should run a subset of sequential tasks', (t) => {
    let events = [];
    const p = new Pipeline({
        "stage1": [
          "echo 'hello world'",
          "echo 'second task'"
        ],
        "stage2": [
          "ls -lh"
        ]
    });

    p.events.on('end', (stage) => {
      events.push(stage.name);
    });

    p.run(() => {
      const results = p.getReport();

      t.deepEqual(events, [ 'stage1' ]);

      t.equal(results.children[0].name, 'stage1');
      t.equal(results.children[0].state, 'success');
      t.equal(results.children[0].children.length, 2);

      t.equal(typeof results.children[0].children[0].output[0], 'object');
      t.ok(results.children[0].children[0].output[0].date);
      t.equal(results.children[0].children[0].output[0].type, 'stdout');
      t.equal(results.children[0].children[0].output[0].content, 'hello world\n');
      t.equal(results.children[0].children[0].state, 'success');
      t.ok(results.children[0].children[0].time);

      t.equal(typeof results.children[0].children[1].output[0], 'object');
      t.ok(results.children[0].children[1].output[0].date);
      t.equal(results.children[0].children[1].output[0].type, 'stdout');
      t.equal(results.children[0].children[1].output[0].content, 'second task\n');
      t.equal(results.children[0].children[1].state, 'success');
      t.ok(results.children[0].children[1].time);

      t.end();
    }, { ignore: ["stage2"] });
  });

});
