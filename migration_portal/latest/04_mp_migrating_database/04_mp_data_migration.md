---
title: Performing a data migration
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/04_mp_data_migration/
lastModified: 2026-05-27T09:05:38+02:00
---

# Performing a data migration

<div id="mp_data_migration" class="registered_link"></div>

After performing the schema migration, migrate the data.

1. Use Migration Toolkit to migrate the data. For detailed information about using Migration Toolkit, see [Migration Toolkit](https://www.enterprisedb.com/docs/migration_toolkit/latest/).

2. Configure the Migration Toolkit `toolkit.properties` file, ensuring that connection information for the source and target databases is available in the property file:

   ```text
   SRC_DB_URL = jdbc: oracle:thin:@localhost:1521:ORCL
   SRC_DB_USER = user_name
   SRC_DB_PASSWORD = password
   TARGET_DB_URL= jdbc:edb://localhost:5444/migration
   TARGET_DB_USER = enterprisedb
   TARGET_DB-PASSWORD = password
   ```

   For more information, see [Building the toolkit.properties File](https://www.enterprisedb.com/docs/migration_toolkit/latest/06_building_toolkit.properties_file/).

3. Invoke Migration Toolkit in `–dataOnly` mode. Include the `–truncLoad` keyword to resolve foreign key dependencies across tables.

   For example, the following command migrates data to a schema named `hr`:

   `runMTK.sh –dataOnly –targetSchema hr –truncLoad HR`

   The command migrates the specified `source_schema` to `target_schema`. The data is loaded into the locally installed EDB Postgres Advanced Server instance with a database superuser named `enterprisedb` and the password of `password`.

   > **Note**
   >
   > The tables are truncated before attempting the data load.

## Advanced data migration

For larger databases that require a parallel data load, you can use one of the following methods:

- The EDB Postgres Advanced Server database link feature (for compatibility with Oracle databases)
- A Dblink or a database link style migration (if your data contains `CLOB` data)

For more information, see the [Migration Toolkit](https://www.enterprisedb.com/docs/migration_toolkit/latest/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
