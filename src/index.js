import 'psychic-ui/dist/psychic-min.css';
import './style.css';

import React from 'react';
import ms from 'ms';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Pipeline from './pipeline';

const ICONS = {
  'success': '✔',
  'fail': 'ｘ',
  'warning': '⚠',
  'unknown': '⚠'
};

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
    const backgroundColor = !state ? '#cbcbcb' : (state === 'success' ? '#16ad40' : (state === 'warning' ? '#ffd147' : (state === 'fail' ? '#D24146' : '#dedede' )));
    const { selected } = this.state;

    return (
      <div>
        <div style={{ padding: "10px", border: "1px solid #dedede", borderBottom: selected ? 0 : '1px solid #dedede', position: "relative" }} onClick={this.toggle.bind(this)}>
          <span style={{ color: "white", padding: "5px", position: "absolute", top: 0, left: 0, bottom: 0, lineHeight: "30px", backgroundColor }}>
            {ICONS[state]}
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
        return (<li>
          <Stage key={i} {...child}/>
        </li>);
      }) }
      </ul>
    </div>)
  }
}

class Container extends React.Component {
  constructor(props) {
    const { hash } = location;

    super(props);
    this.state = {
      hash,
      selectedStage: ''
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
    const { name, description, source, pipeline, git, process } = this.props;
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
              <a href="#information" className={ hash === '#information' ? 'active' : '' } onClick={this.updateHash.bind(this, '#information')}>Information</a>
            </div>
          </div>
        </div>
        <div>
          { hash === '' ?
            <div>
              <div className="pipeline">
                <Pipeline stages={pipeline} onSelect={this.showStages.bind(this)} />
              </div>
              <div className="stages">
                { selectedStage }
              </div>
            </div>
          : '' }
          { hash === '#information' ?
            <div style={{ width: "90%", margin: "0 auto" }}>
              <pre style={{ whiteSpace: "pre" }}>
                { JSON.stringify({
                  process,
                  git
                }, null, 4) }
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
