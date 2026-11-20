---
title: Postgres Enterprise Manager 10.1.2 release notes
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/pem_10.1.2_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# Postgres Enterprise Manager 10.1.2 release notes

Released: 21 July 2025

This is a bug-fix release for PEM 10.

> **Important**
>
> This release only includes fixes for the PEM agent (all platforms) when used with PEM Server 10.1.1 and later, and the PEM Windows installer.
>
> For this reason, you don't need to apply this patch to existing PEM server installations, or to PEM Agents used with a PEM server version earlier than 10.1.1.

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td>Fixed an issue whereby the <code>pemworker register-server</code> command would fail with an error.</td></tr>
<tr><td>Fixed an issue whereby PEM server installation would fail on Windows.</td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
