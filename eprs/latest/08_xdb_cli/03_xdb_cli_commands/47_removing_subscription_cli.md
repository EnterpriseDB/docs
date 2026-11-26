---
title: Removing a subscription (removesub)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/47_removing_subscription_cli/
lastModified: 2025-04-03T18:05:51+02:00
---

# Removing a subscription (removesub)

<div id="removing_subscription_cli" class="registered_link"></div>

**For SMR only:** The `removesub` command removes a subscription.

## Synopsis

`-removesub subname -repsvrfile subsvrfile`

See [Removing a subscription](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/05_managing_subscription/#removing-a-subscription) for more information.

## Parameters

`subname`

The name of the subscription to remove.

`subsvrfile`

The file containing the subscription server login information.

## Examples

```shell
A subscription named dept_emp_sub is removed.
$ java -jar edb-repcli.jar -removesub dept_emp_sub \
>   -repsvrfile ~/subsvrfile.prop
Removing subscription...
Subscription removed successfully.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
