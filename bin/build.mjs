#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import yaml from "js-yaml";

import { execute } from "../dist/lib/execute.mjs";

function commaSeparatedList(value) {
  return value.split(",");
}

const program = new Command();

program
  .option(
    "-c, --config [file]",
    "the input file for the build pipeline to run",
    process.cwd() + "/build.yml"
  )
  .option(
    "-d, --debug",
    "outputs a debug file of the build process and data captured",
    false
  )
  .option("-o, --output [output]", "set the output path for the build artifact")
  .option("-b, --browser", "doesn't open browser")
  .option(
    "-s, --steps <steps>",
    "comma separated list of steps to run",
    commaSeparatedList
  )
  .parse(process.argv);

const { config, debug, output, browser, steps } = program.opts();

const buildFile = fs.readFileSync(config, "utf8");
const doc = yaml.load(buildFile);

(async function () {
  await execute(Object.assign({ runOnly: steps, debug, output, browser }, doc));
})();
