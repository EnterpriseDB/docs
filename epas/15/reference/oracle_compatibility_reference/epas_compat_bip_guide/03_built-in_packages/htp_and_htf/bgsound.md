---
title: BGSOUND
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/bgsound/
lastModified: 2023-11-09T17:35:38+05:30
---

# BGSOUND

This function and procedure generates the `<BGSOUND>` HTML tag, which includes audio for a web page.

## Syntax

The following is the syntax for HTP:

```
HTP.BGSOUND(
   csrc           IN       VARCHAR2
   cloop          IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.BGSOUND(csrc, cloop, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| csrc        | The value for the SRC attribute              |
| cloop       | The value for the LOOP attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
