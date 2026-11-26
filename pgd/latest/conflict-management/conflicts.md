---
title: Conflicts
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/
lastModified: 2026-08-21T09:16:04+02:00
---

# Conflicts

EDB Postgres Distributed is an active/active or multi-master DBMS. If used asynchronously, writes to the same or related rows from multiple different nodes can result in data conflicts when using standard data types.

Conflicts aren't errors. In most cases, they are events that PGD can detect and resolve as they occur. This section introduces the PGD functionality that allows you to manage that detection and resolution.

- [Overview](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/00_conflicts_overview/) introduces the idea of conflicts in PGD and explains how they can happen.

- [Types of conflicts](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/02_types_of_conflict/) lists and discusses the various sorts of conflicts you might run across in PGD.

- [Conflict detection](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/03_conflict_detection/) introduces the mechanisms PGD provides for conflict detection.

- [Conflict resolution](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/04_conflict_resolution/) explains how PGD resolves conflicts and how you can change the default behavior.

- [Conflict logging](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/05_conflict_logging/) points out where PGD keeps conflict logs and explains how you can perform conflict reporting.

- [Data verification with LiveCompare](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/06_live_compare/) explains how LiveCompare can help keep data consistent by pointing out conflicts as they arise.

* [Overview](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/00_conflicts_overview/): EDB Postgres Distributed is an active/active or multi-master DBMS. If used asynchronously, writes to the same or related rows from multiple different nodes can result in data conflicts when using standard data types.
* [Types of Conflict](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/02_types_of_conflict/): PRIMARY KEY or UNIQUE conflicts
* [Conflict detection](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/03_conflict_detection/): PGD provides these mechanisms for conflict detection:
* [Conflict resolution](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/04_conflict_resolution/): Most conflicts can be resolved automatically. PGD defaults to a last-update-wins mechanism or, more accurately, the updateifnewer conflict resolver. This mechanism retains the most recently inserted or changed row of the two conflicting ones based on the same commit timestamps used for conflict detection. The behavior in certain corner-case scenarios depends on the settings used for bdr.createnodegroup and alternatively for bdr.alternodegroup.
* [Conflict logging](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/05_conflict_logging/): Starting with PGD 6.0, conflict-logging is not enabled by default. You can enable conflict logging on a per-node basis. This allows you to log conflicts that occur on a specific node, which can be useful for debugging and monitoring purposes.
* [Data verification with LiveCompare](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/06_live_compare/): LiveCompare is a utility program designed to compare any two databases to verify that they are identical.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
