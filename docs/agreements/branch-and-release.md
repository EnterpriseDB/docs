# Docs Repository Branch and Release Strategies

- [Evergreen Branches](#evergreen-branches)
  - [main](#main)
  - [develop](#develop)
- [Release Process](#release-process)
  - [Preparation](#preparation)
  - [Release](#release)
- [Branching Strategies](#branching-strategies)
  - [Short-lived](#short-lived)
  - [Long-lived](#long-lived)
- [Pull Request Strategies](#pull-request-strategies)
  - [Normal PR](#normal-pr)
  - [Draft PR](#draft-pr)
- [Use Cases](#use-cases)
  - [Hot Fix](#hot-fix)
  - [Bug Fix](#bug-fix)
  - [Feature](#feature)
  - [Add Documentation for Currently Released Product (Or Product
    Version)](#add-documentation-for-currently-released-product-or-product-version)
  - [Future Release Documentation](#future-release-documentation)

## Evergreen Branches

### main

The `main` branch tracks what's currently deployed at
<https://www.enterprisedb.com/docs/>.

### develop

For the most part, `develop` tracks the next release of the `docs` repo.
`develop` is deployed automatically at
<https://edb-docs-staging.netlify.app/docs/>.

The `develop` branch should always be in a deployable state.

## Release Process

### Preparation

1. Make a release branch from `develop`: `release/${today's date}`. E.g.
   `release/2021-02-09`.
1. Create a pull request ("PR") to merge the release branch into `main`.
1. Smoke test the release branch and make adjustments as needed. Ideally you
   shouldn't need to make any new commits to the release branch.

### Release

1. Merge the release PR.
1. Ensure the release is successful.
1. Delete the release branch.
1. Tag `main` with the release date: e.g. `2021-02-09`.

   If there are multiple releases per day, suffix with letters. For example,
   the second release of the day would be `2021-02-09-a`, third release would
   be `2021-02-09-b`, and so on.

   If there is release of a new version of a product with documentation changes, also tag with this format: product/*prod_key*/*version*. See [Format for tags](doc-release-tag-format.md).

1. Merge `main` into `develop`.

## Branching Strategies

Example: Create a `bug/epas/fix-typo` branch from `develop` ("base").

See [Use Cases](#use-cases) for when to use which strategy.

### Short-lived

Ideally, most branches are short-lived from creation to merging into its base
branch. This minimizes potential conflicts and typically allows the branch to
be merged without any fuss.

### Long-lived

In the case of long-lived branches (e.g. future product release branches), it's
up to the person responsible for the branch to keep it up to date with its base
branch. There are couple ways to periodically keep your branch up-to-date (once
a day, or less frequently if the base branch is stable):

- Rebase your branch onto the base branch (preferred).
- Merge the base branch into your branch.

This will ensure that conflicts and surprises are resolved as early in the
branch lifecycle as possible.

## Pull Request Strategies

Each branch that's intended to be deployed at some point needs to be associated
with a PR. If there's a ticket associated with the PR, provide a link to the
ticket at the top of the PR description.

See [Use Cases](#use-cases) for when to use which strategy.

### Normal PR

A normal PR is one that's ready to be reviewed and merged to the base branch.
It requires at least one approval in order to be merged.

Once a PR is approved, anyone can merge it to the base branch.

### Draft PR

A [draft PR][pr-draft] is _not_ ready to be merged to the base branch. However,
it may still be a good idea to solicit work-in-progress reviews.

1. [Convert a PR to draft state][draft state].
1. Once the PR is ready, [remove the "Draft" status and convert it to a normal
   PR][review state].

## Use Cases

### Hot Fix

Stop the presses, something is seriously wrong with
<https://www.enterprisedb.com/docs/>.

- **Base branch**: `main`
- **Branching strategy**: [short-lived][]
- **Branch name**: `hotfix/${my-name}/${issue#}-${short-description}`.
- **PR strategy**: [normal pr][]

#### Steps

1. Create a hot fix branch from `main`.
1. Create a PR to merge into `main`.
1. Review, QA, and approve PR.
1. [Follow the release portion](#release) of the release process, using the hot
   fix branch as the release branch.


### Bug Fix

- **Base branch**: `develop`
- **Branching strategy**: [short-lived][]
- **Branch name**: `bugfix/${my-name}/${issue#}-${short-description}`.
- **PR strategy**: [normal pr][]

### Feature

- **Base branch**: `develop`
- **Branching strategy**: [short-lived][] or [long-lived][]
- **Branch name**: `feature/${my-name}/${issue#}-${short-description}`.
- **PR strategy**: [normal pr][] or [draft pr][]

### Add Documentation for Currently Released Product (Or Product Version)

- **Base branch**: `develop`
- **Branching strategy**: [short-lived][] or [long-lived][]
- **Branch name**:
  `docs/${product-name}/${issue#}-${version-number-or-short-description}`.
- **PR strategy**: [normal pr][] or [draft pr][]

### Future Release Documentation

- **Base branch**: `develop`
- **Branching strategy**: [long-lived][]
- **Branch name**:
  `future/${product-name}/${issue#}-${version-number-or-short-description}`.
- **PR strategy**: [draft pr][]

ℹ️ At the top of your PR description, please note when the expected release date
is and keep it up-to-date as the release date changes.

[draft pr]: #draft-pr
[draft state]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft
[long-lived]: #long-lived
[normal pr]: #normal-pr
[pr-draft]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests
[review state]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review
[short-lived]: #short-lived
