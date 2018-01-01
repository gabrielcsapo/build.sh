const test = require('tape');

const { ms } = require('../lib/util');

test('util', (t) => {
  t.plan(1);

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

});
