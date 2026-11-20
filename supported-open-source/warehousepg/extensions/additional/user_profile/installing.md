---
title: Installing and upgrading user_profile
description: Install, load, register, and upgrade the user_profile extension for WarehousePG.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/user_profile/installing/
lastModified: 2026-11-03T17:16:52Z
---

# Installing and upgrading user\_profile

Install the user\_profile package on each host in your WarehousePG cluster, as it doesn't ship as part of the WarehousePG server package.

## Supported platforms

user\_profile platform support differs by WarehousePG version:

| WarehousePG version | Architecture | Operating systems |
| ------------------- | ------------ | ----------------- |
| 7                   | x86\_64      | RHEL 8, 9         |
| 7                   | ppc64le      | RHEL 8, 9         |
| 6                   | x86\_64      | RHEL 7, 8, 9      |

RHEL 7 support for WarehousePG 6 starts with user\_profile 1.0.3. See the [release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/user_profile/release_notes/).

## Installing the package

Refer to [Downloading and installing an extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#downloading-and-installing-an-extension) for instructions on downloading the package and installing it on every host. The package name is `edb-whpg6-user_profile` for WarehousePG 6, or `edb-whpg7-user_profile` for WarehousePG 7.

## Loading and registering user\_profile

Load the extension as a shared library, then create it in your database.

1. Check for existing shared libraries:

   ```bash
   gpconfig -s shared_preload_libraries
   ```

2. Use the output of the previous command to enable the new extension, along with any other shared libraries, and restart WarehousePG:

   ```bash
   gpconfig -c shared_preload_libraries -v '<other_libraries>, user_profile'
   gpstop -ar
   ```

3. Create the extension in your database:

   ```sql
   CREATE EXTENSION user_profile;
   ```

> **Important**
>
> For user\_profile versions earlier than 1.0.2, manually create the extension's SQLite database before you restart the database, to avoid connection failures for non-local, password-authenticated users:
>
> 1. Check for existing shared libraries:
>
>    ```bash
>    gpconfig -s shared_preload_libraries
>    ```
>
> 2. Use the output of the previous command to enable the new extension, along with any other shared libraries. Don't restart WHPG yet:
>
>    ```bash
>    gpconfig -c shared_preload_libraries -v '<other_libraries>, user_profile'
>    ```
>
> 3. Create the extension in your database:
>
>    ```sql
>    CREATE EXTENSION user_profile;
>    ```
>
> 4. Create the SQLite database for the extension:
>
>    ```sql
>    SELECT up_init();
>    ```
>
> 5. Restart WHPG:
>
>    ```bash
>    gpstop -ar
>    ```

## Verifying the installation

Confirm that user\_profile is registered in the database:

```sql
\dx user_profile
```

## Managing the user\_profile storage

user\_profile stores profiles and per-role state in a SQLite database, not in the WarehousePG catalog. The `user_profile.db` file is in the coordinator data directory, which is `$COORDINATOR_DATA_DIRECTORY` on WarehousePG 7 and `$MASTER_DATA_DIRECTORY` on WarehousePG 6. The coordinator creates the database automatically when it loads the preloaded library, so a restart with `gpstop -ar` is enough to get a working storage.

If the storage is lost, for example because it was deleted by accident, create a new, empty one. Profiles, role assignments, and password history aren't restored, so set them up again or restore the `user_profile.db` file from a backup. A restart with `gpstop -ar` also creates the storage. The `up_init()` function is safe to run more than once:

```sql
SELECT up_init();
```

Keep the following in mind when you plan your cluster:

- The SQLite database isn't replicated to the standby coordinator. After a failover, the new coordinator doesn't have your profiles or per-role state, so you must restore the `user_profile.db` file yourself.
- In user\_profile 1.0.2 and later, if user\_profile can't open the storage, WarehousePG still allows password-based logins and writes a warning to the coordinator log. No profile rules are enforced, and setting a password with `CREATE ROLE` or `ALTER ROLE` fails until the storage is available again.

## Upgrading user\_profile

The [release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/user_profile/release_notes/) state whether a release changes the SQL objects. If it doesn't, the extension version stays the same and you don't need to run `ALTER EXTENSION`.

1. Upgrade the user\_profile package on every host. Refer to [Upgrading an extension](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/#upgrading-an-extension) for downloading and distributing the new package. The package name is `edb-whpg6-user_profile` for WarehousePG 6, or `edb-whpg7-user_profile` for WarehousePG 7.

2. Restart WarehousePG to load the new library:

   ```bash
   gpstop -ar
   ```

3. If the release notes say the release changes the SQL objects, update the extension in each database where you registered it:

   ```sql
   ALTER EXTENSION user_profile UPDATE;
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
