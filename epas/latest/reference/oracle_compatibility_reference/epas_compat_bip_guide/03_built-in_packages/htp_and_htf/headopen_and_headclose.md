---
title: HEADOPEN and HEADCLOSE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/headopen_and_headclose/
lastModified: 2025-11-25T20:39:04+05:30
---

# HEADOPEN and HEADCLOSE

This function and procedure generates the `<HEAD>` and `</HEAD>` tags, which mark the HTML document head section.

## Syntax

The following is the syntax for HTP:

```
HTP.HEADOPEN;

HTP.HEADCLOSE;
```

The following is the syntax for HTF:

```
HTF.HEADOPEN RETURN VARCHAR2;

HTF.HEADCLOSE RETURN VARCHAR2;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
