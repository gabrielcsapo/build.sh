# 0.2.5 (09/23/2017)

- adds env config to override process environment variables during build

# 0.2.4 (09/16/2017)

- generates a similar pipeline view in the console

# 0.2.3 (09/13/2017)

- adds arrow to show opened stages
- time indicator on stage is now light grey
- cleans up inlined styles (reduces bundle size)
- updates dependencies

# 0.2.2 (09/01/2017)

- adds react-storybook stories to show use cases
- adds tests for pipeline and utils
- fixes bug with pipelines that does not fail parent if child fails
- abstracts stages and icon classes

# 0.2.1 (08/31/2017)

- package and run as a global binary with pkg

# 0.2.0 (08/31/2017)

- adds a -d, --debug option to control the output of a build.json file that contains information about the build pipeline
- sets the first stage to the default default on page load
- capture the build pipeline config if it exists (display this under a tab named Config)
- fixes a bug with commands being opened due to not using keys
- both the stage icons and the pipeline icons are the same, so are the colors

# 0.1.0 (08/24/2017)

- updates doc page
- UI pipelines are now svgs
- allows nested pipelines
- extends pipelines UI to show nested flows

# 0.0.1 (08/22/2017)

- basic functionality
