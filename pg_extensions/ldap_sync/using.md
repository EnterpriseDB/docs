---
title: Using EDB LDAP Sync
product: EDB LDAP Sync
url: https://www.enterprisedb.com/docs/pg_extensions/ldap_sync/using/
lastModified: 2022-11-28T15:42:09-05:00
---

# Using EDB LDAP Sync

Before using EDB LDAP Sync for the first time, we recommend that you verify the syntax and configuration of ldap2pg with the `ldap2pg` command. Without any parameters, the utility begins a dry run. The following is an example of a successful syntax and configuration check:

```text
ldap2pg
```

```output title="Output"
Starting ldap2pg 5.7.
Using /etc/ldap2pg.yml.
Running in dry mode. Postgres will be untouched.
Inspecting roles in Postgres cluster...
Query LDAP to create superusers.
Querying LDAP ou=people,dc=planetexpre... (objectClass...
Would create amy.
Would create bender.
Would create fry.
Would create hermes.
Would create leela.
Would create professor.
Would create zoidberg.
Comparison complete.
```

To manually synchronize credentials, you can run the following command:

```shell
ldap2pg -N
```

```output title="Output"
Using /etc/ldap2pg.yaml.
Running in real mode.
Inspecting roles in Postgres cluster...
Query LDAP to create superusers.
Querying LDAP ou=people,dc=planetexpre... (objectClass...
Create amy.
Create bender.
Create fry.
Create hermes.
Create leela.
Create professor.
Create zoidberg.
Synchronization complete.
```

Once EDB LDAP Sync completes synchronization, you can check if it was successful by querying the `pg_user` table. The table should contain all of the users imported from the LDAP server:

```sql
SELECT * FROM pg_catalog.pg_user;
```

```output title="Output"
  usename  | usesysid | usecreatedb | usesuper | userepl | usebypassrls |  passwd  | valuntil | useconfig
-----------+----------+-------------+----------+---------+--------------+----------+----------+-----------
 postgres  |       10 | t           | t        | t       | t            | ******** |          |
 amy       |    16563 | f           | t        | f       | f            | ******** |          |
 bender    |    16564 | f           | t        | f       | f            | ******** |          |
 fry       |    16565 | f           | t        | f       | f            | ******** |          |
 hermes    |    16566 | f           | t        | f       | f            | ******** |          |
 professor |    16567 | f           | t        | f       | f            | ******** |          |
 leela     |    16568 | f           | t        | f       | f            | ******** |          |
 zoidberg  |    16569 | f           | t        | f       | f            | ******** |          |
(8 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
