---
title: HTMLOPEN and HTMLCLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/htmlopen_and_htmlclose/
lastModified: 2025-11-25T20:57:39+05:30
---

# HTMLOPEN and HTMLCLOSE

These functions and procedures generate the `<HTML>` and `</HTML>` tags, which mark the beginning and the end of an HTML document.

## Syntax

The following is the syntax for HTP:

```
HTP.HTMLOPEN;

HTP.HTMLCLOSE;
```

The following is the syntax for HTF:

```
HTF.HTMLOPEN RETURN VARCHAR2;

HTF.HTMLCLOSE RETURN VARCHAR2;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
