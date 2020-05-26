## Setup
1. This project uses `nvm` to manage the node version. You should install the correct node version with `nvm install`.
2. Install yarn and gatsby with `npm i -g gatsby-cli` and `npm i -g yarn`
3. Install all the bits and bobs with `yarn`
4. Run the site locally with `gatsby develop`

## Deployment
Deploy the site to GH Pages with `yarn run deploy`

## Migrating RST files
To migrate RST files, place the folder in a new `content` folder and run this script in the terminal
`for i in content/**/*.rst ; do python3 scripts/pre_pandoc_script.py ${i%}; echo "$i" && pandoc --wrap=none $i -f rst -t gfm -o ${i%.*}.mdx ; done ; python3 scripts/post_pandoc_script.py`

The results will show up in the `content_build` folder. These can then be moved to the `docs` folder.

The folder structure in docs is `{product}/{version number}/{content folder}`. If there is no version involved, just make it "1"
# edb_docs_advocacy
