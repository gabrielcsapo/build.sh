import fs from "fs";
import path from "path";

import logUpdate from "log-update";
import qs from "querystring";

import open from "open";

import { Git } from "./git.mjs";
import { Compile } from "./compile.mjs";
import { Pipeline } from "./pipeline.mjs";

import { ms, convertToAsciiPipeline } from "./util.mjs";

export async function execute({
  pipeline,
  output,
  env,
  runOnly,
  browser = true,
  debug = false,
}: {
  pipeline: string[];
  output: string;
  env: any;
  runOnly: string[];
  browser: boolean;
  debug: boolean;
}) {
  try {
    const derivedOutput = path.resolve(
      output ? path.resolve(output) : process.cwd() + "/build"
    );
    const reportLocation = derivedOutput + "/index.html";

    // sets environment variables if they exist in the build definition
    if (env) {
      for (const e of env) {
        const q = qs.parse(e);
        const k = Object.keys(q)[0];
        process.env[k] = q[k] as string;
      }
    }

    const start = process.hrtime();

    const completed = [];
    const pipe = new Pipeline(pipeline);

    pipe.events.on("start", () => {
      // we want to update when the task is in progress
      logUpdate(convertToAsciiPipeline(pipe.tasks as Pipeline[]));
    });

    pipe.events.on("end", (stage) => {
      completed.push(stage);
      logUpdate(convertToAsciiPipeline(pipe.tasks as Pipeline[]));
    });

    logUpdate(convertToAsciiPipeline(pipe.tasks as Pipeline[]));

    await pipe.run({
      ignore:
        runOnly && runOnly.length > 0
          ? pipe.paths.filter((p) => runOnly.indexOf(p) === -1)
          : [],
    });

    let git = {};
    try {
      git = await Git();
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
        config: process.config,
      },
      pipeline: pipe.getReport().children,
    };

    if (debug) {
      fs.writeFileSync("build.json", JSON.stringify(config, null, 4));
    }

    await Compile({ config, output: derivedOutput });

    const end = process.hrtime(start);

    console.log(
      `Report compiled [${ms(
        (end[0] * 1e9 + end[1]) / 1e6
      )}]\nLocated at ${reportLocation}`
    ); // eslint-disable-line

    if (browser) {
      open(reportLocation, { wait: false });
    }
  } catch (error) {
    console.log(`Something went really wrong ${error}`); // eslint-disable-line
  }
}
