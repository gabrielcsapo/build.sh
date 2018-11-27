const fs = require('fs')
const path = require('path')
const open = require('opn')
const logUpdate = require('log-update')
const qs = require('querystring')

const Git = require('../lib/git')
const Compile = require('../lib/compile')
const Pipeline = require('../lib/pipeline')
const { ms, convertToAsciiPipeline } = require('../lib/util')

async function execute ({ pipeline, output, env, runOnly, browser = true, debug = false }) {
  try {
    const derivedOutput = path.resolve(output ? path.resolve(output) : process.cwd() + '/build')
    const reportLocation = derivedOutput + '/index.html'

    // sets environment variables if they exist in the build definition
    if (env) {
      for (const e of env) {
        const q = qs.parse(e)
        const k = Object.keys(q)[0]
        process.env[k] = q[k]
      }
    }

    const start = process.hrtime()

    const completed = []
    const pipe = new Pipeline(pipeline)

    pipe.events.on('end', (stage) => {
      completed.push(stage)
      logUpdate(convertToAsciiPipeline(pipe.tasks))
    })

    logUpdate(convertToAsciiPipeline(pipe.tasks))

    await pipe.run({ ignore: runOnly.length > 0 ? pipe.paths.filter((p) => runOnly.indexOf(p) === -1) : [] })

    let git = {}
    try {
      git = await Git()
    } catch (ex) {
      // noop
    }

    const config = {
      git,
      config: pipeline,
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
      pipeline: pipe.getReport().children
    }

    if (debug) {
      fs.writeFileSync('build.json', JSON.stringify(config, null, 4))
    }

    await Compile({ config, output: derivedOutput })

    const end = process.hrtime(start)

    console.log(`Report compiled [${ms(((end[0] * 1e9) + end[1]) / 1e6)}]\nLocated at ${reportLocation}`); // eslint-disable-line

    if (browser) {
      open(reportLocation, { wait: false })
    }
  } catch (error) {
    console.log(`Something went really wrong ${error}`); // eslint-disable-line
  }
}

module.exports = {
  execute
}
