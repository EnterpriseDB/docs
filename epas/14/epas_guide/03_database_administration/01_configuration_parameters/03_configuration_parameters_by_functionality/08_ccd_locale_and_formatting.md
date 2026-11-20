---
title: Client connection defaults/locale and formatting
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/08_ccd_locale_and_formatting/
lastModified: 2023-02-14T16:10:29+05:30
---

# Client connection defaults/locale and formatting

<div id="ccd_locale_and_formatting" class="registered_link"></div>

These configuration parameters affect locale and formatting.

## icu\_short\_form

**Parameter type:** String

**Default value:** none

**Range:** n/a

**Minimum scope of effect:** Database

**When value changes take effect:** n/a

**Required authorization to activate:** n/a

Contains the default ICU short-form name assigned to a database or to the EDB Postgres Advanced Server instance. See [Unicode collation algorithm](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/06_unicode_collation_algorithm/#unicode_collation_algorithm) for general information about the ICU short form and the Unicode collation algorithm.

Set this configuration parameter either when:

- Using the `CREATE DATABASE` command with the `ICU_SHORT_FORM` parameter. In this case, set the specified short-form name. It appears in the `icu_short_form` configuration parameter when connected to this database.
- Creating an EDB Postgres Advanced Server instance with the `initdb` command used with the `--icu_short_form` option. In this case, set the specified short-form name. It appears in the `icu_short_form` configuration parameter when connected to a database in that EDB Postgres Advanced Server instance. The database doesn't override it with its own `ICU_SHORT_FORM` parameter and a different short form.

Once you set this parameter, you can't change it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
