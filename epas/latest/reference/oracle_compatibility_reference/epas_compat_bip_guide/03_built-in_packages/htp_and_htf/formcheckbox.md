---
title: FORMCHECKBOX
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formcheckbox/
lastModified: 2025-11-25T20:39:04+05:30
---

# FORMCHECKBOX

This function and procedure generates the `<INPUT>` tag with `TYPE="checkbox"`. This tag inserts a check box element in a form.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMCHECKBOX (
   cname          IN       VARCHAR2
   cvalue         IN       VARCHAR2   DEFAULT 'on'
   cchecked       IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMCHECKBOX (cname, cvalue, cchecked, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                             |
| ----------- | ----------------------------------------------------------------------------------- |
| cname       | The value for the NAME attribute                                                    |
| cvalue      | The value for the VALUE attribute                                                   |
| cchecked    | If the value for this parameter isn't `NULL`, adds the CHECKED attribute to the tag |
| cattributes | Other attributes to include as is in the tag                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
