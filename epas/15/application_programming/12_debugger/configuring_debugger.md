---
title: Configuring the debugger
description: Describes how to configure the debugger program prior to use
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/12_debugger/configuring_debugger/
lastModified: 2023-11-09T17:35:38+05:30
---

# Configuring the debugger

The debugger is integrated with pgAdmin 4 and EDB Postgres Enterprise Manager. If you installed EDB Postgres Advanced Server on a Windows host, pgAdmin 4 is automatically installed. The pgAdmin 4 icon is in the Windows Start menu.

You can use the debugger in two basic ways to test programs:

- **Standalone debugging** — Use the debugger to start the program to test. Supply any input parameter values required by the program. You can immediately observe and step through the code of the program. Standalone debugging is the typical method used for new programs and for initial problem investigation.
- **In-context debugging** — In-context debugging is useful if it's difficult to reproduce a problem using standalone debugging due to complex interaction with the calling application. Using this approach, the program to test is started by an application other than the debugger. You set a _global breakpoint_ on the program to test. The application that makes the first call to the program encounters the global breakpoint. Then the application suspends execution. At that point, the debugger takes control of the called program. You can then observe and step through the code of the called program as it runs in the context of the calling application.

  After you have completely stepped through the code of the called program in the debugger, the suspended application resumes executing.

The debugging tools and operations are the same whether using standalone or in-context debugging. The difference is in how to invoke the program being debugged.

If your EDB Postgres Advanced Server host is on a CentOS or Linux system, you can use `yum` to install pgAdmin4. Open a command line, assume superuser privileges, and enter:

```shell
yum install edb-pgadmin4*
```

On Linux, you must also install the `edb-as<xx>-server-pldebugger` RPM package, where `<xx>` is the EDB Postgres Advanced Server version number. Information about pgAdmin 4 is available at the [pgAdmin website](https://www.pgadmin.org/).

The RPM installation adds the pgAdmin4 icon to your Applications menu.

Before using the debugger, edit the `postgresql.conf` file (located in the `data` subdirectory of your EDB Postgres Advanced Server home directory). Add `$libdir/plugin_debugger` to the libraries listed in the `shared_preload_libraries` configuration parameter:

```ini
shared_preload_libraries = '$libdir/dbms_pipe,$libdir/edb_gen,$libdir/plugin_debugger'
```

- On Linux, the `postgresql.conf` file is located in: `/var/lib/edb/as<xx>/data`
- On Windows, the `postgresql.conf` file is located in: `C:\Program Files\edb\as<xx>\data`

Where `<xx>` is the version of EDB Postgres Advanced Server.

After modifying the `shared_preload_libraries` parameter, restart the database server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
