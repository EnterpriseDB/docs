---
title: LINKREL
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/linkrel/
lastModified: 2023-11-09T17:35:38+05:30
---

# LINKREL

This function and procedure generates the `<LINK>` tag with the REL attribute. The REL attribute is the relationship described by the hypertext link from the anchor to the target.

## Syntax

The following is the syntax for HTP:

```
HTP.LINKREL (
   crel           IN       VARCHAR2
   curl           IN       VARCHAR2
   ctitle         IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.LINKREL (crel, curl, ctitle) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                           |
| --------- | --------------------------------- |
| crel      | The value for the REL attribute   |
| curl      | The value for the HREF attribute  |
| ctitle    | The value for the TITLE attribute |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
