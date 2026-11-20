---
title: set-node-options
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_set-node-options/
lastModified: 2025-02-26T18:09:18Z
---

# set-node-options

Sets node options such as `route_fence`, `route_priority`, and `route_writes`.

### Synopsis

You can set the following node options with this command:

- `route_dsn`
- `route_fence`
- `route_priority`
- `route_writes`
- `route_reads`

Use `pgd show-nodes -o json` to view option values for each node.

```sh
pgd set-node-options [flags]
```

### Options

| Flag          | Description                 |
| ------------- | --------------------------- |
| `--node-name` | node name                   |
| `--option`    | option in name=value format |

See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Setting node options with multiple options

In this example, we use comma separated multiple options. Spaces are not allowed in the option values.

```bash
$ pgd set-node-options --node-name bdr-a1 --option route_priority=100,route_fence=true
```

```output title="Output"
node options updated successfully
```

#### Setting node options with multiple option flags

In this example, we use multiple option flags. Spaces are not allowed in the option values.

```bash
$ pgd set-node-options --node-name bdr-a1 --option route_priority=100 --option route_fence=true
```

```output title="Output"
node options updated successfully
```

#### Setting node options with double quotes

In this example, we use double quotes around options if the option value has spaces or special characters.

```bash
$ pgd set-node-options --node-name bdr-a1 --option "route_priority = 100" --option "route_fence = true"
```

```output title="Output"
node options updated successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
