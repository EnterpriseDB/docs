---
title: DIV
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/div/
lastModified: 2024-11-22T12:16:04+01:00
---

# DIV

This function and procedure generates the `<DIV>` tag, which creates document divisions.

## Syntax

The following is the syntax for HTP:

```
HTP.DIV(
   calign         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.DIV(calign, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| calign      | The value for the ALIGN attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
