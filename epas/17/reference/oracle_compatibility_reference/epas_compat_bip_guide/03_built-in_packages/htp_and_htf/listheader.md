---
title: LISTHEADER
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/listheader/
lastModified: 2025-11-25T20:57:39+05:30
---

# LISTHEADER

This function and procedure generates the `<LH>` and `</LH>` tags, which print an HTML tag at the beginning of the list.

## Syntax

The following is the syntax for HTP:

```
HTP.LISTHEADER (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.LISTHEADER (ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to place between `<LH>` and `</LH>` |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
