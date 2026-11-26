---
title: Configuring .pgpass
description: Defining the generated .pgpass file with TPA.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/pgpass/
lastModified: 2025-06-25T06:02:41-04:00
---

# Configuring .pgpass

TPA creates `~postgres/.pgpass` by default with the passwords
for the `postgres_user` (`postgres` or `entreprisedb` by default
depending on the `postgres_flavour`) in it, for use between cluster instances.

You can set `pgpass_users` to create entries for a different list of
users. Note that the `pgpass_users` list overrides default values,
so the `postgres_user` (`postgres`/`enterprisedb`) is NOT included
unless you explicitly include it in the `pgpass_users` list.

You can also include the `postgres/pgpass` role from hook scripts to
create your own `.pgpass` file:

```yaml
- include_role: name=postgres/pgpass
  vars:
    pgpassfile: ~otheruser/.pgpass
    pgpass_owner: otheruser
    pgpass_group: somegroup
    pgpass_users:
    - xyzuser
    - pqruser
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
