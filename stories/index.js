import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Icon from '../src/icon';
import Pipeline from '../src/pipeline';
import { Stages } from '../src/stage';

storiesOf('Icon', module)
  .add('fail', () => {
    return (<div>
      <svg width="50" height="50">
        <g transform="translate(25,25)">
          <g className="icon">
            <circle cx="0" cy="0" r="12" className="icon-fail"></circle>
            <Icon status="fail"/>
          </g>
        </g>
      </svg>
    </div>)
  })
  .add('success', () => {
    return (<div>
      <svg width="50" height="50">
        <g transform="translate(25,25)">
          <g className="icon">
            <circle cx="0" cy="0" r="12" className="icon-success"></circle>
            <Icon status="success"/>
          </g>
        </g>
      </svg>
    </div>)
  })
  .add('warning', () => {
    return (<div>
      <svg width="50" height="50">
        <g transform="translate(25,25)">
          <g className="icon">
            <circle cx="0" cy="0" r="12" className="icon-unknown"></circle>
            <Icon status="unknown"/>
          </g>
        </g>
      </svg>
    </div>)
  })
  .add('default', () => {
    return (<div>
      <svg width="50" height="50">
        <g transform="translate(25,25)">
          <g className="icon">
            <circle cx="0" cy="0" r="12" className="icon-"></circle>
            <Icon status=""/>
          </g>
        </g>
      </svg>
    </div>)
  })

