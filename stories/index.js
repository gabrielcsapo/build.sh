import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Pipeline from '../src/pipeline'

storiesOf('Pipeline', module)
  .add('success', () => {
    const pipeline = [
      {
        'name': 'install',
        'type': 'pipeline',
        'children': [
          {
            'type': 'command',
            'name': 'npm --version',
            'state': 'success',
            'output': '',
            'id': '15042312715401yk1r04vrr',
            'time': 210.798482
          },
          {
            'type': 'command',
            'name': 'node --version',
            'state': 'success',
            'output': '',
            'id': '1504231271751358v763zfp',
            'time': 10.283938
          }
        ],
        'state': 'success',
        'id': '1504231271540hli9g021ml'
      },
      {
        'name': 'lint',
        'type': 'pipeline',
        'children': [
          {
            'name': 'npm run lint',
            'state': 'success',
            'output': '',
            'id': '1504231276698ds79fa3vld',
            'time': 1091.73098
          }
        ],
        'state': 'success',
        'id': '1504231276698i7wyabh2cz'
      }
    ]

    return (<Pipeline stages={pipeline} defaultSelectStage={pipeline && pipeline[0] && pipeline[0]} onSelect={action('select-node')} />)
  })
  .add('mixed', () => {
    const pipeline = [
      {
        'name': 'install',
        'type': 'pipeline',
        'children': [
          {
            'name': 'npm',
            'type': 'pipeline',
            'children': [
              {
                'name': 'npm install',
                'state': 'success',
                'type': 'command',
                'output': '',
                'id': '1504231271762htzd46674y',
                'time': 4905.449849
              },
              {
                'name': 'ls -lh node_modules',
                'state': 'success',
                'type': 'command',
                'output': '',
                'id': '1504231276667kqswthkcog',
                'time': 30.488045
              }
            ],
            'state': 'success',
            'id': '1504231271762vh8o4n9fa6'
          },
          {
            'name': 'npm --version',
            'state': 'success',
            'type': 'command',
            'output': '',
            'id': '15042312715401yk1r04vrr',
            'time': 210.798482
          },
          {
            'name': 'node --version',
            'state': 'success',
            'type': 'command',
            'output': '',
            'id': '1504231271751358v763zfp',
            'time': 10.283938
          }
        ],
        'state': 'success',
        'id': '1504231271540hli9g021ml'
      },
      {
        'name': 'build',
        'type': 'pipeline',
        'children': [
          {
            'name': 'scripts',
            'type': 'pipeline',
            'children': [
              {
                'name': 'npm run build',
                'type': 'command',
                'state': 'fail',
                'output': '',
                'id': '15674231271762htzd46674y',
                'time': 4905.449849
              }
            ],
            'state': 'fail',
            'id': '15031231271762vh8o4n9fa6'
          },
          {
            'name': 'npm --version',
            'type': 'command',
            'state': 'success',
            'output': '',
            'id': '15042312715as01yk1r04vrr',
            'time': 210.798482
          },
          {
            'name': 'node --version',
            'type': 'command',
            'state': 'success',
            'output': '',
            'id': '15042312715451358v763zfp',
            'time': 10.283938
          }
        ],
        'state': 'success',
        'id': '1504231272540hli9g021ml'
      },
      {
        'name': 'lint',
        'type': 'pipeline',
        'children': [
          {
            'name': 'npm run lint',
            'type': 'command',
            'state': 'unknown',
            'output': '',
            'id': '1504231276698ds79fa3vld',
            'time': 1091.73098
          }
        ],
        'state': 'unknown',
        'id': '1504231276698i7wyabh2cz'
      }
    ]
    return (<Pipeline stages={pipeline} defaultSelectStage={pipeline && pipeline[0] && pipeline[0]} onSelect={action('select-node')} />)
  })
  .add('multi', () => {
    const pipeline = [
      {
        'name': 'install',
        'type': 'pipeline',
        'children': [
          {
            'name': 'npm',
            'type': 'pipeline',
            'children': [
              {
                'name': 'npm install',
                'type': 'command',
                'state': 'success',
                'output': '',
                'id': '1504231271762htzd46674y',
                'time': 4905.449849
              },
              {
                'name': 'ls -lh node_modules',
                'type': 'command',
                'state': 'success',
                'output': '',
                'id': '1504231276667kqswthkcog',
                'time': 30.488045
              }
            ],
            'state': 'success',
            'id': '1504231271762vh8o4n9fa6'
          },
          {
            'name': 'npm --version',
            'type': 'command',
            'state': 'success',
            'output': '',
            'id': '15042312715401yk1r04vrr',
            'time': 210.798482
          },
          {
            'name': 'node --version',
            'type': 'command',
            'state': 'success',
            'output': '',
            'id': '1504231271751358v763zfp',
            'time': 10.283938
          }
        ],
        'state': 'success',
        'id': '1504231271540hli9g021ml'
      },
      {
        'name': 'lint',
        'type': 'pipeline',
        'children': [
          {
            'name': 'npm run lint',
            'type': 'command',
            'state': 'success',
            'output': '',
            'id': '1504231276698ds79fa3vld',
            'time': 1091.73098
          }
        ],
        'state': 'success',
        'id': '1504231276698i7wyabh2cz'
      }
    ]
    return (<Pipeline stages={pipeline} defaultSelectStage={pipeline && pipeline[0] && pipeline[0]} onSelect={action('select-node')} />)
  })
