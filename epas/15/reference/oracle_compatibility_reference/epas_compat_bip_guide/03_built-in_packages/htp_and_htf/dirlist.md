---
title: DIRLIST
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/dirlist/
lastModified: 2023-11-09T17:35:38+05:30
---

# DIRLIST

This function and procedure generates the `<DIR>` and `</DIR>` tags, which create a directory list section.

## Syntax

The following is the syntax for HTP:

```
HTP.DIRLISTOPEN;

HTP.DIRLISTCLOSE;
```

The following is the syntax for HTF:

```
HTF.DIRLISTOPEN RETURN VARCHAR2;

HTF.DIRLISTCLOSE RETURN VARCHAR2;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
