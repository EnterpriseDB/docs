---
title: Conflict prevention with an MMR-ready sequence
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/06_conflict_prevention_mmr_ready/
lastModified: 2022-03-21T10:35:01-04:00
---

# Conflict prevention with an MMR-ready sequence

<div id="conflict_prevention_mmr_ready" class="registered_link"></div>

To prevent uniqueness conflicts in a multi-master replication system, you can use an MMR-ready sequence to generate unique identifiers for each row of publication tables that doesn't have an inherent, unique identifier.

An MMR-ready sequence incorporates a function and a sequence to return `BIGINT` data type, integer values. These values combine a user-assigned, unique database identifier for each primary node with a sequence generated within that primary node.

You can modify a publication table requiring an MMR-ready sequence to include a `BIGINT` NOT NULL column with a default value returned by the function.

An MMR-ready sequence satisfies the following characteristics:

- **Uniqueness.** The combination of the unique database identifier with the sequence ensures that each row in a given table has a unique value across all primary nodes.
- **Clustered index support.** An MMR-ready sequence doesn't impair the use of a clustered index to provide retrieval efficiency. MMR-ready sequence values are returned in a typical, ordered sequence, not as random values such as if the universally unique identifier (UUID) were used.
- **Effective migration support.** Yuo can modify tables already using a sequence to use an MMR-ready sequence with minimal impact on existing primary keys and foreign keys.
- **Reliability and maintainability.** An MMR-ready sequence provides a reliable and maintainable method to avoid uniqueness conflicts.

* [Creating an MMR-ready sequence](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/06_conflict_prevention_mmr_ready/01_create_mmr_ready_sequence/): The following are the steps to create an MMR-ready sequence in a database to participate as a primary node in a multi-master replication system.
* [MMR-ready sequence example](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/06_conflict_prevention_mmr_ready/02_mmr_ready_example/): The following is an example of a three-primary node system using an MMR-ready sequence. The databases to use as the primary nodes are MMRnodea, MMRnodeb, and MMRnodec. A publication table named MMRseq\_tbl uses the MMR-ready sequence.
* [Converting a standard sequence to an MMR-ready sequence](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/06_conflict_prevention_mmr_ready/03_convert_to_mmr_ready/): If you have an existing application with tables that use a standard sequence such as with the SERIAL data type, you can modify these tables to use the MMR-ready sequence for incorporation into a multi-master replication system. The basic conversion process is:
* [Conversion to an MMR-ready sequence example](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/06_conflict_prevention_mmr_ready/04_convert_to_mmr_ready_eg/): This example shows how you convert two tables with standard sequences used as primary keys and a parent-child relationship by a foreign key constraint to use the MMR-ready sequence, You can then use them in a multi-master replication system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
