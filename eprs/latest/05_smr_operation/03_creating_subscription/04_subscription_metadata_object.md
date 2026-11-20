---
title: Subscription metadata object
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/04_subscription_metadata_object/
lastModified: 2022-06-07T08:02:28-04:00
---

# Subscription metadata object

<div id="subscription_metadata_object" class="registered_link"></div>

After you add a subscription database definition, a single table named `rrep_txset_health` is created as the subscription metadata object.

**For Oracle only:** The `RREP_TXSET_HEALTH` table is created in the subscription database user’s schema as shown in the following output:

```shell
SQL> CONNECT subuser/password
Connected.
SQL> SET PAGESIZE 9999
SQL> SELECT table_name FROM user_tables ORDER BY table_name;

TABLE_NAME
------------------------------
RREP_TXSET_HEALTH
```

**For SQL Server only:** The `rrep_txset_health` table is created in the schema named `_edb_replicator_sub`.

```shell
1> USE subdb;
2> GO
Changed database context to 'subdb'.
1> SELECT s.name + '.' + o.name "Object Name", o.type_desc "Object Type"
2>   FROM sys.objects o,
3>        sys.schemas s
4>   WHERE s.name <> 'edb'
5>     AND o.type IN ('U','P','FN')
6>     AND o.schema_id = s.schema_id
7>   ORDER BY 2, 1;
8> GO
Object Name                            Object Type
-------------------------------------- --------------------------------------
_edb_replicator_sub.rrep_txset_health  USER_TABLE
(1 rows affected)
```

**For Postgres only:** The `rrep_txset_health` table is created in the schema named `_edb_replicator_sub`.

```shell
subdb=# SET search_path TO _edb_replicator_sub;
SET
subdb=# \dt
                     List of relations
       Schema        |       Name        | Type  |  Owner
---------------------+-------------------+-------+---------
 _edb_replicator_sub | rrep_txset_health | table | subuser
(1 row)
```

In all subscription database types (Oracle, SQL Server, and Postgres), when you remove the subscription database definitions using the Replication Server console or CLI, the subscription metadata object is deleted from the subscription database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
