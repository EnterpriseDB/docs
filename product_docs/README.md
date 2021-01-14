__!!! THIS README IS COMPLETELY BOGUS AND NEEDS TO BE UPDATED !!!__

# EDB Docs

![Staging Deployment](https://github.com/rocketinsights/edb_docs/workflows/Deploy%20Develop%20to%20Netlify/badge.svg) - [Staging Link](https://edb-docs-staging.netlify.app/)


![Production Deployment](https://github.com/rocketinsights/edb_docs/workflows/Deploy%20Master%20to%20Netlify/badge.svg) - [Production Link](https://edb-docs.netlify.app/)

## Setup

1. Clone the repo!
2. (MacOS) Install the [homebrew package manager](https://brew.sh/), if it's not already installed.
3. Install Node.js. We're currently using Node.js version 12. To install this version, first install `nvm` (Node Version Manager). This can be done with (MacOS) `brew install nvm`, followed by `nvm install`. Optionally, you can skip installing `nvm` and install Node.js 12 directly if you prefer.
4. Install yarn and gatsby with `npm i -g gatsby-cli` and `npm i -g yarn`
5. Install all required packages with `yarn`
6. Pull the shared icon files down with `git submodule update --init`
7. Run the site locally with `gatsby develop`. The site should now be running at `http://localhost:8000/`!

## Detailed Setup Guide
If you encounter difficulties using these steps or are a newer developer, please see the [Detailed Setup Guide](https://github.com/EnterpriseDB/docs/commmunity/authoring) for MacOS.

### Resolving issues

If you experience errors or other issues with the site, the first step you should take is to run `gatsby clean`, and then try `gatsby develop` again. This clears gatsby cache, and can often resolve issues.

## Icons

We're using the shared [edb-icons repository](https://github.com/rocketinsights/edb-icons) as a git submodule. Any updates to icons should be made in this repository. When you're ready to pull in changes, run `yarn update-icons`. This will create/update `iconNames.js`, `iconType.js`, and pull down the latest icons from the `edb-icons` repo.

## Migrating RST files

See the [wiki](https://github.com/rocketinsights/edb_docs/wiki/RST-Content-Conversion-Process)!
