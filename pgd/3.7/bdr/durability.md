---
title: Durability & Performance Options
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/bdr/durability/
lastModified: 2022-12-05T10:40:59+01:00
---

# Durability & Performance Options

## Overview

Synchronous or _Eager Replication_ synchronizes between at least two
nodes of the cluster before committing a transaction.  This provides
three properties of interest to applications, which are related, but
can all be implemented individually:

- _Durability_: writing to multiple nodes increases crash resilience
  and allows the data to be recovered after a crash and restart.
- _Visibility_: with the commit confirmation to the client, the database
  guarantees immediate visibility of the committed transaction on some
  sets of nodes.
- _No Conflicts After Commit_: the client can rely on the transaction to
  eventually be applied on all nodes without further conflicts, or get
  an abort directly informing the client of an error.

BDR integrates with the `synchronous_commit` option of
Postgres itself, providing a variant of synchronous replication,
which can be used between BDR nodes.  BDR also offers two additional
replication modes:

- Commit At Most Once (CAMO). This feature solves the problem with knowing
  whether your transaction has COMMITed (and replicated) or not in case of
  certain errors during COMMIT. Normally, it might be hard to know whether
  or not the COMMIT was processed in. With this feature, your application can
  find out what happened, even if your new database connection is to  node
  than your previous connection. For more info about this feature see the
  [Commit At Most Once](https://www.enterprisedb.com/docs/pgd/3.7/bdr/camo/) chapter.
- Eager Replication. This is an optional feature to avoid replication
  conflicts. Every transaction is applied on _all nodes_ simultaneously,
  and commits only if no replication conflicts are detected. This feature does
  reduce performance, but provides very strong consistency guarantees.
  For more info about this feature see the [Eager All-Node Replication](https://www.enterprisedb.com/docs/pgd/3.7/bdr/eager/)
  chapter.

Postgres itself provides [Physical Streaming
Replication](https://www.postgresql.org/docs/11/warm-standby.html#SYNCHRONOUS-REPLICATION)
(PSR), which is uni-directional, but offers a synchronous variant that
can used in combination with BDR.

> **Warning**
>
> This only works when using a single database per node. When using multiple
> BDR enabled databases per node, which is not generally recommended, the
> LSN based confirmations may originate from any one of the databases from
> a node specified in `synchronous_standby_names` and thus not assure the
> data is really flushed to disk.

This chapter covers the various forms of synchronous or eager
replication and its timing aspects.

## Comparison

Most options for synchronous replication available to
BDR allow for different levels of synchronization, offering different
trade-offs between performance and protection against node or network
outages.

The following table summarizes what a client can expect from a peer
node replicated to after having received a COMMIT confirmation from
the origin node the transaction was issued to.

| Variant | Mode                      | Received | Visible | Durable |
| ------- | ------------------------- | -------- | ------- | ------- |
| PGL/BDR | off (default)             | no       | no      | no      |
| PGL/BDR | remote\_write        (2)  | yes      | no      | no      |
| PGL/BDR | on                  (2)   | yes      | yes     | yes     |
| PGL/BDR | remote\_apply        (2)  | yes      | yes     | yes     |
| PSR     | remote\_write        (2)  | yes      | no      | no (1)  |
| PSR     | on                  (2)   | yes      | no      | yes     |
| PSR     | remote\_apply        (2)  | yes      | yes     | yes     |
| CAMO    | remote\_write        (2)  | yes      | no      | no      |
| CAMO    | remote\_commit\_async (2) | yes      | yes     | no      |
| CAMO    | remote\_commit\_flush (2) | yes      | yes     | yes     |
| Eager   | n/a                       | yes      | yes     | yes     |

_(1) written to the OS, durable if the OS remains running and only
Postgres crashes._

_(2) unless switched to Local mode (if allowed) by setting
`synchronous_replication_availability` to `async'`, otherwise the
values for the asynchronous BDR default apply._

Reception ensures the peer will be able to eventually apply all
changes of the transaction without requiring any further
communication, i.e. even in the face of a full or partial network
outage.  All modes considered synchronous provide this protection.

Visibility implies the transaction was applied remotely, and any possible
conflicts with concurrent transactions have been resolved.  Without
durability, i.e. prior to persisting the transaction, a crash of the
peer node may revert this state (and require re-transmission and
re-application of the changes).

Durability relates to the peer node's storage and provides protection
against loss of data after a crash and recovery of the peer node.  If
the transaction has already been visible before the crash, it will be
recovered to be visible, again.  Otherwise, the transaction's payload
is persisted and the peer node will be able to apply the transaction
eventually (without requiring any re-transmission of data).

## Internal Timing of Operations

For a better understanding of how the different modes work, it is
helpful to realize PSR and PGLogical apply transactions rather
differently.

With physical streaming replication, the order of operations is:

- origin flushes a commit record to WAL, making the transaction
  visible locally
- peer node receives changes and issues a write
- peer flushes the received changes to disk
- peer applies changes, making the transaction visible locally

With PGLogical, the order of operations is different:

- origin flushes a commit record to WAL, making the transaction
  visible locally
- peer node receives changes into its apply queue in memory
- peer applies changes, making the transaction visible locally
- peer persists the transaction by flushing to disk

For CAMO and Eager All Node Replication, note that the origin node
waits for a confirmation prior to making the transaction visible
locally.  The order of operations is:

- origin flushes a prepare or pre-commit record to WAL
- peer node receives changes into its apply queue in memory
- peer applies changes, making the transaction visible locally
- peer persists the transaction by flushing to disk
- origin commits and makes the transaction visible locally

The following table summarizes the differences.

| Variant | Order of apply vs persist on peer nodes | Replication before or after origin WAL commit record write |
| :------ | :-------------------------------------: | :--------------------------------------------------------- |
| PSR     |              persist first              | after                                                      |
| PGL     |               apply first               | after                                                      |
| CAMO    |               apply first               | before (triggered by pre-commit)                           |
| Eager   |               apply first               | before (triggered by prepare)                              |

## Configuration

The following table provides an overview of which configuration
settings are required to be set to a non-default value (req) or
optional (opt), but affecting a specific variant.

| setting (GUC)                           | PSR | PGL | CAMO | Eager |
| --------------------------------------- | :-: | :-: | :--: | :---: |
| synchronous\_standby\_names             | req | req |  n/a |  n/a  |
| synchronous\_commit                     | opt | opt |  n/a |  n/a  |
| synchronous\_replication\_availability  | opt | opt |  opt |  n/a  |
| bdr.enable\_camo                        | n/a | n/a |  req |  n/a  |
| bdr.camo\_origin\_for                   | n/a | n/a |  req |  n/a  |
| bdr.camo\_partner\_of (on partner node) | n/a | n/a |  req |  n/a  |
| bdr.commit\_scope                       | n/a | n/a |  n/a |  req  |
| bdr.global\_commit\_timeout             | n/a | n/a |  opt |  opt  |

## Planned Shutdown and Restarts

When using PGL or CAMO in combination with `remote_write`, care must be taken
with planned shutdown or restart.  By default, the apply queue is consumed
prior to shutting down.  However, in the `immediate` shutdown mode, the queue
is discarded at shutdown, leading to the stopped node "forgetting"
transactions in the queue. A concurrent failure of another node could
lead to loss of data, as if both nodes failed.

To ensure the apply queue gets flushed to disk, please use either
`smart` or `fast` shutdown for maintenance tasks. This maintains the
required synchronization level and prevents loss of data.

## Synchronous Replication using PGLogical

### Usage

To enable synchronous replication using PGLogical, the application
name of the relevant BDR peer nodes need to be added to
`synchronous_standby_names`.  The use of `FIRST x` or `ANY x` offers a
lot of flexibility, if this does not conflict with the requirements of
non-BDR standby nodes.

Once added, the level of synchronization can be configured per
transaction via `synchronous_commit`, which defaults to `on` - meaning that
adding to `synchronous_standby_names` already enables synchronous
replication.  Setting `synchronous_commit` to `local` or `off` turns
off synchronous replication.

Due to PGLogical applying the transaction before persisting it, the
values `on` and `remote_apply` are equivalent (for logical
replication).

### Limitations

PGLogical uses the same configuration (and internal mechanisms) as
Physical Streaming Replication, therefore the needs for (physical,
non-BDR) standbys needs to be considered when configuring synchronous
replication between BDR nodes using PGLogical.  Most importantly, it is
not possible to use different synchronization modes for a single
transaction.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
