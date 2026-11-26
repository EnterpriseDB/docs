---
title: Postgres Enterprise Manager 10.4.1 release notes
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/pem_10.4.1_rel_notes/
lastModified: 2026-08-19T13:21:26-07:00
---

# Postgres Enterprise Manager 10.4.1 release notes

Released: 09 April 2026

New features, enhancements, bug fixes, and other changes in Postgres Enterprise Manager 10.4.1 include the following:

## Security Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td>Updated Cryptography to 46.0.6 to fix CVE-2026-34073.</td></tr>
<tr><td>Updated requests to 2.33.1 to fix CVE-2026-25645.</td></tr>
<tr><td>Updated Pygments to 2.20.0 to fix CVE-2026-4539.</td></tr>
<tr><td>Updated ajv to 8.18.0 to fix CVE-2025-69873.</td></tr>
<tr><td>Updated Lodash to 4.18.1 to fix CVE-2026-4800 and CVE-2026-2950.</td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td>Fixed issue of selecting parent node selects all its children nodes.</td></tr>
<tr><td>Fixed scroll issue in Audit/Probe/Server log dashboards.</td></tr>
<tr><td>Fixed the issue where user with pem_admin role is able to view all servers irrespective of team access.</td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
