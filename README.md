<img src="static/icons/edb-docs-logo-disc-dark.svg" alt='EDB Docs' width="200">

![Deploy Main to Netlify](https://github.com/EnterpriseDB/docs/workflows/Deploy%20Main%20to%20Netlify/badge.svg)
![Deploy Develop to Netlify](https://github.com/EnterpriseDB/docs/workflows/Deploy%20Develop%20to%20Netlify/badge.svg)
![Update PDFs on Develop](https://github.com/EnterpriseDB/docs/workflows/Update%20PDFs%20on%20Develop/badge.svg)

This repo contains the React/Gatsby application that powers [the EDB Docs website](https://www.enterprisedb.com/docs/). The site pulls [Markdown](https://www.markdownguide.org/) content from several repos in a process called "sourcing", and then renders it all into high-performance markup. You can install the application on your local computer for easy editing, viewing, and eventually publishing to the GitHub repo.

## Please remove and re-clone your local repositories after August 13, 2021

We've been checking PDF files into Git. That's not a good plan, so [we've stopped doing that](https://github.com/EnterpriseDB/docs/issues/1632). The next step is to remove these files from Git history and [move other large files to LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage). Among many other good things, that ought to reduce the time to clone this repository substantially.

But it comes at a cost. If there are any local repositories that were cloned before the change, we risk introducing dirty history back into the repository. So we're asking that everyone who has a local repository they **cloned before (or on) August 13, 2021** to delete those repositories. Unfortunately, we'll need to reject any pull requests that introduce PDF files back into Git history. (If you need any help with this, please contact jon.ericson@enterprisedb.com.)

## MacOS Installation

We recommend using MacOS to work with the EDB Docs application.

1. Install [Homebrew](https://brew.sh/), if it's not already installed. (Use `brew -v` to check.)

1. Install Git as well as Git-LFS using Homebrew with `brew install git git-lfs`, if they're not already installed. (Use `git --version` and `git-lfs --version` to check.)

1. Set up an SSH key in GitHub, if you haven't done so already. (Go to [GitHub's SSH Keys page](https://github.com/settings/keys) to check.) If you don't have an SSH Key set up yet, you'll need to set one up to authenticate you to GitHub. See [GitHub's SSH docs](https://docs.github.com/en/github-ae@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) for more information.

1. Clone the [EDB Docs GitHub repo](https://github.com/EnterpriseDB/docs) to your local machine using [GitHub Desktop](https://desktop.github.com/), or via the Terminal with `git clone https://github.com/EnterpriseDB/docs.git`

1. Navigate to the cloned repo directory in your Terminal, if you haven't already done so.

1. Create a `.env.development` file: `cp env.development.example .env.development`.

At this point you have a couple options.
- [**Quick set up with Docker**](#get-started-quickly-with-docker)

   This is the preferred set up method. Choose this option if you just want to make updates to documentation, and don't want to worry about installing and managing the correct version of Node.

- [**Set up a full development environment**](#set-up-a-full-development-environment)

   Choose this option if you are an advanced user and need to make more in depth changes to the docs application, such as new functionality.

### Get Started Quickly With Docker

1. Install Docker on your mac. [Follow the direction below.](#install-docker-using-homebrew)

1. If you're a member of the EnterpriseDB Github Org, [follow the instructions below](#prepare-your-environment-to-download-icons) to enable icons in the docs application.

1. Navigate to the cloned repo directory in your terminal

1. Run `npm run start`. The application will start in the background and take a few minutes to load.

1. You can view logs and monitor the startup process by running `npm run logs`. Once it's finished it can be accessed at `http://localhost:8000/`.

#### Additional Commands and Options for the Docker Environment

- `npm run stop` — Stop the dev server

- `npm run logs` — View logs from the server, to exit the logs press `ctrl`+`c`

- `npm run shell` — open up a shell for the dev container

- `npm run docker:rebuild` — rebuild the images used for the dev container

- To run the server on a different port, change the `PORT` config in `.env.development` and restart the dev server

### Install Docker using Homebrew

You will need to follow these instructions if you want to build PDFs locally, or get started quickly with Docker.

```sh
brew install --cask docker
```

If you get a message saying that you already have Docker installed, check which version is installed using these commands:

```sh
brew ls --formula docker
brew ls --cask docker
```

If the first command yields results, enter the following command to uninstall the formula version and to install the cask version:

```sh
brew uninstall -f docker && brew install --cask docker
```

### Prepare Your Environment to Download Icons

These instructions are for members of the EnterpriseDB Github Org only. The icons we are using are not free, and so cannot be distributed as part of the open source docs repository. You'll want to follow these steps so that icons are pulled to the docs application instead of placeholder icons.

1. Create a Github token which can pull private packages. [You can learn how to do that here.](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

   - The minimum scope the token requires is `read:packages`

   - Make sure to enable SSO for your token or it may not work correctly

1. Once you have that token, update your `.env.development` file with this line: `NPM_TOKEN=your-token-here`.  That will be utilized in the NPM_TOKEN variable in the .npmrc file.

### Set up a full development environment

1. Install [Node.js version 14 LTS](https://nodejs.org/en/download/). We recommend using Node version 14 LTS (the Long Term Support release) as version 15 is not compatible with some of our dependencies at this time.

   - If you already have Node installed, you can verify your version by running `node -v` in the cloned repo directory.

   - If you already have a different version of Node installed, you may want to consider using Node Version Manager (NVM) for a simpler way to manage multiple versions of Node.js. Follow the [directions to install NVM](https://github.com/nvm-sh/nvm#installing-and-updating), then run `nvm install` in the cloned repo directory, followed by `nvm use` which will auto-detect the correct version of Node.js to use (currently 14 LTS).

1. Install Python 3 with `brew install python3`, if it's not already installed. (Use `python3 -V` to check that you have version 3.8 or higher.) Python is not needed for the core Gatsby system, but is required by several source scripts.

1. NPM 7 is the package manager we're using for this project.

   - run `npm -v` to ensure you are using the correct version of npm. If you do not have version 7, you can run `npm install -g npm@7` to install it.

   - NPM may fail with a permissions related issue. To fix that, ensure that your user account owns the required directory: `sudo chown -R $(whoami) /usr/local/lib/node_modules`

1. Install Gatsby with `npm i -g gatsby-cli`. Gatsby is the software that powers the EDB Docs site.

1. If you're a member of the EnterpriseDB Github Org, [follow the instructions above](#prepare-your-environment-to-download-icons) to enable icons in the docs application.

1. In order to ensure environmental variables are properly set, [install direnv](https://direnv.net/#getting-started) and run `direnv allow .`

1. Install all required packages by running `npm install`

1. And finally, you can start up the site locally with `npm run develop`, which should make it live at `http://localhost:8000/`. Huzzah!

### Building Local PDFs (optional)

To build PDFs locally, you'll need to use a Docker container.

1. Install Docker on your mac. [Follow the direction above.](#install-docker-using-homebrew)

1. Start the Docker app. You can tell whether Docker has started or not by looking at your menu bar icons, you should see a whale with containers on its back:

   ![Docker Whale](https://cdn.icon-icons.com/icons2/2248/PNG/32/docker_icon_138669.png)

1. Create the Docker image (optional):

   ```sh
   docker-compose -f docker/docker-compose.build-pdf.yaml build --pull
   ```

1. Run the following command inside the docs project to create a PDF:

   ```sh
   npm run build-pdf product_docs/docs/<product_folder>/<version>
   ```

   For example, to build a PDF for the EPAS 13 documentation:

   ```sh
   npm run build-pdf product_docs/docs/epas/13
   ```

### Converting RST to MDX (optional)

If you need to run parts of the RST to MDX conversion pipeline, you'll need to install `pandoc`, a general purpose document conversion tool. This can also be installed with homebrew - `brew install pandoc`.

## Windows Installation

If you are a Windows user, you can work with Docs without installing it locally by using a Docker container and VSCode. See [Working on Docs in a Docker container using VSCode](README_DOCKER_VSCODE.md)

## Sources

- Advocacy (`/advocacy_docs`, always loaded)

- EDB Product Docs (`/product_docs`)

  - For a list of these sources, see [product_docs/docs](https://github.com/EnterpriseDB/docs/tree/develop/product_docs/docs)

### Configuring Which Sources are Loaded

By default, all document sources will be loaded into the app during development. It's possible to set up a configuration file, `dev-sources.json`, to only load specific sources, but this is not required.

#### `npm run config-sources`

Run `npm run config-sources` to setup your `dev-sources.json` file. This file tells Gatsby which sources to load. The script is interactive!

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
1. `npm install` to reinstall JavaScript packages
1. `npm run clean` to clean up Gatsby cache
1. `npm run develop` to start the development environment again. Keep in mind this will take longer than usual as Gatsby will need to rebuild everything.

## Development

All changes should have a pull request opened against the default branch, `develop`. To generate [#draft-deployments](Draft deployments) for the branch, add the `deploy` label to the pull request: a new deployment at a unique URL will be produced every time changes are pushed to the branch. Note: GitHub must be able to merge the branch cleanly in order for this to work; if there are conflicts shown on the pull request, resolve them in order to obtain a new draft deployment.

When a PR is merged into the `develop` branch, the result will be deployed to the [staging](#staging) environment.

To deploy to production, create a pull request merging `develop` into `main`. When that PR is merged, `main` will automatically build and deploy to the production site.

### Environment Details

Deployments of the site use the `build-sources.json` file to determine which sources need to be loaded. All environments are continuously deployed - new commits to relevant branches will trigger a build of the associated environment. The builds are done using Github Actions, so you can view deployment progress by clicking the "Actions" tab.

#### Staging

Staging is hosted on Netlify, and is built from the `develop` branch. The build and deployment process is handled by the `deploy-develop.yml` GitHub workflow.

Staging environment URL: https://edb-docs-staging.netlify.app/docs/

#### Production

Production is hosted on Netlify, and is built from the `main` branch. The build and deployment process is handled by the `deploy-main.yml` GitHub workflow. The production deployment process will update the search index on Algolia.

Production environment URL: https://www.enterprisedb.com/docs

#### Draft deployments

Review builds are automatically created for pull requests when the `deploy` tag is added. The build and deployment process is handled by the `deploy-draft.yml` GitHub workflow. Draft builds are [a Netlify feature](https://docs.netlify.com/cli/get-started/#draft-and-production-deploys) - each new draft has a unique URL (based on the Staging URL) that will persist even when later revisions are deployed.

## Redirects

The app is concerned with two different types of redirects that can be defined in frontmatter.

### Internal Redirects (within Docs 2.0)

*For specific examples of when to use redirects, see: [How to avoid breaking links when reorganizing, consolidating or deprecating content](docs/how-tos/avoid-breaking-links.md).*

#### `redirects`

The `redirects` frontmatter is to be used for redirects internal to Docs. For example, if you had a file `great_file.mdx` with this following frontmatter...

```yaml
redirects:
  - "/old_path"
  - "/another_old_path"
```

both `/old_path` and `/another_old_path` would redirect to `great_file.mdx`'s current path. This is perfect for setting up redirects when moving a file around within Docs. Redirects created with `redirects` are permanent (301). 

These paths can be absolute (starting with the root of the site) or relative (to the file in which they are contained). For a `/file/at/path/`,

   - Absolute: `/path/to/file/` - redirects requests for /path/to/file to /file/at/path/ 
   - Relative: `former_child/` - redirects requests for /file/at/path/former_child/ to /file/at/path/
   - Relative: `../sibling/` - redirects requests for /file/at/sibling/ to /file/at/path/

#### Netlify-specific redirects

Netlify is the hosting service we use for Docs. Netlify-specific redirects can be found in [`/static/_redirects`](static/_redirects). These are generally used for large-scale redirects, such as when renaming or removing an entire product version.

### Docs 1.0 to Docs 2.0 redirects

This app builds a list of nginx style redirects that are loaded into a separate server. These redirects direct users from links to the old docs site, to the appropriate page on the new docs site.

#### `legacyRedirectsGenerated`

This frontmatter is an automatically generated list of redirects for Docs 1.0 to Docs 2.0 (this repo). These redirects are built by `scripts/legacy_redirects/add_legecy_redirects.py`, and **should not be manually edited**.

#### `legacyRedirects`

If you need to setup a redirect from Docs 1.0 to Docs 2.0 manually, this is the place to do it. If the `legacyRedirectsGenerated` frontmatter does not include the redirect you need, you should add it here.

# MDX Format

Documentation must be formatted as an [MDX file](https://www.gatsbyjs.com/docs/mdx/writing-pages/) with the `.mdx` extension. MDX is a superset of [Markdown](https://www.markdownguide.org/).

## Frontmatter

Each document requires a [YAML](https://yaml.org) frontmatter section at the top with a title:

```
---
title: Title of page
---
```

If the title contains [special characters](https://stackoverflow.com/questions/19109912/yaml-do-i-need-quotes-for-strings-in-yaml), it will need to be quoted. There also needs to be a space after `title:`

In addition to `title`, frontmatter may optionally include `navTitle` and `description`:

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

## Admonitions (Notes, Warnings, etc.)

If you need to draw attention to information, consider using an admonition:

```
!!! Note Optional title
    This is text you'd like the reader to notice.
```

Admonitions begin with the `!!!` signifier. Next comes a (case-insensitive) type which is one of:

- important
- tip
- note
- caution
- warning

There are several [aliases](https://github.com/elviswolcott/remark-admonitions#usage):

- info => important
- success => tip
- secondary => note
- danger => warning
- seealso => note
- hint => tip

Titles are optional. If you don't include one, the admonition will default to the type name ("Important", "Tip", etc.).

The body of the admonition is indented 4 spaces. It should line up with the first letter of the admonition type. Alternatively, fenced admonitions that begin and end with `!!!` lines are supported:

```
!!! Tip
Use fenced admonitions to avoid space counting.
!!!
```

For examples of what you can do with admonitions, see [this demo](https://github.com/EnterpriseDB/docs/blob/main/advocacy_docs/playground/1/01_examples/admonitions.mdx).

## Ordering of files

The items in the left nav are sorted alphabetically by file name. This can be done with a numerical prefix. The titles of each page are used for the names in the left nav.

## Search

Content is indexed for search when the production site builds.

## Contributions

[We love feedback!](https://www.enterprisedb.com/docs/community/contributing/)

To contribute content to this site submit as a pull request (PR). There are two options for this:

Option 1: locally

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository.
2. [Make a new branch.](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
3. Add commits to branch and [push to GitHub](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches).
4. Create a new PR on GitHub.

Option 2: on GitHub

1. Edit a file on GitHub.
2. Submit changes as a PR on a new branch.
