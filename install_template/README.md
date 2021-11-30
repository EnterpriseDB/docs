<<<<<<< HEAD
# Install Docs Templates

This script allows the generation of product instalation docs for many different product versions and platforms with a minimum of duplicated copy. [Nunjucks](https://mozilla.github.io/nunjucks/) is used as our templating engine.

## Quick Start

The following commands can be run from the Docs project directory.

- `npm run install-docs:build` — Renders the templates and generates the final install doc files.
- `npm run install-docs:rebuild-docker-container` — Rebuilds the docker container used to render templates.
=======
# Parameterize Docs (Nunjucks ed.)

A prototype exploring the use of [Nunjucks](https://mozilla.github.io/nunjucks/) to generate product instalation docs for many different product versions and platforms with a minimum of duplicated copy

## Quick Start

install dependencies

```sh
npm install
```

run the main script

```sh
node main.mjs
```
>>>>>>> 58e8f9cb6... feat: initial consolidation of templatized install into docs repo

## Configuration

The docs to be generated are defined in `config.yaml`. This file lists out all of the products to generate docs for, the platforms that product supports, and the supported versions for each platform.

<<<<<<< HEAD
When generating docs, this script will look for templates in `templates/products/[product-name]/`, where product name is all lower case, and spaces have been replaced with dashes. It will look for template files with names in the format below. It will use the first template found in the order below:
=======
When generating docs, `main.mjs` will look for templates in `templates/products/[product-name]/`, where product name is all lower case, and spaces have been replaced with dashes. It will look for template files with names in the format below. It will use the first template found in the order below:
>>>>>>> 58e8f9cb6... feat: initial consolidation of templatized install into docs repo

1. `v{product version}_{platform name}_{platform architecture}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `v13_centos-7_x86_64.njk`

1. `v{product version}_{platform name}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `v13_centos-7.njk`

1. `{platform name}_{platform architecture}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `centos-7_x86_64.njk`

1. `{platform name}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `centos-7.njk`

## Writing Templates

<<<<<<< HEAD
We are using Nunjucks as the templating engine, which is a javascript implementation of Jinja.
=======
We are using Nunjucks as the templating language, which is a javascript implementation of Jinja.
>>>>>>> 58e8f9cb6... feat: initial consolidation of templatized install into docs repo

- [Nunjucks templating documentation](https://mozilla.github.io/nunjucks/templating.html)
- [Jinja templating documentation](https://jinja.palletsprojects.com/en/3.0.x/templates/) — most of this applies to nunjucks as well, and it is more detailed

Context based on the config will be passed in automatically. The following can be accessed from within templates:

- `product.name` — the name of the product we are rendering a template for. e.g. "EDB Postgres Advanced Server"
- `product.version` — the version of the product we are rendering a template for. e.g. "13"
- `platform.name` — the name of the platform we are rendering a template for. e.g. "CentOS 8"
- `platform.arch` — the architecture of the platform we are rendering a template for. e.g. "x86_64"

<<<<<<< HEAD
### Template Structure
=======
### Example Template Structure
>>>>>>> 58e8f9cb6... feat: initial consolidation of templatized install into docs repo

After a template file is found, no rules are enforced on how that template should behave. That said, templates for EPAS docs have already been created and a general structure has been provided as an example of how future templates could be implemented. Here is an overview of how these templates are currently working

#### `/templates/platformBase/base.njk`

- All templates ultimitaly should inherit from this file. This is a good place to write copy that needs to be shared by all docs, regardless of the product being installed
- 3 blocks are currently available:
  - `prerequisites` — This is where information like adding EDB repos will go
  - `installCommand` — This is where the command to actually install the product will go
  - `postinstall` — This is where commands like starting the EPAS server will go

#### `/templates/platformBase/[platform name].njk`

- These files are largely reposible for setting up the `prerequisites` and `installCommand` blocks
- Currently, they rely on a `packageName` macro to be set by a child template. This macro is being used in the `installCommand` block.
- You will notice there are no Ubuntu templates in the platformBase folder. This is because install instructions were the same as Debian 10, and so only the `debian-10.njk` file was created to reduce duplication. If Ubuntu specific instructions are needed, new template files could be created which inherit from `debian-10.njk`.
- The `centos-7.njk` template contains a conditional to include ppc64le specific instructions. To display these instructions, add `{% set includePPC = true %}` to a child template

#### `/templates/products/edb-postgres-advanced-server/base.njk`

- All EPAS templates inherit from this file at some point. This is a good place to store copy which is shared by all EPAS docs.
- This template will choose a `platformBase` template to inherit from based on the value of `platformBaseTemplate`, which must be set by a child template.
- the `packageName` macro used by the `platformBase` templates can be found in this template
- a `postinstall` block containing copy shared by all of the EPAS docs can be found here. That said, this block is extended by some child templates.
<<<<<<< HEAD

### Template techniques

Nunjucks offers many tools that we can use to minimize repetition and increase the readability of templates. Which to use depends on circumstances.

#### Placeholder blocks

[Template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) is our primary method to structure templates. If we know that a bit of text only appears in a certain subset of rendered documentation, we can use an empty placeholder block to define where that text goes. Then in the appropriate child template, we can override the placeholder block.

Note that the definition should be filled in at the most general template possible. So if a block is specific to, say, BDR, we should include the definition in the BDR product template. Or, if the block is specific to a single version of RHEL, it would be defined in that version's template. It's also possible, to redefine a placeholder block again if there is an exception to the exception. You can even revert back to an empty block, if needed.

Placeholder blocks are convenient and self-documenting, but they do depend on having the right inheritance structure in place. It's sometimes necessary to add a level of inheritance to create the appropriate abstraction layers. If you find yourself repeating the same block customization, you should evaluate whether the inheritance structure is right. Alternatively, you might need to use another technique.

#### Include other templates

When there are pieces of text that need to be repeated, but don't have a place in the existing structure, consider using [the `include` tag](https://mozilla.github.io/nunjucks/templating.html#include). For instance, we might want to includes a disclaimer for platforms nearing the end of our support cycle. Rather than repeat that warning in each affected template, we could put the text in a new template that we include when needed.

In Nunjucks, `include` doesn't work like a pre-processor (inserting code before rendering). Instead, included templates are rendered and the results are inserted. That means you can't use `include` to override a block in the calling template and blocks defined in the calling template aren't visible to the included template. Included templates should be considered self-contained snippets.

#### Macros

Sometimes a chunk of text varies only by a few discrete variables. In that case, a [macro](https://mozilla.github.io/nunjucks/templating.html#macro) might be in order. We currently have two macros in `/templates/platformBase/_shared.njk`:

1. `centosRepositoryConfiguration(packageManager, epelRepo)`
2. `centosInstallCommand(packageManager, packageName)`

When that file is [imported](https://mozilla.github.io/nunjucks/templating.html#import) (not included) in another template, those macros can be used to insert the proper instructions for configuring the repository and installing the package. By using a few variables (`packageManager`, `epelRepo` and `packageName`), we can generate many different combinations of instructions from a single source. 

Macros can be self-documenting and avoid [action-at-a-distance problems](https://en.wikipedia.org/wiki/Action_at_a_distance_(computer_programming)). If you call a macro, it's easier to know what you are going to get in the render.

#### Conditionals

We also use global variables to trigger conditionals:

1. `templates/platformBase/centos-7.njk` uses the value of `includePPC` to determine whether to install [Advance Toolchain](https://github.com/advancetoolchain/advance-toolchain).
2. `templates/platformBase/rhel-7-or-ol-7.njk` uses the value of `includeLOCAL` to trigger an option to create a local repository.

For small template systems, this system works well enough. But as the number of templates increases, this becomes harder to understand. In this case, we need to search through the template files to find out where the variables are being used. Fortunately, they are used just once, but it's not hard to imagine multiple (and exclusive) conditionals that are hard to read, modify and debug.

It's almost always better to use one of the other techniques than fall back on conditionals triggered by global variables.
=======
>>>>>>> 58e8f9cb6... feat: initial consolidation of templatized install into docs repo
