---
title: Cloud Service April 2024 release notes
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/release_notes/2024/2024_04_apr_rel_notes/
lastModified: 2026-06-25T17:54:04+05:30
---

# Cloud Service April 2024 release notes

Cloud Service's April 2024 release includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | A known issue "A PGD replication slot may fail to transition cleanly from disconnect to catch up" with EDB Postgres Distributed has been resolved. With this resolution, for example, if you were to delete a VM as part of a fault injection exercise, the replication slot will reconnect in a timely manner. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
