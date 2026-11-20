---
title: NOFRAMESOPEN and NOFRAMESCLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/noframesopen_and_noframesclose/
lastModified: 2025-11-25T20:57:39+05:30
---

# NOFRAMESOPEN and NOFRAMESCLOSE

This function and procedure generates the `<NOFRAMES>` and `</NOFRAMES>` tags, which mark a no-frames section.

## Syntax

The following is the syntax for HTP:

```
HTP.NOFRAMESOPEN

HTP.NOFRAMESCLOSE
```

The following is the syntax for HTF:

```
HTF.NOFRAMESOPEN RETURN VARCHAR2;

HTF.NOFRAMESCLOSE RETURN VARCHAR2;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
