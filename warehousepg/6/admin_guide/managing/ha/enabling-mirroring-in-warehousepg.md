---
title: Enabling Mirroring in WarehousePG
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/
lastModified: 2026-08-11T09:07:15Z
---

# Enabling Mirroring in WarehousePG

You can configure your WarehousePG cluster with mirroring at setup time using `gpinitsystem` or enable mirroring later using `gpaddmirrors` and `gpinitstandby`. This topic assumes you are adding mirrors to an existing system that was initialized without mirrors.

- **[Enabling Segment Mirroring](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/enabling-segment-mirroring/)**

- **[Enabling Coordinator Mirroring](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/enabling-coordinator-mirroring/)**

**Parent topic:** [Enabling High Availability and Data Consistency Features](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/)

- [Enabling Coordinator Mirroring](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/enabling-coordinator-mirroring/): You can configure a new WarehousePG cluster with a standby coordinator using gpinitsystem or enable it later using gpinitstandby. This topic assumes you are adding a standby coordinator to an existing system that was initialized without one.
- [Enabling Segment Mirroring](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/ha/enabling-mirroring-in-warehousepg/enabling-segment-mirroring/): Mirror segments allow database queries to fail over to a backup segment if the primary segment is unavailable. By default, mirrors are configured on the same array of hosts as the primary segments. You may choose a completely different set of hosts for your mirror segments so they do not share machines with any of your primary segments.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
