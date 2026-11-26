---
title: Internal timing of operations
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/commit-scopes/timing/
lastModified: 2026-09-18T10:57:52+01:00
---

# Internal timing of operations

For a better understanding of how the different modes work, it's helpful to know
that legacy Physical Streaming Replication (PSR) and PGD apply transactions in
different ways. These ordering differences have practical implications for performance, durability, and consistency. For a broader comparison of when to choose PGD over PSR, see [Choosing between PSR and PGD](https://www.enterprisedb.com/docs/pgd/latest/planning/pgd_psr/).

With Legacy PSR, the order of operations is:

1. Origin flushes a commit record to WAL, making the transaction
   visible locally.
2. Peer node receives changes and issues a write.
3. Peer flushes the received changes to disk.
4. Peer applies changes, making the transaction visible on the peer.

Note that the change is written to the disk before applying the changes.

With PGD, by default and with Lag Control, the order of operations is different.
In these cases, the change becomes visible on the peer before the transaction is
flushed to the peer's disk:

1. Origin flushes a commit record to WAL, making the transaction
   visible locally.
2. Peer node receives changes into its apply queue in memory.
3. Peer applies changes, making the transaction visible on the peer.
4. Peer persists the transaction by flushing to disk.

For PGD's Quorum Commit and CAMO, the origin node waits for a certain number of
confirmations prior to making the transaction visible locally. The order of
operations is:

1. Origin flushes a prepare or precommit record to WAL.
2. Peer node receives changes into its apply queue in memory.
3. Peer applies changes, making the transaction visible on the peer.
4. Peer persists the transaction by flushing to disk.
5. Origin commits and makes the transaction visible locally.

The following table summarizes the differences.

| Variant           | Order of apply vs persist | Replication before or after commit |
| :---------------- | :-----------------------: | :--------------------------------: |
| PSR               |       persist first       |  after WAL flush of commit record  |
| PGD Async         |        apply first        |  after WAL flush of commit record  |
| PGD Lag Control   |        apply first        |  after WAL flush of commit record  |
| PGD Quorum Commit |        apply first        |       before COMMIT on origin      |
| PGD CAMO          |        apply first        |       before COMMIT on origin      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
