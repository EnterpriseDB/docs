---
title: Publication and subscription server configuration options
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/
lastModified: 2024-06-26T11:18:55-04:00
---

# Publication and subscription server configuration options

<div id="publications_and_subscriptions_server_conf_options" class="registered_link"></div>

The publication server and the subscription server support various configuration options for purposes such as the following:

- Optimize synchronization performance based on the types of transactions affecting the publication. (See [Optimizing synchronization replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/#optimize_sync_replication) for details on these options.)
- Utilize alternate loading methods in snapshot replications. (See [Optimizing snapshot replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/01_optimizing_snapshot_replication/#optimizing_snapshot_replication) for details on these options.)
- Special configuration options for multi-master replication. (See [Optimizing performance](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/10_optimizing_performance_mmr/) for details on these options.)
- Adjust memory usage and transaction size for replications.
- Replicate certain Oracle partitioned table types.
- Replicate special characters found in publication data.
- Set special configuration options for the log-based method of synchronization replication. (See [Quoted identifiers and default case translation](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/05_quoted_identifiers/#quoted_identifiers) for details on these options.)

Most options apply only to the publication server, although a few are used by the subscription server.

Set and pass the configuration options for the publication server in a text file called the publication server configuration file: `xdb_pubserver.conf`.

Set and pass the configuration options for the subscription server in a text file called the subscription server configuration file: `xdb_subserver.conf`.

See [Installation details](https://www.enterprisedb.com/docs/eprs/latest/installing/installation_details/) for the locations of these files.

Modified publication server configuration options take effect after you restart the publication server. Similarly, modified subscription server configuration options take effect after you restart the subscription server. The configuration options that were explicitly put into effect by overriding their defaults in the configuration files are logged in the publication server log file and the subscription server log file. [Installation details](https://www.enterprisedb.com/docs/eprs/latest/installing/installation_details/) contains the locations of these log files.

To set the configuration options:

1. The publication and subscription server configuration files are created during Replication Server installation and already contain all of the configuration options as comments with their default settings.

   To change the setting of a configuration option, edit the publication server or subscription server configuration file by removing the comment symbol (#) from the option and substituting the desired value in place of the currently coded value.

   The following example shows a portion of the publication server configuration file in which replacement of null characters in the publication data is activated and the replacement character is set to the question mark character.

   ```ini
   replaceNullChar = true

   #Null Replacement Character
   nullReplacementChar = ?
   ```

2. Restart the publication or subscription server.

   Use the following command for RHEL/Rocky Linux/AlmaLinux 8.x or later:

   `systemctl restart edb-xdbpubserver`

   Use the following command for previous Linux versions:

   `service edb-xdbpubserver restart`

- [Controlling message logging](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/01_controlling_logging_level/): These options apply to the publication server and the subscription server unless otherwise specified.
- [Schema migration options](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/03_schema_migration_options/): This option applies only to the subscription server.
- [Snapshot replication options](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/06_snapshot_replication_options/): These options apply only to the publication server unless otherwise specified.
- [Snapshot replication connection retry](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/snapshot_connection_retry/): When a connection failure with the subscription database occurs during a snapshot replication,
- [Assigning an IP address for remote method invocation](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/07_assign_ip_adress_for_rmi/): This option applies to the publication server and the subscription server.
- [Using pgAgent job scheduling](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/08_using_pgagent_job_scheduling/): This option applies only to the publication server.
- [Forcing immediate shadow table cleanup](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/09_forcing_shadow_table_cleanup/): This option applies only to the publication server.
- [Setting event history cleanup threshold](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/10_setting_event_history_cleanup/): The event history cleanup job is scheduled to run every day at 12 a.m. to remove completed, historical, event and replication history data from the control schema xdbevents, xdbeventsstatus, xdbpubreplog, and xdbpubtablereplog tables that are older than n days. By default, the history data older than seven days is removed.
- [DDL change replication table locking](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/11_ddl_change_replication_table_locking/): This option applies only to the publication server.
- [Persisting zero transaction count replication history](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/12_persisting_zero_txn_replication_hist/): This option applies only to the publication server.
- [Skipping grants of table-level user privileges on MMR target tables](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/13_skipping_grants_of_table_level_user_privileges_on_mmr/): This option applies only to the publication server.
- [Applying grants of table-level user privileges on SMR target tables](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/14_applying_grants_of_table_level_user_privileges_on_smr/): This option applies only to the subscription server. This option also applies only when both the publication database and the subscription database are Postgres databases.
- [Skipping migration of column DEFAULT clause](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/skip_default_column/): Use cases
- [Log-based method of synchronization options](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/15_log_based_sync_options/): This option applies only to the publication server.
- [Setting the Apache DBCP connection validation query timeout](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/16_setting_apache_dbcp_connection_validation_query/): This option applies only to the publication server.
- [Replicating Oracle partitioned tables](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/04_replicate_oracle_partitioned_tables/): You must set this option to the same value for both the publication server and the subscription server.
- [Specifying a custom URL for an Oracle JDBC connection](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/05_specify_custom_url_for_oracle_jdbc/): This option applies only to the publication server.
- [Replacing null characters](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/02_replacing_null_characters/): These options apply only to the publication server.
- [Unescaping single-quote characters](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/single_quote_unescape/): In Batch Update Using Prepared Statement (BUP)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
