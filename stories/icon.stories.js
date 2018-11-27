import React from 'react'

import { storiesOf } from '@storybook/react'

import Icon from '../src/icon'

storiesOf('Icon', module)
  .add('fail', () => {
    return (<div>
      <svg width='50' height='50'>
        <g transform='translate(25,25)'>
          <g className='icon'>
            <circle cx='0' cy='0' r='12' className='icon-fail' />
            <Icon status='fail' />
          </g>
        </g>
      </svg>
    </div>)
  })
  .add('success', () => {
    return (<div>
      <svg width='50' height='50'>
        <g transform='translate(25,25)'>
          <g className='icon'>
            <circle cx='0' cy='0' r='12' className='icon-success' />
            <Icon status='success' />
          </g>
        </g>
      </svg>
    </div>)
  })
  .add('warning', () => {
    return (<div>
      <svg width='50' height='50'>
        <g transform='translate(25,25)'>
          <g className='icon'>
            <circle cx='0' cy='0' r='12' className='icon-unknown' />
            <Icon status='unknown' />
          </g>
        </g>
      </svg>
    </div>)
  })
  .add('default', () => {
    return (<div>
      <svg width='50' height='50'>
        <g transform='translate(25,25)'>
          <g className='icon'>
            <circle cx='0' cy='0' r='12' className='icon-' />
            <Icon status='' />
          </g>
        </g>
      </svg>
    </div>)
  })
