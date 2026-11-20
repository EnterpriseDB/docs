---
title: Updating an RPM installation
description: Describes how to upgrade your repository configuration file and update to a more recent product version
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/installing/linux_install_details/updating_an_rpm_installation/
lastModified: 2025-11-25T20:57:39+05:30
---

# Updating an RPM installation

If you have an existing EDB Postgres Advanced Server RPM installation, you can use yum or dnf to upgrade your repository configuration file and update to a more recent product version.

To update the `enterprisedb-enterprise.repo` file, assume superuser privileges and enter:

```text
dnf upgrade enterprisedb-enterprise
```

`dnf` updates the `enterprisedb-enterprise.repo` file to enable access to the current EDB repository. Then, you can use `dnf` to upgrade all packages whose names include the expression `edb`:

```text
dnf upgrade edb*
```

> **Note**
>
> The `dnf upgrade` command performs an update only between minor releases. To update between major releases, use `pg_upgrade`.

For more information about using dnf commands and options, see the [dnf documentation](https://docs.fedoraproject.org/en-US/quick-docs/dnf/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
