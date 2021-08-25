# Legacy Redirects Overview

"Legacy redirects" are the redirects set up from the Docs 1.0 site (/edb-docs), to the Docs 2.0 site (/docs). While our system handles creating the redirect mapping, the actual redirects ultimately get served by the nginx server that hosts Docs 1.0.

Our legacy redirects system consists of three different pieces.

## The Spider

Within `scripts/legacy_redirects`, we have a Scrapy project. Scrapy is a python program for creating web scrapers, spiders, etc. Our Scrapy project is called `legacy`, and only consists of a single spider. This will spider the legacy Docs 1.0 website, and extract url, title, path, and some navigation data.

Since we have already launched some legacy redirects, and new content shouldn't be going up to the Docs 1.0 site, I don't expect we'll need to scrape the site again. But if we need to add more data to the scraped output to support older docs (more on that later), we might need to modify the spider, and scrape the site again.

To run the spider, you need to install Scrapy. With Scrapy installed, from within the `scripts/legacy_redirects/scrapy_spider/legacy` directory, run `scrapy crawl legacy_docs -o output.json`. This will boot up the spider and start dumping JSON output into `output.json`.

If you want to use this new output for redirects, you need to move it to `scripts/legacy_redirects/legacy_docs_scrape.json`.

## `add_legacy_redirects.py`

This script looks at `legacy_docs_scrape.json` and the files in the `product_docs` directory, and attempts to write a list of redirects into `legacyRedirectsGenerated` frontmatter for each document. To help do this work, it will also use the `legacy_redirects_metadata.json` file to help map legacy urls to folders in `product_docs`.

When you run this script, the `legacyRedirectsGenerated` frontmatter for every file will be recalculated. Any manual legacy redirects you want to add should be added under `legacyRedirects`, which are untouched by this script.

### Url Style ("new" vs "old")

Currently, the script only handles "new" style urls. I have done some initial work on mapping "old" style urls (which are used for older product version), but they are trickier.

Example of a "new" style url (EPAS 13) - `/edb-docs/d/edb-postgres-advanced-server/user-guides/ecpgplus-guide/13/using_embedded_sql.html`

Example of an "old" style url (EPAS 12) - `/edb-docs/d/edb-postgres-advanced-server/installation-getting-started/installation-guide-for-linux/12/EDB_Postgres_Advanced_Server_Installation_Guide_Linux.1.07.html#pID0E0KN0HA`

The biggest difference is most urls in the "old" style do not contain the name of the file in the url, making them much more challenging to map. My initial work uses headers to attempt to make matches.

## `npm run build-legacy-redirects-nginx`

The final piece is actually generating the nginx configuration to handle these redirects. This is done with the `npm run build-legacy-redirects-nginx` script. All this is doing is a clean build of the site, then running `scripts/legacy_redirects/clean_up_output.py` to remove non-legacy redirects from the output file. The file generation is handled by the `gatsby-plugin-nginx-redirect` plugin, which you can see in `gatsby-config.js`.

Once this process completes, the new nginx configuration file should be at `static/nginx_redirects.generated`. This file should be inspected, and then handed to Mark Yeatman on the IT team to add to the server configuration.
