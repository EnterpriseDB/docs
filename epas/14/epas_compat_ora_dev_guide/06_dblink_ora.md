---
title: dblink_ora
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/
lastModified: 2023-02-14T16:10:29+05:30
---

# dblink\_ora

dblink\_ora enables you to issue arbitrary queries to a remote Oracle server. It provides an OCI-based database link that allows you to `SELECT`, `INSERT`, `UPDATE`, or `DELETE` data stored on an Oracle system from EDB Postgres Advanced Server.

## Connecting to an Oracle database

To enable Oracle connectivity, download Oracle's freely available OCI drivers from [their website](http://www.oracle.com/technetwork/database/database-technologies/instant-client/overview/index.html).

For Linux, if the Oracle instant client that you downloaded doesn't include the `libclntsh.so` library, you must create a symbolic link named `libclntsh.so` that points to the downloaded version. Navigate to the instant client directory and execute the following command:

```text
ln -s libclntsh.so.<version> libclntsh.so
```

Where `version` is the version number of the `libclntsh.so` library. For example:

```text
ln -s libclntsh.so.12.1 libclntsh.so
```

Before creating a link to an Oracle server, you must direct EDB Postgres Advanced Server to the correct Oracle home directory. Set the `LD_LIBRARY_PATH` environment variable on Linux or `PATH` on Windows to the `lib` directory of the Oracle client installation directory.

Alternatively, you can set the value of the `oracle_home` configuration parameter in the `postgresql.conf` file. The value specified in the `oracle_home` configuration parameter overrides the `LD_LIBRARY_PATH` environment variable in Linux and `PATH` environment variable in Windows.

> **Note**
>
> The `oracle_home` configuration parameter provides the correct path to the Oracle client, that is, the `OCI` library.

To set the `oracle_home` configuration parameter in the `postgresql.conf` file, edit the file and add the following line:

```text
oracle_home = '<lib_directory>'
```

In place of `<lib_directory>`, substitute the name of the `oracle_home` path to the Oracle client installation directory that contains `libclntsh.so` in Linux and `oci.dll` in Windows.

After setting the `oracle_home` configuration parameter, you must restart the server for the changes to take effect. Restart the server:

- On Linux, using the `systemctl` command or `pg_ctl` services.

- On Windows, from the Windows Services console.

* [dblink\_ora functions and procedures](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/01_dblink_ora_functions_and_procedures/): dblink\_ora supports functions and procedures that enable you to issue arbitrary queries to a remote Oracle server.
* [Calling dblink\_ora functions](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/02_calling_dblink_ora_functions/): The following command establishes a connection using the dblinkoraconnect() function:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
