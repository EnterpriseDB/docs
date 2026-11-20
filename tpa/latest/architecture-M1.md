---
title: M1
description: Configuring the M1 architecture with TPA.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/architecture-M1/
lastModified: 2025-10-02T19:22:55Z
---

# M1

A Postgres cluster with a single primary node and physical replication
to a number of standby nodes including backup and failover management.

This architecture is suitable for production and is also suited to
testing, demonstrating and learning due to its simplicity and ability to
be configured with no proprietary components.

If you select subscription-only EDB software with this architecture
it will be sourced from EDB Repos 2.0 and you will need to
[provide a token](https://www.enterprisedb.com/docs/tpa/latest/reference/edb_repositories/).

## Failover management

The M1 architecture always includes a failover manager. Supported
options are repmgr, EDB Failover Manager (EFM) and Patroni. In all
cases, the failover manager will be configured by default to ensure that
a replica will be promoted to take the place of the primary should the
primary become unavailable.

### Application failover

The M1 architecture does not generally provide an automatic facility to
reroute application traffic to the primary. There are several ways you
can add this capability to your cluster.

In TPA:

- If you choose repmgr as the failover manager and enable PgBouncer, you
  can include the `repmgr_redirect_pgbouncer: true` hash under
  `cluster_vars` in `config.yml`. This causes repmgr to automatically
  reconfigure PgBouncer to route traffic to the new primary on failover.

- If you choose Patroni as the failover manager and enable PgBouncer,
  Patroni will automatically reconfigure PgBouncer to route traffic to
  the new primary on failover.

- If you choose EFM as the failover manager, you can use the
  `efm_conf_settings` hash under `cluster_vars` in `config.yml` to
  [configure EFM to use a virtual IP address
  (VIP)](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/05_using_vip_addresses/). This
  is an additional IP address which will always route to the primary
  node.

- Place an appropriate proxy or load balancer between the cluster and
  you application and use a [TPA hook](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/) to configure
  your selected failover manager to update it with the route to the new
  primary on failover.

- Handle failover at the application itself, for example by using
  multi-host connection strings.

### Backup failover

TPA does not configure any kind of 'backup failover'. If the Postgres
node from which you are backing up is down, backups will simply halt
until the node is back online. To manually connect the backup to the new
primary, edit `config.yml` to add the `backup` hash to the new primary
instance and re-run `tpaexec deploy`.

## Cluster configuration

### Overview of configuration options

An example invocation of `tpaexec configure` for this architecture
is shown below.

```shell
tpaexec configure ~/clusters/m1 \
         --architecture M1 \
         --platform aws --region eu-west-1 --instance-type t3.micro \
         --distribution Debian \
         --postgresql 14 \
         --failover-manager repmgr \
         --data-nodes-per-location 3
```

You can list all available options using the help command.

```shell
tpaexec configure --architecture M1 --help
```

The tables below describe the mandatory options for M1
and additional important options.
More detail on the options is provided in the following section.

#### Mandatory Options

| Parameter                                                                                                                              | Description                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--architecture` (`-a`)                                                                                                                | Must be set to `M1`.                                                                                                                                                                                                                                                |
| Postgres flavour and version (e.g. `--postgresql 15`)                                                                                  | A valid [flavour and version specifier](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-configure/#postgres-flavour-and-version).                                                                                                                              |
| One of: <br /> - `--failover-manager {efm, repmgr, patroni}`<br />- `--enable-efm`<br /> - `--enable-repmgr`<br />- `--enable-patroni` | Select the failover manager from [`efm`](https://www.enterprisedb.com/docs/tpa/latest/reference/efm/), [`repmgr`](https://www.enterprisedb.com/docs/tpa/latest/reference/repmgr/) and [`patroni`](https://www.enterprisedb.com/docs/tpa/latest/reference/patroni/). |

<br/><br/>

#### Additional Options

| Parameter                   | Description                                                                                                                                                                            | Behaviour if omitted                             |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `--platform`                | One of `aws`, `docker`, `bare`.                                                                                                                                                        | Defaults to `aws`.                               |
| `--location-names`          | A space-separated list of location names. The number of locations is equal to the number of names supplied.                                                                            | A single location called "main" is used.         |
| `--primary-location`        | The location where the primary server will be. Must be a member of `location-names`.                                                                                                   | The first listed location is used.               |
| `--data-nodes-per-location` | A number from 1 upwards. In each location, one node will be configured to stream directly from the cluster's primary node, and the other nodes, if present, will stream from that one. | Defaults to 2.                                   |
| `--witness-only-location`   | A location name, must be a member of `location-names`. This location will be populated with a single witness node only.                                                                | No witness-only location is added.               |
| `--single-node-location`    | A location name, must be a member of `location-names`.  This location will be populated with a single data node only.                                                                  | No single-node location is added.                |
| `--enable-haproxy`          | Two additional nodes will be added as a load balancer layer.<br/>Only supported with Patroni as the failover manager.                                                                  | HAproxy nodes will not be added to the cluster.  |
| `--enable-pgbouncer`        | PgBouncer will be configured in the Postgres nodes to pool connections for the primary.                                                                                                | PgBouncer will not be configured in the cluster. |
| `--patroni-dcs`             | Select the Distributed Configuration Store backend for patroni.<br/>Only option is `etcd` at this time. <br/>Only supported with Patroni as the failover manager.                      | Defaults to `etcd`.                              |
| `--efm-bind-by-hostname`    | Enable efm to use hostnames instead of IP addresses to configure the cluster `bind.address`.                                                                                           | Defaults to use IP addresses                     |

<br/><br/>

### More detail about M1 configuration

You may also specify any of the options described by
[`tpaexec help configure-options`](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-configure/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
