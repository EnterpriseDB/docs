## Advocacy docs
This repo is for the Advocacy docs only. These files are in [advocacy_docs/getting-started](https://github.com/rocketinsights/edb_docs_advocacy/tree/master/advocacy_docs/getting-started)

Each document requires a `frontmatter` section at the top with a title. This looks like this:
```
---
title: Title of page
---
```

The title can be in quotes, but they are not needed. There needs to be a space after `title:`

## Ordering of files

The items in the left nav are sorted alphabetically by file name. This can be done with a numerical prefix. The titles of each page are used for the names in the left nav.

## Running the site locally

Follow this setup to run the site locally. Once started, use the `Installing Postgres` and `Connecting to Postgres` links in the top-right to access the Getting Started content. The rest of the links will not work.

1. This project requires Node 10.13.0 or higher to run Gatsby
2. Install yarn and gatsby with `npm i -g gatsby-cli` and `npm i -g yarn`
3. Install all packages with `yarn`
4. Run the site locally with `gatsby develop`

