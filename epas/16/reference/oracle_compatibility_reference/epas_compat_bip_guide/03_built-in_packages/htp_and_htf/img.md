---
title: IMG and IMG2
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/img/
lastModified: 2024-11-22T12:16:04+01:00
---

# IMG and IMG2

These functions and procedures generate the `<IMG>` tag, which loads an image onto the HTML page. The difference between these syntaxes is that `htp.img2` uses the `cusemap` parameter.

## Syntax

The following is the syntax for HTP:

```
HTP.IMG (
   curl           IN       VARCHAR2   DEFAULT NULL
   calign         IN       VARCHAR2   DEFAULT NULL
   calt           IN       VARCHAR2   DEFAULT NULL
   cismap         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

htp.img2(
   calign         IN       VARCHAR2   DEFAULT NULL
   calt           IN       VARCHAR2   DEFAULT NULL
   cismap         IN       VARCHAR2   DEFAULT NULL
   cusemap        IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.IMG (curl, calign, calt, cismap, cattributes) RETURN VARCHAR2;

HTF.IMG2(curl, calign, calt, cismap, cusemap, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| curl        | The value for the SRC attribute.                                                                                                          |
| calign      | The value for the ALIGN attribute.                                                                                                        |
| calt        | The value for the ALT attribute, which specifies alternative text to display if the browser doesn't support images.                       |
| cismap      | If the value for this parameter isn't `NULL`, adds the ISMAP attribute to the tag. The attribute indicates that the image is an imagemap. |
| cusemap     | The value for the USEMAP attribute, which specifies a client-side image map.                                                              |
| cattributes | Other attributes to include as is in the tag.                                                                                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
