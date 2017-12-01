import React from 'react';

import Stage from './stage';

class Stages extends React.Component {
  render() {
    const { stages, name } = this.props;

    return (<div>

      <ul className="stages">
        <li style={{ paddingBottom: "10px" }}> <b>{ name }</b> </li>
        { stages.filter((child) => child.type === 'command').map((child,i) => {
          return (<li key={`${name}-${i}`}>
            <Stage {...child}/>
          </li>);
        }) }
      </ul>
    </div>)
  }
}

module.exports = Stages;
