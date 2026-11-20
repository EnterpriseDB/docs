---
title: Managing a publication
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/
lastModified: 2022-03-21T10:35:01-04:00
---

# Managing a publication

<div id="managing_publication" class="registered_link"></div>

After you create a publication, certain aspects of the underlying replication system environment might change for any number of reasons. Attributes that might change include the network location of the publication database server, the network location of the host running the publication server, database or operating system user names and passwords, and so forth.

This information is saved in the replication system metadata when you create a publication. Changes to these attributes result in inaccurate replication system metadata, which in turn can result in errors during subsequent replication attempts or replication system administration.

You can update the metadata stored for the publication server, the publication database definition, and publications to keep the information consistent with the actual replication system environment.

- [Updating a publication server](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/01_updating_publication_server/): Two aspects of metadata relate to the publication server that you might need update, depending on the change in the host environment:
- [Updating a publication database](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/02_updating_pub_database/): When you create a publication database definition, you save the publication database server’s network location (IP address and port number), the database identifier, a database login user name, and the user’s password in the control schema accessed by the publication server. This login information is used whenever you need to establish a session with the publication database. See Adding a publication database for information on creating a publication database definition for a single-master replication system. See Adding the primary definition node and Creating more primary nodes for a multi-master replication system.
- [Updating a publication](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/03_updating_pub/): You can update existing publications in the following ways:
- [Updating the set of available table filters in a publication](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/04_updating_table_filters_in_pub/): After you define a set of available table filters in the publication of a single-master replication system or a multi-master replication system, you can update the set by adding filter rules, removing filter rules, or modifying filter rules.
- [Validating a publication](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/05_validating_publication/): After you create a publication, don't directly change the definitions of the tables belonging to the publication. Doing so can cause a failure during the replication process. Examples of table definitions that you must not change include:
- [Removing a publication](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/06_removing_pub/): In a single-master replication system, you can remove a publication before removing its associated subscriptions. See Removing a subscription for more information.
- [Removing a publication database](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/06_managing_publication/07_removing_pub_database/): Removing a publication database definition from Replication Server is equivalent to removing its Publication Database node.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
