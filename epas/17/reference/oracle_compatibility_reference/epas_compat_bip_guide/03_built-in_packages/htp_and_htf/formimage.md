---
title: FORMIMAGE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formimage/
lastModified: 2025-11-25T20:57:39+05:30
---

# FORMIMAGE

This function and procedure generates the `<INPUT>` tag with `TYPE="image"`. This tag creates an image field that the user clicks to submit the form.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMIMAGE (
   cname          IN       VARCHAR2
   csrc           IN       VARCHAR2
   calign         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMIMAGE (cname, csrc, calign, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                         |
| ----------- | --------------------------------------------------------------- |
| cname       | The value for the NAME attribute                                |
| csrc        | The value for the SRC attribute, which specifies the image file |
| calign      | The value for the ALIGN attribute                               |
| cattributes | Other attributes to include as is in the tag                    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
