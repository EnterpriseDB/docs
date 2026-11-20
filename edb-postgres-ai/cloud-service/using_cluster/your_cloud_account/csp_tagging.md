---
title: Tagging AWS resources
description: How to tag your AWS resources using EDB Postgres AI Cloud Service to enable better audit policy and cost control.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/your_cloud_account/csp_tagging/
lastModified: 2025-04-24T09:25:26+05:30
---

# Tagging AWS resources

Tags are key-value pairs you can apply to cloud provider resources created on your own AWS cloud account. Resource tagging allows you to have fine-grained audit policy and cost control over your resources. When you add a tag, the following resources are labeled:

- EC2 instances
- S3 buckets
- Load balancers
- Volumes

You can create and manage tags on a per-project basis in the EDB Postgres® AI Console. The Console then applies the tag to the resources of all regions configured in your account.

## Prerequisite

You have the **Owner** role for the **Project** for which you want to create and manage tags.

## Create Tags

To create a tag:

1. Log in to the Console.

2. Go to the project's page.

3. In the project's list, select your **Project**.

4. On your project's home page left navigation, select **Cloud Providers**.

5. On your cloud account tab, under **AWS**, select **Manage Tags**.

6. Select **Add a Key Value pair**.

7. Provide **Key** and **Value** and select **Save**.

8. A **Confirm changes to AWS tags** message pops up.

9. Select **Confirm** to add the tag.

10. This **Key:Value** pair is added at your project level. It is populated on the EC2 instances, S3 buckets, load balancers and volumes managed in that project, for all regions and clusters.

This new tag appears in the list under **AWS** on Cloud Service Providers.

This tag is also propagated on your AWS resources. For instance, you can view this tag in the **Tags** tab of your EC2 instance resources on the AWS console.

### Considerations

Consider following while adding a **Key:Value** pair:

- A number of case-sensitive keywords are reserved by AWS and EDB Cloud Service, and therefore cannot be entered as **Key**s.

  <details>

  <summary>

  Reserved keywords

  </summary>

  Reserved tag key prefixes:

  `aws:`, `AWS:`, `user:`, `k8s.io/`, `eks:`, `kubernetes.io/`, `elbv2.k8s.aws/`, `service.k8s.aws/`, `ebs.csi.aws.com/`

  Reserved tag keys:

  `Resource_type`, `Project`, `Environment`, `Topology`, `BAID`, `ManagedBy`, `biganimal-cluster`, `biganimal-project`, `CSIVolumeName`, `Name`.

  </details>

  <br/>

- Review the [tagging limitations of AWS](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions).

- In AWS, a resource can have a maximum number of 50 tags. The EDB Cloud Service and AWS Management Console apply some tags by default, so we recommend not adding more than 20 of your own tags. Take into account that the number of tags per resource is defined by the tags created in the EDB Console, in your cloud service provider's dashboard, with terraform, and other synced systems.

## Update Tags

To update a tag:

1. Log in to the Console.

2. Go to the project's page.

3. In the project's list, select your **Project**.

4. On your project's home page left navigation, select **Cloud Providers**.

5. On your cloud account tab, under **AWS**, select **Manage Tags**.

6. Update the **Value** field of any of the existing tags.

7. Select **Save**.

8. A **Confirm changes to AWS tags** message pops up.

9. Select **Confirm** to update the tag.

10. This **Key:Value** pair is updated at your project level. It is populated on the EC2 instances, S3 buckets, load balancers and volumes managed in that project, for all regions and clusters.

## Delete tags

1. Log in to the Console.

2. Go to the project's page.

3. In the project's list, select your **Project**.

4. On your project's home page left navigation, select **Cloud Providers**.

5. On your cloud account tab, under **AWS**, select **Manage Tags**.

6. Select the minus symbol (**—**) next to the Key value pair to delete the tag.

7. Select **Save**.

8. A **Confirm changes to AWS tags** message pops up.

9. Select **Confirm** to delete the tag and update the tags list.

This tag is also deleted on the AWS Console. You can confirm the tag's deletion by selecting the **Tags** tab of your EC2 instance resources on AWS console.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
