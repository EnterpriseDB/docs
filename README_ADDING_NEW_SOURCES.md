# Adding New Sources

## 1. Choose Source Type

The first step to get a new doc source integrated into the app is to determine which source type fits your data best.

### Advocacy Docs
Advocacy Docs are tutorial content, getting-started material, and anything that is about a subject matter area, but not explicitly tied to a product version.

### Product Docs
Product Docs are versioned documentation for products. They follow a slightly stricter file structure to allow for version switching and other features.

### GitHub Docs
GitHub Docs are a relatively low-touch way to display markdown content from GitHub. These docs are intended to link back to the relevant GitHub url on each page, in order to provide any missing context.

### Summary Table

| Source Type   | Sourcing        | Versioned | External ** | Location
|---------------|-----------------|-----------|-------------|-------------
| Advocacy Docs | always loaded * | no        | no          | `advocacy_docs`
| Product Docs  | configurable    | yes       | no          | `product_docs/docs`
| GitHub Docs   | configurable    | no        | yes         | `external_sources` ***

\* While Advocacy Docs are currently always loaded, this could be changed in the future as needed

\** While currently only GitHub Docs are external, this is because no external docs currently conform to a structure that could be easily used as a Product Doc. As needed, we will add support for external Product Docs.

\*** This will likely change, as it is intended that Product Docs could be optionally external in the future as well.

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

```/product_docs/docs/[PRODUCT_SOURCE_NAME]/[VERSION_NUMBER]/...```

Once you're within the versioned directory, things should be structured like other source types.

### External Sources

If a doc is being sourced externally, it may not necessarilly be in the correct format that Gatsby expects. If you're adding an external source, see ***External Sources*** in the next section.

## 3. Update Sourcing Process

If your new doc is a Product Doc or a GitHub Doc, you will need to update the sourcing process, as these source types are configurable. You can skip this section if you're adding a standard internal Advocacy Doc.

### `config_sources.py`

This is the script that is run when a user runs `yarn config-sources`. It will need to be edited to present your new option to the user, and to write the source name to `dev-sources.json`. **This source name should match the top level folder name for your doc!**

If you're adding a Product Doc, you'll want to add your source name to `PRODUCT_DOCS`. If you're adding a GitHub Doc, you'll add your source name to `BASE_OUTPUT` directly.

Next, you'll need to add your source to `OPTIONS`. New Product Docs should be inserted at the end of the current product doc listings, and new GitHub Docs should be added at the end of `OPTIONS`. If your doc is sourced externally, be sure to set the `external: True` option.

Once you've made your changes, run `yarn config-sources` and confirm that the output in `dev-sources.json` is as expected.

### `gatsby-config.js`

Once `dev-sources.json` looks as expected, you'll need to update `gatsby-config.js` to tell gatsby to load your source. To do this, you need to update `sourceToPluginConfig` with your source name and path.

### `build-sources.json`

This file must be updated with your source if you intend for it to be deployed to a server. This file shares the same structure with `dev-sources.json`, only it is used to determine which sources to load on a full build of the site.

### `dev-sources.sample`

This sample file should also be updated with your new source key, for those who may be manually configuring their sources.

### Other Files

#### `gatsby-node.js`

If the source requires something different than previous sources have, or if there is something different about your source that we have not previously supported, it is likely some changes will need to be made in `gatsby-node.js`.

### External Sources

If you are bringing in an external source, you will need to write scripts that download your source, and convert it to the necessary format for your chosen source type. This will require creating `source_[SOURCE_NAME].py` script in `scripts/source`, and connecting it to `pull_sources.py`. Your sourcing script needs to accomplish everything necessary for Gatsby to load the files successfully, including format translation and any other necessary changes.

## 4. Update the Index Navigation

The navigation links on the side of the index page will need to be updated to link to your new source. Within `src/constants/index-navigation.js`, you'll need to edit the `rawIndexNavigation` json to add your source. The structure should be fairly apparent. If your source is configurable (IE it's not an Advocacy Doc), you should set the `source` key equal to whatever your source name is. This will tell Gatsby to only should this link if your source is loaded.

## 5. You're Hopefully Done!

At this point, you should have your new source integrated in the site!

