---
title: Miscellaneous Replication Server processing topics
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/
lastModified: 2023-08-14T09:54:04-07:00
---

# Miscellaneous Replication Server processing topics

<div id="miscellaneous_xdb_processing_topics" class="registered_link"></div>

These topics include:

- Handling special characters in replication data
- Replicating Oracle partitioned tables
- Performing an offline snapshot and subsequent synchronization
- Generating an encrypted password
- Writing cron expressions

* [Publication and subscription server configuration options](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/): The publication server and the subscription server support various configuration options for purposes such as the following:
* [Encrypting the password in the Replication Server configuration file](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/02_encrypt_password_inconf_file/): If you need to change the password in the Replication Server configuration file, you must first encrypt the password. Use the encrypt command of the Replication Server CLI to generate the encrypted form of the password from its plain text form given in an input file.
* [Writing a cron expression](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/03_writing_cron_exp/): A cron expression is a text string used to express a schedule of dates and times. The Linux cron tool uses a cron expression to schedule the execution of a job. Replication Server uses the Quartz job scheduling system for scheduling replications.
* [Disabling foreign key constraints for snapshot replications](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/04_disable_foreign_key_constraints_for_snapshot_replication/): In a snapshot replication, the publication server calls EDB’s Migration Toolkit, which disables foreign key constraints on tables so it can truncate the target tables before loading rows. In Postgres, foreign key constraints are implemented using triggers. So, in actuality, the Migration Toolkit disables triggers on the target tables by setting column relhastriggers of pgcatalog.pgclass to false for each target table.
* [Quoted identifiers and default case translation](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/05_quoted_identifiers/): A quoted identifier is an identifier created with its name enclosed in double quote characters ("). The text enclosed in double quotes is stored as the object identifier name exactly as given, with no default case translation of alphabetic characters. Quoted identifiers occur in both Oracle and Postgres.
* [Replicating the SQL server SQL\_VARIANT data type](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/06_replicating_sql_server_sql_variant_data_type/): The SQLVARIANT data type defines a column so that the individual values in that column can have different data types. For example, the same SQLVARIANT column can store values that were explicitly cast as character, integer, numeric, and date/time.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
