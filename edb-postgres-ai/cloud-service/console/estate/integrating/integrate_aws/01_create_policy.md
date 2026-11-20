---
title: Step 1 - Create a custom policy
description: Create a custom policy in AWS to allow a role to query the metadata of your AWS RDS and S3 services.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/01_create_policy/
lastModified: 2025-06-30T15:44:48-05:00
---

# Step 1 - Create a custom policy

The process of integrating AWS resources into your Estate starts from the EDB Postgres AI Console.

1. Go to [**EDB Postgres AI Console**](https://portal.biganimal.com/beacon).

2. Scroll down to the **Cloud Hosted Databases** section, select the **Manage Access** button, and choose your project.

3. The **Cloud Hosted Databases** console shows **Step 1 - Create custom policy**.

4. Go to the console of your AWS account with the RDS instances and S3 buckets you want to monitor.

5. Navigate to IAM, and in the navigation pane on the left side of the AWS console, select **Policies**.

6. On the **Policies** dashboard page, select the **Create policy** button.

7. In the **Policy editor** section, choose the JSON option.

8. Type or paste the following JSON policy document into the JSON editor:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "VisualEditor0",
         "Effect": "Allow",
         "Action": [
           "rds:DescribeDBInstances",
           "s3:ListAllMyBuckets",
           "rds:DescribeDBClusters"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

9. Select **Next**, give the policy a name, for example, `edb-postgres-ai-addon-policy` and select **Create Policy**. This policy allows EDB Postgres AI server to query metadata of your AWS RDS and S3 services.

10. Next, in the Cloud Hosted Databases console, select the **Next: Create a Role** button. The Cloud Hosted Databases console should now show [**Step 2 - Create a Role**](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/02_create_role/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
