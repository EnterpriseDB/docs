---
title: delete-proxy
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_delete-proxy/
lastModified: 2025-02-26T18:09:18Z
---

# delete-proxy

Deletes a proxy from the EDB Postgres Distributed cluster.

### Synopsis

Deletes a proxy from the EDB Postgres Distributed cluster.

```sh
pgd delete-proxy [flags]
```

### Options

| Flag           | Description |
| -------------- | ----------- |
| `--proxy-name` | proxy name  |

See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Deleting a proxy

```bash
$ pgd delete-proxy --proxy-name proxy-a1
```

```output title="Output"
proxy deleted successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
