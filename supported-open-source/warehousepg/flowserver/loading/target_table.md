---
title: Creating the target table and configuring role privileges
description: Learn how to create the target table and configure role privileges to load data to WarehousePG with FlowServer.
product: FlowServer for WarehousePG
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/target_table/
lastModified: 2026-01-21T17:42:05Z
---

# Creating the target table and configuring role privileges

## Creating the target table

You must pre-create a target WarehousePG (WHPG) table before you initiate a data load operation to WarehousePG (WHPG) from FlowServer. This is the table that will store your loaded and transformed Kafka or RabbitMQ data.

The name of the table, schema, database, columns, and other details must match what you have set on the YAML configuration file under the [target section](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/config_file/#construct-the-target-section).

## Configuring role privileges

If you load data to WHPG from FlowServer using a non-admin WHPG user/role, you must assign the role certain privileges:

- The role must have `USAGE` and `CREATE` privileges on any non-public database schema where it writes data or where FlowServer creates external tables.

  ```sql
  GRANT USAGE, CREATE ON SCHEMA <schema_name> TO <role_name>;
  ```

- If the role writing to WHPG is not a database or table owner, the role must have `SELECT` and `INSERT` privileges on each WHPG table to which the role will write data.

  ```sql
  GRANT SELECT, INSERT ON <schema_name>.<table_name> TO <role_name>;
  ```

- The role must have permission to create readable external tables using `gpfdist` protocol.

  ```sql
  ALTER ROLE <role_name> CREATEEXTTABLE(type = 'readable', protocol = 'gpfdist');
  ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
