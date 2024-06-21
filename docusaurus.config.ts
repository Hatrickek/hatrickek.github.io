// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hatrickek",
  tagline: "",
  favicon: "img/logo.webp",
  url: "https://hatrickek.github.io/",
  baseUrl: "/",
  trailingSlash: false,
  organizationName: "Hatrickek",
  projectName: "hatrickek.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Hatrickek",
        logo: {
          alt: "Hatrickek Logo",
          src: "img/logo.webp",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/roadmap", label: "Roadmap", position: "left" },
          {
            href: "https://github.com/Hatrickek",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Hatrickek, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.okaidia,
        defaultLanguage: "cpp",
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
    }),
};

export default config;
