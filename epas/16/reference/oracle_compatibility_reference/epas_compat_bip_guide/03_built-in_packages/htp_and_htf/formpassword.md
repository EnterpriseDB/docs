---
title: FORMPASSWORD
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formpassword/
lastModified: 2024-11-22T12:16:04+01:00
---

# FORMPASSWORD

This function and procedure generates the `<INPUT>` tag with `TYPE="password"`. This tag creates a single-line text entry field.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMPASSWORD (
   cname          IN       VARCHAR2
   csize          IN       VARCHAR2
   cmaxlength     IN       VARCHAR2   DEFAULT NULL
   cvalue         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMPASSWORD (cname, csize, cmaxlength, cvalue, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cname       | The value for the NAME attribute             |
| csize       | The value for the SIZE attribute             |
| cmaxlength  | The value for the MAXLENGTH attribute        |
| cvalue      | The value for the VALUE attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
