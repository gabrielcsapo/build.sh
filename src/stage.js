import React from 'react';
import Icon from './icon';

import { ms } from '../lib/util';

class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  toggle() {
    const { selected } = this.state;

    this.setState({
      selected: !selected
    });
  }
  render() {
    const { command, time, output, state } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <div className="stage" style={{ borderBottom: selected ? 0 : '1px solid #dedede' }} onClick={this.toggle.bind(this)}>
          <span className={`stage-icon icon-${state}`}>
            <svg width="16" height="30">
              <g x="0" y="0" transform="translate(8, 14)">
                <Icon status={state}/>
              </g>
            </svg>
          </span>

          <span className="stage-title">
            { selected ? "▿" : "▹"} { command }
          </span>

          <div className="stage-time"> { ms(time || 0) } </div>
        </div>
        { selected ?
          <pre> { output } </pre>
        : '' }
      </div>
    )
  }
}

module.exports = Stage;
