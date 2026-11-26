---
title: Upgrading
product: PgBouncer
version: "1"
url: https://www.enterprisedb.com/docs/pgbouncer/latest/upgrading/
lastModified: 2024-06-26T10:57:52-04:00
---

# Upgrading

You can upgrade to a patch release with a simple in place upgrade. A minor release upgrade, such as upgrading from 1.15 to 1.16, requires additional steps.

## Upgrading a minor release

To upgrade to a new minor release:

1. Install the new version of EDB PgBouncer. For instructions, see [Installing](https://www.enterprisedb.com/docs/pgbouncer/latest/installing/).

2. If you have any custom configurations in the `edb-pgbouncer.ini` and `userlist.txt` files for the previously installed version, copy them from the versions of those files where the customization were made and paste them to the corresponding files for the release you just installed.

3. Stop the previous version.

4. Start and enable the new version.

5. Test the new version to make sure it's running.

6. After successfully deploying the new version, remove the previous version with the following command:

   ```shell
   <package-manager> remove edb-pgbouncer<xx>
   ```

   Where:

   - `<package-manager>` is the package manager used with your operating system:

     | Package manager | Operating system                |
     | --------------- | ------------------------------- |
     | dnf             | RHEL 8 or later and derivatives |
     | zypper          | SLES                            |
     | apt-get         | Debian and derivatives          |

   - `<xx>` is the previous version.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
