---
title: Creating a subscription
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/
lastModified: 2022-03-21T10:35:01-04:00
---

# Creating a subscription

<div id="creating_subscription" class="registered_link"></div>

Creating your first subscription requires the following steps:

- Registering the subscription server
- Adding the subscription database
- Creating a subscription by choosing the publication to subscribe to

You can create multiple subscriptions in a subscription database. You can also create more than one subscription to subscribe against the same publication.

- [Registering a subscription server](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/01_registering_subscription_server/): When you register a subscription server, you're identifying the network location, admin user name, and password of a specific, running, subscription server instance that you want to use to manage all aspects of the subscriptions you create subordinate to it.
- [Adding a subscription database](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/02_adding_subscription_database/): To allow Replication Server to identify an instance as a database for subscription, you must create a subscription database definition.
- [Adding a subscription](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/03_adding_subscription/): Subordinate to a subscription database definition, you create subscriptions. A subscription assigns the publication to replicate to the database identified by the subscription database definition.
- [Subscription metadata object](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/03_creating_subscription/04_subscription_metadata_object/): After you add a subscription database definition, a single table named rreptxsethealth is created as the subscription metadata object.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
