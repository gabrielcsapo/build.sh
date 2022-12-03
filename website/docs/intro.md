---
sidebar_position: 1
---

# Getting Started

## Installation

This module can be installed via npm, or for those who do not have node on their machines can use the packed binary found [here](https://github.com/gabrielcsapo/build.sh/releases) which can downloaded to your computer and run as a executable.

```bash
npm install build.sh -g
```

## Usage

```bash
Usage: build [options] <steps>


Options:

  -V, --version          output the version number
  -c, --config [file]    the input file for the build pipeline to run (default: /Users/gabrielcsapo/Documents/build.sh/build.yml)
  -d, --debug            outputs a debug file of the build process and data captured
  -o, --output [output]  set the output path for the build artifact
  -b, --browser          doesn't open browser
  -h, --help             output usage information
```

## How To

> commit a `build.yml` file to your project root

```yaml
env:
  - {key}={value}
pipeline:
  {key}:
    - {command}
    - {command}
```

To invoke about the pipeline simply run `build` at the project root.

The terminal output will show the pipeline being run and eventually will open the browser to the location of the final report.

This build pipeline:

```yaml
output: ./docs
env:
  - FOO=bar
pipeline:
  install:
    - npm --version
    - node --version
    - npm:
        - npm install
        - ls -lh node_modules
  lint:
    - npm run lint
  coverage:
    - npm run coverage
  test:
    - npm test
  docs:
    - npm run generate-docs
```

> there is also the ability to run parts of pipeline by specifying which ones to run for example `build lint,coverage,test` will only run the nested npm install, lint, coverage and test scripts

![subset.png](/images/subset.png)

When running `build` with the above pipeline it will yield the following results:

![success.png](/images/success.png)

Sometimes things go as planned and certain build phases will fail and that will yield:

![fail.png](/images/fail.png)

An important factor when dealing with build pipelines is the persistence of environment variables and git information which is recorded and accessible via the `Environment` tab:

![environment.png](/images/environment.png)

If the build report was ran and built using `build.sh` it will also record the yaml file that it ran with under the `Config` tab:

![config.png](/images/config.png)

To view the raw build data simply navigate to the `Report` tab and you will get a view similar to this:

![report.png](/images/report.png)
