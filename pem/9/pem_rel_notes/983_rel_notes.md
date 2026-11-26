---
title: Postgres Enterprise Manager 9.8.3 release notes
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/pem_rel_notes/983_rel_notes/
lastModified: 2026-04-15T18:34:40+05:30
---

# Postgres Enterprise Manager 9.8.3 release notes

Released: 15 Apr 2026

This is a security and bug-fix release. This patch is recommended for all PEM 9 users.

| Type    | Description                                                                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix | Fixed an issue affecting PEM 9.8.2 packages whereby the PEM web application would fail to run properly on RHEL 9.0-9.6. PEM 9.8.3 runs on all RHEL 9.x versions. |
| Bug fix | Fixed denial-of-service vulnerabilities in Werkzeug (CVE-2026-27199, CVE-2025-66221). Werkzeug was updated to 3.1.7.                                             |
| Bug fix | Fixed a data exposure vulnerability in the cryptography package (CVE-2026-39892). cryptography was updated to 46.0.7.                                            |
| Bug fix | Fixed a prototype pollution vulnerability in ajv (CVE-2025-69873). ajv was updated to 6.14.0.                                                                    |
| Bug fix | Fixed a ReDoS vulnerability in brace-expansion (CVE-2026-33750). brace-expansion was updated to 1.1.13.                                                          |
| Bug fix | Fixed ReDoS vulnerabilities in minimatch (CVE-2026-26996, CVE-2026-27903). minimatch was updated to 3.1.5.                                                       |
| Bug fix | Fixed a template injection vulnerability in underscore.js (CVE-2026-27601). underscore.js was updated to 1.13.8.                                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
