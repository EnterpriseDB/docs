---
title: PXF configuration files
description: Reference for the PXF configuration files under $PXF_BASE/conf and the properties you can set in each.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-files/
lastModified: 2026-08-12T09:50:14Z
---

# PXF configuration files

`$PXF_BASE/conf` holds the files you use to configure the PXF service itself, separate from the server configurations you use to connect to external data sources. See [Managing the PXF cluster](https://www.enterprisedb.com/docs/pxf/latest/administering/) for how to apply a change to any of these files.

## pxf-application.properties

Configures the PXF Service application. Commonly changed properties:

| Property                        | Description                                  | Default     |
| ------------------------------- | -------------------------------------------- | ----------- |
| `server.address`                | The address PXF listens on.                  | `localhost` |
| `pxf.max.threads`               | The maximum number of PXF Tomcat threads.    | 200         |
| `pxf.connection.timeout`        | The connection timeout for read operations.  | 5m          |
| `pxf.connection.upload-timeout` | The connection timeout for write operations. | 5m          |
| `pxf.log.level`                 | The log level for the PXF service.           | info        |

## pxf-env.sh

Configures the PXF Java virtual machine and runtime paths. Commonly changed properties:

| Property            | Description                                                                 | Default              |
| ------------------- | --------------------------------------------------------------------------- | -------------------- |
| `JAVA_HOME`         | The path to the Java JRE home directory.                                    | `/usr/java/default`  |
| `PXF_LOGDIR`        | The PXF log directory.                                                      | `$PXF_BASE/logs`     |
| `PXF_RUNDIR`        | The PXF run directory.                                                      | `$PXF_BASE/run`      |
| `PXF_JVM_OPTS`      | The default options for the PXF JVM, including heap size.                   | `-Xmx2g -Xms1g`      |
| `PXF_OOM_KILL`      | Whether PXF terminates itself automatically on an out-of-memory error.      | true                 |
| `PXF_OOM_DUMP_PATH` | The absolute path to the dump file PXF generates on an out-of-memory error. | No dump file (empty) |
| `PXF_LOADER_PATH`   | Additional directories and JARs for PXF to class-load.                      | (empty)              |
| `LD_LIBRARY_PATH`   | Additional directories and native libraries for PXF to load.                | (empty)              |

You already edited this file to set `JAVA_HOME` in [Configuring and starting PXF](https://www.enterprisedb.com/docs/pxf/latest/configuring/).

`PXF_HOST` and `PXF_PORT` aren't part of `pxf-env.sh`. They're plain environment variables you set in `~/.bashrc` on a host, and they tell the `pxf` extension where to reach the PXF service, rather than configuring the service itself. Set them only if you're running PXF on a non-default port or on a host other than the one WHPG expects.

## pxf-log4j2.xml

Configures PXF and third-party library logging. The root logger, which covers PXF's own code, logs at the level set by `pxf.log.level` in `pxf-application.properties`, `info` by default. Third-party libraries PXF depends on, such as `org.apache.hadoop` and `org.apache.parquet`, already have their own `<Logger>` entries tuned to a quieter level, so they don't flood the log at `info`.

Add a `<Logger>` element inside `<Loggers>` to set a level for a specific package, for example to debug PXF's Hive connector:

```xml
<Logger name="org.greenplum.pxf.plugins.hive" level="debug"/>
```

## pxf-profiles.xml

Defines custom PXF profiles, pairing a name with the Java classes that read or write data for it. PXF's built-in profiles are already defined for you, so you only need this file if you're adding a custom profile:

```xml
<profiles>
    <profile>
        <name>my_profile</name>
        <description>A custom profile</description>
        <plugins>
            <fragmenter>com.example.MyFragmenter</fragmenter>
            <accessor>com.example.MyAccessor</accessor>
            <resolver>com.example.MyResolver</resolver>
        </plugins>
    </profile>
</profiles>
```

`fragmenter`, `accessor`, and `resolver` are fully qualified names of Java classes implementing PXF's plugin interfaces. Reference the profile from a `LOCATION` clause with `PROFILE=my_profile`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
