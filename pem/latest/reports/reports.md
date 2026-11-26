---
title: Viewing system reports
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/reports/reports/
lastModified: 2026-06-22T21:47:06+05:30
---

# Viewing system reports

In PEM 10.5, **Management > Reports** shows only the Alert History report. The System Configuration and Core Usage reports are now available as system-defined templates under **Management > Reports > Manage Report Templates**.

Only users with the `superuser` or `pem_admin` role can download the System Configuration or Core Usage reports.

Information in these reports shows the latest probe run time.

## System defined report templates

While PEM allows for fully customized reporting, it also includes pre-configured system report templates designed for deep database analysis. These reports are built into the platform to provide immediate value without requiring manual template configuration.

### Server Downtime report

The Server Downtime report provides server availability and downtime analysis by tracking heartbeat gaps from monitored PostgreSQL servers. It distinguishes between planned downtime (during blackout periods) and unplanned downtime, and calculates an availability percentage for each server over the last 30 days.

**Availability** is calculated from unplanned downtime only: `1 - (Unplanned Downtime / Total Time)`. Planned downtime during blackout periods doesn't affect the availability calculation.

The report starts collecting data automatically after upgrading to PEM 10.5 — no manual setup is required and it can't be disabled.

> **Note**
>
> To run this report, the Agent Server Binding (ASB) user for the target server must have the `pem_user` role. This is the most common setup issue. See [Permissions](#permissions) below.

#### Accessing the report

To run the Server Downtime report, use one of the following methods.

**Using Run Report:**

1. In the browser tree, select the server.
2. Right-click and select **Run Reports**.
3. In the **Report** dropdown, select **Server Downtime Report**.
4. In the database dropdown, select the database.
5. Select **Run**.

**Using a scheduled job:**

1. In the object tree, select the agent, right-click, and select **Create Job**.
2. Provide a job name and go to the **Steps** tab.
3. Provide a step name, set **Kind** to **Report**, and select the report, server, and database.
4. Optionally configure a schedule, then save the job.
5. Right-click the job and select **Run Now**.

To view or export the report output, go to **Management > Reports > Report Execution History**.

#### Report sections

The report contains three sections.

**Summary metrics**

Provides an overview across all monitored servers:

- **Total monitored servers** — Count of unique servers with downtime data in the last 30 days.
- **Average availability percentage** — Mean availability across all monitored servers.
- **Total downtime hours** — Sum of all downtime (planned and unplanned) across all servers.
- **Total unplanned downtime hours** — Sum of downtime that occurred outside blackout periods.
- **Total planned downtime hours** — Sum of downtime that occurred during blackout periods.

**Server availability details**

Shows a per-server breakdown, sorted by availability percentage ascending (worst performers first):

- **Server name** — Hostname or IP address of the monitored server.
- **Server description** — User-defined description.
- **Availability pct** — Calculated as `1 - (Unplanned Downtime / Total Time)`.
- **Total hours** — Total downtime (planned and unplanned).
- **Unplanned hours** — Downtime outside blackout periods.
- **Planned hours** — Downtime during blackout periods.
- **Database count** — Number of non-system databases on the server.

**Top 10 worst performers**

Shows the 10 servers with the lowest availability in the last 30 days. Uses the same columns as the server availability details section. Use this section to quickly identify servers that need attention.

#### Configuration parameters

A user with the `pem_admin` role can adjust these parameters in **Server Configuration**:

| Parameter                        | Default | Description                                                                                                                                                                |
| -------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `downtime_retention_days`        | 30      | Number of days of downtime history to retain. Older data is automatically purged twice daily. Reducing this value lowers storage use but limits historical trend analysis. |
| `downtime_heartbeat_gap_seconds` | 60      | Minimum gap between heartbeats (in seconds) before PEM records a downtime event. Increase this value to reduce false positives in high-latency network environments.       |

#### Permissions

The report runs using the ASB user for each target server. That user must have the `pem_user` role to execute the report functions.

To grant the role, connect to the PEM database as a superuser and run:

```sql
GRANT pem_user TO <asb_username>;
```

#### Limitations

- **Downtime cause is unknown** — The report can't distinguish between a server going down, a PEM agent going down, a network partition, or a firewall issue. All heartbeat gaps that exceed the threshold are recorded as server downtime. Use blackout periods for planned maintenance to keep this data meaningful.

- **Brief outages aren't captured** — The minimum detectable downtime is approximately equal to the heartbeat gap threshold (default 60 seconds). Outages shorter than this window don't appear in the report.

- **No pre-upgrade history** — The report only tracks downtime from the point of upgrade to PEM 10.5 onwards. There's no historical data from earlier PEM versions. Allow up to 30 days after upgrading for a full reporting window.

- **High-latency networks** — In high-latency environments, normal heartbeat delays may exceed the 60-second detection threshold and generate false downtime events. If you see unexpected downtime for healthy servers, increase `downtime_heartbeat_gap_seconds` to 90–120 seconds.

- **Blackout data dependency** — Planned downtime classification requires blackout periods to exist in PEM and for the "Process alert blackouts" job to be enabled and running. If blackout data isn't available, all downtime is classified as unplanned and availability percentages will be lower than actual.

- **30-day default window** — By default, only the last 30 days of data are available. Increasing `downtime_retention_days` extends how long data is retained, but the report always shows only the most recent 30 days.

- **Hardcoded 30-day server availability window** — The report is hardcoded to fetch only the last 30 days of server availability data. If you need a longer reporting period, create a custom report template.

### EDB Postgres workload report (PWR)

The EDB Postgres workload report (PWR) provides a comprehensive overview of a server's performance and resource utilization over a specific snapshot duration. It is an essential tool for identifying bottlenecks, high-load SQL statements, and wait events.

> **Note**
>
> To execute this report template, ensure the `edb_wait_states` extension is installed and enabled on the target database.

#### Server information

Shows information about the server version:

- **Server version** — The version number of the Postgres server.
- **Architecture** — The hardware architecture for which the server is built.
- **System identifier** — A unique identifier for the database cluster.
- **Redwood mode** — Indicates whether the cluster was created in Redwood (Oracle compatibility) mode.
- **Current user** — The user who generated the report.
- **Actual start/end snap timestamp** — The precise timestamps marking the beginning and end of the data collection.
- **Snapshot duration** — The total time elapsed during the snapshot.

Shows information about the report timestamps:

- **Session counts** — The number of connected sessions at both the start and end of the snapshot.
- **Database time** — The total non-idle time (in seconds) that all sessions spent either working or waiting in the database.
- **Uptime** — Total time spent since the last server restart.
- **Role** — Indicates whether the server is a Primary or Standby instance.

#### Load profile

Shows the average load profile per transaction:

- **Blocks fetched** — Average number of blocks accessed per transaction.
- **WAL records/bytes** — Average number of Write-Ahead Log records and bytes generated per transaction.
- **Transactions** — The total number of transactions processed during the snapshot.
- **Abort rate** — The percentage of transactions that resulted in an abort.

#### Top wait events

Displays total wait time spent on top events (in seconds):

- **Wait event** — The name of the specific wait event. (**CPU** indicates time spent actively working).
- **Wait class** — The category or type of the wait event.
- **Wait time** — Total time in seconds spent on this event.
- **Pct database time** — The percentage of total `Dbtime` spent waiting on this event type.

#### Top SQL statements

Displays the top 10 SQL statements sorted by `dbtime`:

- **Database time** — The cumulative database time (in seconds) consumed during the execution of the SQL statement.
- **Wait time** — The total duration the SQL statement spent waiting for system resources or background events.
- **CPU time** — The total amount of CPU processing time utilized by the SQL statement.
- **Top wait event** — The specific wait event identifier where the statement experienced its longest delay.
- **Query** — The actual SQL text of the executed query.

#### Transaction stats

Shows transaction stats during the snapshot duration:

- **Xact commit** — The total number of successfully completed and saved transactions.
- **Xact rollback** — The total number of reversed or aborted transactions.

#### WAL stats

Shows stats about WAL record changes during snapshot duration:

- **Wal records** — The total number of individual WAL records generated during the snapshot.
- **Wal fpi** — The number of Full Page Images (FPI) created; these occur after the first change to a page following a checkpoint and can significantly increase WAL volume.
- **Wal bytes** — The total size of all generated WAL data, measured in bytes.

#### Shared buffers stats

Shows shared buffers stats during the snapshot duration:

- **Blocks read** — The total number of disk blocks read.
- **Blocks hit** — The total number of blocks hit.

#### Tuple stats

Shows stats about the tuples during the snapshot duration:

- **Tuples returned** — The number of rows returned by sequential scans.
- **Tuples fetched** — The number of rows fetched specifically via index scans.
- **Tuples inserted** — The total number of new rows added to the database.
- **Tuples updated** — The total number of existing rows modified.
- **Tuples deleted** — The total number of rows removed from the database.

#### Temporary files stats

Shows stats about the temporary file creation:

- **Temp files** — The number of temporary files created.
- **Temp bytes** — The total volume of data written to temporary files.

#### User session information

Session information connected/running during snapshot period:

- **Session ID** — The unique ID  assigned by `edb_wait_states` to a specific Postgres session.
- **Database name** — The name of the database to which the session is currently connected.
- **Username** — The identity of the database user logged into the session.
- **Application name** — The name of the application or client tool connected to this session (e.g., `psql`, `pgAdmin`, or a custom app service).
- **Client hostname** — The network host name of the connected client, providing the origin of the connection (where available).
- **Session start timestamp** — The precise date and time when the session was initially established.

#### System information

Shows CPU and memory information of the server machine:

- **Host name** — The network name of the machine where Postgres is running.
- **CPU information** — Details including the number of processors, vendor, and clock speed.
- **Memory information** — Total memory information for the host.

#### Postgres database settings

Shows the settings of the Postgres database:

- **Category** — The logical functional group of the parameters.
- **Parameter** — The name and current value of settings within a category. A highlighted entries denotes parameters with custom values.
- **Value** — The current operational setting for the specified parameter.
- **Is custom value** — A flag indicating if the parameter has been modified from its default value.

### Core Usage report

The Core Usage report provides a comprehensive view of CPU core allocation across all monitored database servers, agents, and groups. Use it for capacity planning, license compliance tracking, and infrastructure audits. Only users with the `superuser` or `pem_admin` role can run this report.

> **Note**
>
> In PEM 10.5, this report was renamed from **PEM Core Usage Report** to **Core Usage Report** and moved to Manage Report Templates. Existing installations are automatically migrated during upgrade — no manual action is needed.

#### Accessing the report

To run the Core Usage report, use one of the following methods.

**Using Run Report:**

1. In the browser tree, select the server.
2. Right-click and select **Run Reports**.
3. In the **Report** dropdown, select **Core Usage Report**.
4. In the database dropdown, select the PEM database.
5. Select **Run**.

**Using a scheduled job:**

1. In the object tree, select the agent, right-click, and select **Create Job**.
2. Provide a job name and go to the **Steps** tab.
3. Provide a step name, set **Kind** to **Report**, and select the report, server, and database.
4. Optionally configure a schedule, then save the job.
5. Right-click the job and select **Run Now**.

To view or export the report output, go to **Management > Reports > Report Execution History**.

#### Report sections

The report contains two sections.

**Core Summary**

Provides high-level statistics across the monitored infrastructure:

- **Total CPU cores** — Aggregate count of all CPU cores across locally managed servers. Excludes remotely managed servers, as agent data isn't available for those.
- **Cores by server type** — Core distribution broken down by database engine: EDB Postgres Advanced Server, EDB Postgres Extended (2ndQPG), and PostgreSQL.
- **Cores by database version** — Core counts grouped by specific database version, for example "PostgreSQL 16", "EPAS 15", or "2ndQ PostgreSQL 14".
- **Cores by platform** — Distribution across operating systems, including Linux, Windows, macOS, and other Unix variants. Shows server count and core count per platform.
- **Cores by group** — Core allocation by organizational group. Respects user-specific group name overrides and excludes hidden groups.

**Server Core Summary**

Detailed server-level information organized by management type:

- **Locally managed servers** — Servers bound to a PEM agent. Shows server name, host and port, server type, PGD status and version, platform, CPU cores, total RAM (MB), and memory usage percentage.
- **Remotely managed servers** — Servers monitored remotely without an agent. Shows server name, host and port, server type, and PGD status and version. CPU and memory data aren't available for these servers.
- **Unmanaged servers** — Servers registered in PEM but not bound to any agent. Shows server name, host and port, and PGD status and version.

### System configuration report

The System configuration report provides detailed information about the PEM Agents group, PEM Server Directory group, and custom groups listed under the browser tree. These groups can contain PEM server, PEM agent, and database servers. Only users with the `superuser` or `pem_admin` role can run this report.

To run the System configuration report, use one of the following methods.

**Using Run Report:**

1. In the browser tree, select the PEM Server node.
2. Right-click and select **Run Reports**.
3. In the **Report** dropdown, select **System Configuration Report**.
4. In the database dropdown, select the PEM database.
5. Select **Run**.

**Using a scheduled job:**

1. In the object tree, select the agent, right-click, and select **Create Job**.
2. Provide a job name and go to the **Steps** tab.
3. Provide a step name, set **Kind** to **Report**, and select the report, server, and database.
4. Optionally configure a schedule, then save the job.
5. Right-click the job and select **Run Now**.

To view or download the output, go to **Management > Reports > Report Execution History**, find the report in the list, and select **HTML** or **JSON** in the **Download Report** column.

#### Report sections

The report contains seven sections.

**Postgres Enterprise Manager Summary**

Provides details about the PEM backend:

- The Postgres Enterprise Manager backend database server version
- Application version
- User name accessing the application
- Platform-specific information

**Summary**

Provides the total count of PEM agents and monitored servers registered in the system.

**Monitoring Overview**

Provides a real-time snapshot of the monitoring workload:

- Number of enabled alerts
- Alert evaluations per hour
- Probe executions per hour
- Active agents in the last 24 hours
- Active servers in the last 24 hours

**Alert Evaluation Info**

Provides statistics about alert processing performance:

- Alert processing time metrics (maximum, minimum, average, p50, p90, p95, and p99)
- Active agent alert settings — the number of agents with SMTP, SNMP, and webhook notifications enabled
- Delayed alerts — the top 50 alerts running behind their scheduled evaluation time

**Server Info**

Provides details about each monitored database server and its object counts:

- Database server version
- Host
- Port
- Database name
- Database size
- Tablespace size
- Object counts: databases, schemas, tables, indexes, views, functions, extensions, foreign keys, sequences, and tablespaces
- Table index summary per schema

The group server name depends on the group name to which the server is added.

**Agent Info**

Provides details about the PEM agent, CPU cores, disk utilization, and memory information.

**Sizing Information**

Provides data to support capacity planning:

- Object catalogue summary — counts of agents, servers, databases, schemas, tables, and indexes
- PEM internal table sizes for the `pem`, `pemdata`, and `pemhistory` schemas

## Alert History report

The Alert History report provides detailed information about the alerts history at the agent or server level in JSON format.

Select **Management > Reports > Alert History Report**. From the dialog box, select your options:

- **Agent/Server Name** — Select the agents and servers from the list. The **Overall System Report** option is also available to generate a report for all the registered and active agents and servers.

- **Timeframe** — Select the required timeframe from the list.

- **Alert Types** — Select the alert types you want to generate the alert history report for.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
