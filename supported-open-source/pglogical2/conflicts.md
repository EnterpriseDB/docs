---
title: Conflicts
product: Pglogical 2
url: https://www.enterprisedb.com/docs/supported-open-source/pglogical2/conflicts/
lastModified: 2023-09-07T08:52:45+01:00
---

# Conflicts

In case the node is subscribed to multiple providers, or when local writes
happen on a subscriber, conflicts can arise for the incoming changes. These
are automatically detected and can be acted on depending on the configuration.

The configuration of the conflicts resolver is done via the
`pglogical.conflict_resolution` setting.

The resolved conflicts are logged using the log level set using
`pglogical.conflict_log_level`. This parameter defaults to `LOG`. If set to
lower level than `log_min_messages` the resolved conflicts won't appear in
the server log.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
