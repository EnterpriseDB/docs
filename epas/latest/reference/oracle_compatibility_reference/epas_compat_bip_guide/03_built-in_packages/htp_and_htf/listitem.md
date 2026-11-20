---
title: LISTITEM
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/listitem/
lastModified: 2025-11-25T20:39:04+05:30
---

# LISTITEM

This function and procedure generates the `<LI>` tag, which creates a list item.

## Syntax

The following is the syntax for HTP:

```
HTP.LISTITEM (
   ctext          IN       VARCHAR2   DEFAULT NULL
   cclear         IN       VARCHAR2   DEFAULT NULL
   cdingbat       IN       VARCHAR2   DEFAULT NULL
   csrc           IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.LISTITEM (ctext, cclear, cdingbat, csrc, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text for the list item                   |
| cclear      | The value for the CLEAR attribute            |
| cdingbat    | The value for the DINGBAT attribute          |
| csrc        | The value for the SRC attribute              |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
