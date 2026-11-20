---
title: Configuring EDB Repos 2.0 repositories
description: How to configure EDB Repos 2.0 package repositories.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/edb_repositories/
lastModified: 2024-08-22T08:26:53+01:00
---

# Configuring EDB Repos 2.0 repositories

TPA sources EDB software from
[EDB Repos 2.0](https://www.enterprisedb.com/repos/).
To use EDB Repos 2.0 you must `export EDB_SUBSCRIPTION_TOKEN=xxx`
before you run tpaexec.
You can get your subscription token from
[the web interface](https://www.enterprisedb.com/repos-downloads).

> **Note**
>
> If you create your `config.yml` file using the `tpaexec configure`
> command, the `edb_repositories` key will be automatically populated with
> the necessary repositories for your selected configuration, so you
> shouldn't need to edit it.

To specify the complete list of repositories from EDB Repos 2.0 to
install on each instance, set `edb_repositories` to a list of EDB
repository names:

```yaml
cluster_vars:
  edb_repositories:
    - enterprise
    - postgres_distributed
```

This example will install the 'enterprise' subscription repository as
well as 'postgres\_distributed' giving access to EPAS and PGD products.
On Debian or Ubuntu systems, it will use the APT repository and on
RedHat or SLES systems, it will use the rpm repositories, through the yum
or zypper frontends respectively.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
