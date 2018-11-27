import React from 'react'

import { storiesOf } from '@storybook/react'

import Report from '../src/index'

storiesOf('Report', module)
  .add('example', () => {
    const pipeline = require('./pipeline.json')
    return <Report {...pipeline} />
  })
