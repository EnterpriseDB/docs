---
title: Notifications
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/
lastModified: 2026-03-27T11:34:11+05:30
---

# Notifications

PEM can send a notification or execute a script if an alert is triggered or cleared. You can send notifications using the following options:

- [SMTP](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/smtp/)
- [Webhooks](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/webhooks/)
- [SNMP](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/snmp/)
- [Nagios](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/nagios/)

* [SMTP](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/smtp/): You must configure the PEM server to use an SMTP server to deliver email before PEM can send email notifications.
* [Webhooks](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/webhooks/): You must configure the PEM Server to use webhooks to receive notification of alert events on threshold value violations in your configured applications.
* [SNMP](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/snmp/): You must configure the PEM server to send the notifications to an SNMP trap/notification receiver before notifications can be sent. Set the SNMP ver to v1, v2, or v3 to identify the SNMP version.
* [Nagios](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/nagios/): The PEM server can send a passive alert result to Nagios network-alerting software when a user-defined alert is triggered. To instruct the PEM server to notify Nagios of a triggered alert, you must:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
