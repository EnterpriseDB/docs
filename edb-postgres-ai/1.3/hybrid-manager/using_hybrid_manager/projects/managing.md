---
title: Managing projects
description: Learn how to manage projects with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/projects/managing/
lastModified: 2026-01-19T12:25:39+01:00
---

# Managing projects

You can rename and delete projects.

### Renaming a project

You can rename a project in the single-pane-of-glass view of projects and in the **Projects** tab. From either list of projects:

1. From the ellipses menu to the right of the project name, select **Edit**.
2. Enter the new project name and select **Update Project**.

### Deleting a project

You can delete a project in the single-pane-of-glass view of projects and in the **Projects** tab. From either list of projects:

1. From the ellipsis menu to the right of the project name, select **Delete**.

   You're prompted to confirm the deletion.

2. If there are any clusters in the project, you must delete them before you can delete the project. The display shows any remaining clusters with a check box next to each one. Select the check box for each cluster you want to delete, or select **Select All**.

3. After you select the clusters to delete, you must enter `delete clusters` in the text box to confirm the deletion. Entering this text enables the **Delete All Clusters** button.

4. Select **Delete All Clusters** to permanently delete the selected clusters.

5. When there are no clusters in the project, a dialog box appears listing the project name with a check box. Select the check box and enter `delete project` in the text field. Entering this text enables the **Delete Project** button.

6. Select **Delete Project** to completely delete the project.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
