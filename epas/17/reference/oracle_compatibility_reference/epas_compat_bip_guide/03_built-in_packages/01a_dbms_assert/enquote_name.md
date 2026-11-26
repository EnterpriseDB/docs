---
title: ENQUOTE_NAME
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/enquote_name/
lastModified: 2025-11-25T20:57:39+05:30
---

# ENQUOTE\_NAME

The `ENQUOTE_NAME` function wraps quotation marks around a string, unless the input is already enclosed in quotation marks. All quotation marks within the string are appended with an quotation mark.

The following table shows examples of how quotes are handled.

| Input  | `dolower` parameter | Output  |
| ------ | ------------------- | ------- |
| ab"c   | TRUE                | "ab""c" |
| "abc"  | TRUE                | "abc"   |
| "a"bc" | TRUE                | "a""bc" |
| ABC    | TRUE                | "abc"   |
| ABC    | FALSE               | "ABC"   |
| aBc    | TRUE                | "abc"   |
| aBc    | FALSE               | "aBc"   |

```sql
ENQUOTE_NAME(str VARCHAR2, dolower boolean := TRUE) RETURN VARCHAR2;
```

## Parameters

`str`

The string to be wrapped in quotation marks.

`dolower`

Optional. If TRUE, alphabetic characters in the input string that are not wrapped in quotation marks are converted to lower case. If FALSE, input strings are not converted to lower case.

Default is TRUE. Input not enclosed in quotes are converted to lower case.

## Examples

```sql
edb=# SELECT SYS.DBMS_ASSERT.ENQUOTE_NAME('  ""ObjectName  ') FROM DUAL;
     enquote_name     
----------------------
 "  """"objectname  "
(1 row)

edb=# SELECT 'test' || SYS.DBMS_ASSERT.ENQUOTE_NAME('  "ObjectName"  ') || 'test' FROM dual;
         ?column?         
--------------------------
 test  "ObjectName"  test
(1 row)

edb=# EXEC DBMS_OUTPUT.put_line(SYS.DBMS_ASSERT.ENQUOTE_NAME('"REMAIN QUOTED and SAME CASE"'));
"REMAIN QUOTED and SAME CASE"
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
