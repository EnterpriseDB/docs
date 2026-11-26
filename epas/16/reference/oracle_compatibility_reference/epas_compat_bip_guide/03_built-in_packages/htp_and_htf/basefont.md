---
title: BASEFONT
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/basefont/
lastModified: 2024-11-22T12:16:04+01:00
---

# BASEFONT

This function and procedure generates the `<BASEFONT>` HTML tag, which specifies the base font size for a web page.

## Syntax

The following is the syntax for HTP:

```
HTP.BASEFONT(nsize IN INTEGER);
```

The following is the syntax for HTF:

```
HTF.BASEFONT(nsize) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                          |
| --------- | -------------------------------- |
| nsize     | The value for the SIZE attribute |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
