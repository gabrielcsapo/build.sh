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
    const { name, time, output, state } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <div style={{ padding: "10px", border: "1px solid #dedede", borderBottom: selected ? 0 : '1px solid #dedede', position: "relative" }} onClick={this.toggle.bind(this)}>
          <span className={`stage-icon icon-${state}`}>
            <svg width="16" height="30">
              <g x="0" y="0" transform="translate(8, 14)" style={{ fill: "white" }}>
                <Icon status={state}/>
              </g>
            </svg>
          </span>
          <span style={{ marginLeft: "20px" }}>
            { name }
          </span>

          <div style={{ float: "right" }}> { ms(time || 0) } </div>
        </div>
        { selected ?
          <pre style={{ whiteSpace: "pre-line", marginTop: 0, border: "1px solid #dedede", borderRadius: 0 }}> { output } </pre>
        : '' }
      </div>
    )
  }
}

class Stages extends React.Component {
  render() {
    const { stages, name } = this.props;

    return (<div>
      <div> { name } </div>
      <ul style={{ listStyle: 'none' }}>
      { stages.map((child,i) => {
        return (<li key={`${name}-${i}`}>
          <Stage {...child}/>
        </li>);
      }) }
      </ul>
    </div>)
  }
}

module.exports = {
  Stage,
  Stages
}
