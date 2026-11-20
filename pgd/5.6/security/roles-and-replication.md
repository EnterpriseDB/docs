---
title: Roles and replication
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/security/roles-and-replication/
lastModified: 2025-02-26T18:09:18Z
---

# Roles and replication

## DDL and DML replication and users

DDL changes executed by a user are applied as that same user on each node.

DML changes to tables are replicated as the table-owning user on the target node.

By default, PGD replicates new tables with the same owner across nodes.

## Differing table ownership

We recommend for the same user to own the table on each node. That's
the default behavior, but you can override it. If you do, there are some
things to take into account.

Consider a situation where table A is owned by user X on node1 and owned by
user Y on node2. If user Y has higher privileges than user X, this might be
viewed as a privilege escalation.

Since nodes can have different use cases, we do allow this scenario. But we also
warn against it. If tables have different owners on different nodes, we
recommend that a security administrator help to plan and audit this
configuration.

## Replication and row-level security

On tables with row-level security policies enabled, changes are replicated
without reenforcing policies on apply. This behavior is equivalent to the
changes being applied as `NO FORCE ROW LEVEL SECURITY`, even if `FORCE ROW LEVEL
SECURITY` is specified. If this isn't what you want, specify a row\_filter that
avoids replicating all rows. We recommend that the row
security policies on all nodes be identical or at least compatible, but we don't enforce this.

## bdr\_superuser role and replication

The user bdr\_superuser controls replication for PGD and can add or remove any
table from any replication set. bdr\_superuser doesn't need any privileges over
individual tables, nor do we recommend it. If you need to restrict access to
replication set functions, you can implement restricted versions of these
functions as `SECURITY DEFINER` functions and grant them to the appropriate
users.

## Privilege restrictions

PGD enforces additional restrictions, effectively preventing the use of DDL that
relies solely on TRIGGER or REFERENCES privileges.

`GRANT ALL` still grants both TRIGGER and REFERENCES privileges, so we recommend
that you state privileges explicitly. For example, use `GRANT SELECT, INSERT,
UPDATE, DELETE, TRUNCATE` instead of `ALL`.

## Foreign key privileges

`ALTER TABLE ... ADD FOREIGN KEY` is supported only if the user has SELECT
privilege on the referenced table or if the referenced table has RLS
restrictions enabled that the current user can't bypass.

This means that the REFERENCES privilege alone isn't sufficient to allow
creating a foreign key with PGD. Relying solely on the REFERENCES privilege
isn't typically useful since it makes the validation check execute using
triggers rather than a table scan. It's typically too expensive to use
successfully.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
