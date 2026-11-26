---
title: MENULISTOPEN and MENULISTCLOSE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/menulistopen_and_menulistclose/
lastModified: 2023-11-09T17:35:38+05:30
---

# MENULISTOPEN and MENULISTCLOSE

These function and procedure generate the `<MENU>` and `</MENU>` tags, which create a list consisting of one line for each item.

## Syntax

The following is the syntax for HTP:

```
HTP.MENULISTOPEN;

HTP.MENULISTCLOSE;
```

The following is the syntax for HTF:

```
HTF.MENULISTOPEN RETURN VARCHAR2;

HTF.MENULISTCLOSE RETURN VARCHAR2;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
