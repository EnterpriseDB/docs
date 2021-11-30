# Install Docs Templates

This script allows the generation of product instalation docs for many different product versions and platforms with a minimum of duplicated copy. [Nunjucks](https://mozilla.github.io/nunjucks/) is used as our templating engine.

## Quick Start

The following commands can be run from the Docs project directory.

- `npm run install-docs:build` — Renders the templates and generates the final install doc files.
- `npm run install-docs:rebuild-docker-container` — Rebuilds the docker container used to render templates.

## Configuration

The docs to be generated are defined in `config.yaml`. This file lists out all of the products to generate docs for, the platforms that product supports, and the supported versions for each platform.

When generating docs, this script will look for templates in `templates/products/[product-name]/`, where product name is all lower case, and spaces have been replaced with dashes. It will look for template files with names in the format below. It will use the first template found in the order below:

1. `v{product version}_{platform name}_{platform architecture}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `v13_centos-7_x86_64.njk`

1. `v{product version}_{platform name}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `v13_centos-7.njk`

1. `{platform name}_{platform architecture}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `centos-7_x86_64.njk`

1. `{platform name}.njk`
   e.g. for EDB postgres advanced server 13 on centos 7 for x86_64, it would check for a file called `centos-7.njk`

## Writing Templates

We are using Nunjucks as the templating engine, which is a javascript implementation of Jinja.

- [Nunjucks templating documentation](https://mozilla.github.io/nunjucks/templating.html)
- [Jinja templating documentation](https://jinja.palletsprojects.com/en/3.0.x/templates/) — most of this applies to nunjucks as well, and it is more detailed

Context based on the config will be passed in automatically. The following can be accessed from within templates:

- `product.name` — the name of the product we are rendering a template for. e.g. "EDB Postgres Advanced Server"
- `product.version` — the version of the product we are rendering a template for. e.g. "13"
- `platform.name` — the name of the platform we are rendering a template for. e.g. "CentOS 8"
- `platform.arch` — the architecture of the platform we are rendering a template for. e.g. "x86_64"

### Template Structure

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
