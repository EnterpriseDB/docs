---
title: Environment
description: Controlling the target instances environment during deployment.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/target_environment/
lastModified: 2025-11-26T13:14:02+01:00
---

# Environment

You can set `target_environment` to specify environment variables that
TPA should set on the target instances during deployment (e.g., to
specify an HTTPS proxy, as shown below).

```yaml
cluster_vars:
    target_environment:
        https_proxy: https://proxy.example:8080
```

TPA will ensure these settings are present in the environment (along
with any others it needs) during deployment and the later execution of
any cluster management commands.

These environment settings are not persistent, but you can instead use
[`extra_bashrc_lines`](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_user/) to set environment variables
for the postgres user.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
