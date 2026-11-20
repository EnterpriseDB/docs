---
title: Managing SSH host keys
description: Managing a cluster's SSH host keys with TPA.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/manage_ssh_hostkeys/
lastModified: 2024-06-24T11:42:56+01:00
---

# Managing SSH host keys

TPA generates a set of SSH host keys while provisioning a cluster.
These keys are stored in the cluster directory, under the `hostkeys`
subdirectory. These host keys are automatically installed into
`/etc/ssh` on AWS EC2 instances and Docker containers.

By default, these host keys are not installed on
[bare instances](https://www.enterprisedb.com/docs/tpa/latest/platform-bare/),
but you can set `manage_ssh_hostkeys` to enable it:

```yaml
instances:
- Name: one
  …
  platform: bare
  vars:
    manage_ssh_hostkeys: yes
```

You must initially set up `known_hosts` in your cluster directory with
correct entries, as described in the docs for
[bare instances](https://www.enterprisedb.com/docs/tpa/latest/platform-bare/). TPA will replace the host keys
during deployment.

The `manage_ssh_hostkeys` setting is meaningful only for bare instances.
The generated host keys will be installed on all other instances.

## known\_hosts

TPA will add entries for every host and its public host keys to the
global `ssh_known_hosts` file on every instance in the cluster, so that
they can ssh to each other without host key verification prompts,
regardless of whether they have `manage_ssh_hostkeys` set or not.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
