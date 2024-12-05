# A guide to the schemas of relgen.js

The relgen.js script uses a set of schemas to generate the docs release notes from yaml release notes and meta files. This document provides a guide to the schemas used by the script.

All files should reside in the src directory of the release notes in the docs. The resulting docs will be generated in the same directory as the src directory.

## Per release note: (any file name allowed in src directory)

product: The product name in full - required.
version: The version number of the product - required.
date: The release date of the product - required.
updated: The date the release notes were last updated - optional.
meta: # Meta key values - required if the index uses them (see meta.yml)
    metakey: metavalue # keyvalue pairs for meta.yml
intro: |
  Multi-line string that provides a brief introduction to the release notes. Supports Markdown.
highlights: |
  Short description of the highlights of the release. Supports Markdown. Can use lists for effect.
relnotes: 
- relnote: Short text for the release note entry - required
  component: Component name - required if components is specified in meta.yml
  component_version: Component version - required if components is specified in meta.yml
  details: |
    Optional multi-line string that provides more details about the release note. Supports Markdown.
  jira: Jira number for tracking - not required but recommended - we can make this required
  addresses: String with the issue numbers that this release note addresses. May move to markdown if requested - required as a field, not required to have content.
  type: Type of release note - required. Options are: Feature,  Enhancement, Change, Bug Fix, Deprecation, Security, or Other. Requiered.
  impact: Low - determines sort order within section. Options are Lowest, Low, Medium, High, Highest. Required.
- relnote: ...

## meta.yml

product: Product name in full - required.
shortname: Short name for the product - required (used in file name generation)
title: Title for index page - required
description: Description for the index page
columns: # defines the index page columns by 0 based column number
- 0: # First column
  label: Release Date # Column heading
  key: shortdate # key to use when generatings the column data - shortdate is the date in short format
- 1: # Second column
  label: "EDB Postgres Distributed" # Column heading
  key: version-link # version-link is the version number with link to the releasenote page
- 2: # Third column
  label: "BDR extension" # Column heading
  key: $bdrextension # Taken from the meta.bdrextension value in the release note yaml
- 3: # Fourth column
  label: "PGD CLI" # Column heading
  key: $pgdcli # Taken from the meta.pgdcli value in the release note yaml
- 4: # Fifth column
  label: "PGD Proxy" # Column heading
  key: $pgdproxy # Taken from the meta.pgdproxy value in the release note yaml
components: [ "BDR", "PGD CLI", "PGD Proxy", "Utilities" ] # List of valid components for product
intro: |
  Introduction to the release notes. Supports Markdown over multiple lines.
precursor: # An optiona; list of preceding releases which already have release notes. Required if there are preceding releases to be included. Will be appended to the table and navigation. If meta fields are in use, they are required in the precursor list under meta. too.
- version: "23.34.1"
  date:  09 Sep 2024
- version: "23.34"
  date:  22 Aug 2024
- version: "23.33"
  date:  24 Jun 2024
- version: "23.32"
  date:  15 May 2024




