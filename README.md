# build.sh

> 🔨 run and visualize the build process

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Installation](#installation)
- [Usage](#usage)
- [How To](#how-to)

<!-- /TOC -->

## Installation

```
npm install build.sh -g
```

## Usage

```
Usage: build [options]


Options:

  -V, --version        output the version number
  -c, --config [file]  the input file for the build pipeline to run
  -d, --debug          outputs a debug file of the build process and data captured
  -h, --help           output usage information
```

## How To

> commit a `build.yml` file to your project root

```
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

Will yield the following results:

![success.png](./docs/success.png)

Sometimes things go as planned and certain build phases will fail and that will yield:

![fail.png](./docs/fail.png)

An important factor when dealing with build pipelines is the persistence of environment variables and git information which is recorded and accessible via the `Information` tab:

![information.png](./docs/information.png)
