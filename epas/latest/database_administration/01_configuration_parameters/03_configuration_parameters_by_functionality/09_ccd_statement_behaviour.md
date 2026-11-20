---
title: Client connection defaults/statement behavior
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/09_ccd_statement_behaviour/
lastModified: 2025-11-25T20:39:04+05:30
---

# Client connection defaults/statement behavior

<div id="ccd_statement_behaviour" class="registered_link"></div>

These configuration parameters affect statement behavior.

## default\_heap\_fillfactor

**Parameter type:** Integer

**Default value:** 100

**Range:** 10 to 100

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

Sets the fill factor for a table when the `FILLFACTOR` storage parameter is omitted from a `CREATE TABLE` command.

The fill factor for a table is a percentage from 10 to 100, where 100 is complete packing. When you specify a smaller fill factor, `INSERT` operations pack table pages only to the indicated percentage. The remaining space on each page is reserved for updating rows on that page. This approach gives `UPDATE` a chance to place the updated copy of a row on the same page as the original, which is more efficient than placing it on a different page.

For a table whose entries are never updated, complete packing is the best choice. In heavily updated tables, use smaller fill factors.

## edb\_data\_redaction

**Parameter type:** Boolean

**Default value:** `true`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

Data redaction is the support of policies to limit the exposure of certain sensitive data to certain users by altering the displayed information.

When set to `TRUE`, the data redaction is applied to all users except for superusers and the table owner:

- Superusers and table owner bypass data redaction.
- All other users get the redaction policy applied and see the reformatted data.

When set to `FALSE`, the following occurs:

- Superusers and table owner still bypass data redaction.
- All other users get an error.

For information on data redaction, see [EDB Postgres Advanced Server Security Features](https://www.enterprisedb.com/docs/epas/latest/epas_security_guide/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
