---
title: STYLE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/style/
lastModified: 2025-11-25T20:57:39+05:30
---

# STYLE

This function and procedure generates the `<STYLE>` and `</STYLE>` tags, which include a style sheet in the web page.

## Syntax

The following is the syntax for HTP:

```
HTP.STYLE(cstyle IN VARCHAR2);
```

The following is the syntax for HTF:

```
HTF.STYLE(cstyle) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                          |
| --------- | -------------------------------- |
| cstyle    | The style information to include |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
