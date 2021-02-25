<img src="static/images/edb-docs-logo-disk-dark.svg" alt='EDB Docs' width="200">

![Deploy Main to Netlify](https://github.com/EnterpriseDB/docs/workflows/Deploy%20Main%20to%20Netlify/badge.svg)
![Deploy Develop to Netlify](https://github.com/EnterpriseDB/docs/workflows/Deploy%20Develop%20to%20Netlify/badge.svg)
![Update PDFs on Develop](https://github.com/EnterpriseDB/docs/workflows/Update%20PDFs%20on%20Develop/badge.svg)

This repo contains the React/Gatsby application that powers the EDB Docs website. The site pulls [Markdown](https://www.markdownguide.org/) content from several repos in a process called "sourcing", and then renders it all into high-performance markup. You can install the application on your local computer for easy editing, viewing, and eventually publishing to the GitHub repo.

## MacOS Installation

We recommend using MacOS to work with the EDB Docs application.

1. Install [Homebrew](https://brew.sh/), if it's not already installed. (Use `brew -v` to check.)

1. Install Git using Homebrew with `brew install git`, if it's not already installed. (Use `git --version` to check.)

1. Set up an SSH key in GitHub, if you haven't done so already. (Go to [GitHub's SSH Keys page](https://github.com/settings/keys) to check.) If you don't have an SSH Key set up yet, you'll need to set one up to authenticate you to GitHub. See [GitHub's SSH docs](https://docs.github.com/en/github-ae@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for more information.

1. Clone the [EDB Docs GitHub repo](https://github.com/EnterpriseDB/docs) to your local machine using [GitHub Desktop](https://desktop.github.com/), or via the Terminal with `git clone https://github.com/EnterpriseDB/docs.git`

1. Navigate to the cloned repo directory in your Terminal, if you haven't already done so.

1. Install [Node.js version 14 LTS](https://nodejs.org/en/download/). We recommend using Node version 14 LTS (the Long Term Support release) as version 15 is not compatible with some of our dependencies at this time.

   - If you already have Node installed, you can verify your version by running `node -v` in the cloned repo directory.

   - If you already have a different version of Node installed, you may want to consider using Node Version Manager (NVM) for a simpler way to manage multiple versions of Node.js. Follow the [directions to install NVM](https://github.com/nvm-sh/nvm#installing-and-updating), then run `nvm install` in the cloned repo directory, followed by `nvm use` which will auto-detect the correct version of Node.js to use (currently 14 LTS).

1. Install Python 3 with `brew install python3`, if it's not already installed. (Use `python3 -V` to check that you have version 3.6 or higher.) Python is not needed for the core Gatsby system, but is required by several source scripts.

1. Install Yarn with `npm i -g yarn`. Yarn is the package manager we're using for this project, instead of NPM.

1. Install Gatsby with `npm i -g gatsby-cli`. Gatsby is the software that powers the EDB Docs site.

1. Install all required packages by running `yarn`.

1. Pull the shared icon files down with `git submodule update --init`.

1. Now select which sources you want with `yarn config-sources`.

1. And finally, you can start up the site locally with `yarn develop`, which should make it live at `http://localhost:8000/`. Huzzah!

## Windows Installation

If you are a Windows user, you can work with Docs without installing it locally by using a Docker container and VSCode. See [Working on Docs in a Docker container using VSCode](README_DOCKER_VSCODE.md)

## Sources

- Advocacy (`/advocacy_docs`, always loaded)

- EDB Product Docs (`/product_docs`)

  - For a list of these sources, see [product_docs/docs](https://github.com/EnterpriseDB/docs/tree/develop/product_docs/docs)

- GitHub-Sourced Docs (entirety of `/external_sources` at present)

  - [Kubernetes Docs](https://github.com/EnterpriseDB/edb-k8s-doc)
  - [Barman](https://github.com/2ndquadrant-it/barman)
  - [pgBackRest](https://github.com/EnterpriseDB/pgbackrest-docs)

### Configuring Which Sources are Loaded

When doing local development of the site or advocacy content, you may want to load other sources to experience the full site. The more sources you load, the slower the site will build, so it's recommended to typically only load the content you'll be working with the most.

#### `yarn config-sources`

Run `yarn config-sources` to setup your `dev-sources.json` file. This file tells Gatsby which sources to load. The script is interactive!

Alternatively, you can setup your `dev-sources.json` file manually by copying `dev-sources.sample` to `dev-sources.json`, and editing as desired. The sample file will source everything by default.

### Types of Sources

**Advocacy Docs** are tutorial content, getting-started material, and anything that is about a subject matter area, but not explicitly tied to a product version.

**Product Docs** are versioned documentation for products. They follow a slightly stricter file structure to allow for version switching and other features.

More details can be found on the [Adding New Sources](README_ADDING_NEW_SOURCES.md) page.

### Adding New Sources

See [Adding New Sources](README_ADDING_NEW_SOURCES.md) for a guide to choosing a source type, adding the files, and other configuration.

## Resolving issues

If you experience errors or other issues with the site, try the following in the project folder:

1. `rm -rf node_modules` to clean out installed JavaScript packages
1. `yarn` to reinstall JavaScript packages
1. `yarn clean` to clean up Gatsby cache
1. `yarn develop` to start the development environment again. Keep in mind this will take longer than usual as Gatsby will need to rebuild everything.

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
