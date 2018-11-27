#!/usr/bin/env node

const program = require('commander')

const fs = require('fs')
const yaml = require('js-yaml')
const { execute } = require('../lib/execute')

let runOnly = ''

program
  .version(require('../package.json').version)
  .arguments('<steps>')
  .action(function (actions) {
    // creates an array of steps allowed
    runOnly = actions.split(',')
  })
  .option('-c, --config [file]', 'the input file for the build pipeline to run', process.cwd() + '/build.yml')
  .option('-d, --debug', 'outputs a debug file of the build process and data captured', false)
  .option('-o, --output [output]', 'set the output path for the build artifact')
  .option('-b, --browser', 'doesn\'t open browser')
  .parse(process.argv)

const { config, debug, output, browser } = program

const buildFile = fs.readFileSync(config, 'utf8')
const doc = yaml.safeLoad(buildFile);

(async function () {
  await execute(Object.assign({ runOnly, debug, output, browser }, doc))
}())
