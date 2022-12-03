import "./style.css";

const pipeline = {
  git: {
    commit: "cc530a0df734f15f5501cf3547050f6fa51401eb",
    author_name: "Gabriel Csapo",
    author_email: "gabecsapo@gmail.com",
    author_date: "1512107696",
    committer_name: "Gabriel Csapo",
    committer_email: "gabecsapo@gmail.com",
    committer_date: "1512107696",
    message:
      "1.0.0 - fixes pipeline to find times recursively   - cleans up duplicate code - handles if git is not present - removes the dependency on having a package.json to get name and description - removes the qs module uses native querystring - cleans up stages markup to have the title inlined - adds report tab to show report in JSON - adds times to all pipeline nodes   - the end now shows a cumulative time - fixes bug if output is not defined in config - config is now the pipeline parsed - adds an output flag to the CLI that sets the output of the report - adds an browser flag to CLI that allows setting browser to be configured to be open or not - abstracts execution logic from binary and tests it separately - cleans up and rearranges UI - adds story to storybook stories to reflect a full report view - removes babel-minify-webpack-plugin",
    branch: "master",
    remotes: {
      name: "origin",
      url: "https://github.com/gabrielcsapo/build.sh.git",
    },
  },
  config: {
    foo: ["echo $FOO"],
    install: [
      "npm --version",
      "node --version",
      {
        npm: ["npm install", "ls -lh node_modules"],
      },
    ],
    lint: ["npm run lint"],
    coverage: ["npm run coverage"],
    test: ["npm test"],
    docs: ["npm run generate-docs"],
  },
  environment: {
    versions: {
      http_parser: "2.7.0",
      node: "8.5.0",
      v8: "6.0.287.53",
      uv: "1.14.1",
      zlib: "1.2.11",
      ares: "1.10.1-DEV",
      modules: "57",
      nghttp2: "1.25.0",
      openssl: "1.0.2l",
      icu: "59.1",
      unicode: "9.0",
      cldr: "31.0.1",
      tz: "2017b",
    },
    env: {
      MANPATH:
        "/Users/gabrielcsapo/.nvm/versions/node/v8.5.0/share/man:/usr/local/share/man:/usr/share/man:/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.13.sdk/usr/share/man:/Applications/Xcode.app/Contents/Developer/usr/share/man:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/share/man",
      TERM_PROGRAM: "Apple_Terminal",
      NVM_CD_FLAGS: "",
      TERM: "xterm-256color",
      SHELL: "/bin/bash",
      TMPDIR: "/var/folders/k6/22m6t4914773pflxw9kbfd2c0000gn/T/",
      NVM_PATH: "/Users/gabrielcsapo/.nvm/versions/node/v8.5.0/lib/node",
      Apple_PubSub_Socket_Render:
        "/private/tmp/com.apple.launchd.KQrCAUInrF/Render",
      TERM_PROGRAM_VERSION: "400",
      OLDPWD: "/Users/gabrielcsapo/Documents",
      TERM_SESSION_ID: "2DDC6154-BEC8-4EE2-A475-13A71AAA61ED",
      NVM_DIR: "/Users/gabrielcsapo/.nvm",
      USER: "gabrielcsapo",
      SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.VDInegIkfa/Listeners",
      PATH: "/Users/gabrielcsapo/.nvm/versions/node/v8.5.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",
      NVM_NODEJS_ORG_MIRROR: "https://nodejs.org/dist",
      PWD: "/Users/gabrielcsapo/Documents/build.sh",
      LANG: "en_US.UTF-8",
      XPC_FLAGS: "0x0",
      XPC_SERVICE_NAME: "0",
      HOME: "/Users/gabrielcsapo",
      SHLVL: "1",
      LOGNAME: "gabrielcsapo",
      NVM_BIN: "/Users/gabrielcsapo/.nvm/versions/node/v8.5.0/bin",
      NVM_IOJS_ORG_MIRROR: "https://iojs.org/dist",
      _: "./bin/build.js",
      __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0",
      FOO: "bar",
    },
    arch: "x64",
    platform: "darwin",
    release: {
      name: "node",
      sourceUrl:
        "https://nodejs.org/download/release/v8.5.0/node-v8.5.0.tar.gz",
      headersUrl:
        "https://nodejs.org/download/release/v8.5.0/node-v8.5.0-headers.tar.gz",
    },
    version: "v8.5.0",
    features: {
      debug: false,
      uv: true,
      ipv6: true,
      tls_npn: true,
      tls_alpn: true,
      tls_sni: true,
      tls_ocsp: true,
      tls: true,
    },
    config: {
      target_defaults: {
        cflags: [],
        default_configuration: "Release",
        defines: [],
        include_dirs: [],
        libraries: [],
      },
      variables: {
        asan: 0,
        coverage: false,
        debug_devtools: "node",
        debug_http2: false,
        debug_nghttp2: false,
        force_dynamic_crt: 0,
        host_arch: "x64",
        icu_data_file: "icudt59l.dat",
        icu_data_in: "../../deps/icu-small/source/data/in/icudt59l.dat",
        icu_endianness: "l",
        icu_gyp_path: "tools/icu/icu-generic.gyp",
        icu_locales: "en,root",
        icu_path: "deps/icu-small",
        icu_small: true,
        icu_ver_major: "59",
        llvm_version: 0,
        node_byteorder: "little",
        node_enable_d8: false,
        node_enable_v8_vtunejit: false,
        node_install_npm: true,
        node_module_version: 57,
        node_no_browser_globals: false,
        node_prefix: "/",
        node_release_urlbase: "https://nodejs.org/download/release/",
        node_shared: false,
        node_shared_cares: false,
        node_shared_http_parser: false,
        node_shared_libuv: false,
        node_shared_openssl: false,
        node_shared_zlib: false,
        node_tag: "",
        node_use_bundled_v8: true,
        node_use_dtrace: true,
        node_use_etw: false,
        node_use_lttng: false,
        node_use_openssl: true,
        node_use_perfctr: false,
        node_use_v8_platform: true,
        node_without_node_options: false,
        openssl_fips: "",
        openssl_no_asm: 0,
        shlib_suffix: "57.dylib",
        target_arch: "x64",
        uv_parent_path: "/deps/uv/",
        uv_use_dtrace: true,
        v8_enable_gdbjit: 0,
        v8_enable_i18n_support: 1,
        v8_enable_inspector: 1,
        v8_no_strict_aliasing: 1,
        v8_optimized_debug: 0,
        v8_promise_internal_field_count: 1,
        v8_random_seed: 0,
        v8_trace_maps: 0,
        v8_use_snapshot: true,
        want_separate_host_toolset: 0,
        want_separate_host_toolset_mkpeephole: 0,
        xcode_version: "7.0",
      },
    },
  },
  pipeline: [
    {
      id: "1512431588381q6xlqs37fl",
      name: "foo",
      state: "success",
      type: "pipeline",
      children: [
        {
          type: "command",
          command: "echo $FOO",
          output: [
            {
              type: "stdout",
              content: "bar\n",
              date: "2017-12-04T23:53:08.408Z",
            },
          ],
          state: "success",
          time: 25.164984,
          id: "1512431588381mngpsv7w07",
        },
      ],
    },
    {
      id: "1512431588381do6uo1rdam",
      name: "install",
      state: "success",
      type: "pipeline",
      children: [
        {
          type: "command",
          command: "npm --version",
          output: [
            {
              type: "stdout",
              content: "5.5.1\n",
              date: "2017-12-04T23:53:08.624Z",
            },
          ],
          state: "success",
          time: 218.881503,
          id: "15124315883816k6clraj1g",
        },
        {
          type: "command",
          command: "node --version",
          output: [
            {
              type: "stdout",
              content: "v8.5.0\n",
              date: "2017-12-04T23:53:08.640Z",
            },
          ],
          state: "success",
          time: 10.919297,
          id: "15124315883814b9bmstdz1",
        },
        {
          id: "1512431588381whhb5siz0r",
          name: "npm",
          state: "success",
          type: "pipeline",
          children: [
            {
              type: "command",
              command: "npm install",
              output: [
                {
                  type: "stdout",
                  content: "up to date in 6.139s\n",
                  date: "2017-12-04T23:53:15.212Z",
                },
              ],
              state: "success",
              time: 6589.475239,
              id: "1512431588381r79yff3lgc",
            },
            {
              type: "command",
              command: "ls -lh node_modules",
              output: [
                {
                  type: "stdout",
                  content:
                    "total 0\ndrwxr-xr-x    3 gabrielcsapo  staff    96B Nov 30 21:36 @hypnosphi\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 @storybook\ndrwxr-xr-x    4 gabrielcsapo  staff   128B Nov 30 21:36 @types\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 accepts\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 acorn\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 acorn-dynamic-import\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 acorn-jsx\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 airbnb-js-shims\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 ajv\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 ajv-keywords\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 align-text\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 alphanum-sort\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 amdefine\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 ansi-align\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ansi-escapes\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 ansi-html\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ansi-regex\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ansi-styles\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Dec  4 15:46 ansi-to-html\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 anymatch\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 argparse\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 arr-diff\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 arr-flatten\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 array-find\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 array-flatten\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 array-includes\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 array-union\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 array-uniq\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 array-unique\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 array.prototype.flatmap\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 array.prototype.flatten\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 arrify\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 asap\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 asn1\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 asn1.js\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 assert\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 assert-plus\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 ast-types\ndrwxr-xr-x  109 gabrielcsapo  staff   3.4K Nov 30 21:36 async\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 async-each\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 asynckit\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 autoprefixer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 aws-sign2\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 aws4\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-code-frame\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 babel-core\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 babel-generator\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-bindify-decorators\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-builder-binary-assignment-operator-visitor\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-helper-builder-react-jsx\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-call-delegate\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-helper-define-map\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-evaluate-path\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-explode-assignable-expression\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-explode-class\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-flip-expressions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-function-name\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-get-function-arity\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-hoist-variables\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-is-nodes-equiv\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-is-void-0\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-helper-mark-eval-scopes\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-optimise-call-expression\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-helper-regex\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-remap-async-to-generator\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-remove-or-void\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-replace-supers\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helper-to-multiple-sequence-expressions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-helpers\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-loader\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-messages\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-minify-webpack-plugin\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-check-es2015-constants\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 babel-plugin-dynamic-import-node\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-builtins\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-constant-folding\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-dead-code-elimination\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-flip-comparisons\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-guarded-expressions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-infinity\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-mangle-names\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-numeric-literals\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-replace\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-simplify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-minify-type-constructors\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 babel-plugin-react-docgen\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-async-functions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-async-generators\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-class-constructor-call\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-class-properties\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-decorators\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-do-expressions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-dynamic-import\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-exponentiation-operator\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-export-extensions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-flow\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-function-bind\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-jsx\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-object-rest-spread\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-syntax-trailing-function-commas\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-async-generator-functions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-async-to-generator\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-class-constructor-call\ndrwxr-xr-x    6 gabrielcsapo  staff   192B ",
                  date: "2017-12-04T23:53:15.265Z",
                },
                {
                  type: "stdout",
                  content:
                    "Nov 30 21:36 babel-plugin-transform-class-properties\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-decorators\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-do-expressions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-arrow-functions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-block-scoped-functions\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-plugin-transform-es2015-block-scoping\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-classes\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-computed-properties\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-destructuring\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-duplicate-keys\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-for-of\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-function-name\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-literals\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-modules-amd\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-modules-commonjs\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-modules-systemjs\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-modules-umd\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-object-super\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-parameters\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-shorthand-properties\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-spread\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-sticky-regex\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-template-literals\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-typeof-symbol\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-es2015-unicode-regex\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-exponentiation-operator\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-export-extensions\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-flow-strip-types\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-function-bind\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-inline-consecutive-adds\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-member-expression-literals\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-merge-sibling-variables\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-minify-booleans\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-object-rest-spread\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-property-literals\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-react-constant-elements\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-react-display-name\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-react-jsx\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-react-jsx-self\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-react-jsx-source\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-plugin-transform-regenerator\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-regexp-constructors\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-remove-console\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-remove-debugger\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-remove-undefined\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-runtime\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-simplify-comparison-operators\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-strict-mode\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-plugin-transform-undefined-to-void\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 babel-preset-env\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-preset-flow\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-preset-minify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-preset-react\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 babel-preset-react-app\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-preset-stage-0\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-preset-stage-1\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-preset-stage-2\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 babel-preset-stage-3\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-register\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 babel-runtime\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-template\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-traverse\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 babel-types\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 babylon\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 bail\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 balanced-match\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 base64-js\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 bcrypt-pbkdf\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 big.js\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 binary-extensions\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 bind-obj-methods\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 bluebird\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 bn.js\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 body-parser\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 boolbase\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 boom\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 bowser\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 boxen\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 brace\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 brace-expansion\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 braces\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 brcast\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 brorand\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 browserify-aes\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 browserify-cipher\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 browserify-des\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 browserify-rsa\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 browserify-sign\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 browserify-zlib\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 browserslist\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 buffer\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 buffer-xor\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 builtin-modules\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 builtin-status-codes\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 byline\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 bytes\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 caller-path\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 callsites\ndrwxr-xr-x    6 gabrielcsapo  staff   1",
                  date: "2017-12-04T23:53:15.266Z",
                },
                {
                  type: "stdout",
                  content:
                    "92B Nov 30 21:36 camel-case\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 camelcase\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 caniuse-api\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 caniuse-db\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 caniuse-lite\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 capture-stack-trace\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 case-sensitive-paths-webpack-plugin\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 caseless\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 catharsis\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 center-align\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 chain-function\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 chalk\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 character-entities\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 character-entities-legacy\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 character-reference-invalid\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 chardet\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 chokidar\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 cipher-base\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 circular-json\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 clap\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 classnames\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 clean-css\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 clean-yaml-object\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 cli-boxes\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 cli-cursor\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 cli-spinners\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 cli-width\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 cliui\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 clone\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 co\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 coa\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 code-point-at\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 collapse-white-space\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 color\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 color-convert\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 color-name\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 color-string\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 color-support\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 colormin\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 colors\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 combined-stream\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 commander\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 common-tags\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 commondir\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 concat-map\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 concat-stream\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 configstore\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 console-browserify\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 constants-browserify\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 content-disposition\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 content-type\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 convert-source-map\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 cookie\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 cookie-signature\ndrwxr-xr-x   21 gabrielcsapo  staff   672B Nov 30 21:36 core-js\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 core-util-is\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 cosmiconfig\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 coveralls\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 create-ecdh\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 create-error-class\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 create-hash\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 create-hmac\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 cross-spawn\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 cryptiles\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 crypto-browserify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 crypto-random-string\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 css-color-names\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 css-in-js-utils\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 css-loader\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 css-select\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 css-selector-tokenizer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 css-what\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 cssesc\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 cssnano\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 csso\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 d\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 dashdash\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 date-now\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 debug\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 decamelize\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 dedent\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 deep-equal\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 deep-extend\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 deep-is\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 define-properties\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 defined\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 del\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 delayed-stream\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 depd\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 des.js\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 destroy\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 detect-indent\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 diff\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 diffie-hellman\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 docdash\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 doctrine\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 dom-converter\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 dom-helpers\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 dom-serializer\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 dom-walk\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 domain-browser\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 domelementtype\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 domhandler\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 domutils\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 dot-prop\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 duplexer3\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 ecc-jsbn\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ee-first\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 electron-to-chromium\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 elliptic\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 emojis-list\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 encodeurl\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 encoding\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 enhanced-resolve\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 entities\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 errno\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 error-ex\ndrwxr-xr-x   22 gabrielcsapo  staff   704B Nov 30 21:36 es-abstract\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 es-to-primitive\ndrwxr-xr-x   29 gabrielcsapo  staff   928B Nov 30 21:36 es5-ext\ndrwxr-xr-x   23 gabrielcsapo  staff   736B Nov 30 21:36 es5-shim\ndrwxr-xr-x   19 ",
                  date: "2017-12-04T23:53:15.266Z",
                },
                {
                  type: "stdout",
                  content:
                    "gabrielcsapo  staff   608B Nov 30 21:36 es6-iterator\ndrwxr-xr-x   19 gabrielcsapo  staff   608B Nov 30 21:36 es6-map\ndrwxr-xr-x   20 gabrielcsapo  staff   640B Nov 30 21:36 es6-set\ndrwxr-xr-x   24 gabrielcsapo  staff   768B Nov 30 21:36 es6-shim\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 es6-symbol\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 es6-weak-map\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 escape-html\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 escape-string-regexp\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 escodegen\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 escope\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 eslint\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 eslint-plugin-react\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 eslint-scope\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 espree\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 esprima\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 esquery\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 esrecurse\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 estraverse\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 esutils\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 etag\ndrwxr-xr-x   18 gabrielcsapo  staff   576B Nov 30 21:36 event-emitter\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 events\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 events-to-array\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 evp_bytestokey\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 execa\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 exenv\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 expand-brackets\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 expand-range\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 expand-template\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 express\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 extend\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 external-editor\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 extglob\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 extsprintf\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 fast-deep-equal\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 fast-json-stable-stringify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 fast-levenshtein\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 fast-memoize\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 fastparse\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 fbjs\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 figures\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 file-entry-cache\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 file-loader\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 filename-regex\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 fill-range\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 finalhandler\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 find-cache-dir\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 find-up\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 flat-cache\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 flatten\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 for-each\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 for-in\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 for-own\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 foreach\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 foreground-child\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 forever-agent\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 form-data\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 forwarded\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 fresh\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 fs-exists-cached\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 fs-extra\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 fs.realpath\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 fsevents\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 function-bind\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 function-loop\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 function.prototype.name\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 functional-red-black-tree\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 fuse.js\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 generate-function\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 generate-object-property\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 get-caller-file\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 get-stream\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 getpass\ndrwxr-xr-x   24 gabrielcsapo  staff   768B Nov 30 21:36 glamor\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 glamorous\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 glob\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 glob-base\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 glob-parent\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 global\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 global-dirs\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 globals\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 globby\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 got\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 graceful-fs\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 har-schema\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 har-validator\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 has\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 has-ansi\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 has-flag\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 hash-base\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 hash.js\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 hawk\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 he\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 history\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 hmac-drbg\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 hoek\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 hoist-non-react-statics\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 home-or-tmp\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 hosted-git-info\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 html-comment-regex\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 html-element-attributes\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 html-entities\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 html-minifier\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 html-tag-names\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 html-webpack-inline-source-plugin\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 html-webpack-plugin\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 htmlparser2\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 http-errors\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 http-signature\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 https-browserify\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 hyphenate-style-name\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 iconv-lite\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 icss-replace-symbols\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 icss-utils\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 ieee754\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ignore\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 immutability-helper\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 immutable\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 import-lazy\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 imurmurhash\ndrwxr-xr-x   13 gabrielcsapo  staff   416B ",
                  date: "2017-12-04T23:53:15.266Z",
                },
                {
                  type: "stdout",
                  content:
                    "Nov 30 21:36 in-publish\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 indexes-of\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 indexof\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 inflight\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 inherits\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ini\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 inline-style-prefixer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 inquirer\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 interpret\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 invariant\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 invert-kv\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 ipaddr.js\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-absolute-url\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-alphabetical\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-alphanumerical\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 is-arrayish\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-binary-path\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 is-buffer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-builtin-module\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 is-callable\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 is-date-object\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-decimal\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-directory\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 is-dom\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-dotfile\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-equal-shallow\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-extendable\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-extglob\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-finite\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-fullwidth-code-point\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 is-function\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-glob\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-hexadecimal\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-installed-globally\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 is-my-json-valid\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 is-npm\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-number\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-obj\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 is-path-cwd\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 is-path-in-cwd\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-path-inside\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-plain-obj\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 is-plain-object\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-posix-bracket\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-primitive\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 is-promise\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 is-property\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-redirect\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 is-regex\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-resolvable\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-retry-allowed\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-stream\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-svg\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 is-symbol\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 is-typedarray\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-whitespace-character\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-word-character\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 is-wsl\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 isarray\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 isexe\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 isobject\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 isomorphic-fetch\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 isstream\ndrwxr-xr-x   20 gabrielcsapo  staff   640B Nov 30 21:36 js-base64\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 js-tokens\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 js-yaml\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 js2xmlparser\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 jsbn\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 jsdoc\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 jsesc\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 json-loader\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 json-schema\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 json-schema-traverse\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 json-stable-stringify\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 json-stable-stringify-without-jsonify\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 json-stringify-safe\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 json5\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 jsonfile\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 jsonify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 jsonpointer\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 jsprim\ndrwxr-xr-x   25 gabrielcsapo  staff   800B Nov 30 21:36 jsx-ast-utils\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 keycode\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 kind-of\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 klaw\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 latest-version\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lazy-cache\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 lcid\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 lcov-parse\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 levn\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 load-json-file\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 loader-runner\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 loader-utils\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 locate-path\ndrwxr-xr-x  640 gabrielcsapo  staff    20K Nov 30 21:36 lodash\ndrwxr-xr-x  646 gabrielcsapo  staff    20K Nov 30 21:36 lodash-es\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash._getnative\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.camelcase\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.debounce\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.flattendeep\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.get\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.isarguments\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.isarray\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.isequal\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.isplainobject\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.keys\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.memoize\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.pick\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.some\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.sortby\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lodash.uniq\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 log-driver\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 log-symbols\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 log-update\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 longest\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 loose-envify\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 lower-case\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 lowercase-keys\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 lru-cache\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 macaddress\ndrwxr-xr-x    6 gabri",
                  date: "2017-12-04T23:53:15.266Z",
                },
                {
                  type: "stdout",
                  content:
                    "elcsapo  staff   192B Nov 30 21:36 make-dir\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 markdown-escapes\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 marked\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 math-expression-evaluator\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 md5.js\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 media-typer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 mem\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 memory-fs\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 merge-descriptors\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 methods\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 micromatch\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 miller-rabin\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 mime\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 mime-db\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 mime-types\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 mimic-fn\ndrwxr-xr-x   21 gabrielcsapo  staff   672B Nov 30 21:36 min-document\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 minimalistic-assert\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 minimalistic-crypto-utils\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 minimatch\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 minimist\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 minipass\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 mkdirp\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ms\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 multistream\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 mute-stream\ndrwxr-xr-x   29 gabrielcsapo  staff   928B Nov 30 21:36 nan\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 natural-compare\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 ncname\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 negotiator\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 no-case\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 node-dir\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 node-fetch\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 node-libs-browser\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 normalize-package-data\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 normalize-path\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 normalize-range\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 normalize-url\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 npm-run-path\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 nth-check\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 num2fraction\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 number-is-nan\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 nyc\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 oauth-sign\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 object-assign\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 object-inspect\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 object-keys\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 object.entries\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 object.getownpropertydescriptors\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 object.omit\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 object.values\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 on-finished\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 once\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 onetime\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 opener\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 opn\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 optionator\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 ora\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 os-browserify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 os-homedir\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 os-locale\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 os-tmpdir\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 own-or\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 own-or-env\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 p-finally\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 p-limit\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 p-locate\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 package-json\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 pako\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 param-case\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 parse-asn1\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 parse-entities\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 parse-glob\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 parse-json\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 parseurl\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 path-browserify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 path-exists\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 path-is-absolute\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 path-is-inside\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 path-key\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 path-parse\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 path-to-regexp\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 path-type\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 pbkdf2\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 performance-now\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 pify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 pinkie\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 pinkie-promise\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 pkg\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 pkg-dir\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 pkg-fetch\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 pluralize\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 podda\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 postcss\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-calc\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-colormin\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-convert-values\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-discard-comments\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-discard-duplicates\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-discard-empty\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 postcss-discard-overridden\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-discard-unused\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-filter-plugins\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 postcss-flexbugs-fixes\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-load-config\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-load-options\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-load-plugins\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-loader\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-merge-idents\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-merge-longhand\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-merge-rules\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-message-helpers\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-minify-font-values\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-minify-gradients\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-minify-params\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-minify-selectors\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 postcss-modules-extract-imports\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-modules-local-by-defau",
                  date: "2017-12-04T23:53:15.267Z",
                },
                {
                  type: "stdout",
                  content:
                    "lt\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 postcss-modules-scope\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 postcss-modules-values\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-normalize-charset\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-normalize-url\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-ordered-values\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-reduce-idents\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-reduce-initial\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-reduce-transforms\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-selector-parser\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-svgo\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 postcss-unique-selectors\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 postcss-value-parser\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 postcss-zindex\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 preact\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 preact-compat\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 preact-render-to-string\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 preact-transition-group\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 prelude-ls\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 prepend-http\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 preserve\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 pretty-error\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 pretty-format\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 private\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 process\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 process-nextick-args\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 progress\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 promise\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 promise.prototype.finally\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 prop-types\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 proxy-addr\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 prr\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 pseudomap\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 psychic.css\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 public-encrypt\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 punycode\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 q\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 qs\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 query-string\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 querystring\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 querystring-es3\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 radium\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 randomatic\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 randombytes\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 randomfill\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 range-parser\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 raw-body\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 rc\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 react\ndrwxr-xr-x   27 gabrielcsapo  staff   864B Nov 30 21:36 react-ace\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 react-docgen\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 react-dom\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 react-html-attributes\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 react-icon-base\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 react-icons\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 react-inspector\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 react-markdown\ndrwxr-xr-x   27 gabrielcsapo  staff   864B Nov 30 21:36 react-modal\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 react-router\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 react-split-pane\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 react-style-proptype\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 react-transition-group\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 react-treebeard\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 read-pkg\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 read-pkg-up\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 readable-stream\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 readdirp\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 recast\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 rechoir\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 reduce-css-calc\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 reduce-function-call\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 redux\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 regenerate\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 regenerator-runtime\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 regenerator-transform\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 regex-cache\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 regexpu-core\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 registry-auth-token\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 registry-url\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 regjsgen\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 regjsparser\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 relateurl\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 remark-parse\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 remove-trailing-separator\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 renderkid\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 repeat-element\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 repeat-string\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 repeating\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 replace-ext\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 request\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 request-progress\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 require-directory\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 require-from-string\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 require-main-filename\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 require-uncached\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 requizzle\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 resolve\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 resolve-from\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 resolve-pathname\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 restore-cursor\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 resumer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 right-align\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 rimraf\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 ripemd160\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 run-async\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 rx-lite\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 rx-lite-aggregates\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 safe-buffer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 sax\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 schema-utils\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 semver\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 semver-diff\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 send\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 serve-favicon\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 serve-static\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 set-blocking\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 set-immediate-shim\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 setimmediate\ndrwxr-xr-x    7 gabrielcsap",
                  date: "2017-12-04T23:53:15.267Z",
                },
                {
                  type: "stdout",
                  content:
                    "o  staff   224B Nov 30 21:36 setprototypeof\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 sha.js\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 shallowequal\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 shebang-command\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 shebang-regex\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 shelljs\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 signal-exit\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 simple-bufferstream\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 slash\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 slice-ansi\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 sntp\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 sort-keys\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 source-list-map\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 source-map\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 source-map-support\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 source-map-url\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 spdx-correct\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 spdx-expression-parse\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 spdx-license-ids\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 sprintf-js\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 sshpk\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 stack-utils\ndrwxr-xr-x    4 gabrielcsapo  staff   128B Nov 30 21:36 standalone-react-addons-pure-render-mixin\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 state-toggle\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 statuses\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 stream-browserify\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 stream-http\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 stream-meter\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 strict-uri-encode\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 string-width\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 string.prototype.padend\ndrwxr-xr-x   15 gabrielcsapo  staff   480B Nov 30 21:36 string.prototype.padstart\ndrwxr-xr-x   16 gabrielcsapo  staff   512B Nov 30 21:36 string.prototype.trim\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 string_decoder\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 stringstream\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 strip-ansi\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 strip-bom\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 strip-eof\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 strip-json-comments\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 style-loader\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 supports-color\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 svg-tag-names\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 svgo\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 symbol-observable\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 table\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 taffydb\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 tap\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 tap-mocha-reporter\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 tap-parser\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 tapable\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 tape\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 term-size\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 text-table\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 throttleit\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 through\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 time-stamp\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 timed-out\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 timers-browserify\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 tmatch\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 tmp\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 to-arraybuffer\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 to-fast-properties\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 toposort\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 tough-cookie\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 trim\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 trim-right\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 trim-trailing-lines\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 trivial-deferred\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 trough\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 tryit\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 tryitout\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 tsame\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 tty-browserify\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 tunnel-agent\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 tweetnacl\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 type-check\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 type-is\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 typedarray\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 ua-parser-js\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 uglify-js\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 uglify-to-browserify\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 uglifyjs-webpack-plugin\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 uid2\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 underscore\ndrwxr-xr-x   33 gabrielcsapo  staff   1.0K Nov 30 21:36 underscore-contrib\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unherit\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 unicode-length\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unified\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 uniq\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 uniqid\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 uniqs\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unique-string\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unique-temp-dir\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unist-util-is\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unist-util-remove-position\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unist-util-stringify-position\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unist-util-visit\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 universalify\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 unpipe\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 unzip-response\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 update-notifier\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 upper-case\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 url\ndrwxr-xr-x   10 gabrielcsapo  staff   320B Nov 30 21:36 url-loader\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 url-parse-lax\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 util\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 util-deprecate\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 utila\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 utils-merge\ndrwxr-xr-x   14 gabrielcsapo  staff   448B Nov 30 21:36 uuid\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 validate-npm-package-license\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 value-equal\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 vary\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 velocity-animate\ndrwxr-xr-x   17 gabrielcsapo  staff   544B Nov 30 21:36 velocity-react\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 vendors\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 verror\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 vfile\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 vfile-location\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 3",
                  date: "2017-12-04T23:53:15.267Z",
                },
                {
                  type: "stdout",
                  content:
                    "0 21:36 vfile-message\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 vm-browserify\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 w3c-blob\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 warning\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 watchpack\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 webpack\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 webpack-dev-middleware\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 webpack-hot-middleware\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 webpack-sources\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 whatwg-fetch\ndrwxr-xr-x   13 gabrielcsapo  staff   416B Nov 30 21:36 whet.extend\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 which\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 which-module\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 widest-line\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 window-size\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 wordwrap\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 wrap-ansi\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 wrappy\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 write\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 write-file-atomic\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 x-is-function\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 x-is-string\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 xdg-basedir\ndrwxr-xr-x    5 gabrielcsapo  staff   160B Nov 30 21:36 xml-char-classes\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 xmlcreate\ndrwxr-xr-x   11 gabrielcsapo  staff   352B Nov 30 21:36 xtend\ndrwxr-xr-x    6 gabrielcsapo  staff   192B Nov 30 21:36 y18n\ndrwxr-xr-x    7 gabrielcsapo  staff   224B Nov 30 21:36 yallist\ndrwxr-xr-x    8 gabrielcsapo  staff   256B Nov 30 21:36 yapool\ndrwxr-xr-x   12 gabrielcsapo  staff   384B Nov 30 21:36 yargs\ndrwxr-xr-x    9 gabrielcsapo  staff   288B Nov 30 21:36 yargs-parser\n",
                  date: "2017-12-04T23:53:15.267Z",
                },
              ],
              state: "success",
              time: 39.890528,
              id: "15124315883816nnr0j49yd",
            },
          ],
        },
      ],
    },
    {
      id: "151243158838169yyd636et",
      name: "lint",
      state: "fail",
      type: "pipeline",
      children: [
        {
          type: "command",
          command: "npm run lint",
          output: [
            {
              type: "stdout",
              content:
                "\n> build.sh@1.0.0 lint /Users/gabrielcsapo/Documents/build.sh\n> eslint .\n\n",
              date: "2017-12-04T23:53:15.521Z",
            },
            {
              type: "stdout",
              content:
                "\n/Users/gabrielcsapo/Documents/build.sh/src/stage.js\n  49:17  error  Unexpected console statement  no-console\n\n✖ 1 problem (1 error, 0 warnings)\n\n",
              date: "2017-12-04T23:53:16.468Z",
            },
            {
              type: "stderr",
              content: "npm",
              date: "2017-12-04T23:53:16.477Z",
            },
            {
              type: "stderr",
              content: " ERR! code ELIFECYCLE\nnpm",
              date: "2017-12-04T23:53:16.477Z",
            },
            {
              type: "stderr",
              content: " ERR! ",
              date: "2017-12-04T23:53:16.477Z",
            },
            {
              type: "stderr",
              content: "errno 1\n",
              date: "2017-12-04T23:53:16.477Z",
            },
            {
              type: "stderr",
              content: "npm",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: " ERR! build.sh@1.0.0 lint: `eslint .`\n",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: "npm ERR!",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: " Exit status 1\n",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: "npm ",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: "ERR! \nnpm ",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: "ERR!",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: " Failed at the build.sh@1.0.0 lint script.\nnpm",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: " ERR!",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content:
                " This is probably not a problem with npm. There is likely additional logging output above.\n",
              date: "2017-12-04T23:53:16.478Z",
            },
            {
              type: "stderr",
              content: "\n",
              date: "2017-12-04T23:53:16.486Z",
            },
            {
              type: "stderr",
              content:
                "npm ERR! A complete log of this run can be found in:\nnpm ERR!",
              date: "2017-12-04T23:53:16.486Z",
            },
            {
              type: "stderr",
              content:
                "     /Users/gabrielcsapo/.npm/_logs/2017-12-04T23_53_16_479Z-debug.log\n",
              date: "2017-12-04T23:53:16.486Z",
            },
          ],
          state: "fail",
          time: 1220.257286,
          id: "1512431588381vs7q77wfsz",
        },
      ],
    },
    {
      id: "1512431588381ug41bvihbr",
      name: "coverage",
      state: "unknown",
      type: "pipeline",
      children: [
        {
          type: "command",
          command: "npm run coverage",
          output: [],
          state: "unknown",
          time: 0,
          id: "1512431588381lsef1goniy",
        },
      ],
    },
    {
      id: "15124315883816xzb7fnmdy",
      name: "test",
      state: "unknown",
      type: "pipeline",
      children: [
        {
          type: "command",
          command: "npm test",
          output: [],
          state: "unknown",
          time: 0,
          id: "15124315883811daz95hoy5",
        },
      ],
    },
    {
      id: "1512431588381f6hlkcjbrq",
      name: "docs",
      state: "unknown",
      type: "pipeline",
      children: [
        {
          type: "command",
          command: "npm run generate-docs",
          output: [],
          state: "unknown",
          time: 0,
          id: "1512431588381ctgl6nzpui",
        },
      ],
    },
  ],
};

import Index from "./Index";

export default {
  title: "Index",
};

export const Example = () => {
  return <Index {...pipeline} />;
};
