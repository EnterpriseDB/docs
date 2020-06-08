## Advocacy docs

This repo is for the Advocacy docs only. These files are in [advocacy_docs/getting-started](https://github.com/rocketinsights/edb_docs_advocacy/tree/master/advocacy_docs/getting-started)

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

All of these files use Markdown for styling. The options for what can be done can be seen [here](https://github.com/rocketinsights/edb_docs_advocacy/blob/master/docs/playground/1/01_examples/index.mdx)

## Ordering of files

The items in the left nav are sorted alphabetically by file name. This can be done with a numerical prefix. The titles of each page are used for the names in the left nav.

## Running the site locally

Follow this setup to run the site locally. Once started, use the `Installing Postgres` and `Connecting to Postgres` links in the top-right to access the Getting Started content. The rest of the links will not work.

1. This project requires Node 10.13.0 or higher to run Gatsby
2. Install yarn and gatsby with `npm i -g gatsby-cli` and `npm i -g yarn`
3. Install all packages with `yarn`
5. Run `git submodule update --init` to initialize the icons submodule
4. Run the site locally with `gatsby develop`

### Running Katacoda embeds locally
If you need to run the Katacoda embeds during local development, you'll need to have SSL setup locally.

1. Run the server with `gatsby develop --https`. When promped, enter your root password. This will configured a local certificate for the development server to use. If you have issues, see [this Gatsby doc](https://www.gatsbyjs.org/docs/local-https/#manual-installation-of-certutil).

## Icons

We're using the shared [edb-icons repository](https://github.com/rocketinsights/edb-icons) as a git submodule. Any updates to icons should be made in this repository. When you're ready to pull in changes, run `git submodule update --remote`. This will create a change in your local repository that you should commit as part of your next PR.

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

## Advocacy site vs the "main site"

This repo covers all of the advocacy content. This is then used by the main site when the main site builds a new version of the app.

When the main site builds it takes content only from the `advocacy_docs` folder in the `master` branch of this repo. It then builds the whole site along with all of the product docs.

From the perspective of this repo the process of getting content into the main app requires that any commits be merged into the `master` branch and a build is triggered for the main app.

Once content is merged into `master`, this test site will rebuild:

https://edb-docs-advocacy.herokuapp.com

In addition to the content, there is also a
file, `advocacy-index-nav.json`, that is used to create the left nav on the front page of both the advocacy test site and the main site.

Again, for this to show on the main site, changes need to be committed to `master` and the main site built.

## Search

Content is indexed for search when the main site builds.
