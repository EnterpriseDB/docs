---
title: DLISTDEF
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/dlistdef/
lastModified: 2025-11-25T20:57:39+05:30
---

# DLISTDEF

This function and procedure generates the `<DD>` tag, which inserts a definition of terms. Use this tag for a definition list `<DL>`. Terms are tagged `<DT>`, and definitions are tagged `<DD>`.

## Syntax

The following is the syntax for HTP:

```
htp.DLISTDEF(
   ctext          IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.DLISTDEF(ctext, cclear, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The definition for the term                  |
| cclear      | The value for the CLEAR attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
