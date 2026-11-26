---
title: Customizing AWS Config rules
description: Customize default AWS configuration settings to match Cloud Service's resource configurations
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/your_cloud_account/customizing_compliance/aws_config_rules/
lastModified: 2024-10-18T05:05:04Z
---

# Customizing AWS Config rules

AWS Config rules represent desired configuration settings for AWS resources and help you to monitor, identify, and remediate noncompliant ones. AWS Security Hub leverages AWS Config by introducing dedicated sets of AWS Config security rules associated with several security standards. It aggregates findings from rule violations and other AWS or third-party services.

For more information, see:

- [What Is AWS Config?](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)
- [What is AWS Security Hub?](https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html)

Cloud Service doesn’t customize your AWS Config rules to prevent conflicts with external workloads.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
