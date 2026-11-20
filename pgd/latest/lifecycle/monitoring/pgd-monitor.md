---
title: Using the PGD Monitor
description: Enabling and accessing PGD Monitor, the built-in monitoring web UI, REST API, and Prometheus endpoint served by every PGD node.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/pgd-monitor/
lastModified: 2026-08-21T09:17:23+02:00
---

# Using the PGD Monitor

PGD Monitor is a built-in monitoring web application served by every PGD node. It runs as a background worker inside the Postgres instance, requiring no separate installation, deployment, or database connection. It provides:

- a web UI for interactive troubleshooting
- a JSON REST API under `/api/v1/`, exposing the same data the UI renders
- a Prometheus scrape endpoint at `/metrics`, for feeding an existing observability stack
- health probes at `/is-live` and `/is-ready` for orchestration

PGD Monitor doesn't replace the SQL-level monitoring interfaces covered in [Monitoring through SQL](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/sql/). It builds on top of those, plus the standard Postgres statistics views, through a shared metric registry. See [Monitoring metrics reference](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/monitoring-metrics/) for the full list of metrics this registry collects, and [`bdr.ts_metrics()`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/functions/#bdrts_metrics) for querying it directly over SQL.

## Enabling and configuring PGD Monitor

Enable PGD Monitor on every node that will serve it:

1. Set [`bdr.monitor_enabled`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/pgd-settings/#bdrmonitor_enabled) to `on` in the node's `postgresql.conf`, or run `ALTER SYSTEM SET bdr.monitor_enabled = 'on'`.
2. Reload the configuration: `SELECT pg_reload_conf();`. No restart is required.

Once enabled, the HTTP server listens on the same addresses as Postgres, on a port 1005 higher than the Postgres port by default. For example, a node running Postgres on port 5432 serves PGD Monitor on port 6437.

To use a different port or turn on HTTPS, set the [`monitor_http_port` and `monitor_use_https`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/nodes-management-interfaces/#bdralter_node_group_option) node group options with `bdr.alter_node_group_option`. Unlike `bdr.monitor_enabled`, these settings are node group options, set once and inherited by every member node. For example:

```sql
SELECT bdr.alter_node_group_option('top_group', 'monitor_http_port', '8443');
SELECT bdr.alter_node_group_option('top_group', 'monitor_use_https', 'true');
```

HTTPS reuses the server's SSL certificate configuration by default. To use different certificate files, set [`bdr.monitor_ssl_cert_file`, `bdr.monitor_ssl_key_file`, and `bdr.monitor_ssl_ca_file`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/pgd-settings/#bdrmonitor_ssl_cert_file) on each node individually, then reload the configuration.

## Using PGD Monitor

- [Using the web UI](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/pgd-monitor/web-ui/) to monitor your cluster interactively
- [Using Prometheus](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/pgd-monitor/prometheus/) to scrape metrics into an existing observability stack

You can also authenticate against the REST API with a Postgres role name and password, using a role that's a member of Postgres's [`pg_monitor`](https://www.postgresql.org/docs/current/predefined-roles.html) predefined role, or a superuser. The REST API may change between releases, so treat the following as best-effort rather than a stable integration point:

```bash
# Log in and save the session cookie.
curl -c cookies.txt -X POST https://node1.example.com:6437/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{"username": "monitoring_role", "password": "..."}'

# Reuse the cookie for subsequent authenticated requests.
curl -b cookies.txt https://node1.example.com:6437/api/v1/cluster/health
```

- [Web UI](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/pgd-monitor/web-ui/): A tour of every page in the PGD Monitor web UI, including navigation, node group scoping, and what each page shows.
- [Prometheus](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/pgd-monitor/prometheus/): Scraping PGD Monitor's Prometheus endpoint, configuring a scrape target, and the metric conventions and exclusions that apply.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
