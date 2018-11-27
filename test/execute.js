const test = require('tape')

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const { execute } = require('../lib/execute')

test('@execute', (t) => {
  t.plan(1)

  t.test('should be able to execute build.yml', async (t) => {
    t.plan(1)

    const buildFile = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'build.yml'), 'utf8')
    const doc = yaml.safeLoad(buildFile)

    try {
      await execute(Object.assign(doc, { output: path.resolve(__dirname, 'fixtures', 'build'), runOnly: [], debug: true, browser: false }))
    } catch (ex) {
      t.fail(ex)
    }

    t.ok(fs.existsSync(path.resolve(__dirname, 'fixtures', 'build', 'index.html')))
  })
})
