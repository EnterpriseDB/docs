---
title: PRODUCT_COMPONENT_VERSION
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/94_product_component_version/
lastModified: 2023-02-14T16:10:29+05:30
---

# PRODUCT\_COMPONENT\_VERSION

<div id="product_component_version" class="registered_link"></div>

The `PRODUCT_COMPONENT_VERSION` view provides version information about product version compatibility.

| Name      | Type                    | Description                                     |
| --------- | ----------------------- | ----------------------------------------------- |
| `product` | `CHARACTER VARYING(74)` | Name of the product.                            |
| `version` | `CHARACTER VARYING(74)` | Version number of the product.                  |
| `status`  | `CHARACTER VARYING(74)` | Included for compatibility. Always `Available`. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
