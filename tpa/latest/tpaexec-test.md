---
title: tpaexec test
description: Run architecture-specific tests against a deployed cluster.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/tpaexec-test/
lastModified: 2025-11-26T13:14:02+01:00
---

# tpaexec test

Now we run architecture-specific tests against a deployed cluster to
verify the installation. At the end of this stage, we have a
fully-functioning cluster.

You must have already run `tpaexec configure`, `tpaexec provision`,
and `tpaexec deploy` successfully before you can run `tpaexec test`.

## Quickstart

```shell
tpaexec test ~/clusters/speedy -v
```

Output is once again logged to `ansible.log` in the cluster directory.

If this command succeeds, your cluster works.

Congratulations.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
