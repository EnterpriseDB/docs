---
title: Monitoring
description: Monitoring EDB Postgres Distributed through Postgres Enterprise Manager, SQL, and OpenTelemetry
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/monitoring/
lastModified: 2026-05-27T12:38:38+01:00
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

Alternatively, tools or users can make their own calls into information views
and functions provided by the BDR extension. See [Monitoring through SQL](https://www.enterprisedb.com/docs/pgd/6.3/monitoring/sql/)
for details.

- [Monitoring through SQL](https://www.enterprisedb.com/docs/pgd/6.3/monitoring/sql/): EDB Postgres Distributed provides several monitoring and statistics views that

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
