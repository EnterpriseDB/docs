---
title: ssh_key_file
description: About the ssh_key_file setting in config.yml and how to use an existing SSH keypair for a cluster.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/ssh_key_file/
lastModified: 2026-03-18T15:14:20+01:00
---

# ssh\_key\_file

By default, `tpaexec provision` will use `ssh-keygen` to generate a new
SSH keypair for the cluster (into files named `id_cluster_name` and
`id_cluster_name.pub` inside the cluster directory).

If you want to use an existing key instead, you can set `ssh_key_file`
at the top level of config.yml to the location of an SSH private key
file. The corresponding public key must be available with an extension
of `.pub` at the same location:

```yaml
ssh_key_file: ~/.ssh/id_rsa
```

(If this file does not already exist, it will be created by `ssh-keygen`
during provisioning.)

## Skipping authorized\_keys management

During deployment, TPA adds the cluster's public key to the admin
user's `authorized_keys` file on each instance. In some environments,
like Oracle Cloud Infrastructure, this file may be read-only or
managed externally.

To skip this step, use the `ssh-cluster-key-config` task selector:

```shell
tpaexec deploy <clustername> --excluded_tasks=ssh-cluster-key-config
```

Or in `config.yml`:

```yaml
cluster_vars:
  excluded_tasks:
  - ssh-cluster-key-config
```

When this task is excluded, you must ensure that SSH access to the
instances is already configured through other means before running
`tpaexec deploy`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
