---
title: NOFRAMESOPEN and NOFRAMESCLOSE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/noframesopen_and_noframesclose/
lastModified: 2024-11-22T12:16:04+01:00
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
