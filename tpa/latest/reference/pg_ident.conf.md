---
title: pg_ident.conf
description: Working with pg_ident.conf.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/pg_ident.conf/
lastModified: 2024-08-22T08:26:53+01:00
---

# pg\_ident.conf

You should not normally need to change `pg_ident.conf`, and by default,
TPA will not modify it.

You can set `postgres_ident_template` to replace `pg_ident.conf` with
whatever content you like.

```yaml
cluster_vars:
    pg_ident_template: ident.j2
```

You will also need to create `templates/ident.j2` in the cluster
directory:

```jinja2
{% for u in ['unixuser1', 'unixuser2'] %}
mymap {{ u }} dbusername
{% endfor %}
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
