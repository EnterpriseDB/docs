## Retention Policy

Use the retention policy options to remove obsolete backups.

### `repo1-retention-full`

Use this option to set the full backup retention.  

- The `repo1-retention-full-type` option determines how the `repo1-retention-full` option is interpreted. Set `repo1-retention-full-type` to **count** (default) to retain a specific number of full backups and set it to **time** to retain full backups for a specific time duration. 

- For example, if `repo1-retention-full-type=count` and `repo-retention-full=2`, _pgBackRest_ will retain the 2 last successful full backups.

- If `repo1-retention-full-type=time`, then full backups older than the `repo1-retention-full` value (days) will be removed from the repository if there is at least one full backup remaining that is equal to or greater than that value. For example, if `repo1-retention-full-type=time` and `repo-retention-full=30` (days), and there are currently two full backups - one 25 days old and another 35 days old, the 35-days-old full backup will not be removed even though it meets the criteria. This happens because removing the 35-day-old full backup would leave only one backup of 25 days old, which is not equal to or greater than the `repo1-retention-full` value of 30 days. 

- Archived WAL files that are older than the remaining oldest full backup will be automatically removed unless `repo1-retention-archive-type` and `repo1-retention-archive` are explicitly set.

- When a full backup expires, all differential and incremental backups associated with it will also expire. When the option is not defined, a warning will be issued. If you want to retain the backup indefinitely, then you must set this option to the maximum value.

### `repo1-retention-diff`

Use this option to set the number of differential backups retention.

When a differential backup expires, all incremental backups associated with the differential backup will also expire. When not defined, all differential backups will be retained until the dependent full backups expire.

---

### Archives

To remove archived WAL files, use the following settings: 

NOTE: In some cases, the oldest archived WAL file in the repository might be older than the first backup WAL start location, so it will never be removed.

#### `repo1-retention-archive-type`

Backup type for WAL retention.

- If this option is set to **full**, _pgBackRest_ will keep archived WAL files for the number of full backups defined by `repo1-retention-archive`.

- If this option is set to **diff** (differential), _pgBackRest_ will keep archives for the number of full and differential backups defined by `repo1-retention-archive`; i.e. if the last backup taken was a full backup, it will be counted as a differential for the purpose of the repository retention.

- If this option is set to **incr** (incremental), _pgBackRest_ will keep archives for the number of full, differential, and incremental backups defined by `repo1-retention-archive`.

It is recommended not to change this setting from the default, which will only remove archives along with removing full backups.

#### `repo1-retention-archive`

Number of backups worth of continuous WAL retention.

NOTE: WAL segments required to make a backup consistent are always retained until the backup expires regardless of how this option is configured.

- If this value is not set and `repo1-retention-full-type` is set to **count** (default), then the archives to expire will default to the `repo1-retention-full` (or `repo1-retention-diff`) value corresponding to the `repo1-retention-archive-type` if set to **full** (or **diff**). This will ensure that the archived WAL files are only removed for corresponding expired backups.

- If `repo1-retention-full-type` is set to **time**, then this value will default to removing archived WAL files that are older than the oldest full backup retained after satisfying the `repo1-retention-full` setting.

- This option must be set if `repo1-retention-archive-type` is set to **incr**.

- If disk space is at a premium, then use this setting, in conjunction with `repo1-retention-archive-type`, to remove WAL segments. However, it is **not recommended** to use this setting as it negates the ability to perform point-in-time recovery from the backups with expired WAL.

---

### Glossary

#### pgBackRest

[`repo-retention-archive-type`](https://pgbackrest.org/configuration.html#section-repository/option-repo-retention-archive-type)
[`repo-retention-archive`](https://pgbackrest.org/configuration.html#section-repository/option-repo-retention-archive)
[`repo-retention-diff`](https://pgbackrest.org/configuration.html#section-repository/option-repo-retention-diff)
[`repo-retention-full-type`](https://pgbackrest.org/configuration.html#section-repository/option-repo-retention-full-type)
[`repo-retention-full`](https://pgbackrest.org/configuration.html#section-repository/option-repo-retention-full)
