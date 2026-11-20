---
title: Controlling schema ingestion
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/schema_ingestion/
lastModified: 2026-03-17T01:01:27Z
---

# Controlling schema ingestion

The [`beacon-agent.yaml` monitoring template](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/) allows the Agent to ingest all schemas that the migration user has permissions to and contain at least one table. If you don't want the Agent to ingest all schemas, you can define a subset with the `databases.schema.filter` option.

## Using the schema filter

To control which schemas the Agent ingests from your database, add the `filter` parameter within the `databases.schema` configuration block. This allows you to specify a set of schemas to either include or exclude.

The filter parameter requires two settings:

- `mode`: Defines the filtering behavior. It must be set to either `include` or `exclude`. When set to `include`, the Agent only ingests schemas listed in the names list. When set to `exclude`, the Agent ingests all schemas except those listed in the names list.

- `names`: A list of schema names to apply the filter to. Because the names are case-sensitive, ensure you use the same casing for the names as how the schemas are stored in the source database.

> **Note**
>
> The Agent has a default [list of system schemas](#excluded-system-schemas) for both Oracle and Postgres that are automatically excluded from ingestion because they are irrelevant for the database migration. When an `exclude` filter is used, this default list is combined with any additional schemas you specify. For the `include` filter, the Agent will ingest any schemas you explicitly name, including system schemas that would have otherwise been excluded by default.

## Include example

```yaml
[...]
provider:
  onprem:
    clusters:
      - resource_id: "<cluster_resource_id>"
        [...]
        nodes:
          - resource_id: "<node_resource_id>"
            dsn: $DSN
            schema:
              enabled: true
              poll_interval: 15s 
              filter:
                mode: "include"
                names: 
                  - "<schema_name1>"
                  - "<schema_name2>"
            tags:
              - "<tag_names>"
```

## Exclude example

```yaml
[...]
provider:
  onprem:
    clusters:
      - resource_id: "<cluster_resource_id>"
       [..]
       nodes:
         - resource_id: "<node_resource_id>"
           dsn: $DSN
           schema:
             enabled: true
             poll_interval: 15s 
             filter:
               mode: "exclude"
               names: 
                 - "<schema_name1>"
                 - "<schema_name2>"
           tags:
             - "<tag_names>"
```

## Excluded system schemas

The Agent excludes the following system schemas by default.

**Postgres and EDB Postgres Extended Server**

- information\_schema
- pg\_catalog
- pg\_toast

**EDB Postgres Advanced Server**

- sys

**Oracle**

- ANONYMOUS
- APEX\_PUBLIC\_USER
- APEX\_030200
- APEX\_040000
- APEX\_040200
- APPQOSSYS
- AUDSYS
- CTXSYS
- DMSYS
- DBSNMP
- DBSFWUSER
- DEMO
- DIP
- DVF
- DVSYS
- EXFSYS
- FLOWS\_FILES
- FLOWS\_020100
- FRANCK
- GGSYS
- GSMADMIN\_INTERNAL
- GSMCATUSER
- GSMROOTUSER
- GSMUSER
- LBACSYS
- MDDATA
- MDSYS
- MGMT\_VIEW
- OJVMSYS
- OLAPSYS
- ORDPLUGINS
- ORDSYS
- ORDDATA
- OUTLN
- ORACLE\_OCM
- OWBSYS
- OWBYSS\_AUDIT
- PDBADMIN
- RMAN
- REMOTE\_SCHEDULER\_AGENT
- SI\_INFORMTN\_SCHEMA
- SPATIAL\_CSW\_ADMIN\_USR
- SPATIAL\_WFS\_ADMIN\_USR
- SQLTXADMIN
- SQLTXPLAIN
- SYS
- SYSBACKUP
- SYSDG
- SYSKM
- SYSRAC
- SYSTEM
- SYSMAN
- TSMSYS
- WKPROXY
- WKSYS
- WK\_TEST
- WMSYS
- XDB
- XS$NULL

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
