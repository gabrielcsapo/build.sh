const test = require('tape')
const path = require('path')
const shell = require('shelljs')
const Git = require('../lib/git')

test('@git', (t) => {
  t.plan(4)

  t.test('should fail because directory is not a git directory', async (t) => {
    t.plan(2)

    try {
      const data = await Git({ directory: __dirname })
      t.ok(data !== undefined)
      t.fail('should not return data')
    } catch (err) {
      t.ok(typeof err !== 'undefined', 'error is not undefined')
      t.equal(err.message, 'directory does not contain git')
    }
  })

  t.test('should return the correct data', async (t) => {
    t.plan(1)

    var keys = [ 'author_date', 'author_email', 'author_name', 'branch', 'commit',
      'committer_date', 'committer_email', 'committer_name', 'message', 'remotes' ]

    try {
      const data = await Git({ directory: path.resolve(__dirname, '..') })
      t.deepEqual(Object.keys(data).sort(), keys)
    } catch (err) {
      t.notOk(err, 'error should be undefined')
    }
  })

  t.test('should fail when no remote is present', async (t) => {
    t.plan(1)

    const directory = path.resolve(__dirname, 'fixtures', 'sample-module')

    shell.exec('git init', { cwd: directory })
    shell.exec('git add -A', { cwd: directory })
    shell.exec('git commit -m "testtest"', { cwd: directory })

    try {
      await Git({ directory })
      t.fail('should fail, but doesn\'t')
    } catch (err) {
      t.equal(err.message, 'no remote found')
    }
  })

  t.test('should cleanup git directory', (t) => {
    shell.exec('rm -rf .git', { cwd: path.resolve(__dirname, 'fixtures', 'sample-module') })
    t.end()
  })
})
