const { EventEmitter } = require('events');
const Command = require('./command');

class Pipeline {
  /**
   * Orchestrates running sub commands and nested pipelines
   * @class Pipeline
   * @param  {Array}     tasks - array of strings or nested objects that define a pipeline
   * @param  {String=}    name  - the name of the pipeline
   * @param  {Pipeline=}    parent - the parent Pipeline
   * @param  {EventEmitter=}    events - the parent Pipeline's event emitter
   */
  constructor(tasks=[], name, parent, events) {
    this.events = events || new EventEmitter();
    this.name = name || '';
    this.parent = parent || '';
    if(typeof tasks === 'object' && !Array.isArray(tasks)) {
      this.tasks = Object.keys(tasks).map((name) => {
        return new Pipeline(tasks[name], name, this, this.events);
      });
    } else {
      this.tasks = tasks.map((task) => {
        if(typeof task === 'object') {
          return Object.keys(task).map((name) => {
            return new Pipeline(task[name], name, this, this.events);
          });
        } else {
          return new Command(this, task);
        }
      });
    }
    this.tasks = [].concat.apply([], this.tasks);
    this.state = 'unknown';
    this.id = Date.now() + Math.random().toString(36).substr(2, 10);
  }
  /**
   * @type {string}
   */
  get path() {
    if(this.name !== '') {
      return `${this.name}${this.parent.path ? `:${this.parent.path}` : '' }`;
    } else {
      return '';
    }
  }
  /**
   * @type {string}
   */
  get paths() {
    var paths = [this.path];
    this.tasks.forEach((task) => {
      paths = paths.concat(task.paths)
    });
    return paths.filter((p) => p);
  }
  /**
   * runs the pipeline and its children recursively
   * @memberof Pipeline
   * @method run
   * @param  {Function} callback    - a function to call when the pipeline is done executing
   * @param  {Object=}  options - an options block that contains overrides
   * @param  {Array=}   options.ignore - an array of fullNames of pipelines for example sub:sub2 would ignore sub2 as a child of sub
   */
  run(callback, options={}) {
    const { ignore=[] } = options;

    var self = this;
    var index = 0;
    function next() {
      if(index == self.tasks.length) {
        self.name ? self.events.emit('end', self) : '';

        callback(self.state);
      } else {
        self.tasks[index].run((state) => {
          self.state = state || 'success';

          if(state === 'fail') {
            return callback(self.state);
          }
          // bump to the next item
          index += 1;
          next();
        }, { ignore });
      }
    }
    // ignore this if it exists in the ignore array
    if(ignore.indexOf(this.path) === -1) {
      self.name ? self.events.emit('start', this) : '';

      next();
    } else {
      callback();
    }

  }
  /**
   * Gets information for the pipeline and its children
   * @memberof Pipeline
   * @method getReport
   * @return {Object}
   */
  getReport() {
    return {
      id: this.id,
      name: this.name,
      state: this.state,
      type: 'pipeline',
      children: this.tasks.map((task) => {
        return task.getReport();
      })
    }
  }
}

module.exports = Pipeline;
