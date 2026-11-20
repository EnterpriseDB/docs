---
title: Managing job notifications
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/managing_pem_agent/managing_job_notifications/
lastModified: 2026-01-21T12:37:38+01:00
---

# Managing job notifications

In the PEM console, you can configure the settings for sending the SMTP trap on success or failure of a system-generated job. These jobs are listed under scheduled tasks or are a custom agent job. You can configure these email notification settings at the job, agent, or PEM server level (the default) to send email notifications to the specified user group. The order of precedence is job, agent, and PEM server.

## Configuring job notifications at job level

You can configure email notification settings at the job level only for a custom agent job.

- For a new agent job, you can configure the email notification settings in the **Notification** tab of the Create Agent Job wizard.
- For an existing custom job, you can edit the properties of the job and configure the notification settings.

On the **Notifications** tab:

- In the **Send the notifications** field, specify when you want to send the email notifications.
- In the **Email group** field, specify the email group to send the email notification to.

## Configuring job notifications at agent level

In the tree view, right-click the agent and select **Properties**. In the Properties dialog box, select the **Job Notifications** tab.

- Set **Override default configuration?** to **Yes** if you want the agent level job notification settings to override the default job notification settings. The rest of the settings then become enabled.
- Set **Email on job completion?** to **Yes** to send a notification when the job completes successfully.
- Set **Email on a job failure?** to **Yes** to send the job notification when the job fails.
- In the **Email group** field, specify the email group to send the job notification to.

## Configuring job notifications at server level

To configure your job notifications at the PEM server level, select **Management > Server Configuration**. In the Server Configurations dialog box:

- Select **job\_failure\_notification** to send an email notification after each job failure.
- Use the **job\_notification\_email\_group** parameter to specify the email group to send the email notification to.
- Use **job\_retention\_time parameter** to specify the number of days to retain nonrecurring scheduled tasks in the system.
- Select **job\_status\_change\_notification** to send an email notification after each status change of failure, success, or interrupted.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
