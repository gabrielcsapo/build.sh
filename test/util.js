const test = require('tape');

const { ms, renderAsciiPipe } = require('../lib/util');

test('util', (t) => {
  t.plan(2);

  t.test('ms', (t) => {
    t.plan(4);

    t.test('@ms seconds', (t) => {
      t.equal(ms(6000), '6s');
      t.end();
    });

    t.test('@ms minutes', (t) => {
      t.equal(ms(600000), '10m');
      t.end();
    });

    t.test('@ms hours', (t) => {
      t.equal(ms(6000000), '1h');
      t.end();
    });

    t.test('@ms days', (t) => {
      t.equal(ms(600000000), '6d');
      t.end();
    });
  });

  t.test('renderAsciiPipe', (t) => {
    t.plan(2);

    t.test('successful pipeline', (t) => {
      const pipe = renderAsciiPipe(["install", "lint", "coverage", "test", "docs"], [{
        path: 'install',
        state: 'success'
      },{
        path: 'lint',
        state: 'success'
      },{
        path: 'coverage',
        state: 'success'
      },{
        path: 'test',
        state: 'success'
      },{
        path: 'docs',
        state: 'success'
      }]);

      t.equal(pipe, ' ── \x1b[32minstall\x1b[39m ── \x1b[32mlint\x1b[39m ── \x1b[32mcoverage\x1b[39m ── \x1b[32mtest\x1b[39m ── \x1b[32mdocs\x1b[39m');
      t.end();
    });

    t.test('mixed pipeline', (t) => {
      const pipe = renderAsciiPipe(["install", "lint", "coverage", "test", "docs"], [{
        path: 'install',
        state: 'success'
      },{
        path: 'lint',
        state: 'fail'
      },{
        path: 'coverage',
        state: 'unknown'
      },{
        path: 'test',
        state: 'unknown'
      },{
        path: 'docs',
        state: 'unknown'
      }]);

      t.equal(pipe, ' ── \x1b[32minstall\x1b[39m ── \x1b[31mlint\x1b[39m ── \x1b[33mcoverage\x1b[39m ── \x1b[33mtest\x1b[39m ── \x1b[33mdocs\x1b[39m');
      t.end();
    });

  });

});
