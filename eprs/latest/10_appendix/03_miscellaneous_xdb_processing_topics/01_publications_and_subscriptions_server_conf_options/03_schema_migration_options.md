---
title: Schema migration options
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/03_schema_migration_options/
lastModified: 2023-08-14T09:54:04-07:00
---

# Schema migration options

<div id="schema_migration_options" class="registered_link"></div>

> **Note**
>
> This option applies only to the subscription server.

This option controls how certain aspects of the publication database schema are migrated to the subscription database.

## skipCheckConst

By default, column `CHECK` constraints from publication tables are migrated to the subscription table definitions when the subscription is created. Set this option to `true` if you don't want `CHECK` constraints as part of the subscription table definitions.

Setting this option to `true` is useful if the `CHECK` constraint is based on a built-in function supported by the publication database server, and this built-in function doesn't exist in the subscription database server.

`skipCheckConst={true | false}`

The default value is `false`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
