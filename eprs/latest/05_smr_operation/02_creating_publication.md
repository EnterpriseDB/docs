---
title: Creating a publication
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/
lastModified: 2022-03-21T10:35:01-04:00
---

# Creating a publication

<div id="creating_publication" class="registered_link"></div>

Creating your first publication requires the following steps:

- Registering the publication server
- Adding the publication database
- Creating a publication by choosing the tables and views for the publication along with creating any optional filter clauses

After you add the publication database, you can create as many publications as there are available tables and views. These tables and views must be readable by the publication database user and meet the criteria outlined in [Design considerations](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/02_design_considerations/#design_considerations) and [Restrictions on replicated database objects](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/03_restrictions_on_replicated_database_objects/#restrictions_on_replicated_database_objects).

- [Registering a publication server](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/01_registering_publication_server/): When you register a publication server, you're identifying the network location, admin user name, and password of a specific, running, publication server instance. You want to use this instance to manage all aspects of the publications you create subordinate to it.
- [Adding a publication database](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/02_adding_pub_database/): You must identify to Replication Server the database for publications by creating a publication database definition.
- [Adding a publication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/03_adding_publication/): Subordinate to a publication database definition, you create publications that contain tables and views of the database identified in the publication database definition.
- [Control schema objects created for a publication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/04_control_schema_objects_created_for_publication/): After you add a publication database definition and publications, the following control schema objects are created in addition to your original publication tables and views:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
