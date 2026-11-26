---
title: edbctl config
description: Use the edbctl utility to display or modify edbctl configuration settings.
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_config/
lastModified: 2026-06-23T20:58:43+05:30
---

# edbctl config

Displays or modifies edbctl configuration settings, including the default project, credentials, and output format.

## Commands

The `edbctl config` command has following options:

- [edbctl config get](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_config/#edbctl-config-get) — Prints the value of a given configuration property.
- [edbctl config list](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_config/#edbctl-config-list) — Lists all configuration properties and values.
- [edbctl config set](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_config/#edbctl-config-set) — Updates the configuration with a value for the given property.

### edbctl config get

Displays the value of a specified configuration property.

```
edbctl config get <key> [options]
```

Where `options` are:

```
  -h, --help          Help for get.
  -I, --interactive   Execute command interactively.
```

These examples show how to obtain the value of a given configuration property:

```
$ edbctl config set output_mode json
$ edbctl config get output_mode
json
$ edbctl config get output_mode
table
$ edbctl config get confirm_mode
on
```

## edbctl config list

Lists all configuration properties and their values.

```
edbctl config list [options]
```

Where `options` are:

```
  -h, --help            Help for list.
  -o, --output string   [table json yaml xml] (default "table")
```

## edbctl config set

Updates a configuration property with a specified value.

```
edbctl config set <key> <value> [options]
```

Where `options` are:

```
 -h, --help          Help for set.
 -I, --interactive   Execute command interactively.
```

These examples show how to set a particular configuration property:

```
$ edbctl config set output_mode json
$ edbctl config set confirm_mode on
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
