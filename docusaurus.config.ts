import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Next.js 14',
  tagline: 'Features & Performance',
  favicon: 'img/next.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/devoxx-logo.jpg',
    navbar: {
      title: 'Next.js 14: Features & Performance',
      logo: {
        alt: 'Next.js Logo',
        src: 'img/next.svg',
      },
      items: [],
    },
    footer: {
      links: [
        {
          title: 'My other talks',
          items: [
            {
              label: 'Astro',
              to: 'https://astro.dybowski.pro/',
            },
            {
              label: 'AWS Amplify',
              to: 'https://aws.dybowski.pro/',
            },
          ],
        },
        {
          title: 'Find me',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/sebdybowski/',
            },
            {
              label: 'Twitter (X)',
              href: 'https://x.com/sebdybowskidev',
            },
            {
              label: 'Github',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Sponsors',
          items: [
            {
              label: 'J-Labs Software Specialists',
              href: 'https://www.j-labs.pl/en/',
            },
            {
              label: 'Devoxx Poland',
              href: 'https://devoxx.pl/',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Sebastian Dybowski. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
