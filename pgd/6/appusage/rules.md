---
title: General rules for applications
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/appusage/rules/
lastModified: 2026-01-14T15:24:21Z
---

# General rules for applications

## Background

PGD uses replica identity values to identify the rows to change. Applications
can cause difficulties if they insert, delete, and then later reuse the same
unique identifiers. This is known as the [ABA
problem](https://en.wikipedia.org/wiki/ABA_problem). PGD can't know whether the
rows are the current row, the last row, or much older rows.

Similarly, since PGD uses table names to identify the table against which
changes are replayed, a similar ABA problem exists with applications that
create, drop, and then later reuse the same object names.

## Rules for applications

These issues give rise to some simple rules for applications to follow:

- Use unique identifiers for rows (INSERT).
- Avoid modifying unique identifiers (UPDATE).
- Avoid reusing deleted unique identifiers.
- Avoid reusing dropped object names.

In the general case, breaking those rules can lead to data anomalies and
divergence. Applications can break those rules as long as certain conditions are
met. However, use caution: while anomalies are unlikely, they aren't impossible. For
example, you can reuse a row value as long as the DELETE was replayed on all
nodes, including down nodes. This might normally occur in less than a second but
can take days if a severe issue occurred on one node that prevented it from
restarting correctly.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
