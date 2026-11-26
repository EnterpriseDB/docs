---
title: Monitoring
description: Monitoring EDB Postgres Distributed through Postgres Enterprise Manager, SQL, and OpenTelemetry
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/monitoring/
lastModified: 2025-02-26T18:09:18Z
---

# Monitoring

Monitoring replication setups is important to ensure that your system:

- Performs optimally
- Doesn't run out of disk space
- Doesn't encounter other faults that might halt operations

It's important to have automated monitoring in place to ensure that the administrator is alerted and can
take proactive action when issues occur. For example, the administrator can be alerted if
replication slots start falling badly behind.

EDB provides Postgres Enterprise Manager (PEM), which supports PGD starting with version 8.1. See [Monitoring EDB Postgres Distributed](https://www.enterprisedb.com/docs/pem/latest/monitoring_BDR_nodes/) for more information.

Alternatively, tools or users can make their own calls into information views
and functions provided by the BDR extension. See [Monitoring through SQL](https://www.enterprisedb.com/docs/pgd/5.6/monitoring/sql/) for
details.

EDB Postgres Distributed also integrates with OpenTelemetry, allowing you to
use an existing reporting setup to follow the state of the EDB Postgres Distributed
cluster. See [OpenTelemetry integration](https://www.enterprisedb.com/docs/pgd/5.6/monitoring/otel/) for details.

- [OpenTelemetry integration](https://www.enterprisedb.com/docs/pgd/5.6/monitoring/otel/): You can configure EDB Postgres Distributed to report monitoring information
- [Monitoring through SQL](https://www.enterprisedb.com/docs/pgd/5.6/monitoring/sql/): EDB Postgres Distributed provides several monitoring and statistics views that

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
