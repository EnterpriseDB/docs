# Algolia Search Overview

This document is a straightforward overview of our search implementation, along with some examples of how I test new search changes.

## How Search is Integrated

### Indexing

The indexing of the docs site happens as the final step in the gatsby build process, and is managed by the `gatsby-plugin-algolia` plugin. This plugin is listed near the bottom of `gatsby-config.js`. The way the plugin works is pretty straightforward - you hand it a GraphQL query (`indexQuery`) and a transformation function, and it will completely rebuild your search index at the end of each gatsby build (if indexing is turned on).

Most of the magic happens in the tranformation function, which is in `constants/algolia-indexing.js`. Essentially the process is as follows...

1. Turn the graphql data into a tree data structure, in order to calculate the inherited frontmatter.
1. Compute the list of "latest" product versions, which is used to determine which page path to give to Algolia.
1. Create the list of algolia search nodes. For each mdx node...
   1. Create an initial search node (`mdxNodeToAlgoliaNode`). This is where most attributes of the search node are set (product, version, paths, etc).
   1. Process the MDX abstract syntax tree in order to create a list of natural excerpts. We aim to create a separate search node for each "section" of the document, broken up by headers.
   1. For each "section", clone the search node, and add the appropriate excerpt to it.
1. Return the final list of search nodes. This will become the new search index.

Each time we index, the old index data is completely replaced by the new index data.

### Client-Side (Actually searching)

The actual search queries are handled by the `algoliasearch` and `react-instantsearch-dom` packages. See the [react-instantsearch docs](https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/) for more info on this client side library.

We have three separate search experiences - the quick search (`components/search`), the advanced search (`pages/search.js`), and the 404 page search (`pages/404.js`). The components for each are mostly separated, and each search experience is a little bit different.

## Making Changes to the Search Index

### Using the Test Index Locally

There is an algolia index setup specificially for testing index changes called `edb-docs-test`. If you want to use this index locally, you can set the environment variable `ALGOLIA_INDEX_NAME` to `edb-docs-test`. I strongly recommend testing any index changes locally using this index.

The `edb-docs-test.netlify.app` environment also uses this index. This environment can be handy to show others the changes you've made.

To enable indexing locally, set `INDEX_ON_BUILD=true` when you run `npm run build`.

### Example: Add a New Field

Say for example we have a new frontmatter field `downloadable`, and we want to have that be a filterable attribute in advanced search. To add this data to the search nodes we need to...

1. Update the `indexQuery` in `gatsby-config.js` to pull in `downloadable` as part of the frontmatter.
1. Update `mdxNodeToAlgoliaNode` in `algolia-indexing.js` to set `newNode.downloadble` to this value.

...and that should give Algolia the data it needs. To have Algolia make `downloadable` facetable, we need to update the "Attributes for faceting" in the "Facets" section of the index settings in the Algolia UI.

Once this is done, we then need to update the advanced search page to display the facet. I won't get too into the details, but you would want to update `components/advanced-search/filtering.js` to show a refinement component that controls the facet. We have a custom component called `RadioRefinement` for our existing facets, but if a new component is needed, it can be created using the appropriate [react-instantsearch's connector API](https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/#connector).

### Configuring Algolia

Lots of options can be configured in Algolia to influence the search behavior. Here are the options we've changed from defaults at the time of writing...

- **Searchable attributes:** Choose which attributes are searched, and the order that they're prioritized/considered in.
- **Facets:** Set which attributes are filterable. This powers the filters for the advanced search page.
- **Snippeting:** Creates the excerpt snippet that is displayed in search results.
- **Deduplication:** We're dedupping all search results by `pagePath`.
- **Advanced Syntax:** This enables search queries to use quotes for exact matching, and `-` to exclude terms.

I expect in the future we will want to tune the results more using the settings under **Relevance Essentials/Optimizations**.
