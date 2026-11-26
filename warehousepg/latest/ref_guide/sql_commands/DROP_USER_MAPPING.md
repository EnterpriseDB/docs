---
title: DROP USER MAPPING
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_USER_MAPPING/
lastModified: 2026-10-14T08:34:33Z
---

# DROP USER MAPPING

Removes a user mapping for a foreign server.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP USER MAPPING [ IF EXISTS ] { <user_name> | USER | CURRENT_USER | PUBLIC } 
    SERVER <server_name>
```

<a id="section3"></a>

## Description

`DROP USER MAPPING` removes an existing user mapping from a foreign server.

The owner of a foreign server can drop user mappings for that server for any user. Also, a user can drop a user mapping for their own user name if they have been granted the `USAGE` privilege on the server.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the user mapping does not exist. WarehousePG issues a notice in this case.

### user\_name

User name of the mapping. `CURRENT_USER` and `USER` match the name of the current user. `PUBLIC` is used to match all present and future user names in the system.

### server\_name

Server name of the user mapping.

<a id="section6"></a>

## Examples

Drop the user mapping named `bob`, server `foo` if it exists:

```
DROP USER MAPPING IF EXISTS FOR bob SERVER foo;
```

<a id="section7"></a>

## Compatibility

`DROP SERVER` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a WarehousePG extension.

<a id="section8"></a>

## See Also

[CREATE USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_USER_MAPPING/), [ALTER USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_USER_MAPPING/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
