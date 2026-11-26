---
title: Postgres Enterprise Manager 9.8.4 release notes
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/pem_rel_notes/984_rel_notes/
lastModified: 2026-05-21T13:10:46+01:00
---

# Postgres Enterprise Manager 9.8.4 release notes

Released: 21 May 2026

This is a security and bug-fix release. This patch is recommended for all PEM 9 users.

| Type    | Description                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------ |
| Change  | PEM 9 now runs on Python 3.10 on RHEL 9.                                                         |
| Bug fix | Fixed a pickle deserialization vulnerability in the session manager (CVE-2026-7818).             |
| Bug fix | Fixed a symlink path traversal vulnerability in the file manager (CVE-2026-7819).                |
| Bug fix | Fixed vulnerabilities in urllib3 (CVE-2026-44431, CVE-2026-44432). urllib3 was updated to 2.7.0. |
| Bug fix | Fixed vulnerabilities in axios (CVE-2026-42033, CVE-2026-42035). axios was updated to 1.16.1.    |
| Bug fix | Fixed vulnerabilities in Mako (CVE-2026-44307, CVE-2026-41205). Mako was updated to 1.3.12.      |
| Bug fix | Fixed a vulnerability in PostCSS (CVE-2026-41305). PostCSS was updated to 8.5.14.                |
| Bug fix | Fixed a vulnerability in ip-address (CVE-2026-42338). ip-address was updated to 10.2.0.          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
