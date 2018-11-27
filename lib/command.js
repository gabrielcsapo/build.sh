const { spawn } = require('child_process')

class Command {
  /**
   * Class used to define shell commands be executed in the pipeline
   * @class Command
   * @param  {Pipeline}    parent  [description]
   * @param  {String}    command [description]
   */
  constructor (parent, command) {
    /**
     * The parent pipeline this command belongs too
     * @type {Pipline}
     */
    this.parent = parent
    /**
     * The shell command that this command will execute
     * @type {String}
     */
    this.command = command
    /**
     * The output from the running a sub-process with the shell command
     * @type {Array<Object>}
     */
    this.output = []
    /**
     * The state of the command (unknown, skipped, fail, success)
     * @type {String}
     */
    this.state = 'unknown'
    /**
     * The time in MS that the command took to execute
     * @type {String}
     */
    this.time = 0
    /**
     * A unique identifier
     * @type {Number}
     */
    this.id = Date.now() + Math.random().toString(36).substr(2, 10)
  }
  /**
   * Runs the command using the passed in shell script as the command to run
   * @memberof Command
   * @method run
   * @param  {Promise} [description]
   */
  run () {
    return new Promise((resolve, reject) => {
      const start = process.hrtime()

      const child = spawn(this.command, {
        cwd: process.cwd(),
        shell: '/bin/bash'
      })

      child.stdout.on('data', (m) => {
        this.output.push({
          type: 'stdout',
          content: m.toString('utf8'),
          date: new Date()
        })
      })

      child.stderr.on('data', (m) => {
        this.output.push({
          type: 'stderr',
          content: m.toString('utf8'),
          date: new Date()
        })
      })

      child.on('exit', (code) => {
        const end = process.hrtime(start)

        this.state = code === 0 ? 'success' : 'fail'
        this.time = ((end[0] * 1e9) + end[1]) / 1e6
        resolve(this.state)
      })
    })
  }
  /**
   * returns information pertaining to the command
   * @memberof Command
   * @method getReport
   * @return {Object}
   */
  getReport () {
    return {
      type: 'command',
      command: this.command,
      output: this.output,
      state: this.state,
      time: this.time,
      id: this.id
    }
  }
}

module.exports = Command
