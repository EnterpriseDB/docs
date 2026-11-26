---
title: Single-master replication operation
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/
lastModified: 2022-03-21T10:35:01-04:00
---

# Single-master replication operation

<div id="smr_operation" class="registered_link"></div>

You can configure and run Replication Server for single-master replication systems.

For configuration and management of your replication system, the Replication Server console interface is used to show the steps to use. You can perform the same steps from the operating system command line using the Replication Server command line interface (CLI). The commands of the Replication Server CLI are described in [Replication Server command line interface](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/#xdb_cli).

- [Prerequisite steps](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/): You must take certain steps to prepare the host environments as well as the publication and subscription database servers before beginning the process of building a single-master replication system.
- [Creating a publication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/): Creating your first publication requires the following steps:
- [Creating a subscription](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/): Creating your first subscription requires the following steps:
- [On-demand replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/04_on_demand_replication/): After you create a publication and subscription, you can start the replication process in either of these ways:
- [Managing a subscription](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/05_managing_subscription/): After you create a subscription, you might later change aspects of the underlying replication system environment. Attributes that might change include:
- [Performing controlled switchover](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/06_performing_switchover/): Controlled switchover is the exchanging of roles between a publication database and a subscription database. The tables that were formerly publications become the subscription tables. The former subscription tables become the publications.
- [Performing failover](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/07_performing_failover/): Failover is replacing the publication database with the subscription database if a failure occurs on the publication database or its host. Failover is an irreversible action, so the subscription database permanently takes over the role of the publication database.
- [Optimizing performance](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/): Once you're familiar with setting up and managing your replication system, you mmight look for ways to optimize the performance of replications. Various publication server and subscription server configuration options are available for improving the performance of snapshot and synchronization replications.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
