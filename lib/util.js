/**
 * @module lib/util
 */

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

/**
* returns the milleseconds in the form of either day, hour, minute or second shorthand
* @method ms
* @param {Number} ms - the time in milleseconds
* @returns {String}
*/
module.exports.ms = function ms(ms) {
  if (ms >= d) {
    return `${Math.floor(ms / d)}d`;
  }
  if (ms >= h) {
    return `${Math.floor(ms / h)}h`;
  }
  if (ms >= m) {
    return `${Math.floor(ms / m)}m`;
  }
  if (ms >= s) {
    return `${Math.floor(ms / s)}s`;
  }
  return ms + 'ms';
}

/**
 * renders an ascii pipline from the given pipeline object
 * @method
 * @param  {Object} pipeline  - a pipeline object
 * @param  {Array} completed  - an array of completed stage objects
 * @return {String}           - a pipeline string
 */
module.exports.renderAsciiPipe = function(pipeline, completed) {
  var pipe = [];
  function renderColor(name, state) {
    if(state === 'success') {
      return `\x1b[32m${name}\x1b[39m`;
    }
    if(state === 'fail') {
      return `\x1b[31m${name}\x1b[39m`;
    }
    if(state === 'unknown') {
      return `\x1b[33m${name}\x1b[39m`;
    }
    return `\x1b[90m${name}\x1b[39m`;
  }

  Object.keys(pipeline).forEach((d) => {
    let stage = completed.filter((f) => {
      return f.name == d;
    })[0];
    let name = stage ? renderColor(stage.name, stage.state) : renderColor(d, '')
    pipe.push(' ', '─', '─', ' ',  name);
  });

  return pipe.join('');
}
