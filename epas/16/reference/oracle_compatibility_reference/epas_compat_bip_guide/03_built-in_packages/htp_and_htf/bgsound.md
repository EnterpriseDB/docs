---
title: BGSOUND
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/bgsound/
lastModified: 2024-11-22T12:16:04+01:00
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
