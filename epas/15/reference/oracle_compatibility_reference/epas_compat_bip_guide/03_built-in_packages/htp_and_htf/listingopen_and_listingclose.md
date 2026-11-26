---
title: LISTINGOPEN and LISTINGCLOSE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/listingopen_and_listingclose/
lastModified: 2023-11-09T17:35:38+05:30
---

# LISTINGOPEN and LISTINGCLOSE

These functions and procedures generate the `<LISTING>` and `</LISTING>` tags, which mark a section of fixed-width text in the body of an HTML page.

## Syntax

The following is the syntax for HTP:

```
HTP.LISTINGOPEN;

HTP.LISTINGCLOSE;
```

The following is the syntax for HTF:

```
HTF.LISTINGOPEN RETURN VARCHAR2;

HTF.LISTINGCLOSE RETURN VARCHAR2;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