storiesOf('Stages', module)
  .add('success', () => {
    const stages = [
        {
            "name": "npm run coverage",
            "state": "success",
            "output": `\n> build.sh@0.1.0 coverage /Users/gabrielcsapo/Documents/build.sh\n> tap test --coverage --coverage-report=lcov --no-browser \n\nTAP version 13\n# Subtest: test/git.js\n    # git\n    # should fail because directory is not a git directory\n    ok 1 error is not undefined\n    ok 2 should be truthy\n    # should return the correct data\n    # should fail when no remote is present\n    Initialized empty Git repository in /Users/gabrielcsapo/Documents/build.sh/test/fixtures/sample-module/.git/\n    [master (root-commit) 14fbfbd] testtest\n     1 file changed, 1 insertion(+)\n     create mode 100644 README.md\n    ok 3 should be equivalent\n    # should cleanup git directory\n    ok 4 should be equal\n    \n    1..4\n    # tests 4\n    # pass  4\n    \n    # ok\n    \nok 1 - test/git.js # time=1066.821ms\n\n# Subtest: test/index.js\n    # build.sh\n    \n    1..0\n    # tests 0\n    # pass  0\n    \n    # ok\n    \nok 2 - test/index.js # SKIP\n\n1..2\n# skip: 1\n# time=1297.796ms\n`,
            "id": "1504231277790k1l211gqkc",
            "time": 2620.514874
        }
    ];
    return (<Stages name="coverage" stages={stages}/>)
  })
  .add('fail', () => {
    const stages = [
        {
            "name": "npm run coverage",
            "state": "fail",
            "output": `\n> build.sh@0.1.0 coverage /Users/gabrielcsapo/Documents/build.sh\n> tap test --coverage --coverage-report=lcov --no-browser \n\nTAP version 13\n# Subtest: test/git.js\n    # git\n    # should fail because directory is not a git directory\n    ok 1 error is not undefined\n    ok 2 should be truthy\n    # should return the correct data\n    # should fail when no remote is present\n    Initialized empty Git repository in /Users/gabrielcsapo/Documents/build.sh/test/fixtures/sample-module/.git/\n    [master (root-commit) 14fbfbd] testtest\n     1 file changed, 1 insertion(+)\n     create mode 100644 README.md\n    ok 3 should be equivalent\n    # should cleanup git directory\n    ok 4 should be equal\n    \n    1..4\n    # tests 4\n    # pass  4\n    \n    # ok\n    \nok 1 - test/git.js # time=1066.821ms\n\n# Subtest: test/index.js\n    # build.sh\n    \n    1..0\n    # tests 0\n    # pass  0\n    \n    # ok\n    \nok 2 - test/index.js # SKIP\n\n1..2\n# skip: 1\n# time=1297.796ms\n`,
            "id": "1504231277790k1l211gqkc",
            "time": 2620.514874
        }
    ];
    return (<Stages name="coverage" stages={stages}/>)
  })
  .add('unknown', () => {
    const stages = [
        {
            "name": "npm run coverage",
            "state": "unknown",
            "output": `\n> build.sh@0.1.0 coverage /Users/gabrielcsapo/Documents/build.sh\n> tap test --coverage --coverage-report=lcov --no-browser \n\nTAP version 13\n# Subtest: test/git.js\n    # git\n    # should fail because directory is not a git directory\n    ok 1 error is not undefined\n    ok 2 should be truthy\n    # should return the correct data\n    # should fail when no remote is present\n    Initialized empty Git repository in /Users/gabrielcsapo/Documents/build.sh/test/fixtures/sample-module/.git/\n    [master (root-commit) 14fbfbd] testtest\n     1 file changed, 1 insertion(+)\n     create mode 100644 README.md\n    ok 3 should be equivalent\n    # should cleanup git directory\n    ok 4 should be equal\n    \n    1..4\n    # tests 4\n    # pass  4\n    \n    # ok\n    \nok 1 - test/git.js # time=1066.821ms\n\n# Subtest: test/index.js\n    # build.sh\n    \n    1..0\n    # tests 0\n    # pass  0\n    \n    # ok\n    \nok 2 - test/index.js # SKIP\n\n1..2\n# skip: 1\n# time=1297.796ms\n`,
            "id": "1504231277790k1l211gqkc",
            "time": 2620.514874
        }
    ];
    return (<Stages name="coverage" stages={stages}/>)
  })
  .add('mixed', () => {
    const stages = [
        {
            "name": "npm run coverage",
            "state": "success",
            "output": `\n> build.sh@0.1.0 coverage /Users/gabrielcsapo/Documents/build.sh\n> tap test --coverage --coverage-report=lcov --no-browser \n\nTAP version 13\n# Subtest: test/git.js\n    # git\n    # should fail because directory is not a git directory\n    ok 1 error is not undefined\n    ok 2 should be truthy\n    # should return the correct data\n    # should fail when no remote is present\n    Initialized empty Git repository in /Users/gabrielcsapo/Documents/build.sh/test/fixtures/sample-module/.git/\n    [master (root-commit) 14fbfbd] testtest\n     1 file changed, 1 insertion(+)\n     create mode 100644 README.md\n    ok 3 should be equivalent\n    # should cleanup git directory\n    ok 4 should be equal\n    \n    1..4\n    # tests 4\n    # pass  4\n    \n    # ok\n    \nok 1 - test/git.js # time=1066.821ms\n\n# Subtest: test/index.js\n    # build.sh\n    \n    1..0\n    # tests 0\n    # pass  0\n    \n    # ok\n    \nok 2 - test/index.js # SKIP\n\n1..2\n# skip: 1\n# time=1297.796ms\n`,
            "id": "1504231277790k1l211gqkc",
            "time": 2000
        },
        {
            "name": "npm build",
            "state": "fail",
            "output": "build not a command",
            "id": "1504231277790k15d11gqkc",
            "time": 300
        },
        {
            "name": "neverrun -r",
            "state": "unknown",
            "output": "\n",
            "id": "1504231277790k15d11ge3kc",
            "time": 300
        }
    ];
    return (<Stages name="coverage" stages={stages}/>)
  })

