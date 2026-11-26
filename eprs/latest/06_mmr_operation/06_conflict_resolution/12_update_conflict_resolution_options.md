---
title: Updating the conflict resolution options
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/12_update_conflict_resolution_options/
lastModified: 2023-05-15T12:05:19-04:00
---

# Updating the conflict resolution options

<div id="update_conflict_resolution_options" class="registered_link"></div>

You can change conflict resolution options on a publication table. (See [Conflict resolution](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/) for information on conflict resolution.)

1. In the Replication Server console, make sure the publication server whose node is the parent of the publication you want to change is running and registered in the console you're using. See [Registering a publication server](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/01_registering_publication_server/#registering_publication_server) to learn how to start and register a publication server.

2. Select the Publication node under the Publication Database node representing the primary definition node.

3. Select **Publication > Update Publication > Conflict Resolution**.

4. In the Conflict Resolution Options dialog box, for each table, select the primary conflict resolution strategy and a standby strategy. Select the corresponding box to view the list of options.

5. Select **Update**.

6. When Conflict Resolution Options Updated Successfully appears, select **OK**.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
