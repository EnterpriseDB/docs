# Install Docs Templates

This script allows the generation of product installation docs for many different product versions and platforms with a minimum of duplicated copy. [Nunjucks](https://mozilla.github.io/nunjucks/) is used as our templating engine.

## Quick Start

The following commands can be run from the Docs project directory.

- `npm run install-docs:build` — Renders the templates and generates the final install doc files.
- `npm run install-docs:deploy` — Deploys the final install doc files to their final location.
- `npm run install-docs:rebuild-docker-image` — Rebuilds the docker container used to render templates.

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

## Deploying generated files

The `install-docs:build` command generates output into install_template/renders. To deploy them to their final location, run `npm run install-docs:deploy`. This command uses the same information from `config.yaml` to identify generated files, and then examines their frontmatter to determine their final resting place:

```yaml
deployPath: jdbc_connector/42.5.4.1/installing/linux_x86_64/jdbc_debian_10.mdx
```

You'll usually want to parameterize these when generating the file. A typical setup might look like this:

```
{% import "platformBase/_deploymentConstants.njk" as deploy %}
{% block frontmatter %}
{# 
  If you modify deployment path here, please first copy the old expression
  and add it to the list under "redirects:" below - this ensures we don't 
  break any existing links.  
#}
deployPath: jdbc_connector/{{ product.version }}/installing/linux_{{platform.arch}}/jdbc_{{deploy.map_platform[platform.name]}}.mdx
redirects:
  - jdbc_connector/{{ product.version }}/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/{{deploy.expand_arch[platform.arch]}}/jdbc42_{{deploy.map_platform_old[platform.name]}}_{{platform.arch | replace(r/_?64/g, "")}}.mdx
{% endblock frontmatter %}
```

Note that the deployment script also rewrites the redirects values to allow deploy paths to be copied directly into that list when changed. It will:
  - remove a trailing `.mdx` 
  - add a leading `/` (but only when removing a trailing `.mdx`)

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

- All templates ultimately should inherit from this file. This is a good place to write copy that needs to be shared by all docs, regardless of the product being installed
- several blocks are currently defined in this base file, including:
  - `frontmatter` — This is where additional frontmatter keys can be defined (the base template defines title and navTitle) - this is particularly useful for redirects and deployment rules, see below.
  - `prerequisites` — This is where information like adding EDB repos will go
  - `installCommand` — This is where the command to actually install the product will go
  - `postinstall` — This is where commands like starting the EPAS server will go

#### `/templates/platformBase/[platform name].njk`

- These files are largely responsible for setting up the `prerequisites` and `installCommand` blocks
- Currently, they rely on a `packageName` macro to be set by a child template. This macro is being used in the `installCommand` block.
- You will notice there are no Ubuntu templates in the platformBase folder. This is because install instructions were the same as Debian 10, and so only the `debian-10.njk` file was created to reduce duplication. If Ubuntu specific instructions are needed, new template files could be created which inherit from `debian-10.njk`.


#### `/templates/products/edb-postgres-advanced-server/base.njk`

- All EPAS templates inherit from this file at some point. This is a good place to store copy which is shared by all EPAS docs.
- This template will choose a `platformBase` template to inherit from based on the value of `platformBaseTemplate`, which must be set by a child template.
- the `packageName` macro used by the `platformBase` templates can be found in this template
- a `postinstall` block containing copy shared by all of the EPAS docs can be found here. That said, this block is extended by some child templates.

## Index files

In addition to individual platform installer docs, you can also generate index files for each product-version combination. Two levels of index are supported:

1. A top-level index covering all platforms. This template can take one of two forms:

   1. `index.njk` - top level index for all product versions
   1. `v{version}_index.njk` - top level index specific to one product version

   The context provided for these templates includes the following values:

   - `product.name` — the name of the product we are rendering a template for. e.g. "EDB Postgres Advanced Server"
   - `product.version` — the version of the product we are rendering a template for. e.g. "13"
   - `osArchitectures` — an object with keys for each supported CPU architecture, each containing an array of OS versions supported for that architecture. 
      An OS version is represented by an object of the form,
      ```javascript
      {name: "Ubuntu 18.04", "Ubuntu", "Ubuntu", "18.04"}
      ```
      In addition, the array itself has several methods available:
      - `hasOS(shortname, [osVersion])` returns true if the list contains an OS/version combination matching the OS shortname and optionally a specific OS version
      - `hasFamily(family)` returns true if the list contains an OS from the specified family (e.g., `hasFamily("RHEL")` returns true if any of RHEL, Oracle Linux, Alma, Rocky or CentOS are listed)
      - `filterFamily(family)` returns a subset of the list matching the specified family, sorted by version in descending order
      - `filterOS(shortname, [osVersion])` returns a subset of the list matching the specified shortname and optionally a specific version, sorted by version in descending order

1. An architecture-level index covering all platforms for a given CPU architecture. This template can take one of two forms:

   1. `{arch}_index.njk` - top level index for all product versions
   1. `v{version}_{arch}_index.njk` - top level index specific to one product version


### Template techniques

Nunjucks offers many tools that we can use to minimize repetition and increase the readability of templates. Which to use depends on circumstances.

#### Placeholder blocks

[Template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) is our primary method to structure templates. If we know that a bit of text only appears in a certain subset of rendered documentation, we can use an empty placeholder block to define where that text goes. Then in the appropriate child template, we can override the placeholder block.

Note that the definition should be filled in at the most general template possible. So if a block is specific to, say, BDR, we should include the definition in the BDR product template. Or, if the block is specific to a single version of RHEL, it would be defined in that version's template. It's also possible, to redefine a placeholder block again if there is an exception to the exception. You can even revert back to an empty block, if needed.

Placeholder blocks are convenient and self-documenting, but they do depend on having the right inheritance structure in place. It's sometimes necessary to add a level of inheritance to create the appropriate abstraction layers. If you find yourself repeating the same block customization, you should evaluate whether the inheritance structure is right. Alternatively, you might need to use another technique.

When adding a new placeholder, try to be mindful of folks who will need to add or modify overrides in the future; avoid placing them in contexts that require special consideration, and *never* use the same block in two different contexts. For example, avoid:

- Using {% block install_commands %} inside a code block for one product, and inside a list for another.
- Using {% block additional_prerequisites %} inside a code block that is never closed (and thus requires it to be overridden for no other reason than to close the block!)

If a particular block requires content to be formatted in a specific way, such as indented to match the indentation of a list... Consider using a `{% filter ... %}` block to transform the content as needed. For example:

```
- This list
- Includes
- A block
{% filter indent(2) %}
{% block subitem %}
{% endblock subitem %}
- But derived templates
- Don't need to know this
```

This example uses [`indent`](https://mozilla.github.io/nunjucks/templating.html#indent) to ensure the block's content will not break out of the list item. Other useful filters include [`replace(...)`](https://mozilla.github.io/nunjucks/templating.html#replace) and [`trim(...)`](https://mozilla.github.io/nunjucks/templating.html#trim) - more can be added if the need arises.

#### Building on base blocks

Of special note is the ability to *integrate* parent blocks in derived templates via the `super()` function. This can greatly reduce the proliferation of placeholders by allowing you to build on existing blocks in derived templates:

```
{% block prerequisites %}
Some base content
{% endblock prerequisites %}
```

```
{% block prerequisites %}
{{ super() }}
Some derived content that appears after the base content
{% endblock prerequisites %}
```

```
{% block prerequisites %}
Some derived content that appears before...
{{ super() }}
...AND after the base content
{% endblock prerequisites %}
```

```
{% block prerequisites %}
Some derived content that makes the base content look like it was SHOUTED
{{ super() | upper }}
{% endblock prerequisites %}
```

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

In a handful of situations it is useful to employ conditionals to include or modify output based on a test or comparison:

```
{% if osArchitectures["ppc64le"].hasFamily("RHEL") %}
...
{% endif %}

{% if platform.arch == "x86_64" %}
...
{% endif %}
```

Be wary of over-using these; prefer inheritance structures that push this content down to sufficiently-specific "leaf" templates instead. As a general rule, use conditionals only when the test is much, much simpler than the alternative inheritance structure, and be willing to abandon it when (over time) that simplicity is lost.

In particular, avoid the trap of setting a flag in a leaf template and then checking it in a base template: this separates the context from the decision, making it extremely difficult to judge when the test has lost its value.

#### Adding a new platform

1. Modify **config.yaml**. For example, when adding the RHEL 9 platform, the following entries were made to each product:

- name: RHEL 9
  arch: ppc64le
  supported versions: [<supported_versions>]
- name: AlmaLinux 9 or Rocky Linux 9
   arch: x86_64
   supported versions: [<supported_versions>]
- name: RHEL 9 or OL 9
   arch: x86_64
   supported versions: [<supported_versions>]
   
1. In **templates/platformBase_deploymentConstants.njk**, update the `map_platform` and `map_platform_old` blocks. For example, for RHEL 9, the following lines were added to both blocks of code:

"AlmaLinux 9 or Rocky Linux 9": "other_linux9",
.
.
.
"RHEL 9 or OL 9": "rhel9",
"RHEL 9": "rhel9",

1. In the **templates/platformBase** folder, copy existing topics, such as **rhel-8-or-ol-8.njk**, and use the copied files to create new versions. 
   - Update the name to the next version, such as **rhel-9-or-ol-9.njk**. 
   - Update content as necessary. For example, the file may include a reference to "latest-8.noarch.rpm", which should be updated to "latest-9.noarch.rpm". 
   -The number of topics that need to be updated will vary depending on the platform being added. For RHEL 9, two new topics were created: **rhel-9-or-ol-9.njk** and **almalinux-9-or-rocky-linux-9.njk**.

1. Update **templates/platformBase/ppc64le_index.njk** to add an entry in the navigation block in the front matter. For example, for RHEL 9, this entry was added:
   - {{productShortname}}_rhel_9

1. Update **templates/platformBase/x86_64_index.njk** to add entires in the navigation block in the front matter. For example, for RHEL 9, these entries were added:
   - {{productShortname}}_rhel_9
   - {{productShortname}}_other_linux_9

1. In the **templates/products** folder, for each product, copy existing topics, such as **rhel-8-or-ol-8.njk**, and use the copied file create a new version. 
   - Update the name to the next version, such as **rhel-9-or-ol-9.njk**. 
   - In each file, update the entry for `platformBaseTemplate` so it points to the appropriate template, either in the **templates/platformBase** folder or in the current **templates/products** folder. 
   - Check content to determine if other references require updating. 
   - The number of topics that need to be updated will vary depending on the platform being added. For RHEL 9, two new topics were created: **rhel-9-or-ol-9.njk** and **almalinux-9-or-rocky-linux-9.njk**.
