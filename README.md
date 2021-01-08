# <img src="static/images/edb-docs-logo-disk-dark.svg" alt='EDB Docs' width="350">

![Deploy Main to Netlify](https://github.com/EnterpriseDB/docs/workflows/Deploy%20Main%20to%20Netlify/badge.svg)
![Deploy Develop to Netlify](https://github.com/EnterpriseDB/docs/workflows/Deploy%20Develop%20to%20Netlify/badge.svg)
![Update PDFs on Develop](https://github.com/EnterpriseDB/docs/workflows/Update%20PDFs%20on%20Develop/badge.svg)

This repo contains the Gatsby application that powers EDB's documentation website, as well as the advocacy content. The site pulls additional content from other repos, in a process called 'sourcing'.

## Installation
1. Clone the repo!
2. (MacOS) Install the [homebrew package manager](https://brew.sh/), if it's not already installed.
3. Install Node.js. We're currently using Node.js version 12. To install this version, first install `nvm` (Node Version Manager). This can be done with (MacOS) `brew install nvm`, followed by `nvm install`. Optionally, you can skip installing `nvm` and install Node.js 12 directly if you prefer.
4. Install Python 3.6 or higher (this is not needed for the core system, but is required by several source scripts)
5. Install yarn and gatsby with `npm i -g gatsby-cli` and `npm i -g yarn`
6. Install all required packages with `yarn`
7. Pull the shared icon files down with `git submodule update --init`
8. Select sources with `yarn config-sources`, running `yarn pull-sources` as part of this process if prompted (see section below for details)
10. Run the site locally with `yarn develop`. The site should now be running at `http://localhost:8000/`!

## Running Without a Local Installation

If you wish to work with Docs without installing the prerequesites locally, you can do so from within a Docker container using VSCode. See: [Working on Docs in a Docker container using VSCode](README_DOCKER_VSCODE.md)

## Sources
- Advocacy (`/advocacy_docs`, always loaded)
- EDB Product Docs (`/product_docs`)
  - For a list of these sources, see [product_docs/docs](https://github.com/EnterpriseDB/docs/tree/develop/product_docs/docs)
- GitHub-Sourced Docs (entirety of `/external_sources` at present)
  - Kubernetes Docs (https://github.com/EnterpriseDB/edb-k8s-doc)
  - BaRMan (https://github.com/2ndquadrant-it/barman)
  - pgBackRest (https://github.com/EnterpriseDB/pgbackrest-docs)

### Configuring Which Sources are Loaded
When doing local development of the site or advocacy content, you may want to load other sources to experience the full site. The more sources you load, the slower the site will build, so it's recommended to typically only load the content you'll be working with the most.

#### `yarn config-sources`
Run `yarn config-sources` to setup your `dev-sources.json` file. This file tells Gatsby  which sources to load, and also provides the next script `yarn pull-sources` with the data it needs. The script is interactive!

Alternatively, you can setup your `dev-sources.json` file manually by copying `dev-sources.sample` to `dev-sources.json`, and editing as desired. The sample file will source everything by default.

If you select an "external" source, you will be prompted to run the next command, `yarn pull-sources`, to download and load this content from the internet.

#### `yarn pull-sources`
Use this command to pull down all the sources you have specified in your `dev-sources.json` file. **This will wipe all external sources**, so make sure you do not have any local changes to these files that you want to save! The `/advocacy_docs` and `/product_docs` folders will not be affected.

### Types of Sources

**Advocacy Docs** are tutorial content, getting-started material, and anything that is about a subject matter area, but not explicitly tied to a product version.

**Product Docs** are versioned documentation for products. They follow a slightly stricter file structure to allow for version switching and other features.

**GitHub Docs** are a low-touch way to display markdown content from GitHub. These docs will link back to the relavent GitHub url on each page, in order to provide any missing context.

More details can be found on the [Adding New Sources](README_ADDING_NEW_SOURCES.md) page.

### Adding New Sources

See [Adding New Sources](README_ADDING_NEW_SOURCES.md) for a guide to choosing a source type, adding the files, and other configuration.

## Resolving issues

If you experience errors or other issues with the site, the first step you should take is to run `yarn clean`, and then try `yarn develop` again. This clears gatsby's cache, and can often resolve strange issues.

## Development

All changes should have a pull request opened against the default branch, `develop`. When a pull request is opened, Heroku should automatically create a review build, which should be linked in the pull request under "deployments". Review builds only include advocacy content. When a pull request is merged, `develop` will automatically deploy the changes to the staging environment.

To deploy to production, create a pull request merging `develop` into `main`. When that PR is merged, `main` will automatically build and deploy to the production site.

### Environment Details

Deployments of the site use the `build-sources.json` file to determine which sources need to be loaded. All environments are continuously deployed - new commits to relevant branches will trigger a build of the associated environment. The builds are done using Github Actions, so you can view deployment progress by clicking the "Actions" tab.

#### Staging
Staging is hosted on Netlify, and is built from the `develop` branch. The build and deployment process is handled by the `deploy-develop.yml` GitHub workflow.

#### Production
Production is hosted on Netlify, and is built from the `main` branch. The build and deployment process is handled by the `deploy-main.yml` GitHub workflow. The production deployment process will update the search index on Algolia.

#### Review Builds
Review builds are automatically created for pull requests. These builds are created by Heroku, and only include advocacy content, no other sources.


# Advocacy Docs (left over from previous README, needs attention)
Advocacy doc files are in [advocacy_docs/getting-started](https://github.com/EnterpriseDB/docs/tree/master/advocacy_docs/getting-started)

New docs need a `.mdx` suffix to be used by Gatsby.

## frontmatter

Each document requires a `frontmatter` section at the top with a title. This looks like this:

```
---
title: Title of page
---
```

The title can be in quotes, but they are not needed unless you want an apostrophe in there. There also needs to be a space after `title:`

In addition to `title`, there is also the option of adding `navTitle` and `description` to look like this:

```
---
title: An exhaustive guide to all things wonderful about Postgres
navTitle: Postgres guide
description: Everything you need to know about Postgres
---
```

The `navTitle` is used for the left navigation so it can take up less space. It is also used in "cards".

The `description` is used in cards as well.

## Markdown styling

All of these files use Markdown for styling. The options for what can be done can be seen [here](https://github.com/EnterpriseDB/docs/blob/master/advocacy_docs/playground/1/01_examples/index.mdx)

## Ordering of files

The items in the left nav are sorted alphabetically by file name. This can be done with a numerical prefix. The titles of each page are used for the names in the left nav.

## Content submission

To add content to this site, changes must be submitted as a PR. There are two options for this:

Option 1: locally

1. Clone repo
2. Make a new branch
3. Add commits to branch and push to github
4. Create a new PR on github

Option 2: on github

1. Edit a file on github
2. Submit changes as a PR on a new branch

## Search

Content is indexed for search when the production site builds.
