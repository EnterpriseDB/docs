---
title: Postgres Enterprise Manager 9.8.1 release notes
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/pem_rel_notes/981_rel_notes/
lastModified: 2026-01-16T14:53:16+01:00
---

# Postgres Enterprise Manager 9.8.1 release notes

Released: 16th January 2026

This is a security patch with the following fixes. This patch is recommended for all PEM 9 users.

| Type    | Description                                                                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix | Resolved a vulnerability [CVE-2025-2946](https://nvd.nist.gov/vuln/detail/cve-2025-2946) that exposed a possible cross-site scripting risk.                                   |
| Bug fix | Resolved a command-injection vulnerability allowing arbitrary command execution on Windows [CVE-2025-12763](https://nvd.nist.gov/vuln/detail/CVE-2025-12763).                 |
| Bug fix | Resolved a vulnerability allowing unsafe deserialization and remote  code execution by an authenticated user [CVE-2024-2044](https://nvd.nist.gov/vuln/detail/CVE-2024-2044). |
| Bug fix | Resolved a cross-site scripting vulnerability in the /settings/store endpoint [CVE-2024-4216](https://nvd.nist.gov/vuln/detail/CVE-2024-4216).                                |
| Bug fix | Added UI validation to mitigate a remote code execution issue in the validation of the binary path [CVE-2024-3116](https://nvd.nist.gov/vuln/detail/CVE-2024-3116).           |
| Bug fix | Move to urllib3 2.6.3 to fix [CVE-2026-21441](https://nvd.nist.gov/vuln/detail/CVE-2026-21441).                                                                               |
| Bug fix | Resolved a cross-site scripting vulnerability in Manage Charts and Manage Dashboards [CVE-2026-0949](https://www.enterprisedb.com/docs/security/advisories/cve20260949/).     |
| Bug fix | Fixed an issue whereby TRACK/TRACE HTTP methods were not blocked in the Apache HTTPD configuration provided with PEM.                                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
