---
title: Name and Version Expression Replacement Syntax examples
description: Name and Version Expression Replacement Syntax v1.0.1 provides functionality for replacing simple expressions representing product names and versions
product: Name and Version Expression Replacement Syntax
version: 1.0.1
url: https://www.enterprisedb.com/docs/playground/1/01_examples/expression-replacement/
lastModified: 2026-10-27T02:23:35Z
---

# Name and Version Expression Replacement Syntax examples

This functionality allows for writing documentation when the future (or current) name of a product is subject to change. It is based on the metadata in `src/constants/products.js` combined with product names and versions (defined via either filesystem or frontmatter) and allows multiple forms of a product name as well as transformations of semantic version numbers.

## Example products.js data definition

```javascript
"Expression Replacement": {
  name: "Name and Version Expression Replacement Syntax",
  shortName: "Expression Replacement",
  abbreviation: "ExpRel",
  commonCommandName: "{{name().type}}",
}
```

## Examples of invocation

| Expression                                        | Replacement                                    | Source                                                                                            |
| ------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `\{{name.ln}}`                                    | Name and Version Expression Replacement Syntax | product definition - `.name`                                                                      |
| `\{{name.short}}`                                 | Expression Replacement                         | product definition - `.shortName`                                                                 |
| `\{{name.abbr}}`                                  | ExpRel                                         | product definition - `.abbreviation`                                                              |
| `\{{name.ccn}}`                                   | {{name(prod).type}}                            | product definition - `.commonCommandName`                                                         |
| `\{{name(pgd).short}}`                            | EDB Postgres Distributed                       | PGD product definition - `.shortName`                                                             |
| `\{{version.full}}`                               | 1.0.1                                          | frontmatter - `version:`                                                                          |
| `\{{version(pgd).short}}`                         | 6.5                                            | filesystem directory version for latest product version                                           |
| `\{{version(pgd).major}}.\{{version(pgd).minor}}` | 6.5                                            | frontmatter - `version:` for latest product version. Parsed as semver, truncated at minor version |

## Scope of Expression Replacement

Expressions should be parsed in all Markdown elements containing rendered content, including code blocks and inline code. Frontmatter-sourced version information is not currently available in code.

Replacements in headings and code (inline and block) are currently limited as follows:

- version replacement cannot use frontmatter-sourced "precise" version or frontmatter-sourced product shortcode to determine context
- product replacement cannot use frontmatter-sourced product shortcode

This effectively means that subsitution will not function in these contexts for "non-versioned" products unless the product shortcode is specified explicitly. E.g., `\{{name(product).ln}}`

Additionally, expressions will be replaced in certain frontmatter-defined values; initially, these include "title", "navTitle", "description" and "displayBanner".

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
