---
title: KBD and KEYBOARD
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/kbd_and_keyboard/
lastModified: 2025-11-25T20:57:39+05:30
---

# KBD and KEYBOARD

These functions and procedures generate the `<KBD>` and `</KBD>` tags, which render the text in a monospace font.

## Syntax

The following is the syntax for HTP:

```
HTP.KEYBOARD (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.KBD (
   ctext          IN       VARCHAR2
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.KEYBOARD (ctext, cattributes) RETURN VARCHAR2;

HTF.KBD (ctext, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ctext       | The text to render in monospace              |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
