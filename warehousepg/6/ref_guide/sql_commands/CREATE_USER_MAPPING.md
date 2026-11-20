---
title: CREATE USER MAPPING
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_USER_MAPPING/
lastModified: 2026-10-14T08:34:33Z
---

# CREATE USER MAPPING

<a id="topic1"></a><a id="bv20941"></a><a id="sql_command_desc"></a>

Defines a new mapping of a user to a foreign server.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
CREATE USER MAPPING FOR { <username> | USER | CURRENT_USER | PUBLIC }
    SERVER <servername>
    [ OPTIONS ( <option> '<value>' [, ... ] ) ]
```

<a id="section3">

</a>

## Description

`CREATE USER MAPPING` defines a mapping of a user to a foreign server. You must be the owner of the server to define user mappings for it.

<a id="section4">

</a>

## Parameters

### username

The name of an existing user that is mapped to the foreign server. `CURRENT_USER` and `USER` match the name of the current user. `PUBLIC` is used to match all present and future user names in the system.

### servername

The name of an existing server for which WarehousePG is to create the user mapping.

### OPTIONS

```
OPTIONS ( option 'value' [, ... ] )
```

The options for the new user mapping. The options typically define the actual user name and password of the mapping. Option names must be unique. The option names and values are specific to the server's foreign-data wrapper.

<a id="section6">

</a>

## Examples

Create a user mapping for user `bob`, server `foo`:

```
CREATE USER MAPPING FOR bob SERVER foo OPTIONS (user 'bob', password 'secret');
```

<a id="section7">

</a>

## Compatibility

`CREATE USER MAPPING` conforms to ISO/IEC 9075-9 (SQL/MED).

<a id="section8">

</a>

## See Also

[ALTER USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_USER_MAPPING/), [DROP USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_USER_MAPPING/), [DROP USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_USER_MAPPING/), [CREATE FOREIGN DATA WRAPPER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_FOREIGN_DATA_WRAPPER/), [CREATE SERVER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_SERVER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
