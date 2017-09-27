#!/usr/bin/env node

const program = require('commander');
const path = require('path');

const fs   = require('fs');
const yaml = require('js-yaml');
const open = require('opn');
const logUpdate = require('log-update');
const qs = require('qs');

const Git = require('../lib/git');
const Compile = require('../lib/compile');
const Pipeline = require('../lib/pipeline');
const { ms, renderAsciiPipe } = require('../lib/util');

let refinedSteps = '';

program
  .version(require('../package.json').version)
  .arguments('<steps>')
  .action(function (actions) {
     // creates an array of steps allowed
     refinedSteps = actions.split(',')
  })
  .option('-c, --config [file]', 'the input file for the build pipeline to run', path.resolve(process.cwd(), 'build.yml'))
  .option('-d, --debug', 'outputs a debug file of the build process and data captured', false)
  .parse(process.argv);

const { config, debug } = program;

try {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  const buildFile = fs.readFileSync(config, 'utf8');
  const doc = yaml.safeLoad(buildFile);
  const { pipeline, output, env } = doc;

  if(env) {
    env.forEach((e) => {
      let q = qs.parse(e);
      let k = Object.keys(q)[0];
      process.env[k] = q[k];
    });
  }

  const start = process.hrtime();
  const events = Pipeline(pipeline, refinedSteps);
  let completed = [];

  events.on('stage:end', (stage) => {
    completed.push(stage);

    logUpdate(renderAsciiPipe(pipeline, completed));
  });

  logUpdate(renderAsciiPipe(pipeline, completed));

  events.on('end', (results) => {
    console.log('Capturing git information'); // eslint-disable-line
    
    Git()
      .then((info) => {
        if(debug) {
          fs.writeFileSync('build.json', JSON.stringify({
            git: info,
            name: pkg.name,
            description: pkg.description,
            source: pkg.repository.url,
            config: buildFile,
            environment: {
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
          }, null, 4));
        }

        Compile({
          config: {
            git: info,
            name: pkg.name,
            description: pkg.description,
            source: pkg.repository.url,
            config: buildFile,
            environment: {
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
        }, (error) => {
          if(error) {
            return console.log(`Compile has failed with the following error:\n${error}`); // eslint-disable-line
          }
          const reportLocation = path.resolve((path.resolve(output) || process.cwd() + '/build'), 'index.html');
          const end = process.hrtime(start);

          console.log(`Report compiled [${ms(((end[0] * 1e9) + end[1]) / 1e6)}]\nLocated at ${reportLocation}`); // eslint-disable-line

          open(reportLocation, { wait: false });
        });
      })
      .catch((error) => {
        console.log(`Failed trying to get git information ${error}`); // eslint-disable-line
      })
  });

} catch (error) {
  console.log(`Something went really wrong ${error}`); // eslint-disable-line
}
