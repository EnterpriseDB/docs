---
title: Reports
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/reports/
lastModified: 2026-03-20T18:59:11+05:30
---

# Reports

Manage and review diagnostic data for your monitored servers. Postgres Enterprise Manager (PEM) provides two distinct reporting frameworks to suit your diagnostic needs.

## [Custom Reports](https://www.enterprisedb.com/docs/pem/latest/reports/custom_reports/)

The **Custom Reports** framework allows you to design and execute bespoke diagnostic templates. By combining SQL queries and host-level scripts, you can extract specific insights tailored to your unique infrastructure requirements.

- **User-defined logic** — Build templates from the ground up using SQL or shell/batch scripts.
- **Hierarchical structure** — Organize data into logical sections and items for clear reporting.
- **Portability** — Export and import templates via JSON for easy migration across environments.

## [System Reports](https://www.enterprisedb.com/docs/pem/latest/reports/reports/)

**System Reports** are the pre-defined, built-in diagnostic tools provided by PEM. These reports offer out-of-the-box analysis of database performance, security audits, and configuration states.

- **Standardized metrics** — Access industry-standard reports for database health and activity.
- **No configuration required** — Execute immediate diagnostics without the need for custom script writing.
- **Deep integration** — Fully integrated with PEM’s alerting and monitoring history.

> **Note**
>
> To run a report, simply right-click a **Target Server** in the PEM Browser tree and navigate to the relevant report category.

- [Custom Report Templates](https://www.enterprisedb.com/docs/pem/latest/reports/custom_reports/): Custom report templates let you design, execute, and manage diagnostic reports that query data from your monitored servers or from PEM's own management database. You can define reports using SQL queries or batch/shell scripts organized into sections, with results displayed as tables or text values.
- [Viewing system reports](https://www.enterprisedb.com/docs/pem/latest/reports/reports/): In PEM 10.5, Management > Reports shows only the Alert History report. The System Configuration and Core Usage reports are now available as system-defined templates under Management > Reports > Manage Report Templates.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
