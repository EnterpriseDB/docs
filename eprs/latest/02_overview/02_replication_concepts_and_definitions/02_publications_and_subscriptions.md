---
title: Publications and subscriptions
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/02_publications_and_subscriptions/
lastModified: 2022-03-21T10:35:01-04:00
---

# Publications and subscriptions

<div id="publications_and_subscriptions" class="registered_link"></div>

Replication Server uses an architecture called _publish_ and _subscribe_. The data made available for copying by a replication system is defined as a publication. To get a copy of that data, you must "subscribe" to that publication. The manner in which you subscribe is slightly different for single-master and multi-master replication systems.

In Replication Server, a publication is defined as a named set of tables and views in a database. The database that contains the publication is called the _publication database_ of that publication.

In a single-master replication system, to get a copy of a Replication Server publication, you must create a _subscription_. A Replication Server subscription is a named association of a publication to a database to which to copy the publication. This database is called the _subscription database_.

Similar to a single-master replication system, when creating a multi-master replication system, you first define a publication in the publication database. You then add one or more databases that you want to participate in this multi-master replication system. As you add each database, it is associated with this replication system. You don't create an explicit, named subscription in a multi-master replication system.

In a single-master replication system, replication occurs when Replication Server starts and completes either of the following processes:

- Applies changes that were made to rows in the publication since the last replication occurred to rows in tables of the subscription database (called synchronization).
- Copies rows of the publication to empty tables of the subscription database (called a snapshot). See [Snapshot and synchronization overview](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/06_snapshot_and_synchronous/#snapshot_and_synchronous).

The subscription tables are the tables in the subscription database created from corresponding tables or views in the publication.

> **Note**
>
> In a single-master replication system, Replication Server creates a table in the subscription database for each view contained in the publication.

In a multi-master replication system, the concept and definition of replication is nearly identical to a single-master replication system with the following modifications:

- Synchronization can occur between any pair of databases (referred to as primary nodes) participating in the replication system.
- A snapshot can occur from the publication database designated as the primary definition node to any of the other primary nodes.

The following diagram shows a multi-master replication system with three primary nodes.

![Publications in one database replicating to subscriptions in another database](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/eprs/7/images/image3.png)

![Publications replicating to two subscription databases](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/eprs/7/images/image4.png)

![Publications in two databases replicating to one subscription database](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/eprs/7/images/image5.png)

This diagram shows that a table that was created as a member of a subscription can be used in a publication replicating to another subscription. This scenario is called _cascading replication_.

![\*Cascading Replication: Tables used in both a subscription and a publication\*](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/eprs/7/images/image6.png)

The following diagram shows a multi-master replication system with three primary nodes.

![\*Multi-master replication system\*](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/eprs/7/images/image7.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
