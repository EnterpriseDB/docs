---
title: Monitoring
description: Monitoring EDB Postgres Distributed through Postgres Enterprise Manager, SQL, and PGD Monitor
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/
lastModified: 2026-08-21T09:17:12+02:00
---

# Monitoring

Monitoring replication setups is important to ensure that your system:

- Performs optimally
- Doesn't run out of disk space
- Doesn't encounter other faults that might halt operations

It's important to have automated monitoring in place to ensure that the
administrator is alerted and can take proactive action when issues occur. For
example, the administrator can be alerted if replication slots start falling
badly behind.

EDB provides Postgres Enterprise Manager (PEM), which supports PGD starting with
version 8.1. See [Monitoring EDB Postgres
Distributed](https://www.enterprisedb.com/docs/pem/latest/monitoring_BDR_nodes/) for more information.

Tools or users can also make their own calls into information views
and functions provided by the BDR extension. See [Monitoring through SQL](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/sql/)
for details.

Every PGD node also serves PGD Monitor, a built-in monitoring web application with a REST API and a Prometheus scrape endpoint alongside it. See [PGD Monitor](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/pgd-monitor/) for details.

- [Monitoring through SQL](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/sql/): EDB Postgres Distributed provides several monitoring and statistics views that
- [Using the PGD Monitor](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/pgd-monitor/): Enabling and accessing PGD Monitor, the built-in monitoring web UI, REST API, and Prometheus endpoint served by every PGD node.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
