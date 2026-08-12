# Instructions for updating the PEM REST API

1. Checkout your version release branch
2. Make sure the version frontmatter in the root index of the PEM docs to be updated reflects the version of PEM to be released, e.g. product_docs/docs/pem/10/index.mdx would contain:
   ```
   directoryDefaults:
     version: "10.5"
   ```
1. from the root of the docs repo, run `npm --prefix ./tools/user/import/pem-api install`
2. run node ./tools/user/import/pem-api 
3. Examine the generated files, commit, push
