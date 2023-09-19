# Docs repository product version forking strategy

## Version forking in brief

"Forking" is currently (and traditionally) our strategy for handling product versions in the documentation for EDB products. In short, "forking" means that when a new (major) version of a product is released, a new set of documentation is released along with it, based on the documentation for the previous version but with updates to reflect the changes present in the new version of the product.

For example: when EDB Postgres Advanced Server 14 was released, a new version of the documentation was created in this repo at product_docs/docs/epas/14/ - this was based on the documentation at product_docs/docs/epas/13/, but contains several key differences.

There are other strategies for handling product versioning in documentation, but forking is the one we've used for most of EDB's history. Of particular interest is the contrast with the approach used by PGDG for the PostgreSQL documentation, which maintains a branch for each major release that can be updated both independently and also allows for backporting corrections from the latest release into past versions.

## The problems with forked versions

There are quite a few tradeoffs between various versioning strategies for documentation, but our current approach suffers from two major flaws:

1. **It is difficult to share concurrent changes between versions.** There are many cases where a change should be made to documentation for more than one product version:

- Errors present in more than one version should ideally be corrected in all of them.
- Structural changes made to facilitate navigation or comprehension should be applied consistently.
- Updates to the product itself in one version will likely need to be noted for subsequent versions as well if they affect how the product can be used. In many cases, a minor version update will be backported to previous versions of a product and such changes should also be reflected in the documentation.
- Work must begin on a new version's documentation while major updates are still expected for the last version's documentation; in some cases, documentation for new features in one version will not be complete before the documentation must be forked.

In all of these cases, changes must be manually copied from one subtree to another. While there are tools to make this somewhat easier, it remains a tedious and error-prone process.

2. **Past version control history is lost when files are copied**. Technically, git does offer copy detection... But it is slow and doesn't always work. By default, tools like `git log` and `git blame` don't use it. Thus, practically speaking, it is difficult to trace back to the origin of a change after a file has been forked. Over multiple releases, the context for most changes slowly disappears from view - thus negating much of the value of using source control!

The forking strategy outlined below _partially_ mitigates these problems.

## Our forking strategy

We recognize that the critical period for changes comes between the time when work has started on documentation for the next major version of a product and the time when that version has been released. During this period, work is split between the two versions - the current latest (_vLatest_) and the yet-to-be-released next version (_vNext_). Prior to the start of this period, most work on product documentation will focus on _vLatest_; after the end of this period, _vNext_ has **become** _vLatest_ and work continues to focus primarily on _vLatest_.

Therefore, our strategy aims to minimize unnecessary differences between the two sets of documentation.

### Initializing the branch

When work is begun on the next version of a product, [a long-lived future release documentation branch](branch-and-release.md#future-release-documentation) should be created. All changes _specific to the next version_ should be made in this branch (either directly, or via PRs that are merged into it). Changes that apply to both _vLatest_ and _vNext_ should be made to _vLatest_ - once merged, the _vNext_ branch can be rebased to incorporate them. For this to be possible, the branch should be initialized by **renaming** the _vNext_ subdirectory and then **restoring** the current _vNext_ subdirectory prior to merging - essentially a variation on [Robert Pollak's technique for tracking copies](https://stackoverflow.com/questions/1043388/record-file-copy-operation-with-git/46484848#46484848), with an extended delay between steps \#2 and \#3 where all the work happens.

1. Create the new branch
2. _Rename_ the subdirectory corresponding to the latest version of the product to reflect the new version. (e.g., `git mv product_docs/docs/epas/14/ product_docs/docs/epas/15/`)
3. Commit the version rename to the branch and push to the docs repo. (e.g., `git commit -m "begin fork of epas 15 docs"`)
4. Create a PR for the branch in which you note the purpose and provide instructions as follows (replace all placeholders that appear in square brackets):

   > # Documentation for [Product] [vNext]
   >
   > This is a future release branch - specific instructions must be followed when merging, [see below](#merging-this-branch).
   > **This branch shall not be merged until [Product] [vNext] is released!**
   >
   > Please use this branch _only_ for changes specific to version [vNext] -
   > changes and corrections that apply to [vLatest] should be made in short-lived
   > branches that can be merged into develop and released promptly.
   >
   > ## Working on this branch
   >
   > Other people may be editing and altering this branch. Be sure to pull latest before
   > beginning work - and be aware that this branch may be rebased on a regular basis to
   > incorporate changes from the previous version. We recommend using `git pull --rebase` or
   > setting `pull.rebase` to `true` in git config to avoid mistakes,
   > e.g. run `git config pull.rebase true` on your local clone.
   >
   > This branch will live for months, but try to merge and delete your branches within hours or days.
   >
   > For changes that need review or feedback, create a branch based on this branch and
   > request feedback on a PR before merging your changes into this branch. See:
   >
   > Please use descriptive messages and comments for your commits and PRs - this allows
   > other people working on this PR to see at a glance what is changing.
   >
   > Good: "updated version to 15 in index.mdx" / "correct misspelled option in CLI reference"
   > Bad: "updated index.mdx" / "fixed typos"
   >
   > ## Incorporating [vLatest] updates
   >
   > To bring in applicable changes that have been made to [Product] [vLatest], rebase
   > this branch against develop and force-push. Be sure to review changes for areas
   > that should be updated for [vNext]. When resolving conflicts, defer to [vLatest]
   > except when changes in this branch are necessary to support [vNext].
   >
   > ## Merging this branch
   >
   > When [Product] [vNext] is released, follow this procedure to complete the separation of
   > documenation for [vLatest] and [vNext]:
   >
   > 1. Rebase one last time (see above)
   > 2. Bring the [vLatest] subdirectory back into the source tree:
   >    ```
   >    git checkout develop product_docs/docs/[product]/[vLatest]/
   >    git commit -m "restore [product] [vLatest] docs"
   >    git push
   >    ```
   > 3. Immediately merge this branch into develop.

5. Ensure all contributors are made aware of the branch and have read the instructions for use.

### Merging the branch

When the time comes to merge, follow the instructions noted in the template above:

1. Rebase the branch - this ensures that the _vNext_ changes are built on top of the most up-to-date _vLatest_ changes and avoids conflicts when merging.
2. Restore the latest version files by checking them out from the most recent develop branch commit and then committing them on the future branch.
   This ensures that no changes are lost, as when the future branch is merged all unincorporated commits for _vLatest_ will be merged into _vNext_.
3. Merge the branch without delay after step \#2 - any interim commits to _vLatest_ will be lost (from the _vLatest_ directory).

## The downsides of our mitigation

The biggest downside is simply that it only works _before_ the next version of documentation is released - after that, we're back to having to patch each version independently.

A smaller downside is the inability to work on both _vLatest_ and _vNext_ in the same branch. We should try to avoid that anyway,
but it is sometimes useful.
