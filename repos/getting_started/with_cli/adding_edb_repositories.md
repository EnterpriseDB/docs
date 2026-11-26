---
title: Adding EDB repositories using the command line
description: How to add EDB repositories to your system using the command line
product: EDB repositories and downloading
url: https://www.enterprisedb.com/docs/repos/getting_started/with_cli/adding_edb_repositories/
lastModified: 2026-06-04T17:31:33Z
---

# Adding EDB repositories using the command line

Using the command line to add repositories allows you more flexibility when adding EDB repositories to your system than using the website. The website currently supports only Enterprise subscriptions, but the CLI allows you to add any EDB repository, including `community360`, `standard`, `enterprise`, and `postgres_distributed`.

See [Repositories by name](https://www.enterprisedb.com/docs/repos/reference/repositories_by_name/) for a list of repositories and the subscriptions that can access them. If you don't know what your subscription is, contact your EDB account manager or support representative.

1. From your EDB account, [get your token](https://www.enterprisedb.com/docs/repos/getting_started/get_your_token/).

2. Save your token in the environment variable `$EDB_SUBSCRIPTION_TOKEN`:

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=your_token_here
   ```

3. Save your required repository name in the environment variable `$EDB_REPO`:

   ```bash
   export EDB_REPO=your_repository_name_here
   ```

4. Depending on your operating system, run the appropriate curl command.

   **RHEL/AlmaLinux/RockyLinux/Oracle Linux and SUSE:**

   ```bash
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   ```

   **Ubuntu/Debian:**

   ```bash
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.deb.sh" | sudo -E bash
   ```

5. You can now install packages from that EDB repository. Move on to [installing named packages](https://www.enterprisedb.com/docs/repos/getting_started/with_cli/install_named_package/) to install the packages you need.

> **Note**
>
> If you have any issues, see [Troubleshooting](https://www.enterprisedb.com/docs/repos/getting_started/troubleshooting/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
