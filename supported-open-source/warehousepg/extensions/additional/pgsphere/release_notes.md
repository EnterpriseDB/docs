---
title: whpg-pgsphere release notes
description: Release notes for the whpg-pgsphere extension for WarehousePG.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgsphere/release_notes/
lastModified: 2026-11-03T15:22:55Z
---

# whpg-pgsphere release notes

The whpg-pgsphere documentation describes the latest version, including minor releases and patches. These release notes cover what's new in each release.

## 1.5.2-WHPG.1

Release date: October 29, 2026

Based on [pgSphere](https://github.com/postgrespro/pgsphere) 1.5.2.

### Changes

- Added the HEALPix pixel functions, such as `healpix_nest()`, `healpix_ring()`, `nest2ring()`, and `centre_of_healpix_nest()`, and the `smoc` (Multi-Order Coverage map) type. 1.5.2-WHPG was built without them, so catalogs created with a HEALPix-enabled build of pgSphere failed with the error `could not find function "healpix_nest"`.
- The `smoc_disc()` and `smoc(order, scircle|spoly)` constructors, and the operators that compare an `smoc` with an `scircle` or `spoly` (`<@`, `@>`, `&&`, and their negations), aren't available. They require the `libhealpix_cxx` library, which isn't included, and raise the error `pgsphere was built without libhealpix_cxx`. All other HEALPix functions, and `smoc` operations between two `smoc` values or between an `smoc` and an `spoint`, work.

### Bug fixes

- Fixed string-handling issues inherited from upstream pgSphere that were found in a security review, such as fixed-size buffers that very long input values or `sphere_output_precision` output could overflow, and unchecked number sizes when parsing `smoc` values.
- Fixed `gpcheckcat` reporting `inconsistent_pg_operator` after `CREATE EXTENSION pg_sphere`. The `=` operator for `spoint` is now declared `HASHES` when it's created, so that the setting reaches every segment. This fix applies only to databases where you run `CREATE EXTENSION` with this version.

### Upgrade notes

Restart WarehousePG or reconnect all sessions after you upgrade, and see [Upgrading whpg-pgsphere](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgsphere/installing/#upgrading-whpg-pgsphere) if you already registered the extension.

## 1.5.2-WHPG

Release date: August 2026

First release of whpg-pgsphere for WarehousePG, based on [pgSphere](https://github.com/postgrespro/pgsphere) 1.5.2. This release was built without HEALPix and `smoc` support. For earlier upstream changes, see the [pgSphere repository](https://github.com/postgrespro/pgsphere).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
