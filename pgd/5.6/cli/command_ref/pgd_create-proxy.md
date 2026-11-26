---
title: create-proxy
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/pgd_create-proxy/
lastModified: 2025-02-26T18:09:18Z
---

# create-proxy

Creates proxy in the EDB Postgres Distributed cluster.

### Synopsis

Creates proxy in the EDB Postgres Distributed cluster and attaches it to the
given group. The proxy name must be unique across the cluster and match with
the name given in the corresponding proxy config file.

Use the proxy mode to route connections to Write Leader (default), Read Nodes
(read-only), or both (any). Proxy listens on 'listen\_port' for Write Leader
connections while on 'read\_listen\_port' for Read Nodes connections.

```sh
pgd create-proxy [flags]
```

### Options

| Flag           | Description                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--group-name` | Group name                                                                                                                                                                                      |
| `--proxy-mode` | Proxy mode (default, read-only, any); proxy will route connections to - <br/>default - Write Leader <br/>read-only - Read Nodes <br/>any - both Write Leader and Read Nodes (default "default") |
| `--proxy-name` | Proxy name                                                                                                                                                                                      |

See [global options](https://www.enterprisedb.com/docs/pgd/5.6/cli/command_ref/#global-options) for global options.

### Examples

#### Attaching in default mode.

In this example, we attach a new proxy called proxy-a1 to group group\_a, with 'default' mode.

```bash
$ pgd create-proxy --proxy-name proxy-a1 --group-name group_a
```

```output title="Output"
proxy created successfully
```

#### Attaching in any mode.

In this example, we attach anew proxy called proxy-b1 to group group\_b, with 'any' mode.

```bash
$ pgd create-proxy --proxy-name proxy-b1 --group-name group_b --proxy-mode any
```

```output title="Output"
proxy created successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
