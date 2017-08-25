const test = require('tape').test;
const path = require('path');
const shell = require('shelljs');
const git = require('../util/git');

test('git', (t) => {
  t.plan(4);

  t.test('should fail because directory is not a git directory', (t) => {
    t.plan(2);

    process.chdir(__dirname);
    git({ directory: __dirname })
      .then((data) => {
        t.ok(data !== undefined);
        t.fail('should not return data');
        t.end();
      })
      .catch((err) => {
        t.ok(typeof err !== 'undefined', 'error is not undefined');
        t.ok(err === 'directory does not contain git');
        t.end();
      });
  });

  t.test('should return the correct data', (t) => {
    t.plan(1);

    var keys = [ 'author_date', 'author_email', 'author_name', 'branch', 'commit',
      'committer_date', 'committer_email', 'committer_name', 'message', 'remotes' ];

    git({ directory: path.resolve(__dirname, '..') })
      .then((data) => {
        t.deepEqual(Object.keys(data).sort(), keys);
        t.end();
      })
      .catch((error) => {
        t.ok(!error, 'error should be undefined');
        t.fail('should not return an error');
        t.end();
      });
  });

  t.test('should fail when no remote is present', (t) => {
    t.plan(1);

    const root = process.cwd();
    process.chdir(path.resolve(__dirname, 'fixtures', 'sample-module'));

    shell.exec('git init');
    shell.exec('git add -A');
    shell.exec('git commit -m "testtest"');
    git({ directory: path.resolve(__dirname, 'fixtures', 'sample-module') })
      .then(() => {
        t.fail('should fail, but doesn\'t');
        process.chdir(root);
      })
      .catch((err) => {
        t.equal(err, 'no remote found');
        t.end();
        process.chdir(root);
      });
  });

  t.test('should cleanup git directory', (t) => {
    t.plan(0);

    const root = process.cwd();
    process.chdir(path.resolve(__dirname, 'fixtures', 'sample-module'));

    shell.exec('rm -rf .git');
    process.chdir(root);
    t.end();
  });

  t.end();
});
