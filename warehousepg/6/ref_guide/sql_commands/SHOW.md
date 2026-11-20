---
title: SHOW
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SHOW/
lastModified: 2026-10-14T08:34:33Z
---

# SHOW

<a id="topic1"></a><a id="en20941"></a><a id="sql_command_desc"></a>

Shows the value of a system configuration parameter.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
SHOW <configuration_parameter>

SHOW ALL
```

<a id="section3">

</a>

## Description

`SHOW` displays the current settings of WarehousePG cluster configuration parameters. You can set these parameters with the `SET` statement, or by editing the `postgresql.conf` configuration file of the WarehousePG coordinator. Note that some parameters viewable by `SHOW` are read-only — their values can be viewed but not set. See the WarehousePG Reference Guide for details.

<a id="section4">

</a>

## Parameters

### configuration\_parameter

The name of a system configuration parameter.

### ALL

Shows the current value of all configuration parameters.

<a id="section5">

</a>

## Examples

Show the current setting of the parameter `DateStyle`:

```
SHOW DateStyle;
 DateStyle
-----------
 ISO, MDY
(1 row)

```

Show the current setting of the parameter geqo:

```
SHOW geqo;
 geqo
------
 off
(1 row)
```

Show the current setting of all parameters:

```
SHOW ALL;
       name       | setting |                  description
------------------+---------+----------------------------------------------------
 application_name | psql    | Sets the application name to be reported in sta...
       .
       .
       .
 xmlbinary        | base64  | Sets how binary values are to be encoded in XML.
 xmloption        | content | Sets whether XML data in implicit parsing and s...
(331 rows)
```

<a id="section6">

</a>

## Compatibility

`SHOW` is a WarehousePG extension.

<a id="section7">

</a>

## See Also

[SET](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SET/), [RESET](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/RESET/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
