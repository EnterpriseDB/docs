---
title: Upgrading Slony Replication
product: Slony Replication
version: 2.2.10
url: https://www.enterprisedb.com/docs/slony/latest/03_upgrade/
lastModified: 2022-07-14T12:45:18-04:00
---

# Upgrading Slony Replication

<div id="upgrade" class="registered_link"></div>

The following section outlines the process of upgrading Slony Replication.

Assume the identity of the root user and invoke the following command:

```text
yum upgrade edb-as<xx>-slony-replication*
```

where \<xx> is the EDB Postgres Advanced Server version.

For example, to upgrade Slony Replication for EDB Postgres Advanced Server version 13, you need to execute the command:

```text
yum upgrade epas13-replication
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
