---
title: FORMRADIO
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formradio/
lastModified: 2025-11-25T20:39:04+05:30
---

# FORMRADIO

This function and procedure generates the `<INPUT>` tag with `TYPE="radio"`. This tag creates a radio button (single-selection option) on the HTML form.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMRADIO (
   cname          IN       VARCHAR2
   cvalue         IN       VARCHAR2
   cchecked       IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMRADIO (cname, cvalue, cchecked, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                             |
| ----------- | ----------------------------------------------------------------------------------- |
| cname       | The value for the NAME attribute                                                    |
| cvalue      | The value for the VALUE attribute                                                   |
| cchecked    | If the value for this parameter isn't `NULL`, adds the CHECKED attribute to the tag |
| cattributes | Other attributes to include as is in the tag                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
