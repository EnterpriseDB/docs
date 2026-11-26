---
title: whpg-madlib release notes
description: Release notes for the whpg-madlib extension for WarehousePG.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/madlib/release_notes/
lastModified: 2026-10-28T10:45:05Z
---

# whpg-madlib release notes

The whpg-madlib documentation describes the latest version, including minor releases and patches. These release notes cover what's new in each release.

## 2.1.0

Release date: September 20, 2026

Based on the Apache MADlib `madlib2-master` branch after the 2.1.0 release. For earlier upstream changes, see the [Apache MADlib release notes](https://github.com/apache/madlib/blob/master/RELEASE_NOTES).

### Changes

- Changed the deep learning module to use legacy optimizers, to support TensorFlow 2.12.
- Changed `madpack` to use a fixed Python version, chosen when the package is built for WarehousePG 6 or 7, instead of depending on which Python executables the host provides.

### Bug fixes

- Fixed `svec` operators, such as `madlib.svec_mult()`, decoding run-length-encoded data incorrectly on platforms where the `char` type is unsigned, such as PowerPC and AArch64. This caused segmentation faults on little-endian PowerPC (ppc64le). The stored data format is unchanged.
- Fixed segmentation faults on ppc64le in the sparse linear systems aggregate, which the same `char` bug and the AltiVec code in the bundled Eigen library caused. The Eigen code is incorrect on little-endian PowerPC.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
