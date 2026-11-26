---
title: Configuration parameters by functionality
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/
lastModified: 2023-02-14T16:10:29+05:30
---

# Configuration parameters by functionality

<div id="configuration_parameters_by_functionality" class="registered_link"></div>

The description of each group of parameters includes this list of attributes:

- **Parameter type.** Type of values the parameter can accept. See [Setting configuration parameters](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/01_setting_new_parameters/#setting_configuration_parameters) for a discussion of parameter type values.
- **Default value.** Default setting if a value isn't explicitly set in the configuration file.
- **Range.** Allowed range of values.
- **Minimum scope of effect.** Smallest scope for which a distinct setting can be made. Generally, the minimal scope of a distinct setting is either:
  - The entire cluster, meaning the setting is the same for all databases in the cluster and its sessions
  - `per session`, which means the setting might vary by role, database, or individual session.
    This attribute has the same meaning as the `Scope of effect` column in the table of [Summary of configuration parameters](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/02_summary_of_configuration_parameters/#summary_of_configuration_parameters).
- **When value changes take effect.** Least invasive action required to activate a change to a parameter’s value. All parameter setting changes made in the configuration file can be put into effect by restarting the database server. However, certain parameters require a database server `restart`. Some parameter setting changes can be put into effect with a `reload` of the configuration file without stopping the database server. Finally, other parameter setting changes can be put into effect with some client-side action whose result is `immediate`. This attribute has the same meaning as the `When takes effect` column in the table of [Summary of configuration parameters](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/02_summary_of_configuration_parameters/#summary_of_configuration_parameters).
- **Required authorization to activate.** The type of user authorization to activate a change to a parameter’s setting. If a database server restart or a configuration file reload is required, then the user must be an EDB Postgres Advanced Server service account (`enterprisedb` or `postgres`, depending on the EDB Postgres Advanced Server compatibility installation mode). This attribute has the same meaning as the `Authorized user` column in the table of [Summary of configuration parameters](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/02_summary_of_configuration_parameters/#summary_of_configuration_parameters).

* [Top performance-related parameters](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/): These configuration parameters have the most immediate impact on performance.
* [Resource usage/memory](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/02_resource_usage_memory/): These configuration parameters control resource use pertaining to memory.
* [Resource usage/EDB Resource Manager](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/03_resource_usage_edb_resource_manager/): These configuration parameters control resource use through EDB Resource Manager.
* [Query tuning](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/04_query_tuning/): These configuration parameters are used for optimizer hints.
* [Query tuning/planner method configuration](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/05_query_tuning_planner_method_configuration/): These configuration parameters are used for planner method configuration.
* [Reporting and logging/what to log](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/06_reporting_and_logging_what_to_log/): These configuration parameters control reporting and logging.
* [Auditing settings](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/): These configuration parameters are for use with the EDB Postgres Advanced Server database auditing feature.
* [Client connection defaults/locale and formatting](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/08_ccd_locale_and_formatting/): These configuration parameters affect locale and formatting.
* [Client connection defaults/statement behavior](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/09_ccd_statement_behaviour/): These configuration parameters affect statement behavior.
* [Client connection defaults/other defaults](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/10_ccd_other_defaults/): These parameters set miscellaneous client connection defaults.
* [Compatibility options](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/11_compatibility_options/): These configuration parameters control various database compatibility features.
* [Customized options](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/12_customized_options/): customvariableclasses
* [Ungrouped](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/13_ungrouped/): These configuration parameters apply only to EDB Postgres Advanced Server and are for a specific, limited purpose.
* [Audit archiver](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/14_audit_archiver/): These configuration parameters are used by the EDB Postgres Advanced Server database audit archiving feature.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
