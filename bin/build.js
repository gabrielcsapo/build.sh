#!/usr/bin/env node

const program = require('commander');
const path = require('path');

const fs   = require('fs');
const yaml = require('js-yaml');
const ora = require('ora');
const open = require('opn');
const ms = require('ms');

const Git = require('../src/git');
const Compile = require('../src/compile');
const Pipeline = require('../src/pipeline');

program
  .version(require('../package.json').version)
  .option('-c, --config [file]', 'the input file for the build pipeline to run', path.resolve(process.cwd(), 'build.yml'))
  .parse(process.argv);

const { config } = program;

const spinner = ora('Parsing build.yml').start();

try {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  const doc = yaml.safeLoad(fs.readFileSync(config, 'utf8'));
  const { pipeline, output } = doc;

  spinner.text = 'Running pipeline';

  const events = Pipeline(pipeline);
  const start = process.hrtime();

  events.on('stage:start', (stage) => {
    spinner.text = `Starting stage ${stage}`;
  });

  events.on('stage:start:command', (stage, command) => {
    spinner.text = `Running command ${command} on stage ${stage}`;
  });

  events.on('error', (error) => {
    spinner.fail(`pipeline failed with error ${error}`);
  });

  events.on('end', (results) => {
    spinner.text = 'Capturing git information';

    Git()
      .then((info) => {
        spinner.text = 'Compiling report';

        Compile({
          config: {
            git: info,
            name: pkg.name,
            description: pkg.description,
            source: pkg.repository.url,
            process: {
              versions: process.versions,
              env: process.env,
              arch: process.arch,
              platform: process.platform,
              release: process.release,
              version: process.version,
              features: process.features,
              config: process.config
            },
            pipeline: results
          },
          output: path.resolve(output) || process.cwd() + '/build'
        }, () => {
          const reportLocation = path.resolve((path.resolve(output) || process.cwd() + '/build'), 'index.html');
          const end = process.hrtime(start);
          spinner.succeed(`Report compiled [${ms(((end[0] * 1e9) + end[1]) / 1e6)}]\nLocated at ${reportLocation}`);
          open(reportLocation, { wait: false });
        });
      })
      .catch((error) => {
        spinner.fail(`Failed trying to get git information ${error}`)
      })
  });

} catch (error) {
  spinner.fail(`Something went really wrong ${error}`);
}