storiesOf('Pipeline', module)
  .add('success', () => {
    const pipeline = [
        {
            "name": "install",
            "children": [],
            "stages": [
                {
                    "name": "npm --version",
                    "state": "success",
                    "output": "",
                    "id": "15042312715401yk1r04vrr",
                    "time": 210.798482
                },
                {
                    "name": "node --version",
                    "state": "success",
                    "output": "",
                    "id": "1504231271751358v763zfp",
                    "time": 10.283938
                }
            ],
            "state": "success",
            "id": "1504231271540hli9g021ml"
        },
        {
            "name": "lint",
            "children": [],
            "stages": [
                {
                    "name": "npm run lint",
                    "state": "success",
                    "output": "",
                    "id": "1504231276698ds79fa3vld",
                    "time": 1091.73098
                }
            ],
            "state": "success",
            "id": "1504231276698i7wyabh2cz"
        }
    ];

    return (<Pipeline stages={pipeline} defaultSelectStage={pipeline && pipeline[0] && pipeline[0]} onSelect={ action('select-node') }/>);
  })
  .add('mixed', () => {
    const pipeline = [
        {
            "name": "install",
            "children": [
                {
                    "name": "npm",
                    "children": [],
                    "stages": [
                        {
                            "name": "npm install",
                            "state": "success",
                            "output": "",
                            "id": "1504231271762htzd46674y",
                            "time": 4905.449849
                        },
                        {
                            "name": "ls -lh node_modules",
                            "state": "success",
                            "output": "",
                            "id": "1504231276667kqswthkcog",
                            "time": 30.488045
                        }
                    ],
                    "state": "success",
                    "id": "1504231271762vh8o4n9fa6"
                }
            ],
            "stages": [
                {
                    "name": "npm --version",
                    "state": "success",
                    "output": "",
                    "id": "15042312715401yk1r04vrr",
                    "time": 210.798482
                },
                {
                    "name": "node --version",
                    "state": "success",
                    "output": "",
                    "id": "1504231271751358v763zfp",
                    "time": 10.283938
                }
            ],
            "state": "success",
            "id": "1504231271540hli9g021ml"
        },
        {
            "name": "build",
            "children": [
                {
                    "name": "scripts",
                    "children": [],
                    "stages": [
                        {
                            "name": "npm run build",
                            "state": "fail",
                            "output": "",
                            "id": "15674231271762htzd46674y",
                            "time": 4905.449849
                        }
                    ],
                    "state": "fail",
                    "id": "15031231271762vh8o4n9fa6"
                }
            ],
            "stages": [
                {
                    "name": "npm --version",
                    "state": "success",
                    "output": "",
                    "id": "15042312715as01yk1r04vrr",
                    "time": 210.798482
                },
                {
                    "name": "node --version",
                    "state": "success",
                    "output": "",
                    "id": "15042312715451358v763zfp",
                    "time": 10.283938
                }
            ],
            "state": "success",
            "id": "1504231272540hli9g021ml"
        },
        {
            "name": "lint",
            "children": [],
            "stages": [
                {
                    "name": "npm run lint",
                    "state": "unknown",
                    "output": "",
                    "id": "1504231276698ds79fa3vld",
                    "time": 1091.73098
                }
            ],
            "state": "unknown",
            "id": "1504231276698i7wyabh2cz"
        }
    ];
    return (<Pipeline stages={pipeline} defaultSelectStage={pipeline && pipeline[0] && pipeline[0]} onSelect={ action('select-node') }/>);
  })
  .add('multi', () => {
    const pipeline = [
        {
            "name": "install",
            "children": [
                {
                    "name": "npm",
                    "children": [],
                    "stages": [
                        {
                            "name": "npm install",
                            "state": "success",
                            "output": "",
                            "id": "1504231271762htzd46674y",
                            "time": 4905.449849
                        },
                        {
                            "name": "ls -lh node_modules",
                            "state": "success",
                            "output": "",
                            "id": "1504231276667kqswthkcog",
                            "time": 30.488045
                        }
                    ],
                    "state": "success",
                    "id": "1504231271762vh8o4n9fa6"
                }
            ],
            "stages": [
                {
                    "name": "npm --version",
                    "state": "success",
                    "output": "",
                    "id": "15042312715401yk1r04vrr",
                    "time": 210.798482
                },
                {
                    "name": "node --version",
                    "state": "success",
                    "output": "",
                    "id": "1504231271751358v763zfp",
                    "time": 10.283938
                }
            ],
            "state": "success",
            "id": "1504231271540hli9g021ml"
        },
        {
            "name": "lint",
            "children": [],
            "stages": [
                {
                    "name": "npm run lint",
                    "state": "success",
                    "output": "",
                    "id": "1504231276698ds79fa3vld",
                    "time": 1091.73098
                }
            ],
            "state": "success",
            "id": "1504231276698i7wyabh2cz"
        }
    ];
    return (<Pipeline stages={pipeline} defaultSelectStage={pipeline && pipeline[0] && pipeline[0]} onSelect={ action('select-node') } />);
  });
