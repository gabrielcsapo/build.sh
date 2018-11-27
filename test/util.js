const test = require('tape')

const { ms } = require('../lib/util')

test('util', (t) => {
  t.plan(1)

  t.test('ms', (t) => {
    t.plan(4)

    t.test('@ms seconds', (t) => {
      t.plan(1)

      t.equal(ms(6000), '6s')
    })

    t.test('@ms minutes', (t) => {
      t.plan(1)

      t.equal(ms(600000), '10m')
    })

    t.test('@ms hours', (t) => {
      t.plan(1)

      t.equal(ms(6000000), '1h')
    })

    t.test('@ms days', (t) => {
      t.plan(1)

      t.equal(ms(600000000), '6d')
    })
  })
})
