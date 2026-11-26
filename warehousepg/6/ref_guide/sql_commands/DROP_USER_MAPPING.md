---
title: DROP USER MAPPING
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_USER_MAPPING/
lastModified: 2026-10-14T08:34:33Z
---

# DROP USER MAPPING

<a id="topic1"></a><a id="bv20941"></a><a id="sql_command_desc"></a>

Removes a user mapping for a foreign server.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP USER MAPPING [ IF EXISTS ] { <username> | USER | CURRENT_USER | PUBLIC } 
    SERVER <servername>
```

<a id="section3">

</a>

## Description

`DROP USER MAPPING` removes an existing user mapping from a foreign server. To run this command, the current user must be the owner of the server containing the mapping.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the user mapping does not exist. WarehousePG issues a notice in this case.

### username

User name of the mapping. `CURRENT_USER` and `USER` match the name of the current user. `PUBLIC` is used to match all present and future user names in the system.

### servername

Server name of the user mapping.

<a id="section6">

</a>

## Examples

Drop the user mapping named `bob`, server `foo` if it exists:

```
DROP USER MAPPING IF EXISTS FOR bob SERVER foo;
```

<a id="section7">

</a>

## Compatibility

`DROP SERVER` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a WarehousePG extension.

<a id="section8">

</a>

## See Also

[CREATE USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_USER_MAPPING/), [ALTER USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_USER_MAPPING/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
