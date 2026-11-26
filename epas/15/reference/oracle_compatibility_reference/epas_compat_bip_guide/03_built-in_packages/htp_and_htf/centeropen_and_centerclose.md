---
title: CENTEROPEN and CENTERCLOSE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/centeropen_and_centerclose/
lastModified: 2023-11-09T17:35:38+05:30
---

# CENTEROPEN and CENTERCLOSE

These functions and procedures generate the `<CENTER>` and `</CENTER>` tags, which mark the text to center.

## Syntax

The following is the syntax for HTP:

```
HTP.CENTEROPEN;

HTP.CENTERCLOSE;
```

The following is the syntax for HTF:

```
HTF.CENTEROPEN RETURN VARCHAR2;

HTF.CENTERCLOSE RETURN VARCHAR2;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
