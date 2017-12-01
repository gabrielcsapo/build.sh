const test = require('tape');

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const execute = require('../lib/execute');

test('build.sh', (t) => {
  t.plan(1);

  t.test('should be able to execute build.yml', (async (t) => {
    const buildFile = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'build.yml'), 'utf8');
    const doc = yaml.safeLoad(buildFile);

    await execute(Object.assign(doc, { runOnly: [], debug: true, browser: false }));

    t.ok(fs.existsSync(path.resolve(__dirname, 'fixtures', 'build', 'index.html')));
    t.end();
  }));

  t.end();
});
