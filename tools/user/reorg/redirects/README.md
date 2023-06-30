# Create redirects from branch renames

This utility will examine the current branch and a base branch (origin/develop 
by default), creating redirects for each rename in the renamed file. 

Redirects are generated using relative paths; this avoids potential issues with 
versioning in the future (and also means I don't need to worry about which version 
is "latest" when that might easily be *different* between a branch and its base).

Currently this script will examine *all* renamed files and potentially touch *every* 
MDX file; it's entirely on you to keep changes in your branches reasonably scoped.

## Example

You've renamed the file `product_docs/docs/epas/15/epas_compat_ora_dev_guide/06_dblink_ora/01_dblink_ora_functions_and_procedures/index.mdx` to `product_docs/docs/epas/15/working_with_oracle_data/06_dblink_ora/01_dblink_ora_functions_and_procedures/index.mdx` and committed this change to a new branch named `docs/epas/movin` created from develop. 

You run,

```sh
node tools/user/reorg/redirects/renames-to-redirects.js
```

The script adds the following to `index.mdx`

```yaml
redirects:
  - ../../../epas_compat_ora_dev_guide/06_dblink_ora/01_dblink_ora_functions_and_procedures #generated for docs/epas/movin
```

## Example #2: you forgot to run the script before you merged

Same scenario as above, except you already merged your branch into develop. Oops!

No problem - find the SHA for the last commit *before* your merge and pass that to the script:

```sh
node tools/user/reorg/redirects/renames-to-redirects.js 4993f3c9e
```

Redirects will be generated based on the differences between HEAD and the revision you specified.

