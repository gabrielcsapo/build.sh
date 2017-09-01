import 'psychic-ui/dist/psychic-min.css';
import './style.css';

import React from 'react';
import ms from 'ms';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Pipeline from './pipeline';
import Icon from './icon';

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
                { Icon.getStatus(state) }
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

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: location.hash,
      selectedStage: <Stages name={props.pipeline[0].name} stages={props.pipeline[0].stages}/>
    };
  }
  updateHash(hash) {
    this.setState({
      hash
    });
  }
  showStages(parent) {
    const { name, stages } = parent;

    this.setState({
      selectedStage: <Stages name={name} stages={stages}/>
    });
  }
  render() {
    const { name, description, source, pipeline, git, environment, config } = this.props;
    const { hash, selectedStage } = this.state;

    document.title = name;

    return (
      <div style={{ "height":"100%", "width":"100%" }}>
        <div className="navbar">
          <div className="container">
            <div className="navbar-title">
                <a className="tooltip-bottom text-black" data-tooltip={ description } href={ source } target="_blank" rel="noopener noreferrer">{ name }</a>
            </div>
            <div className="nav text-black">
              <a href="#" className={ hash === '' ? 'active' : '' } onClick={this.updateHash.bind(this, '')}>Pipeline</a>
              { config ?
                <a href="#config" className={ hash === '#config' ? 'active' : '' } onClick={this.updateHash.bind(this, '#config')}>Config</a>
              : '' }
              <a href="#environment" className={ hash === '#environment' ? 'active' : '' } onClick={this.updateHash.bind(this, '#environment')}>Environment</a>
            </div>
          </div>
        </div>
        <div>
          { hash === '' ?
            <div>
              <div className="pipeline">
                <Pipeline stages={pipeline} defaultSelectStage={pipeline && pipeline[0] && pipeline[0]} onSelect={this.showStages.bind(this)} />
              </div>
              <div className="stages">
                { selectedStage }
              </div>
            </div>
          : '' }
          { hash === '#environment' ?
            <div style={{ width: "90%", margin: "0 auto" }}>
              <pre style={{ whiteSpace: "pre" }}>
                { JSON.stringify({
                  environment,
                  git
                }, null, 4) }
              </pre>
            </div>
          : '' }
          { hash === '#config' ?
            <div style={{ width: "90%", margin: "0 auto" }}>
              <pre style={{ whiteSpace: "pre" }}>
                { config }
              </pre>
            </div>
          : '' }
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  source: PropTypes.string,
  pipeline: PropTypes.string,
  git: PropTypes.string,
  process: PropTypes.string
};

render(<Container {...config}/>, document.querySelector('#root'));
