---
title: CENTEROPEN and CENTERCLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/centeropen_and_centerclose/
lastModified: 2025-11-25T20:57:39+05:30
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
