---
title: Overview of the Migration Portal Projects page
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/02_mp_overview_project/
lastModified: 2026-05-27T09:05:38+02:00
---

# Overview of the Migration Portal Projects page

<div id="mp_overview_project" class="registered_link"></div>

The Migration Portal Projects page provides detailed information about your migration.

![The Migration Portal Projects Page overview.](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/migration_portal/5/images/mp_overview_home_2_pgai.png)

Use the following resources to gather information about your migration projects:

- **Project Compatibility**: The **Project Compatibility** symbol shows how compatible the assessed schema is, displaying a numeric percentage and color gradient to show the range.

- **Schema Count**: Displays the number of schemas in a project.

- **Migrate to**: Select **Migrate to** to migrate the schema to an EDB Postgres Advanced Server on premises or in the cloud.

- **Search objects**: Use the **Search** box to search for objects.

- **Filters**: From the left panel of the Projects page, you can filter the failed, system-repaired, user-repaired, and automatically passed objects. You can select one or more filter combinations to refine the information.

- **Objects**: Tab that displays the objects for the selected schemas.

- **Common Failures**: Tab that displays the reason for the failed objects for the selected schemas.

  > **Note**
  >
  > You can download a `.csv` file for the common failures for the project.

- **Schema**: Displays the result of the assessment.

- **Tooltip**: Hover over a result set to display a tooltip with the number of passed, failed, and repaired objects.

- **Quick help**: The Quick help panel displays links to Knowledge Base articles and repair handler documentation.
  Use the **Search** box to search the Knowledge Base entries or repair handler documentation for specific information.

- **AI Copilot**: Select [AI Copilot](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/) to interact with an AI interface. This interface helps you to obtain information about DDL compatibility, Postgres query syntax, EDB Postgres Advanced Server equivalents, and more. Before using AI Copilot, you're prompted to agree to its terms of use to opt in to using the feature.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
