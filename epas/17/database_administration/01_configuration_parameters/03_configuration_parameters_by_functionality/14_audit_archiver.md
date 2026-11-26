---
title: Audit archiving parameters
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/14_audit_archiver/
lastModified: 2025-11-25T20:57:39+05:30
---

# Audit archiving parameters

<div id="audit_archiver" class="registered_link"></div>

These configuration parameters are used by the EDB Postgres Advanced Server database [audit archiving feature](https://www.enterprisedb.com/docs/epas/17/epas_security_guide/05_edb_audit_logging/08_audit_log_archiving/).

## edb\_audit\_archiver

**Parameter type:** Enum

**Default value:** `false`

**Range:** `{true | false}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Restart

**Required authorization to activate:** EDB Postgres Advanced Server service account

Enables or disables database audit archiving.

## edb\_audit\_archiver\_timeout

**Parameter type:** Integer

**Default value:** 300s

**Range:** 30s to 1d

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Enforces a timeout in seconds when a database attempts to archive a log file.

## edb\_audit\_archiver\_filename\_prefix

**Parameter type:** String

**Default value:** `audit-`

**Range:** n/a

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the file name of an audit log file that needs to be archived. The file name must align with the `edb_audit_filename` parameter. The audit files with `edb_audit_archiver_filename_prefix` in the `edb_audit_directory` are eligible for compression or expiration.

## edb\_audit\_archiver\_compress\_time\_limit

**Parameter type:** Integer

**Default value:** -1

**Allowed value:** 0, -1, or any positive number value in seconds

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the time in seconds after which audit logs are eligible for compression. The possible values to set this parameter are:

- `0`. Compression starts as soon as the log file isn't a current file.
- `-1`. Compression of the log file on a timely basis doesn't occur.

## edb\_audit\_archiver\_compress\_size\_limit

**Parameter type:** Integer

**Default value:** -1

**Allowed value:** 0, -1, or any positive number value in megabytes

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies a file size threshold in megabytes, after which audit logs are eligible for compression. If the parameter is set to -1, no compression of the log file occurs based on size.

## edb\_audit\_archiver\_compress\_command

**Parameter type:** String

**Default value:** `gzip %p`

**Range:** n/a

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the command to execute compressing of the audit log files. The default value for `edb_audit_archiver_compress_command` is `gzip %p`. The `gzip` provides a standard method of compressing files. The `%p` in the string is replaced by the path name of the file to archive.

## edb\_audit\_archiver\_compress\_suffix

**Parameter type:** String

**Default value:** `.gz`

**Range:** n/a

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the file name of an already compressed log file. The file name must align with `edb_audit_archiver_compress_command`. The default file name is `.gz`.

## edb\_audit\_archiver\_expire\_time\_limit

**Parameter type:** Integer

**Default value:** -1

**Allowed value:** 0, -1, or any positive number value in seconds

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the time in seconds after which audit logs are eligible to expire. The possible values to set this parameter are:

- `0`. Expiration starts as soon as the log file isn't a current file.
- `-1`. Expiration of the log file on a timely basis doesn't occur.

## edb\_audit\_archiver\_expire\_size\_limit

**Parameter type:** Integer

**Default value:** -1

**Allowed value:** 0, -1, or any positive number value in megabytes

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies a file size threshold in megabytes, after which audit logs are eligible to expire. If the parameter is set to -1, no expiration of a log file based on size occurs.

## edb\_audit\_archiver\_expire\_command

**Parameter type:** String

**Default value:** ''

**Range:** n/a

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the command to execute on an expired audit log file before removal.

## edb\_audit\_archiver\_sort\_file

**Parameter type:** String

**Default value:** `mtime`

**Range:** n/a

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Identifies the oldest log file to sort alphabetically or based on `mtime`.

- `mtime` sorts files based on file modification time.
- `alphabetic` sorts files alphabetically based on the file name.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
