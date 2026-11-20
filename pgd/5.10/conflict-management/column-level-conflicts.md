---
title: Column-level conflict detection
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/column-level-conflicts/
lastModified: 2026-11-20T11:33:47Z
---

# Column-level conflict detection

By default, conflicts are resolved at row level. When changes from two nodes conflict, either the local or remote tuple is selected and the other is discarded. For example, commit timestamps for the two conflicting changes might be compared and the newer one kept. This approach ensures that all nodes converge to the same result and establishes commit-order-like semantics on the whole cluster.

However, it might sometimes be appropriate to resolve conflicts at the column level rather than the row level, at least in some cases.

- [Overview](https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/column-level-conflicts/01_overview_clcd/) introduces column-level conflict resolution in contrast to row-level conflict resolution, suggesting where it might be a better fit than row-level conflict resolution.

- [Enabling and disabling](https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/column-level-conflicts/02_enabling_disabling/) provides an example of enabling column-level conflict resolution and explains how to list tables with column-level conflict resolution enabled.

- [Timestamps](https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/column-level-conflicts/03_timestamps/) explicates the difference between using `column_modify_timestamp` and `column_commit_timestamp` and shows how the timestamps associated with column-level conflict resolution can be selected and inspected.

* [Overview](https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/column-level-conflicts/01_overview_clcd/): By default, conflicts are resolved at row level. When changes from two nodes conflict, either the local or remote tuple is selected and the other is discarded. For example, commit timestamps for the two conflicting changes might be compared and the newer one kept. This approach ensures that all nodes converge to the same result and establishes commit-order-like semantics on the whole cluster.
* [Enabling and disabling](https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/column-level-conflicts/02_enabling_disabling/): Column-level conflict detection uses the columntimestamps type. This type requires any user needing to detect column-level conflicts to have at least the bdrapplication role assigned.
* [Timestamps](https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/column-level-conflicts/03_timestamps/): Column-level conflict resolution depends on a timestamp column being included in the table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
