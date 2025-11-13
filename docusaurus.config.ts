import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Joshua Lent",
  tagline: "My dev journey",
  favicon: "img/fav.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://joshualent.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "joshualent", // Usually your GitHub org/user name.
  projectName: "joshualent", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "wiki",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/joshualent/joshualent/tree/main/",
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "snippets",
        routeBasePath: "snippets",
        path: "./snippets",
        showReadingTime: false,
        feedOptions: {
          type: ["rss", "atom"],
          xslt: true,
        },

        onInlineTags: "warn",
        onInlineAuthors: "warn",
        onUntruncatedBlogPosts: "warn",
      },
    ],
  ],
  scripts: [
    {
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "c23bcfef-38df-48c5-bc51-f0685f4f4ebe",
      defer: true,
    },
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Joshua Lent",
      logo: {
        alt: "Frog profile icon",
        src: "img/logo-cropped.svg",
        srcDark: "img/logo-cropped-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Notes",
        },
        {
          label: "Snippets",
          to: "/snippets",
          position: "left",
        },
        { to: "/blog", label: "blog", position: "right" },

        {
          href: "https://github.com/joshualent/joshualent",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Snippets",
              to: "/snippets",
            },
            {
              label: "Wiki",
              to: "/wiki",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/joshualent",
            },
            {
              label: "X",
              href: "https://x.com/joshisfrog",
            },
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/joshisdev.bsky.social",
            },
          ],
        },
        {
          title: "Extras",
          items: [
            {
              label: "LinkedIn",
              to: "/blog",
            },
            {
              label: "Contact",
              to: "mailto:joshualent83@gmail.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/joshualent/joshualent",
            },
          ],
        },
      ],
      copyright: `Made with 💜 by Joshua Lent`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
