---
title: LINKREV
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/linkrev/
lastModified: 2025-11-25T20:39:04+05:30
---

# LINKREV

This function and procedure generates the `<LINK>` tag with the REV attribute. The REV attribute is the relationship described by the hypertext link from the target to the anchor.

## Syntax

The following is the syntax for HTP:

```
HTP.LINKREV (
   crev           IN       VARCHAR2
   curl           IN       VARCHAR2
   ctitle         IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.LINKREV (crev, curl, ctitle) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                           |
| --------- | --------------------------------- |
| crev      | The value for the REV attribute   |
| curl      | The value for the HREF attribute  |
| ctitle    | The value for the TITLE attribute |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
