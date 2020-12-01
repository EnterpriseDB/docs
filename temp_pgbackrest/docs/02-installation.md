## Installation

### PGDG Repositories

Packages for _pgBackRest_ are available on the following platforms.

#### Debian/Ubuntu

To install _pgBackRest_, configure the [apt.postgresql.org](https://www.postgresql.org/download/linux/ubuntu/) repository and then run:

```bash
$ sudo apt-get install pgbackrest
```

The following additional packages will be installed:

* `postgresql-client-common`
* `postgresql-common`

#### RHEL/CentOS

To install _pgBackRest_, configure the [yum.postgresql.org](https://yum.postgresql.org/) repository and then run:

```bash
$ sudo yum install pgbackrest
```

The following additional package will be installed:

* `postgresql-libs`

---

### EDB Postgres Advanced Server

The PGDG packages will fetch **PostgreSQL** libraries and create the `postgres` system user.

If **EDB Postgres Advanced Server** is already installed on the system, the libraries installed at that time would be used.

By default, the packages create the following directories owned by `postgres`:
* `/var/lib/pgbackrest`
* `/var/log/pgbackrest`
* `/var/spool/pgbackrest`

The `pg_hba.conf` settings should allow the `postgres` user to execute the `pgbackrest` command.

If you are using **EDB Postgres Advanced Server**, the `enterprisedb` system user will execute the `pgbackrest` command. The following commands will change the ownership of the _pgBackRest_ directories:

```bash
$ sudo chown -R enterprisedb: /var/lib/pgbackrest
$ sudo chown -R enterprisedb: /var/log/pgbackrest
$ sudo chown -R enterprisedb: /var/spool/pgbackrest
```
