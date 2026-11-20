---
title: MAILTO
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/mailto/
lastModified: 2023-11-09T17:35:38+05:30
---

# MAILTO

This function and procedure generates the `<A>` tag with HREF set to `'mailto'` prepended to the mail address argument.

## Syntax

The following is the syntax for HTP:

```
HTP.MAILTO (
   caddress       IN       VARCHAR2
   ctext          IN       VARCHAR2
   cname          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.MAILTO (caddress, ctext, cname, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| caddress    | The email address of the recipient           |
| ctext       | The clickable portion of the link            |
| cname       | The value for the NAME attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
