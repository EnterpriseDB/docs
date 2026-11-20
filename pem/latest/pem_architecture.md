---
title: Understanding Postgres Enterprise Manager components and architecture
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_architecture/
lastModified: 2026-08-21T12:20:07+05:30
---

# Understanding Postgres Enterprise Manager components and architecture

Postgres Enterprise Manager (PEM) monitors and manages multiple Postgres servers through a single graphical interface. PEM can monitor the following areas of the infrastructure:

- **Hosts** — One or more servers (physical or virtual) and their operating systems.
- **Database servers** — One or more instances of PostgreSQL, EDB Postgres Advanced Server, or EDB Postgres Extended Server (formerly known as 2ndQPostgres) running on a host.
- **Databases** — One or more databases and their schema objects, such as tables and indexes.

> **Note**
>
> The term Postgres refers to PostgreSQL, EDB Postgres Advanced Server, or EDB Postgres Extended Server.

PEM consists of individual software components:

- **PEM server** — The PEM server is the data repository for monitoring data and a server to which agents and clients connect. The PEM server consists of an instance of PostgreSQL, an associated database for storing monitoring data, and a server that provides web services.
- **PEM agent** — The PEM agent is responsible for executing tasks and reporting statistics from the agent host and the monitored Postgres instances to the PEM server. A single PEM agent can monitor multiple installed instances of Postgres that reside on the same host where the agent is installed or on multiple remote hosts. You can install an agent as part of the PEM server installation or you can install a stand-alone agent.
- **PEM web client** — The PEM web interface allows you to manage and monitor Postgres servers and use PEM extended functionality. The web interface software is installed with the PEM server and is accessed using any supported web browser.
- **SQL Profiler** — SQL Profiler is a Postgres server extension to record the monitoring data and query plans for the SQL Profiler tool to analyze in PEM. This is an optional component of PEM, but the extension must be enabled in each instance of Postgres for which you want to use it. You can use the SQL Profiler with any supported version of an EDB distribution of Postgres, not just those managed through the PEM server. See [Installing SQL Profiler](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/installing_sql_profiler/) for details and supported versions.

## PEM architecture

The following architectural diagram shows the relationships between the PEM server, clients, and managed and unmanaged Postgres servers.

![PEM Architecture](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pem/10/images/pem_architecture.png)

### PEM server

![PEM Server](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pem/10/images/pem_server.png)

The PEM server consists of an instance of Postgres, a web server providing web services to the client, and a PEM Agent. PEM uses a server-side cryptographic plugin to generate authentication certificates.

The instance of Postgres and the web server can be on the same host or on separate hosts.

> **Note**
>
> All the PEM features are available on either backend database server you select: PostgreSQL or EDB Postgres Advanced Server.

- **Postgres instance (database server)** — This is the backend database server. It hosts a database named `pem`, which acts as the repository for PEM server. The `pem` database contains several schemas that store metric data collected from each monitored host, server, and database.

  - `pem` — This schema is the core of the PEM application. It contains the definitions of configuration functions, tables, or views required by the application.
  - `pemdata` — This schema stores the current snapshot of the monitored data.
  - `pemhistory` — This schema stores the historical monitored data.
- **Web server (Nginx/HTTPD)** — The PEM web application is deployed as a WSGI application behind a web server to provide web services to the client. It is made up of the following:
  - **Web content presentation** — The presentation layer is created by the web application (such as browser and login page).
  - **Rest API** — The REST API allows integration with other apps and services.
  - **Database server administration/management** — You can perform database server administration and management activities like CREATE, ALTER, and DROP for managed and unmanaged servers.
  - **Dashboard/chart generation** — Internally, the web application includes functionality that generates dashboards and charts.
  - **Management tools** — The Audit Manager, Capacity Manager, and Log Manager are available in the web application.
  - Other tools provide functionality on managed or unmanaged servers:
    - **SQL Profiler UI integration** — SQL Profiler generates easily analyzed traces of session content.
    - **Query editor/data view** — The Query editor allows you to query, edit, and view data.
    - **Debugger** — The debugger helps you debug queries.
    - **Performance diagnostics** — Performance diagnostics help you analyze the performance of Postgres instances.

We recommend that you use a dedicated machine to host production instances of the PEM backend database. The host might be subject to high levels of data throughput, depending on the number of database servers that are being monitored and the workloads the servers are processing.

### PEM agent

![PEM Agent](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pem/10/images/pem_agent.png)

The PEM agent is responsible for collecting monitoring data from the machine and operating system and from each of the Postgres instances to which they are bound. Each PEM agent can monitor one physical or virtual machine and is capable of monitoring multiple database servers locally that are installed on other systems. These servers can be installed on the same system or remotely. It's also responsible for executing other tasks that the user might schedule such as server shutdowns, SQL Profiler traces, and custom jobs.

A PEM agent is installed by default on the PEM server when you install the PEM server. It is generally referred to as a PEM agent on the PEM host. Separately, you can also install the PEM agent on the other servers hosting the Postgres instances you want to monitor using PEM.

Whether monitoring locally or remotely, the PEM agent connects to the PEM server using PostgreSQL’s libpq, using SSL certificate-based authentication. The PEM agent installer in Windows and pemworker CLI in Linux is responsible for registering each agent with the PEM server and generating and installing the required certificates.

There is only one-way traffic between the PEM agent and PEM server. The PEM agent always connects to the PEM server.

The PEM agent must be able to connect to each database server that it monitors. This connection is made over a TCP/IP connection (or, optionally, a Unix Domain Socket on Unix hosts), and can optionally use SSL. You must configure the connection and authentication to the monitored server. For details on configuring an SSL connection to a monitored database server, see [Registering a database server](https://www.enterprisedb.com/docs/pem/latest/registering_database_server/#manually-registering-a-database-server).

Once configured, each agent collects statistics and other information on the host and each database server and database that it monitors. Each piece of information is known as a _metric_ and is collected by a _probe_. Most probes collect multiple metrics at once for efficiency. Examples of the metrics collected include:

- Disk I/O statistics
- Network statistics
- Database server version string
- Database server configuration option (GUC) values
- Table access statistics
- Table and index sizes

For a list of PEM probes, see [Probes](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/).

By default, the PEM agent bound to the database server collects the OS/database monitoring statistics and also runs any scheduled tasks/jobs for that particular database server, storing data in the `pem` database on the PEM server.

The alert processing, SNMP/SMTP spoolers, and Nagios spooler data is stored in the `pem` database on the PEM server and is then processed by the PEM agent on the PEM host by default. However, you can enable processing by other PEM Agents by adjusting the SNMP/SMTP and Nagios parameters of the PEM agents.

For more information about these parameters, see [Server configuration](https://www.enterprisedb.com/docs/pem/latest/managing_pem_server/#server-configuration-parameters---reference).

### PEM web application

The web application connects to the PEM server and allows direct management of managed or unmanaged servers and the databases and schemas that reside on them.

The web application allows you to use PEM functionality that makes use of the data logged on the server through features such as dashboards and Capacity Manager.

### SQL Profiler extension

You don't have to install the SQL Profiler extension on every server, but you must install and enable the extension on each server on which you want to use SQL Profiler. You might also want to install and enable the SQL Profiler extension on unmonitored development servers. You can also temporarily install the SQL Profiler extension for ad hoc use.

You can use SQL Profiler on servers that aren't managed through PEM. However, to perform scheduled traces, a server must have the extension installed and enabled and must be managed by an installed and configured PEM agent.

For more information, see [Installing SQL Provider](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/installing_sql_profiler/) and [Using SQL Profiler](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/using_sql_profiler/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
