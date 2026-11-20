---
title: Exploring the database
description: Exploring the database in EDB Postgres AI with psql
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/quickstart/exploring_the_database/
lastModified: 2025-06-16T21:34:03Z
---

# Exploring the database

Now that you have created a database cluster and connected to it, you can start exploring the database. In this step, we'll show you how to use `psql` to connect to the database cluster and run some basic queries.

Assuming that you are using `psql` as your Postgres client as suggested in the [previous step](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/quickstart/connecting_to_the_database_with_psql/), proceed to connect to the database cluster.

Once you have connected you can run some basic queries. But first you'll want to create a database of your own to work with.

### Create a database

1. Create a user with the edb\_admin role:
   ```sql
   CREATE USER explorer WITH PASSWORD 'yourpasswordhere';
   ```

2. Create a database:
   ```sql
   CREATE DATABASE explore;
   ```

3. Grant the user access to the database:
   ```sql
   GRANT explorer to edb_admin;
   ```

4. Connect to the database:
   ```sql
   \c explore
   ```

### Create a table and data

Let's create a table of integers and populate it with some random values.

1. Create a table:
   ```sql
   CREATE TABLE quicktest ( id SERIAL PRIMARY KEY, value INT ); 
   ```

2. Populate the table:
   ```sql
   INSERT INTO quicktest (value) SELECT random()*10000
   FROM generate_series(1,10000);
   ```

### Run some queries

1. Get a sum of the value column (and a count of the rows):
   ```sql
   select COUNT(*),SUM(value) from quicktest;
   ```
2. Get the average value:
   ```sql
   select AVG(value) from quicktest;
   ```
3. Get the maximum value:
   ```sql
   select MAX(value) from quicktest;
   ```
4. Get the minimum value:
   ```sql
   select MIN(value) from quicktest;
   ```
5. Get the standard deviation of the values:
   ```sql
   select STDDEV(value) from quicktest;
   ```
6. Get the ten lowest values in the table:
   ```sql
   select * from quicktest order by value limit 10;
   ```
7. Get the ten highest values in the table:
   ```sql
   select * from quicktest order by value desc limit 10;
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
