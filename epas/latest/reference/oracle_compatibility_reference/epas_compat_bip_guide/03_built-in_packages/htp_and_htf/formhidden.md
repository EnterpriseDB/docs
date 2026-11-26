---
title: FORMHIDDEN
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formhidden/
lastModified: 2025-11-25T20:39:04+05:30
---

# FORMHIDDEN

This function and procedure generates the `<INPUT>` tag with `TYPE="hidden"`. This tag inserts a hidden form element that the user doesn't see. It submits additional values to the script.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMHIDDEN (
   cname          IN       VARCHAR2
   cvalue         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMHIDDEN (cname, cvalue, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cname       | The value for the NAME attribute             |
| cvalue      | The value for the VALUE attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
