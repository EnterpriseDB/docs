---
title: Prerequisite steps
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/
lastModified: 2022-03-21T10:35:01-04:00
---

# Prerequisite steps

<div id="prerequisites" class="registered_link"></div>

You must take certain steps to prepare the host environments as well as the publication and subscription database servers before beginning the process of building a single-master replication system.

- [Setting heap memory size for the publication and subscription servers](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/01_setting_heap_size_for_pub_and_sub/): The publication server and the subscription server are configured to run with a default set of heap size parameters. The default settings for 32-bit platforms and the default settings for 64-bit platforms are set by the parameter JAVAHEAPSIZE when Replication Server is installed.
- [Enabling synchronization replication with the log-based method](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/02_enable_sync_replication_with_log-based_method/): This information applies only to Postgres database servers of version 9.4 and later. If you plan to use the log-based method of synchronization replication with any publication database running under the Postgres database server, the following configuration parameter settings are required in the configuration file, postgresql.conf, of the Postgres database server:
- [Enabling access to the database servers](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/03_enable_access_to_database/): Use these configuration steps to use Replication Server on various types of database servers.
- [Preparing the publication database](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/04_preparing_pub_database/): Prepare the database that contains tables and views that will become members of publications.
- [Preparing the subscription database](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/05_preparing_sub_database/): You must prepare a database to use as a subscription database.
- [Verifying host accessibility](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/01_prerequisites/06_verifying_host_accessibility/): If you use more than one computer to host the components of the replication system, each computer must be able to communicate with the others on a network.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
