import React from 'react'

import { storiesOf } from '@storybook/react'

import Stages from '../src/stages'

storiesOf('Stages', module)
  .add('success', () => {
    const stages = [
      {
        'type': 'command',
        'command': 'npm run build',
        'state': 'success',
        'output': [
          {
            'type': 'stdout',
            'content': '    \u001b[2K\u001b[1A\u001b[2K\u001b[G  ── \u001b[32mfoo\u001b[39m ── \u001b[90minstall\u001b[39m ── \u001b[90mextra:install\u001b[39m ── \u001b[90mdirectory\u001b[39m ── \u001b[90mlist:directory\u001b[39m\n',
            'date': '2017-12-04T22:16:40.456Z'
          },
          {
            'type': 'stdout',
            'content': '    \u001b[2K\u001b[1A\u001b[2K\u001b[G  ── \u001b[32mfoo\u001b[39m ── \u001b[90minstall\u001b[39m ── \u001b[32mextra:install\u001b[39m ── \u001b[90mdirectory\u001b[39m ── \u001b[90mlist:directory\u001b[39m\n    \u001b[2K\u001b[1A\u001b[2K\u001b[G  ── \u001b[32mfoo\u001b[39m ── \u001b[32minstall\u001b[39m ── \u001b[32mextra:install\u001b[39m ── \u001b[90mdirectory\u001b[39m ── \u001b[90mlist:directory\u001b[39m\n',
            'date': '2017-12-04T22:16:40.456Z'
          },
          {
            'type': 'stdout',
            'content': '    \u001b[2K\u001b[1A\u001b[2K\u001b[G  ── \u001b[32mfoo\u001b[39m ── \u001b[32minstall\u001b[39m ── \u001b[32mextra:install\u001b[39m ── \u001b[90mdirectory\u001b[39m ── \u001b[32mlist:directory\u001b[39m\n',
            'date': '2017-12-04T22:16:40.456Z'
          },
          {
            'type': 'stdout',
            'content': '    \u001b[2K\u001b[1A\u001b[2K\u001b[G  ── \u001b[32mfoo\u001b[39m ── \u001b[32minstall\u001b[39m ── \u001b[32mextra:install\u001b[39m ── \u001b[32mdirectory\u001b[39m ── \u001b[32mlist:directory\u001b[39m\n',
            'date': '2017-12-04T22:16:40.457Z'
          },
          {
            'type': 'stdout',
            'content': '    Report compiled [2s]\n',
            'date': '2017-12-04T22:16:40.457Z'
          }
        ],
        'id': '1504231277790k1l211gqkc',
        'time': 2620.514874
      }
    ]
    return (<Stages name='coverage' stages={stages} />)
  })
  .add('fail', () => {
    const stages = [
      {
        'type': 'command',
        'command': 'npm run coverage',
        'state': 'fail',
        'output': [{
          type: 'stdout',
          content: `\n> build.sh@0.1.0 coverage /Users/gabrielcsapo/Documents/build.sh\n> tap test --coverage --coverage-report=lcov --no-browser \n\nTAP version 13\n# Subtest: test/git.js\n    # git\n    # should fail because directory is not a git directory\n    ok 1 error is not undefined\n    ok 2 should be truthy\n    # should return the correct data\n    # should fail when no remote is present\n    Initialized empty Git repository in /Users/gabrielcsapo/Documents/build.sh/test/fixtures/sample-module/.git/\n    [master (root-commit) 14fbfbd] testtest\n     1 file changed, 1 insertion(+)\n     create mode 100644 README.md\n    ok 3 should be equivalent\n    # should cleanup git directory\n    ok 4 should be equal\n    \n    1..4\n    # tests 4\n    # pass  4\n    \n    # ok\n    \nok 1 - test/git.js # time=1066.821ms\n\n# Subtest: test/index.js\n    # build.sh\n    \n    1..0\n    # tests 0\n    # pass  0\n    \n    # ok\n    \nok 2 - test/index.js # SKIP\n\n1..2\n# skip: 1\n# time=1297.796ms\n`,
          date: '2017-12-04T22:16:40.457Z'
        }],
        'id': '1504231277790k1l211gqkc',
        'time': 2620.514874
      }
    ]
    return (<Stages name='coverage' stages={stages} />)
  })
  .add('unknown', () => {
    const stages = [
      {
        'type': 'command',
        'command': 'npm run coverage',
        'state': 'unknown',
        'output': [],
        'time': 2620.514874
      }
    ]
    return (<Stages name='coverage' stages={stages} />)
  })
  .add('mixed', () => {
    const stages = [
      {
        'type': 'command',
        'command': 'npm run coverage',
        'state': 'success',
        'output': [{
          type: 'stdout',
          content: `\n> build.sh@0.1.0 coverage /Users/gabrielcsapo/Documents/build.sh\n> tap test --coverage --coverage-report=lcov --no-browser \n\nTAP version 13\n# Subtest: test/git.js\n    # git\n    # should fail because directory is not a git directory\n    ok 1 error is not undefined\n    ok 2 should be truthy\n    # should return the correct data\n    # should fail when no remote is present\n    Initialized empty Git repository in /Users/gabrielcsapo/Documents/build.sh/test/fixtures/sample-module/.git/\n    [master (root-commit) 14fbfbd] testtest\n     1 file changed, 1 insertion(+)\n     create mode 100644 README.md\n    ok 3 should be equivalent\n    # should cleanup git directory\n    ok 4 should be equal\n    \n    1..4\n    # tests 4\n    # pass  4\n    \n    # ok\n    \nok 1 - test/git.js # time=1066.821ms\n\n# Subtest: test/index.js\n    # build.sh\n    \n    1..0\n    # tests 0\n    # pass  0\n    \n    # ok\n    \nok 2 - test/index.js # SKIP\n\n1..2\n# skip: 1\n# time=1297.796ms\n`,
          date: '2017-12-04T22:16:40.457Z'
        }],
        'time': 2000
      },
      {
        'type': 'command',
        'command': 'npm build',
        'state': 'fail',
        'output': [{
          type: 'stdout',
          content: 'build not a command',
          date: '2017-12-04T22:16:40.457Z'
        }],
        'id': '1504231277790k15d11gqkc',
        'time': 300
      },
      {
        'type': 'command',
        'command': 'neverrun -r',
        'state': 'unknown',
        'output': [],
        'id': '1504231277790k15d11ge3kc',
        'time': 300
      }
    ]
    return (<Stages name='coverage' stages={stages} />)
  })
