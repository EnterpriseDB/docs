---
title: Configuring edbctl
description: Configure the edbctl command line tool to manage resources and perform database cluster operations for Hybrid Manager.
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/install/configuring/
lastModified: 2026-06-05T10:39:01+02:00
---

# Configuring edbctl

After installing the package, configure an [access key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/using_the_api/access_key/) using the `credential` command.

These credentials allow you to access the supported Hybrid Manager (HM) resources and manage them using the CLI. The CLI supports various commands for managing projects, clusters, backups, credentials, and more.

### Example

This example shows how to import an access key and set the context project for the CLI:

```bash
edbctl credential import-access-key --name user1 --access-key your_HM_access_key --address https://YOUR_HM_INSTANCE_URL:443

edbctl config set context_project "Your Project Name"
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
