---
title: Link tests in a default (index) file
product: Playground
url: https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/
lastModified: 2021-01-25T06:56:14Z
---

# Link tests in a default (index) file

## Expected behavior base paths correspond to default file & end without slash

**Base path:** /playground/1/01\_examples/link-tests

| Relative path                                                                                   | Result                               |
| ----------------------------------------------------------------------------------------------- | ------------------------------------ |
| [link](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link/)             | /playground/1/01\_examples/link      |
| [./link](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link/)           | /playground/1/01\_examples/link      |
| [../link](https://www.enterprisedb.com/docs/playground/1/01_examples/link/)                     | /playground/1/link                   |
| [.#links](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/#links)         | /playground/1/01\_examples/#links    |
| [./#links](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/#links)        | /playground/1/01\_examples/#links    |
| [../#links](https://www.enterprisedb.com/docs/playground/1/01_examples/#links)                  | /playground/1/#links                 |
| [./..#links](https://www.enterprisedb.com/docs/playground/1/01_examples/#links)                 | /playground/1/#links                 |
| [./../#links](https://www.enterprisedb.com/docs/playground/1/01_examples/#links)                | /playground/1/#links                 |
| [../..#links](https://www.enterprisedb.com/docs/playground/1/#links)                            | /playground/#links                   |
| [../../#links](https://www.enterprisedb.com/docs/playground/1/#links)                           | /playground/#links                   |
| [link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link-test/)   | /playground/1/01\_examples/link-test |
| [./link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link-test/) | /playground/1/01\_examples/link-test |
| [../link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-test/)           | /playground/1/link-test              |
| [./../link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-test/)         | /playground/1/link-test              |
| [../../link-test](https://www.enterprisedb.com/docs/playground/1/link-test/)                    | /playground/link-test                |

## Expected behavior base paths correspond to default file & end with slash

_this is the **desired** behavior for our link rewriters - it matches what one would
expect if there were no alterations to the original filesystem (i.e., path ended in index.mdx)_

**Base path:** /playground/1/01\_examples/link-tests/

| Relative path                                                                                   | Result                                          |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [link](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link/)             | /playground/1/01\_examples/link-tests/link      |
| [./link](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link/)           | /playground/1/01\_examples/link-tests/link      |
| [../link](https://www.enterprisedb.com/docs/playground/1/01_examples/link/)                     | /playground/1/01\_examples/link                 |
| [.#links](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/#links)         | /playground/1/01\_examples/link-tests/#links    |
| [./#links](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/#links)        | /playground/1/01\_examples/link-tests/#links    |
| [../#links](https://www.enterprisedb.com/docs/playground/1/01_examples/#links)                  | /playground/1/01\_examples/#links               |
| [./..#links](https://www.enterprisedb.com/docs/playground/1/01_examples/#links)                 | /playground/1/01\_examples/#links               |
| [./../#links](https://www.enterprisedb.com/docs/playground/1/01_examples/#links)                | /playground/1/01\_examples/#links               |
| [../..#links](https://www.enterprisedb.com/docs/playground/1/#links)                            | /playground/1/#links                            |
| [../../#links](https://www.enterprisedb.com/docs/playground/1/#links)                           | /playground/1/#links                            |
| [link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link-test/)   | /playground/1/01\_examples/link-tests/link-test |
| [./link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link-test/) | /playground/1/01\_examples/link-tests/link-test |
| [../link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-test/)           | /playground/1/01\_examples/link-test            |
| [./../link-test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-test/)         | /playground/1/01\_examples/link-test            |
| [../../link-test](https://www.enterprisedb.com/docs/playground/1/link-test/)                    | /playground/1/link-test                         |

(see (link-tests)\[/playground/1/01\_examples/link-test/] for how these work with named (non-index) files)

- [Link](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/link/): You made it here!

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
