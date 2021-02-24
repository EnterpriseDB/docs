## Recommended Settings

This section walks you through the recommended settings while using pgBackRest.

### Encryption

Use the following settings to encrypt the files in the repository `repo1`: 

```ini
repo1-cipher-pass=FIXME
repo1-cipher-type=aes-256-cbc
```

The `cipher-pass` should be **base64** encoded. For example, to generate a random passphrase use the following setting:

```bash
$ openssl rand -base64 48
```

### Maximum Number of Processes

Use the following setting to set the maximum number of processes for compression usage and file transfer: 

```ini
process-max=FIXME
```

Each process will perform compression and transfer to make the command run faster, but do not set `process-max` so high that it impacts server load and performance.

### Backup Fast Start

Use the `start-fast=y` setting to force a checkpoint to start the backup quickly. This is achieved inside pgBackRest by passing **true** to the fast parameter of the **pg_start_backup()** database function. The backup will then begin immediately rather than waiting for the next regular checkpoint triggered by the database server itself.

### Delta

Use the `delta=y` setting to restore or backup using checksums.

During a restore, the data and tablespaces directories are expected to be present, but empty. This option performs a delta restore using checksums.

During a backup, this option will use checksums instead of timestamps to determine if files will be copied.

### Log Levels

The output of each command will be printed in the console and a log file. 

Use the following `log-level-console` and `log-level-file` settings to apply the log level: 

- **off**;
- **error**;
- **warn**;
- **info**;
- **detail**;
- **debug**;
- **trace**.

**CAUTION:** Trace-level logging may expose secrets such as keys and passwords.

To add more output in the log file in case the executed command encounters an error and to avoid re-executing the command for more information, use the following settings: 

```ini
log-level-console=info
log-level-file=debug
```

### Glossary

#### pgBackRest

[`delta`](https://pgbackrest.org/configuration.html#section-general/option-delta)
[`log-level-console`](https://pgbackrest.org/configuration.html#section-log/option-log-level-console)
[`log-level-file`](https://pgbackrest.org/configuration.html#section-log/option-log-level-file)
[`process-max`](https://pgbackrest.org/configuration.html#section-general/option-process-max)
[`repo-cipher-pass`](https://pgbackrest.org/configuration.html#section-repository/option-repo-cipher-pass)
[`repo-cipher-type`](https://pgbackrest.org/configuration.html#section-repository/option-repo-cipher-type)
