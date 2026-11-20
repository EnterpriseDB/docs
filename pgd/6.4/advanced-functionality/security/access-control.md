---
title: Access control
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/access-control/
lastModified: 2026-08-21T09:22:11+02:00
---

# Access control

## Catalog tables

System catalog and information schema tables are always excluded from replication by PGD.

In addition, tables owned by extensions are excluded from replication.

## PGD functions and operators

All PGD functions are exposed in the `bdr` schema. Any calls to these
functions must be schema qualified, rather than putting `bdr` in the
search\_path.

All PGD operators are available by way of the `pg_catalog` schema to allow users
to exclude the `public` schema from the search\_path without problems.

## Granting privileges on catalog objects

Administrators must not grant explicit privileges on catalog
objects such as tables, views, and functions. Manage access to those objects
by granting one of the roles described in [PGD default roles](https://www.enterprisedb.com/docs/pgd/6.4/advanced-functionality/security/pgd-predefined-roles/).

This requirement is a consequence of the flexibility that allows
joining a node group even if the nodes on either side of the join don't
have the exact same version of PGD and therefore of the PGD
catalog.

More precisely, if privileges on individual catalog objects were
explicitly granted, then the `bdr.join_node_group()` procedure might
fail because the corresponding GRANT statements extracted from the
node being joined might not apply to the node that's joining.

## Triggers

In PostgreSQL, both the owner of a table and anyone who was granted the TRIGGER
privilege can create triggers. Triggers granted by the non-table owner execute
as the table owner in PGD, which might cause a security issue. The TRIGGER
privilege is seldom used, and PostgreSQL Core Team has said, "The separate
TRIGGER permission is something we consider obsolescent."

PGD mitigates this problem by using stricter rules on who can create a trigger
on a table:

- superuser: Can create trigggers.

- bdr\_superuser: Can create triggers.

- Owner of the table: Can create triggers according to same rules as in PostgreSQL
  (must have EXECUTE privilege on the function used by the trigger).

- Users who have TRIGGER privilege on the table: Can create a trigger only if
  they use a function that's owned by the same owner as the table and they
  satisfy standard PostgreSQL rules. Specifically, they must have EXECUTE
  privilege on the function.<br/><br/>
  If both table and function have the same owner, and the owner decides to
  give a user both TRIGGER privilege on the table and EXECUTE privilege on
  thae function. It's assumed that it's okay for that user to create a trigger
  on that table using this function.

- Users who have TRIGGER privilege on the table: Can also create triggers
  using functions that are defined with the [SECURITY DEFINER
  clause](https://www.postgresql.org/docs/current/sql-createfunction.html#SQL-CREATEFUNCTION-SECURITY)
  if they have EXECUTE privilege on them. <br/><br/>The SECURITY DEFINER
  clause makes the function always execute as the owner of the function both
  in standard PostgreSQL and PGD.

This logic is built on the fact that, in PostgreSQL, the owner of the trigger
isn't the user who created it but the owner of the function used by that
trigger.

The same rules apply to existing tables, and if the existing table has triggers
that aren't owned by the owner of the table and don't use SECURITY DEFINER
functions, you can't add it to a replication set.

When PGD replication applies changes it uses the system-level default
search\_path only. Replica triggers, stream triggers, and index expression
functions that assume other search\_path settings will then fail when they
execute on apply. To ensure this doesn't occur, resolve object references
clearly using either the default search\_path only, or set the search path for a
function using `ALTER FUNCTION ... SET search_path = ...` for the functions
affected. When using the default search\_path, always use fully qualified
references to objects, for example, schema.objectname.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
