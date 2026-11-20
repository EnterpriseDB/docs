---
title: Known issues and limitations
description: Known issues and limitations of LiveCompare comparisons.
product: LiveCompare
version: "4"
url: https://www.enterprisedb.com/docs/livecompare/latest/known_issues_and_limitations/
lastModified: 2026-11-09T18:28:19+01:00
---

# Known issues and limitations

## Oracle timestamp precision

LiveCompare compares Oracle `TIMESTAMP` values at microsecond precision, the maximum that PostgreSQL stores. Differences smaller than a microsecond aren't detected.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
