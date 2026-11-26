---
title: CENTEROPEN and CENTERCLOSE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/centeropen_and_centerclose/
lastModified: 2024-11-22T12:16:04+01:00
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
