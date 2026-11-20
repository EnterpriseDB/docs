---
title: Creating Postgres tablespaces
description: Tablespaces in Postgres and how to configure them with TPA.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_tablespaces/
lastModified: 2024-06-24T11:42:56+01:00
---

# Creating Postgres tablespaces

To create Postgres tablespaces during deployment, define their names and
locations in `postgres_tablespaces` under `cluster_vars` or a particular
instance's `vars` in config.yml.

If you [define volumes](https://www.enterprisedb.com/docs/tpa/latest/reference/volumes/) with
`volume_for: postgres_tablespace` set and a `tablespace_name` defined,
they will be added as default entries to `postgres_tablespaces`.

```yaml
cluster_vars:
  postgres_tablespaces:
    explicit:
      location: /some/path

instances:
- Name: example
  …
  volumes:
  - device_name: /dev/xvdh
    …
    vars:
      volume_for: postgres_tablespace
      tablespace_name: implicit
```

The example above would create two tablespaces: explicit (at /some/path)
and implicit (at /opt/postgres/tablespaces/implicit/tablespace\_data by
default, unless you specify a different mountpoint for the volume).

Every `postgres_tablespace` volume must have `tablespace_name` defined;
the tablespace location will be derived from the volume's mountpoint.

Every entry in `postgres_tablespaces` must specify a tablespace name (as
the key) and its `location`. If you are specifying tablespace locations
explicitly, do not put tablespaces inside PGDATA, and do not use any
volume mountpoint directly as a tablespace location (`lost+found` will
confuse some tools into thinking the directory is not empty).

By default, the tablespace `owner` is `postgres`, but you can set it to
any valid username (the users in [`postgres_users`](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_users/)
will have been created by this time).

Streaming replicas must have the same `postgres_tablespace` volumes and
`postgres_tablespaces` setting as their upstream instance

You can set the default tablespace for a database in
[`postgres_databases`](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_databases/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
