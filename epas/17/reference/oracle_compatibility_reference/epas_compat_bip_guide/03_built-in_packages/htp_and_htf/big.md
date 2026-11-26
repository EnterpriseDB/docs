---
title: BIG
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/big/
lastModified: 2025-11-25T20:57:39+05:30
---

# BIG

This function and procedure generates the `<BIG>` and `</BIG>` tags, which increase font size.

## Syntax

The following is the syntax for HTP:

```
HTP.BIG(
ctext       IN VARCHAR2 CHARACTER SET ANY_CS,
cattributes IN VARCHAR2 DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.BIG(ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text that goes between the tags          |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
