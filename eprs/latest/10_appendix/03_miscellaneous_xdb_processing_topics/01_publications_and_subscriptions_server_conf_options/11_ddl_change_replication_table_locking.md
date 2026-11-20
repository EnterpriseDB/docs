---
title: DDL change replication table locking
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/11_ddl_change_replication_table_locking/
lastModified: 2023-08-14T09:54:04-07:00
---

# DDL change replication table locking

<div id="ddl_change_replication_table_locking" class="registered_link"></div>

> **Note**
>
> This option applies only to the publication server.

When the DDL change replication process is invoked, each affected table in the replication system is acquired in turn with an exclusive lock before the DDL change is applied to the table.

Set `ddlChangeTableLock` to `false` if you don't want an exclusive lock placed on the table before applying the DDL change. Set this option to `false` only if there are no write transactions expected on the target table. If write transactions do occur, they might not be recorded by the replication system.

See [Replicating DDL changes](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/08_replicating_ddl_changes/#replicating_ddl_changes) for more information.

`ddlChangeTableLock={true | false}`

The default value is `true`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
