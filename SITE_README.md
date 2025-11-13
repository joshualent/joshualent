# Website

My personal site built with [Docusaurus](https://docusaurus.io/). It includes a portfolio page, my personal wiki, a blog, and some snippets including TIL and brief opinion pieces.

## Development

This site uses TypeScript with pnpm as the package manager. Start the site with `pnpm dev`. To build and serve the site, use `pnpm build` and `pnpm serve`.

Docusaurus is a bit picky when it comes to content that could be confused for JavaScript syntax (even in `.md` files). It seems like brackets `{}` and unclosed html tags (ie. `<br>`) cause build issues