// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "build.sh",
  tagline: "🔨 run and visualize the build process",
  url: "https://gabrielcsapo.github.io",
  baseUrl: "build.sh/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gabrielcsapo",
  projectName: "build.sh",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        hashed: true,
        indexBlog: false,
      },
    ],
    [
      "docusaurus-plugin-typedoc-api",
      {
        projectRoot: path.join(__dirname, ".."),
        packages: [
          {
            path: ".",
            entry: "lib/",
          },
        ],
        debug: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
      navbar: {
        title: "build.sh",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            to: "api",
            label: "API",
            position: "left",
          },
          {
            href: "https://gabrielcsapo.github.io/build.sh/example/",
            label: "Example Report",
            position: "right",
          },
          {
            href: "https://gabrielcsapo.github.io/build.sh/storybook/",
            label: "Storybook",
            position: "right",
          },
          {
            href: "https://github.com/gabrielcsapo/build.sh",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} build.sh. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
