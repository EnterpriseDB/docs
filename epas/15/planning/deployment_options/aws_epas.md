---
title: "Deploying from an Amazon Machine Image on AWS "
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/planning/deployment_options/aws_epas/
lastModified: 2024-06-03T14:17:16-04:00
---

# Deploying from an Amazon Machine Image on AWS&#x20;

EDB Postgres Advanced Server Amazon Machine Image (AMI) is a preconfigured template with EDB Postgres Advanced Server installed on RHEL 8. You can purchase the EDB Postgres Advanced Server AMI from Amazon Marketplace.

With the EDB Postgres Advanced Server AMI, you can:

- Create an EDB Postgres Advanced Server 15 instance on AWS
- Connect to the instance
- Initialize and use an EDB Postgres Advanced Server cluster

## Creating an instance

To deploy an EDB Postgres Advanced Server instance on AWS:

1. Log into your AWS account.

2. On the AWS home page, navigate to EC2.

3. On the EC2 dashboard, navigate to **Instances** and select **Launch instance**.

4. On the **Launch an instance** page, select **Choose an Amazon Machine Image(AMI)**.

5. On the **Choose an Amazon Machine Image(AMI)** page, go to the **AWS Marketplace AMIs** tab. Enter **EDB** in the search bar.

6. Select the EDB Postgres Advanced Server image and review the all the tabs:
   - **Overview**
   - **Product details**
   - **Pricing**
   - **Usage**
   - **Support**

7. Select **Continue**. On the **Launch an instance** page, specify the following:

   - **Name and tags** — Provide the name of the server, for example, `EDB test server`.

   - **Application and OS Images (Amazon Machine Image)** — The selected image name displays in the format `EDB-AS<x>-AWS-<y>`, where:

     - `<x>` is the version of EDB Postgres Advanced Server.

     - `<y>` is the version of the image.

     For example, if the EDB Postgres Advanced Server version is 15.2 and the AMI version is 2.0.1, then the image name is `EDB-AS15.2-AWS-2.0.1`.

   - **Instance type** — Select the instance type with the compute, memory, storage, and network capabilities you require.

   - **Key pair (login)** — Select an existing key pair or create a new key pair. If you create a new key pair, enter a key-pair name, select a key-pair type, and select a private-key file format. Download the new key pair and move it to a location where you can access it. You need a key pair to securely connect to your instance.

   - **Network settings** — For **Firewall**, select an existing security group or create a new security group. For more information, see [Network settings](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-networking.html) in the Amazon documentation.

   - **Configure storage** — Allocate the amount of storage you need for your instance.

   - **Advanced details** — Expand the section to view the fields and specify any additional parameters for the instance.

   Review the instance details in the **Summary** section on the right panel, and select **Launch instance**.

   You see the success message along with the instance id. Select the instance id to view the instance and see the auto-assigned IP address.

## Connecting to an instance

You need the auto-assigned IP address to connect to your instance. To find the IP address, in the navigation pane on the EC2 home page, select **Instances**. To view the complete details of your instance, including the IP address, select the instance id next to your instance name.

1. Open a terminal window.

2. Navigate to the directory containing your key pair.

3. Change the permissions of the key pair:

   ```shell
   chmod 0600 your_key_pair
   ```

4. Connect to your instance using the key pair:

   ```shell
   ssh -i your_key_pair ec2-user@instance_ip_address
   ```

   You're now connected to the AWS EC2 instance where EDB Postgres Advanced Server is installed.

## Getting started with a cluster

This example steps you through getting started with an EDB Postgres Advanced Server cluster. It includes logging in, ensuring the installation and initial configuration was successful, connecting to your cluster, and creating the user password.

```shell
# Initialize the database cluster
sudo PGSETUP_INITDB_OPTIONS="-E UTF-8" /usr/edb/as15/bin/edb-as-15-setup initdb

# Start the database cluster
sudo systemctl start edb-as-15

# To work in your cluster, login as the enterprisedb user
sudo su - enterprisedb

# Connect to the database server using the psql command line client
psql edb

# Assign a password to the database superuser the enterprisedb
ALTER ROLE enterprisedb IDENTIFIED BY password;

# Create a database (named hr)
CREATE DATABASE hr;

# Connect to the new database and create a table (named dept)
\c hr
CREATE TABLE public.dept (deptno numeric(2) NOT NULL CONSTRAINT dept_pk
PRIMARY KEY, dname varchar(14) CONSTRAINT dept_dname_uq UNIQUE, loc
varchar(13));

# Add data to the table
INSERT INTO dept VALUES (10,'ACCOUNTING','NEW YORK');
INSERT into dept VALUES (20,'RESEARCH','DALLAS');

# You can use simple SQL commands to query the database and retrieve
# information about the data you have added to the table
SELECT * FROM dept;
```

```output title="Output"
deptno  |   dname    |   loc
--------+------------+----------
10      | ACCOUNTING | NEW YORK
20      | RESEARCH   | DALLAS
(2 rows)
```

## Set up the repository

If you need to upgrade EDB Postgres Advanced Server or install any other EDB products, you need to set up the EDB repository. Setting up the repository is a one-time task.

To set up the repository, go to [EDB repositories](https://www.enterprisedb.com/repos-downloads) and follow the instructions provided there.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
