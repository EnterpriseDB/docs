# Adding New Sources

## 1. Choose Source Type

The first step to get a new doc source integrated into the app is to determine which source type fits your data best.

### Advocacy Docs

Advocacy Docs are tutorial content, getting-started material, and anything that is about a subject matter area, but not explicitly tied to a product version.

### Product Docs

Product Docs are versioned documentation for products. They follow a slightly stricter file structure to allow for version switching and other features.

### Summary Table

| Source Type   | Sourcing         | Versioned | Location            |
| ------------- | ---------------- | --------- | ------------------- |
| Advocacy Docs | always loaded \* | no        | `advocacy_docs`     |
| Product Docs  | configurable     | yes       | `product_docs/docs` |

\* While Advocacy Docs are currently always loaded, this could be changed in the future as needed

## 2. Structure the Markdown Files

In general, the best way to get a sense of the required file/folder structure will be to look at existing examples. However, here is a brief overview of what is required for each source type.

### All Source Types

#### Markdown

Markdown files must have the `.mdx` extension, which allows optional Javascript templating with the the file. If a file is just `.md` or `.markdown`, it will not be loaded.

All markdown files loaded must have a yaml frontmatter section, with at minumum a `title` set.

#### Folders

Folders must contain an `index.mdx` file, which will be the content used when users view the root of this directory.

If there are multiple folders in the same directory, they should be prefixed with a number, IE `01_installation`, `02_getting_started`, etc. This is not strictly required, but can be used for sorting and ordering.

### Product Docs

Product Docs must confirm to a specific folder structing to enable version switching and other product doc specific features.

`/product_docs/docs/[PRODUCT_SOURCE_NAME]/[VERSION_NUMBER]/...`

Once you're within the versioned directory, things should be structured like other source types.

## 3. Update Sourcing Process

If your new doc is a Product Doc, you will need to update the sourcing process, as this source type is configurable. You can skip this section if you're adding a standard Advocacy Doc.

### `config_sources.py`

This is the script that is run when a user runs `npm run config-sources`. It will need to be edited to present your new option to the user, and to write the source name to `dev-sources.json`. **This source name should match the top level folder name for your doc!**

If you're adding a Product Doc, you'll want to add your source name to `PRODUCT_DOCS`. Next, you'll need to add your source to `OPTIONS`. New Product Docs should be inserted at the end of the current product doc listings.

Once you've made your changes, run `npm run config-sources` and confirm that the output in `dev-sources.json` is as expected.

### `gatsby-config.js`

Once `dev-sources.json` looks as expected, you'll need to update `gatsby-config.js` to tell gatsby to load your source. To do this, you need to update `sourceToPluginConfig` with your source name and path.

### `build-sources.json`

This file must be updated with your source if you intend for it to be deployed to a server. This file shares the same structure with `dev-sources.json`, only it is used to determine which sources to load on a full build of the site.

### `dev-sources.sample`

This sample file should also be updated with your new source key, for those who may be manually configuring their sources.

### Other Files

#### `gatsby-node.js`

If the source requires something different than previous sources have, or if there is something different about your source that we have not previously supported, it is likely some changes will need to be made in `gatsby-node.js`.

### 4. You're Hopefully Done!

At this point, you should have your new source integrated in the site!
