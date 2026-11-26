---
title: "EDB Postgres Enterprise Manager REST APIs v5.0: Schemas"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/
lastModified: 2025-08-14T18:41:09+05:30
---

# EDB Postgres Enterprise Manager REST APIs v5.0: Schemas

<span id="tocs_alertpayload"></span>

## AlertPayload

<a id="schemaalertpayload"></a> <a id="schema_AlertPayload"></a> <a id="tocSalertpayload"></a> <a id="tocsalertpayload"></a>

```json
{
  "id": 0,
  "alert_name": "string",
  "alert_template": 0,
  "description": "string",
  "enabled": true,
  "history_retention": 0,
  "frequency_min": 0,
  "operator": "string",
  "low_threshold_value": 0,
  "medium_threshold_value": 0,
  "high_threshold_value": 0,
  "all_alert_enable": true,
  "email_group_id": 0,
  "low_alert_enable": true,
  "low_email_group_id": 0,
  "med_alert_enable": true,
  "med_email_group_id": 0,
  "high_alert_enable": true,
  "high_email_group_id": 0,
  "send_trap": true,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "params": [
    {
      "paramname": "string",
      "paramvalue": "string"
    }
  ],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": true,
  "low_webhook_ids": [
    0
  ],
  "med_webhook_ids": [
    0
  ],
  "high_webhook_ids": [
    0
  ],
  "cleared_webhook_ids": [
    0
  ]
}

```

#### Properties

| Name                             | Type                                | Required | Restrictions | Description                                                                                                                                                                       |
| -------------------------------- | ----------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                               | integer                             | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| alert\_name                      | string                              | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| alert\_template                  | integer                             | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| description                      | string                              | false    | none         | none                                                                                                                                                                              |
| enabled                          | boolean                             | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| history\_retention               | integer                             | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| frequency\_min                   | integer                             | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| operator                         | string                              | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| low\_threshold\_value            | number                              | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| medium\_threshold\_value         | number                              | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| high\_threshold\_value           | number                              | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| all\_alert\_enable               | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| email\_group\_id                 | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| low\_alert\_enable               | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| low\_email\_group\_id            | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| med\_alert\_enable               | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| med\_email\_group\_id            | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| high\_alert\_enable              | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| high\_email\_group\_id           | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| send\_trap                       | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| snmp\_trap\_version              | integer                             | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, 2 or 3                                                                                                           |
| low\_send\_trap                  | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| med\_send\_trap                  | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| high\_send\_trap                 | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| params                           | \[[AlertParams](#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| execute\_script                  | boolean                             | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| execute\_script\_on\_clear       | boolean                             | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| execute\_script\_on\_pem\_server | boolean                             | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| script\_code                     | string                              | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| submit\_to\_nagios               | boolean                             | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |
| override\_default\_config        | boolean                             | false    | none         | Defines whether the default webhook configuration is override or not.                                                                                                             |
| send\_notification               | boolean                             | false    | none         | Defines whether the webhook send notification enabled.                                                                                                                            |
| low\_webhook\_ids                | \[integer]                          | false    | none         | Defines webhook ids for which low alerts to be configured.                                                                                                                        |
| med\_webhook\_ids                | \[integer]                          | false    | none         | Defines webhook ids for which medium alerts to be configured.                                                                                                                     |
| high\_webhook\_ids               | \[integer]                          | false    | none         | Defines webhook ids for which high alerts to be configured.                                                                                                                       |
| cleared\_webhook\_ids            | \[integer]                          | false    | none         | Defines webhook ids for which cleared alerts to be configured.                                                                                                                    |

<span id="tocs_alert"></span>

## Alert

<a id="schemaalert"></a> <a id="schema_Alert"></a> <a id="tocSalert"></a> <a id="tocsalert"></a>

```json
{
  "id": 0,
  "alert_name": "string",
  "alert_template": 0,
  "description": "string",
  "enabled": true,
  "history_retention": 0,
  "frequency_min": 0,
  "operator": "string",
  "low_threshold_value": 0,
  "medium_threshold_value": 0,
  "high_threshold_value": 0,
  "send_email": true,
  "all_alert_enable": true,
  "email_group_id": 0,
  "low_alert_enable": true,
  "low_email_group_id": 0,
  "med_alert_enable": true,
  "med_email_group_id": 0,
  "high_alert_enable": true,
  "high_email_group_id": 0,
  "send_trap": true,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "params": [
    {
      "paramname": "string",
      "paramvalue": "string"
    }
  ],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": true,
  "low_webhook_ids": [
    0
  ],
  "med_webhook_ids": [
    0
  ],
  "high_webhook_ids": [
    0
  ],
  "cleared_webhook_ids": [
    0
  ]
}

```

#### Properties

| Name                             | Type                                | Required | Restrictions | Description                                                                                                                                                                       |
| -------------------------------- | ----------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                               | integer                             | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| alert\_name                      | string                              | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| alert\_template                  | integer                             | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| description                      | string                              | false    | none         | none                                                                                                                                                                              |
| enabled                          | boolean                             | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| history\_retention               | integer                             | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| frequency\_min                   | integer                             | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| operator                         | string                              | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| low\_threshold\_value            | number                              | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| medium\_threshold\_value         | number                              | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| high\_threshold\_value           | number                              | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| send\_email                      | boolean                             | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| all\_alert\_enable               | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| email\_group\_id                 | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| low\_alert\_enable               | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| low\_email\_group\_id            | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| med\_alert\_enable               | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| med\_email\_group\_id            | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| high\_alert\_enable              | boolean                             | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| high\_email\_group\_id           | integer                             | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| send\_trap                       | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| snmp\_trap\_version              | integer                             | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, 2 or 3                                                                                                           |
| low\_send\_trap                  | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| med\_send\_trap                  | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| high\_send\_trap                 | boolean                             | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| params                           | \[[AlertParams](#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| execute\_script                  | boolean                             | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| execute\_script\_on\_clear       | boolean                             | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| execute\_script\_on\_pem\_server | boolean                             | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| script\_code                     | string                              | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| submit\_to\_nagios               | boolean                             | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |
| override\_default\_config        | boolean                             | false    | none         | Defines whether the default webhook configuration is override or not.                                                                                                             |
| send\_notification               | boolean                             | false    | none         | Defines whether the webhook send notification enabled.                                                                                                                            |
| low\_webhook\_ids                | \[integer]                          | false    | none         | Webhook ids for which low alerts are configured.                                                                                                                                  |
| med\_webhook\_ids                | \[integer]                          | false    | none         | Webhook ids for which medium alerts are configured.                                                                                                                               |
| high\_webhook\_ids               | \[integer]                          | false    | none         | Webhook ids for which high alerts are configured.                                                                                                                                 |
| cleared\_webhook\_ids            | \[integer]                          | false    | none         | Webhook ids for which cleared alerts are configured.                                                                                                                              |

<span id="tocs_alertparams"></span>

## AlertParams

<a id="schemaalertparams"></a> <a id="schema_AlertParams"></a> <a id="tocSalertparams"></a> <a id="tocsalertparams"></a>

```json
{
  "paramname": "string",
  "paramvalue": "string"
}

```

#### Properties

| Name       | Type   | Required | Restrictions | Description                                                                            |
| ---------- | ------ | -------- | ------------ | -------------------------------------------------------------------------------------- |
| paramname  | string | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list. |
| paramvalue | string | false    | none         | Value for the given parameter                                                          |

<span id="tocs_alternateserverprobecode"></span>

## AlternateServerProbeCode

<a id="schemaalternateserverprobecode"></a> <a id="schema_AlternateServerProbeCode"></a> <a id="tocSalternateserverprobecode"></a> <a id="tocsalternateserverprobecode"></a>

```json
{
  "server_version_id": 0,
  "server_probe_code": "string"
}

```

#### Properties

| Name                | Type    | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| server\_version\_id | integer | false    | none         | Server version id for the support monitored server<table class="model"><thead><tr><th>server\_version\_id</th><th>Database Server</th></tr></thead><thead /><tbody><tr><td>10905</td><td>PostgreSQL 9.5</td></tr><tr><td>10906</td><td>PostgreSQL 9.6</td></tr><tr><td>11000</td><td>PostgreSQL 10</td></tr><tr><td>11100</td><td>PostgreSQL 11</td></tr><tr><td>11200</td><td>PostgreSQL 12</td></tr><tr><td>11300</td><td>PostgreSQL 13</td></tr><tr><td>20905</td><td>Postgres Plus Advanced Server 9.5</td></tr><tr><td>20906</td><td>Postgres Plus Advanced Server 9.6</td></tr><tr><td>21000</td><td>EDB Postgres Advanced Server 10</td></tr><tr><td>21100</td><td>EDB Postgres Advanced Server 11</td></tr><tr><td>21200</td><td>EDB Postgres Advanced Server 12</td></tr><tr><td>21300</td><td>EDB Postgres Advanced Server 13</td></tr></tbody></table> |
| server\_probe\_code | string  | false    | none         | SQL query to run on the specified server version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

<span id="tocs_deletedalternateserverprobecode"></span>

## DeletedAlternateServerProbeCode

<a id="schemadeletedalternateserverprobecode"></a> <a id="schema_DeletedAlternateServerProbeCode"></a> <a id="tocSdeletedalternateserverprobecode"></a> <a id="tocsdeletedalternateserverprobecode"></a>

```json
{
  "server_version_id": 0
}

```

#### Properties

| Name                | Type    | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| server\_version\_id | integer | false    | none         | Server version id for the support monitored server<table class="model"><thead><tr><th>server\_version\_id</th><th>Database Server</th></tr></thead><thead /><tbody><tr><td>10905</td><td>PostgreSQL 9.5</td></tr><tr><td>10906</td><td>PostgreSQL 9.6</td></tr><tr><td>11000</td><td>PostgreSQL 10</td></tr><tr><td>11100</td><td>PostgreSQL 11</td></tr><tr><td>11200</td><td>PostgreSQL 12</td></tr><tr><td>11300</td><td>PostgreSQL 13</td></tr><tr><td>20905</td><td>Postgres Plus Advanced Server 9.5</td></tr><tr><td>20906</td><td>Postgres Plus Advanced Server 9.6</td></tr><tr><td>21000</td><td>EDB Postgres Advanced Server 10</td></tr><tr><td>21100</td><td>EDB Postgres Advanced Server 11</td></tr><tr><td>21200</td><td>EDB Postgres Advanced Server 12</td></tr><tr><td>21300</td><td>EDB Postgres Advanced Server 13</td></tr></tbody></table> |

<span id="tocs_alerttemplate"></span>

## AlertTemplate

<a id="schemaalerttemplate"></a> <a id="schema_AlertTemplate"></a> <a id="tocSalerttemplate"></a> <a id="tocsalerttemplate"></a>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "default_history_retention": 0,
  "object_type": 0,
  "sql": "string",
  "applicable_on_server": "ALL",
  "default_check_frequency": 0,
  "threshold_unit": "string",
  "is_system_template": true,
  "is_auto_create": true,
  "thresholds": [
    0
  ],
  "operator": ">",
  "high_threshold_value": "string",
  "medium_threshold_value": "string",
  "low_threshold_value": "string",
  "info_sql": "string"
}

```

#### Properties

| Name                        | Type      | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------- | --------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                          | integer   | false    | none         | Identifier for the alert template. NOTE: It is not applicable while creating the alert template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| name                        | string    | false    | none         | Name of the alert template. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| description                 | string    | false    | none         | Description about the alert template. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| default\_history\_retention | integer   | false    | none         | Defines the history retention period in days for this type of alerts. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| object\_type                | integer   | false    | none         | Defines the type of the object on which this alert template is applicable to. <ul><li>System wide alert template will be <b>50</b>.</li><li>An alert template applicable to an agent will be <b>100</b>.</li><li>An alert template applicable to a managed server will be <b>200</b>.</li><li>An alert template applicable to a database for a particular monitored server will be <b>300</b>.</li><li>An alert template applicable to a schema on a particular database for the managed server will be <b>400</b>.</li><li>An alert template applicable to a table on a particular schema for the database on a monitored server will be <b>500</b>.</li><li>An alert template applicable to an index on a particular schema for the database on a monitored server will be <b>600</b>.</li><li>An alert template applicable to a sequence on a particular schema for the database on a monitored server will be <b>700</b>.</li><li>An alert template applicable to a function on a particular schema for the database on a monitored server will be <b>800</b>.</li></ul>NOTE: It is a mandatory parameter for the POST request. |
| sql                         | string    | false    | none         | SQL query, possibly parameterized, to get a numeric indicating threshold reached. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| applicable\_on\_server      | string    | false    | none         | Template is applicable on which type of monitored server. Possible values are ALL, POSTGRES\_SERVER, ADVANCED\_SERVER. NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| default\_check\_frequency   | integer   | false    | none         | Defines how frequently to check for the alert defined from this template (in minutes). NOTE: It is a mandatory parameter for the POST request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| threshold\_unit             | string    | false    | none         | Unit in which threshold is calculated; purely for GUI, like MB/kB/seconds/days/...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| is\_system\_template        | boolean   | false    | none         | Defines whether the given template is system defined or user defined. NOTE: It is not applicable for the the POST/PUT requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| is\_auto\_create            | boolean   | false    | none         | Whether alert should be created as soon as agent or server is added to pem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| thresholds                  | \[number] | false    | none         | Default threshold values. Values in the thresholds array must be in the sorted order based on the operator.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| operator                    | string    | false    | none         | Operator to compare threshold values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| high\_threshold\_value      | string    | false    | none         | High threshold value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| medium\_threshold\_value    | string    | false    | none         | Medium threshold value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| low\_threshold\_value       | string    | false    | none         | Low threshold value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| info\_sql                   | string    | false    | none         | Specify the SQL query that will provide the detailed information about that alert on Dashboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

##### Enumerated Values

| Property               | Value            |
| ---------------------- | ---------------- |
| applicable\_on\_server | ALL              |
| applicable\_on\_server | POSTGRES\_SERVER |
| applicable\_on\_server | ADVANCED\_SERVER |
| operator               | >                |
| operator               | <                |

<span id="tocs_alerthistory"></span>

## AlertHistory

<a id="schemaalerthistory"></a> <a id="schema_AlertHistory"></a> <a id="tocSalerthistory"></a> <a id="tocsalerthistory"></a>

```json
{
  "alert_id": 0,
  "state": "High",
  "value": "string",
  "actual_value": 0
}

```

#### Properties

| Name          | Type    | Required | Restrictions | Description                               |
| ------------- | ------- | -------- | ------------ | ----------------------------------------- |
| alert\_id     | integer | false    | none         | Alert ID                                  |
| state         | string  | false    | none         | State                                     |
| value         | string  | false    | none         | User presentable value                    |
| actual\_value | number  | false    | none         | Actual value at the time of state change. |

##### Enumerated Values

| Property | Value  |
| -------- | ------ |
| state    | High   |
| state    | Medium |
| state    | Low    |

<span id="tocs_serverstatus"></span>

## ServerStatus

<a id="schemaserverstatus"></a> <a id="schema_ServerStatus"></a> <a id="tocSserverstatus"></a> <a id="tocsserverstatus"></a>

```json
{
  "id": 0,
  "name": "string",
  "group_id": 0,
  "group_name": "string",
  "blackout": true,
  "status": "UP",
  "alerts": {
    "total": 0,
    "acknowledged": 0,
    "high": 0,
    "medium": 0,
    "low": 0,
    "high_acknowledged": 0,
    "medium_acknowledged": 0,
    "low_acknowledged": 0
  },
  "version": "string",
  "number_connections": 0,
  "remote_monitoring": true,
  "agent_id": 0,
  "sessions": {
    "last_recorded_time": 0,
    "sessions": [
      {
        "database_name": "string",
        "procpid": 0,
        "usename": "string",
        "backend_start": 0,
        "xact_start": 0,
        "query_start": 0,
        "is_waiting": true,
        "is_idle": true,
        "is_idle_in_transaction": true,
        "is_vacuum": true,
        "is_autovacuum": true,
        "client_addr": "string",
        "client_port": 0,
        "memory_usage_mb": 0,
        "swap_usage_mb": 0,
        "cpu_usage": 0,
        "io_read_bytes": 0,
        "io_write_bytes": 0,
        "state": "string",
        "state_change": 0
      }
    ]
  }
}

```

#### Properties

| Name                         | Type      | Required | Restrictions | Description                                                                                    |
| ---------------------------- | --------- | -------- | ------------ | ---------------------------------------------------------------------------------------------- |
| id                           | integer   | false    | none         | Server ID                                                                                      |
| name                         | string    | false    | none         | Server name                                                                                    |
| group\_id                    | integer   | false    | none         | Group ID under which database server is visible to the user                                    |
| group\_name                  | string    | false    | none         | Group name                                                                                     |
| blackout                     | boolean   | false    | none         | Status of the alert blackout for the database server                                           |
| status                       | string    | false    | none         | Server status can be UP, DOWN, UNKNOWN, or UNMANAGED,                                          |
| alerts                       | object    | false    | none         | List of alert configured for the database server and it's status and how many are acknowledged |
| » total                      | integer   | false    | none         | Number of alerts configured for the database server                                            |
| » acknowledged               | integer   | false    | none         | Number of alerts, which are already been acknowledged                                          |
| » high                       | integer   | false    | none         | Number of alerts with state as 'High'                                                          |
| » medium                     | integer   | false    | none         | Number of alerts with state as 'Medium'                                                        |
| » low                        | integer   | false    | none         | Number of alerts with state as 'Low'                                                           |
| » high\_acknowledged         | integer   | false    | none         | Number of alerts with state as 'High' and are acknowledged                                     |
| » medium\_acknowledged       | integer   | false    | none         | Number of alerts with state as 'Medium' and are acknowledged                                   |
| » low\_acknowledged          | integer   | false    | none         | Number of alerts with state as 'Low' and are acknowledged                                      |
| version                      | string    | false    | none         | Current version of the database server                                                         |
| number\_connections          | integer   | false    | none         | Number of connections on the database servers                                                  |
| remote\_monitoring           | boolean   | false    | none         | Whether the database server is being monitored remotely by the pemAgent                        |
| agent\_id                    | integer   | false    | none         | Agent ID, which is monitoring the database server                                              |
| sessions                     | object    | false    | none         | All the session information for the daabase servers                                            |
| » last\_recorded\_time       | number    | false    | none         | Unix time representing the last session information recorded time                              |
| » sessions                   | \[object] | false    | none         | List of all the session information for the database server                                    |
| »» database\_name            | string    | false    | none         | Database name                                                                                  |
| »» procpid                   | integer   | false    | none         | Process ID                                                                                     |
| »» usename                   | string    | false    | none         | User name                                                                                      |
| »» backend\_start            | number    | false    | none         | Unix time representing the session start time                                                  |
| »» xact\_start               | number    | false    | none         | Unix time representing the transaction start time                                              |
| »» query\_start              | number    | false    | none         | Unix time representing the query start time (if any running)                                   |
| »» is\_waiting               | boolean   | false    | none         | Is the sesion waiting?                                                                         |
| »» is\_idle                  | boolean   | false    | none         | Is the session idle?                                                                           |
| »» is\_idle\_in\_transaction | boolean   | false    | none         | Is the session idle in a transaction?                                                          |
| »» is\_vacuum                | boolean   | false    | none         | Is this a VACUUM session?                                                                      |
| »» is\_autovacuum            | boolean   | false    | none         | Is this a AUTO VACUUM session?                                                                 |
| »» client\_addr              | string    | false    | none         | Host address for the client of the session                                                     |
| »» client\_port              | integer   | false    | none         | Client port for the session                                                                    |
| »» memory\_usage\_mb         | number    | false    | none         | Memory usage (in MB) of the session (available only when monitoried locally)                   |
| »» swap\_usage\_mb           | number    | false    | none         | Swap memory usage (in MB) of the session (available only when monitoried locally)              |
| »» cpu\_usage                | number    | false    | none         | CPU Usage (in percentage) of the session (available only when monitoried locally)              |
| »» io\_read\_bytes           | number    | false    | none         | I/O Read (in bytes) of the session (available only when monitoried locally)                    |
| »» io\_write\_bytes          | number    | false    | none         | I/O Write (in bytes) of the session (available only when monitoried locally)                   |
| »» state                     | string    | false    | none         | Current state of the session (idle, active, idle in transcation, etc)                          |
| »» state\_change             | number    | false    | none         | Unix time representing the last state change time of the session                               |

##### Enumerated Values

| Property | Value     |
| -------- | --------- |
| status   | UP        |
| status   | DOWN      |
| status   | UNKNOWN   |
| status   | UNMANAGED |

<span id="tocs_agentstatus"></span>

## AgentStatus

<a id="schemaagentstatus"></a> <a id="schema_AgentStatus"></a> <a id="tocSagentstatus"></a> <a id="tocsagentstatus"></a>

```json
{
  "id": 0,
  "name": "string",
  "group_id": 0,
  "group_name": "string",
  "blackout": true,
  "status": "UP",
  "alerts": {
    "total": 0,
    "acknowledged": 0,
    "high": 0,
    "medium": 0,
    "low": 0,
    "high_acknowledged": 0,
    "medium_acknowledged": 0,
    "low_acknowledged": 0
  },
  "version": "string",
  "processes": 0,
  "threads": 0,
  "cpu_utilization": 0,
  "memory_utilization": 0,
  "swap_utilization": 0,
  "disk_utilization": 0
}

```

#### Properties

| Name                   | Type    | Required | Restrictions | Description                                                                          |
| ---------------------- | ------- | -------- | ------------ | ------------------------------------------------------------------------------------ |
| id                     | integer | false    | none         | Agent ID                                                                             |
| name                   | string  | false    | none         | Agent name                                                                           |
| group\_id              | integer | false    | none         | Group ID under which Agent is visible to the user                                    |
| group\_name            | string  | false    | none         | Group name                                                                           |
| blackout               | boolean | false    | none         | Enabled/Disabled alert blackout for the agent                                        |
| status                 | string  | false    | none         | Agent status can be UP, DOWN, or UNKNOWN                                             |
| alerts                 | object  | false    | none         | List of alert configured for the agent and it's status and how many are acknowledged |
| » total                | integer | false    | none         | Number of alerts configured for the agent                                            |
| » acknowledged         | integer | false    | none         | Number of alerts, which are already been acknowledged                                |
| » high                 | integer | false    | none         | Number of alerts with state as 'High'                                                |
| » medium               | integer | false    | none         | Number of alerts with state as 'Medium'                                              |
| » low                  | integer | false    | none         | Number of alerts with state as 'Low'                                                 |
| » high\_acknowledged   | integer | false    | none         | Number of alerts with state as 'High' and are acknowledged                           |
| » medium\_acknowledged | integer | false    | none         | Number of alerts with state as 'Medium' and are acknowledged                         |
| » low\_acknowledged    | integer | false    | none         | Number of alerts with state as 'Low' and are acknowledged                            |
| version                | string  | false    | none         | Current version of the agent                                                         |
| processes              | integer | false    | none         | Number of processes running                                                          |
| threads                | integer | false    | none         | Number of threads for all the running processes                                      |
| cpu\_utilization       | number  | false    | none         | CPU utilization (Percentage)                                                         |
| memory\_utilization    | number  | false    | none         | Memory utilization (Percentage)                                                      |
| swap\_utilization      | number  | false    | none         | Swap memory utilization (Percentage)                                                 |
| disk\_utilization      | number  | false    | none         | Overall disk utilization (Percentage)                                                |

##### Enumerated Values

| Property | Value   |
| -------- | ------- |
| status   | UP      |
| status   | DOWN    |
| status   | UNKNOWN |

<span id="tocs_alertstatus"></span>

## AlertStatus

<a id="schemaalertstatus"></a> <a id="schema_AlertStatus"></a> <a id="tocSalertstatus"></a> <a id="tocsalertstatus"></a>

```json
{
  "alert_since": "string",
  "alert_id": 0,
  "alert_name": "string",
  "alert_state": "High",
  "value": "string",
  "object_description": "string",
  "server_id": 0,
  "agent_id": 0,
  "database": "string",
  "schema": "string",
  "package": "string",
  "object": "string",
  "alert_target_level": "Global",
  "last_processed": "string",
  "info": "string",
  "info_cols": [
    "string"
  ],
  "info_vals": [
    [
      "string"
    ]
  ]
}

```

#### Properties

| Name                 | Type      | Required | Restrictions | Description                                                                                                                   |
| -------------------- | --------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| alert\_since         | string    | false    | none         | Unix Time at which alert state has last changed.                                                                              |
| alert\_id            | integer   | false    | none         | Alert internal identification number                                                                                          |
| alert\_name          | string    | false    | none         | Name of the alert.                                                                                                            |
| alert\_state         | string    | false    | none         | Current state of the alert. 'null' value suggested alert threshold values has not been violated for the alert at the moments. |
| value                | string    | false    | none         | Current value of the alert                                                                                                    |
| object\_description  | string    | false    | none         | Monitoring object description/name                                                                                            |
| server\_id           | integer   | false    | none         | null or ID of the server                                                                                                      |
| agent\_id            | integer   | false    | none         | null or ID of the agent                                                                                                       |
| database             | string    | false    | none         | null or name of the database                                                                                                  |
| schema               | string    | false    | none         | null or name of the schema/namespace                                                                                          |
| package              | string    | false    | none         | null or name of the EDB package                                                                                               |
| object               | string    | false    | none         | null or name of any other type of object                                                                                      |
| alert\_target\_level | string    | false    | none         | Alert target level                                                                                                            |
| last\_processed      | string    | false    | none         | String reprenting unix time at which the alert has been processed                                                             |
| info                 | string    | false    | none         | Some information at the time of alert generated                                                                               |
| info\_cols           | \[string] | false    | none         | Array of column names for the information                                                                                     |
| info\_vals           | \[array]  | false    | none         | Detailed information associalted with the alert in the form of table (array of array)                                         |

##### Enumerated Values

| Property             | Value    |
| -------------------- | -------- |
| alert\_state         | High     |
| alert\_state         | Medium   |
| alert\_state         | Low      |
| alert\_target\_level | Global   |
| alert\_target\_level | Agent    |
| alert\_target\_level | Server   |
| alert\_target\_level | Database |
| alert\_target\_level | Schema   |
| alert\_target\_level | Table    |
| alert\_target\_level | Index    |
| alert\_target\_level | Sequence |
| alert\_target\_level | Function |
| alert\_target\_level | View     |

<span id="tocs_customprobes"></span>

## CustomProbes

<a id="schemacustomprobes"></a> <a id="schema_CustomProbes"></a> <a id="tocScustomprobes"></a> <a id="tocscustomprobes"></a>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "enabled": true,
  "target_type": 0,
  "internal_name": "string",
  "is_system_probe": true,
  "any_server_version": true,
  "collection_method": "w",
  "interval": 0,
  "lifetime": 0,
  "discard_history": true,
  "platform": "string",
  "probe_code": "string",
  "probe_columns": [
    {
      "pc_id": 0,
      "pc_name": "string",
      "pc_data_type": "bigint",
      "pc_internal_name": "string",
      "pc_unit": "string",
      "pc_col_type": "m",
      "pc_position": 0,
      "pc_graphable": true,
      "pc_calc_pit": true,
      "pc_pit_default": true
    }
  ],
  "alternate_code": [
    {
      "server_version_id": 0,
      "server_probe_code": "string"
    }
  ]
}

```

#### Properties

| Name                 | Type                                                          | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| probe\_id            | integer                                                       | false    | none         | Identifier for a probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| probe\_name          | string                                                        | false    | none         | Name of the probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| enabled              | boolean                                                       | false    | none         | Defines whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| target\_type         | integer                                                       | false    | none         | Defines the type of the object on which the probe is applicable to. <ul><li>A probe with target\_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target\_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target\_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target\_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target\_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target\_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target\_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target\_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target\_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |
| internal\_name       | string                                                        | false    | none         | Defines the internal name of the probe. PEM system creates internal tables for storing the probe statistics in 'pemdata', and 'pemhistory' schema, and name of those table will be same as internal name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| is\_system\_probe    | boolean                                                       | false    | none         | Defines whether this probe is user defined, or not. Value for this flag will always be false for a user defined probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| any\_server\_version | boolean                                                       | false    | none         | Defines whether this probe is applicable to any version of Postgres variant. For more details, please follow the documenation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| collection\_method   | string                                                        | false    | none         | Defines the method of statistics collection. PEM supports three methods for custom made probes. i.e. SQL, WMI, Batch/Shell script. <ul><li>'w' stands for WMI script.<br />It is applicable for the windows platform only, and target\_type will be <b>100</b> (i.e. agent).</li><li>'b' stands for Batch/Shell script. 'target\_type' for this will be always be <b>100</b> (i.e. agent). It will behave as batch script on windows otherwise as a shell script.</li><li>'s' stands for SQL script. It will applicable only for <b>200</b> (i.e. server), <b>300</b> (i.e. database), <b>400</b> (i.e. schema), <b>500</b> (i.e. table), <b>600</b> (i.e. index), <b>700</b> (i.e. sequence), <b>800</b> (i.e. function), <b>900</b> (i.e. view).</li></ul>                                                                                                                                                                                                                                                                  |
| interval             | integer                                                       | false    | none         | Defines how frequently the probe will collect the statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| lifetime             | integer                                                       | false    | none         | Defines the history data retention time (in days). It does not have any effect, if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| discard\_history     | boolean                                                       | false    | none         | Defines whether to discard the history data. It will not store the history of the data for this probe, when 'discard\_history' is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| platform             | string                                                        | false    | none         | Defines on which platform this probe can run on. It is only applicable to an agent level probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| probe\_code          | string                                                        | false    | none         | A <b>SQL/Batch script/Shell script/WMI script</b> to collect the statistics as per definition of the code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| probe\_columns       | \[object]                                                     | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » pc\_id             | integer                                                       | false    | none         | Identifier of the column                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » pc\_name           | string                                                        | false    | none         | Name of the column                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » pc\_data\_type     | string                                                        | false    | none         | Data type of the column.<br />Supported datatypes are:<ul><ul>bigint</ul><ul>char</ul><ul>decimal</ul><ul>double precision</ul><ul>integer</ul><ul>numeric</ul><ul>real</ul><ul>text</ul><ul>text\[]</ul><ul>timestamp</ul><ul>timestamptz</ul></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » pc\_internal\_name | string                                                        | false    | none         | Returns the internal name of the column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » pc\_unit           | string                                                        | false    | none         | Returns the unit of the column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| » pc\_col\_type      | string                                                        | false    | none         | Returns the columns is part of the primary key of the internal table, or not. 'k' stands for a key column, and 'm' stands for a member/normal column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » pc\_position       | integer                                                       | false    | none         | Returns the position of the column in the internal table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| » pc\_graphable      | boolean                                                       | false    | none         | Returns whether the data of the column is graphable on a chart, or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| » pc\_calc\_pit      | boolean                                                       | false    | none         | Returns whether server calculates the point-in-time for the metric data for this column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » pc\_pit\_default   | boolean                                                       | false    | none         | Returns the metric is stored by point-in-time by default. Please refer the 'Custom Probes' section in the documentation for detailed information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| alternate\_code      | \[[AlternateServerProbeCode](#tocs_alternateserverprobecode)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

##### Enumerated Values

| Property           | Value            |
| ------------------ | ---------------- |
| collection\_method | w                |
| collection\_method | b                |
| collection\_method | s                |
| pc\_data\_type     | bigint           |
| pc\_data\_type     | char             |
| pc\_data\_type     | decimal          |
| pc\_data\_type     | double precision |
| pc\_data\_type     | integer          |
| pc\_data\_type     | numeric          |
| pc\_data\_type     | real             |
| pc\_data\_type     | text             |
| pc\_data\_type     | text\[]          |
| pc\_data\_type     | timestamp        |
| pc\_data\_type     | timestamptz      |
| pc\_col\_type      | m                |
| pc\_col\_type      | k                |

<span id="tocs_customprobepostdata"></span>

## CustomProbePostData

<a id="schemacustomprobepostdata"></a> <a id="schema_CustomProbePostData"></a> <a id="tocScustomprobepostdata"></a> <a id="tocscustomprobepostdata"></a>

```json
{
  "probe_name": "string",
  "collection_method": "w",
  "enabled": true,
  "target_type": 0,
  "any_server_version": true,
  "interval": 0,
  "lifetime": 0,
  "discard_history": true,
  "platform": "string",
  "probe_code": "string",
  "probe_columns": [
    {
      "pc_name": "string",
      "pc_data_type": "bigint",
      "pc_unit": "string",
      "pc_col_type": "m",
      "pc_graphable": true,
      "pc_calc_pit": true,
      "pc_pit_default": true
    }
  ],
  "alternate_code": [
    {
      "server_version_id": 0,
      "server_probe_code": "string"
    }
  ]
}

```

#### Properties

| Name                 | Type                                                          | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| probe\_name          | string                                                        | false    | none         | Name of the probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| collection\_method   | string                                                        | false    | none         | Defines the method of statistics collection. PEM supports three methods for custom made probes. i.e. SQL, WMI, Batch/Shell script. <ul><li>'w' stands for WMI script.<br />It is applicable for the windows platform only, and target\_type will be <b>100</b> (i.e. agent).</li><li>'b' stands for Batch/Shell script. 'target\_type' for this will be always be <b>100</b> (i.e. agent). It will behave as batch script on windows otherwise as a shell script.</li><li>'s' stands for SQL script. It will applicable only for <b>200</b> (i.e. server), <b>300</b> (i.e. database), <b>400</b> (i.e. schema), <b>500</b> (i.e. table), <b>600</b> (i.e. index), <b>700</b> (i.e. sequence), <b>800</b> (i.e. function), <b>900</b> (i.e. view).</li></ul>                                                                                                                                                                                                                                                                  |
| enabled              | boolean                                                       | false    | none         | Defines whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| target\_type         | integer                                                       | false    | none         | Defines the type of the object on which the probe is applicable to. <ul><li>A probe with target\_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target\_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target\_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target\_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target\_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target\_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target\_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target\_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target\_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |
| any\_server\_version | boolean                                                       | false    | none         | Defines whether this probe is applicable to any version of Postgres variant. For more details, please follow the documenation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| interval             | integer                                                       | false    | none         | Defines how frequently the probe will collect the statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| lifetime             | integer                                                       | false    | none         | Defines the history data retention time (in days). It does not have any effect, if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| discard\_history     | boolean                                                       | false    | none         | Defines whether to discard the history data. It will not store the history of the data for this probe, when 'discard\_history' is set to false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| platform             | string                                                        | false    | none         | Defines on which platform this probe can run on. It is only applicable to an agent level probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| probe\_code          | string                                                        | false    | none         | A <b>SQL/Batch script/Shell script/WMI script</b> to collect the statistics as per definition of the code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| probe\_columns       | \[object]                                                     | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » pc\_name           | string                                                        | false    | none         | Name of the column                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| » pc\_data\_type     | string                                                        | false    | none         | Data type of the column.<br />Supported datatypes are:<ul><ul>bigint</ul><ul>char</ul><ul>decimal</ul><ul>double precision</ul><ul>integer</ul><ul>numeric</ul><ul>real</ul><ul>text</ul><ul>text\[]</ul><ul>timestamp</ul><ul>timestamptz</ul></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| » pc\_unit           | string                                                        | false    | none         | Returns the unit of the column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| » pc\_col\_type      | string                                                        | false    | none         | Returns the columns is part of the primary key of the internal table, or not. 'k' stands for a key column, and 'm' stands for a member/normal column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| » pc\_graphable      | boolean                                                       | false    | none         | Returns whether the data of the column is graphable on a chart, or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| » pc\_calc\_pit      | boolean                                                       | false    | none         | Returns whether server calculates the point-in-time for the metric data for this column.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| » pc\_pit\_default   | boolean                                                       | false    | none         | Returns the metric is stored by point-in-time by default. Please refer the 'Custom Probes' section in the documentation for detailed information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| alternate\_code      | \[[AlternateServerProbeCode](#tocs_alternateserverprobecode)] | false    | none         | none                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

##### Enumerated Values

| Property           | Value            |
| ------------------ | ---------------- |
| collection\_method | w                |
| collection\_method | b                |
| collection\_method | s                |
| pc\_data\_type     | bigint           |
| pc\_data\_type     | char             |
| pc\_data\_type     | decimal          |
| pc\_data\_type     | double precision |
| pc\_data\_type     | integer          |
| pc\_data\_type     | numeric          |
| pc\_data\_type     | real             |
| pc\_data\_type     | text             |
| pc\_data\_type     | text\[]          |
| pc\_data\_type     | timestamp        |
| pc\_data\_type     | timestamptz      |
| pc\_col\_type      | m                |
| pc\_col\_type      | k                |

<span id="tocs_customprobeputdata"></span>

## CustomProbePutData

<a id="schemacustomprobeputdata"></a> <a id="schema_CustomProbePutData"></a> <a id="tocScustomprobeputdata"></a> <a id="tocscustomprobeputdata"></a>

```json
{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true,
  "probe_code": "string",
  "probe_columns": {
    "changed": {
      "pc_id": 0,
      "pc_unit": "string",
      "pc_graphable": true
    }
  },
  "alternate_code": {
    "changed": [
      {
        "server_version_id": 0,
        "server_probe_code": "string"
      }
    ],
    "deleted": [
      {
        "server_version_id": 0
      }
    ],
    "added": [
      {
        "server_version_id": 0,
        "server_probe_code": "string"
      }
    ]
  }
}

```

#### Properties

| Name             | Type                                                                        | Required | Restrictions | Description                                                                                                           |
| ---------------- | --------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| interval\_min    | integer                                                                     | false    | none         | Defines how frequently the probe will collect the statistics (in minutes). Possible values are from 0 to 2880.        |
| interval\_sec    | integer                                                                     | false    | none         | Defines how frequently the probe will collect the statistics (in seconds). Possible values are from 0 to 59.          |
| lifetime         | integer                                                                     | false    | none         | Defines the history data retention time (in days). It does not have any effect, if 'discard\_history' is set to true. |
| enabled          | boolean                                                                     | false    | none         | Defines whether the probe is enabled/disabled by default.                                                             |
| probe\_code      | string                                                                      | false    | none         | A <b>SQL/Batch script/Shell script/WMI script</b> to collect the statistics as per definition of the code.            |
| probe\_columns   | object                                                                      | false    | none         | none                                                                                                                  |
| » changed        | object                                                                      | false    | none         | none                                                                                                                  |
| »» pc\_id        | integer                                                                     | false    | none         | Identifier of the column                                                                                              |
| »» pc\_unit      | string                                                                      | false    | none         | Returns the unit of the column.                                                                                       |
| »» pc\_graphable | boolean                                                                     | false    | none         | Returns whether the data of the column is graphable on a chart, or not.                                               |
| alternate\_code  | object                                                                      | false    | none         | none                                                                                                                  |
| » changed        | \[[AlternateServerProbeCode](#tocs_alternateserverprobecode)]               | false    | none         | List of the changed alternate probe code for some server version.                                                     |
| » deleted        | \[[DeletedAlternateServerProbeCode](#tocs_deletedalternateserverprobecode)] | false    | none         | List of the delete alternate probe code for some server versions.                                                     |
| » added          | \[[AlternateServerProbeCode](#tocs_alternateserverprobecode)]               | false    | none         | List of the alternate probe code added for some server versions.                                                      |

<span id="tocs_probes"></span>

## Probes

<a id="schemaprobes"></a> <a id="schema_Probes"></a> <a id="tocSprobes"></a> <a id="tocsprobes"></a>

```json
{
  "probe_id": 0,
  "probe_name": "string",
  "default_interval_min": 0,
  "interval_min": 0,
  "default_interval_sec": 0,
  "interval_sec": 0,
  "default_interval": 0,
  "interval": 0,
  "default_lifetime": 0,
  "lifetime": 0,
  "default_enabled": true,
  "enabled": true,
  "target_type_id_returned": 0
}

```

#### Properties

| Name                       | Type    | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| probe\_id                  | integer | false    | none         | Unique id of the probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| probe\_name                | string  | false    | none         | Name of the probe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| default\_interval\_min     | integer | false    | none         | Defines default interval for the probe to collect the statistics (in minutes). Possible values are from 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| interval\_min              | integer | false    | none         | Defines how frequently the probe will collect the statistics (in minutes). Possible values are from 0 to 2880.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| default\_interval\_sec     | integer | false    | none         | Defines default interval for the probe to collect the statistics (in seconds). Possible values are from 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| interval\_sec              | integer | false    | none         | Defines how frequently the probe will collect the statistics (in seconds). Possible values are from 0 to 59.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| default\_interval          | integer | false    | none         | Defines default interval for the probe to collect the statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| interval                   | integer | false    | none         | Defines how frequently the probe will collect the statistics (in seconds).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| default\_lifetime          | integer | false    | none         | Defines the default history data retention time (in days).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| lifetime                   | integer | false    | none         | Defines the history data retention time (in days). It does not have any effect, if 'discard\_history' is set to true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| default\_enabled           | boolean | false    | none         | Defines the default probe enabled/disabled value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| enabled                    | boolean | false    | none         | Defines whether the probe is enabled/disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| target\_type\_id\_returned | integer | false    | none         | Defines return target type value. <ul><li>A probe with target\_type <b>100</b> is responsible for collecting statistics for an agent.</li><li>A probe with target\_type <b>200</b> is responsible for collecting statistics for a monitored server.</li><li>A probe with target\_type <b>300</b> is responsible for collecting statistics for a database.</li><li>A probe with target\_type <b>400</b> is responsible for collecting statistics for a schema.</li><li>A probe with target\_type <b>500</b> is responsible for collecting statistics for a table.</li><li>A probe with target\_type <b>600</b> is responsible for collecting statistics for a index.</li><li>A probe with target\_type <b>700</b> is responsible for collecting statistics for a sequence.</li><li>A probe with target\_type <b>800</b> is responsible for collecting statistics for a function.</li><li>A probe with target\_type <b>900</b> is responsible for collecting statistics for a view.</li></ul> |

<span id="tocs_probeconfigdata"></span>

## ProbeConfigData

<a id="schemaprobeconfigdata"></a> <a id="schema_ProbeConfigData"></a> <a id="tocSprobeconfigdata"></a> <a id="tocsprobeconfigdata"></a>

```json
{
  "interval_min": 0,
  "interval_sec": 0,
  "lifetime": 0,
  "enabled": true
}

```

#### Properties

| Name          | Type    | Required | Restrictions | Description                                                                                                                                                                                                    |
| ------------- | ------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| interval\_min | integer | false    | none         | Probe execution frequency (in minutes). Allowed interval value (in minutes) is 0-2880 minutes. NOTE: Total interval must be greater than 10 seconds. i.e. 10 >= interval\_min \* 60 + interval\_sec >= 172800. |
| interval\_sec | integer | false    | none         | Probe execution frequency (in seconds). Allowed interval value (in seconds) is 0-59 seconds. NOTE: Total interval must be greater than 10 seconds. i.e. 10 >= interval\_min \* 60 + interval\_sec >= 172800.   |
| lifetime      | integer | false    | none         | Probe history data retention period (in days). i.e. 1 >= lifetime >= 365.                                                                                                                                      |
| enabled       | boolean | false    | none         | Enable/Disable probe for the given object.                                                                                                                                                                     |

<span id="tocs_copyagentdata"></span>

## CopyAgentData

<a id="schemacopyagentdata"></a> <a id="schema_CopyAgentData"></a> <a id="tocScopyagentdata"></a> <a id="tocscopyagentdata"></a>

```json
{
  "type": "string",
  "agent_id": 0
}

```

#### Properties

| Name      | Type    | Required | Restrictions | Description           |
| --------- | ------- | -------- | ------------ | --------------------- |
| type      | string  | false    | none         | Value must be "agent" |
| agent\_id | integer | false    | none         | none                  |

<span id="tocs_copyserverdata"></span>

## CopyServerData

<a id="schemacopyserverdata"></a> <a id="schema_CopyServerData"></a> <a id="tocScopyserverdata"></a> <a id="tocscopyserverdata"></a>

```json
{
  "type": "string",
  "server_id": 0
}

```

#### Properties

| Name       | Type    | Required | Restrictions | Description            |
| ---------- | ------- | -------- | ------------ | ---------------------- |
| type       | string  | false    | none         | Value must be "server" |
| server\_id | integer | false    | none         | none                   |

<span id="tocs_copydatabasedata"></span>

## CopyDatabaseData

<a id="schemacopydatabasedata"></a> <a id="schema_CopyDatabaseData"></a> <a id="tocScopydatabasedata"></a> <a id="tocscopydatabasedata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string"
}

```

#### Properties

| Name           | Type    | Required | Restrictions | Description              |
| -------------- | ------- | -------- | ------------ | ------------------------ |
| type           | string  | false    | none         | Value must be "database" |
| server\_id     | integer | false    | none         | none                     |
| database\_name | string  | false    | none         | none                     |

<span id="tocs_copyschemadata"></span>

## CopySchemaData

<a id="schemacopyschemadata"></a> <a id="schema_CopySchemaData"></a> <a id="tocScopyschemadata"></a> <a id="tocscopyschemadata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string",
  "schema_name": "string"
}

```

#### Properties

| Name           | Type    | Required | Restrictions | Description            |
| -------------- | ------- | -------- | ------------ | ---------------------- |
| type           | string  | false    | none         | Value must be "schema" |
| server\_id     | integer | false    | none         | none                   |
| database\_name | string  | false    | none         | none                   |
| schema\_name   | string  | false    | none         | none                   |

<span id="tocs_copyalertagentdata"></span>

## CopyAlertAgentData

<a id="schemacopyalertagentdata"></a> <a id="schema_CopyAlertAgentData"></a> <a id="tocScopyalertagentdata"></a> <a id="tocscopyalertagentdata"></a>

```json
{
  "type": "string",
  "agent_id": 0,
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "agent"                                        |
| agent\_id                 | integer | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_copyalertserverdata"></span>

## CopyAlertServerData

<a id="schemacopyalertserverdata"></a> <a id="schema_CopyAlertServerData"></a> <a id="tocScopyalertserverdata"></a> <a id="tocscopyalertserverdata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "server"                                       |
| server\_id                | integer | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_copyalertdatabasedata"></span>

## CopyAlertDatabaseData

<a id="schemacopyalertdatabasedata"></a> <a id="schema_CopyAlertDatabaseData"></a> <a id="tocScopyalertdatabasedata"></a> <a id="tocscopyalertdatabasedata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string",
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "database"                                     |
| server\_id                | integer | false    | none         | none                                                         |
| database\_name            | string  | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_copyalertschemadata"></span>

## CopyAlertSchemaData

<a id="schemacopyalertschemadata"></a> <a id="schema_CopyAlertSchemaData"></a> <a id="tocScopyalertschemadata"></a> <a id="tocscopyalertschemadata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string",
  "schema_name": "string",
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "schema"                                       |
| server\_id                | integer | false    | none         | none                                                         |
| database\_name            | string  | false    | none         | none                                                         |
| schema\_name              | string  | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_copyalerttabledata"></span>

## CopyAlertTableData

<a id="schemacopyalerttabledata"></a> <a id="schema_CopyAlertTableData"></a> <a id="tocScopyalerttabledata"></a> <a id="tocscopyalerttabledata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string",
  "schema_name": "string",
  "table_name": "string",
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "table"                                        |
| server\_id                | integer | false    | none         | none                                                         |
| database\_name            | string  | false    | none         | none                                                         |
| schema\_name              | string  | false    | none         | none                                                         |
| table\_name               | string  | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_copyalertindexdata"></span>

## CopyAlertIndexData

<a id="schemacopyalertindexdata"></a> <a id="schema_CopyAlertIndexData"></a> <a id="tocScopyalertindexdata"></a> <a id="tocscopyalertindexdata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string",
  "schema_name": "string",
  "index_name": "string",
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "index"                                        |
| server\_id                | integer | false    | none         | none                                                         |
| database\_name            | string  | false    | none         | none                                                         |
| schema\_name              | string  | false    | none         | none                                                         |
| index\_name               | string  | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_copyalertfunctiondata"></span>

## CopyAlertFunctionData

<a id="schemacopyalertfunctiondata"></a> <a id="schema_CopyAlertFunctionData"></a> <a id="tocScopyalertfunctiondata"></a> <a id="tocscopyalertfunctiondata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string",
  "schema_name": "string",
  "function_name": "string",
  "function_arguments": "string",
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "function"                                     |
| server\_id                | integer | false    | none         | none                                                         |
| database\_name            | string  | false    | none         | none                                                         |
| schema\_name              | string  | false    | none         | none                                                         |
| function\_name            | string  | false    | none         | none                                                         |
| function\_arguments       | string  | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_copyalertsequencedata"></span>

## CopyAlertSequenceData

<a id="schemacopyalertsequencedata"></a> <a id="schema_CopyAlertSequenceData"></a> <a id="tocScopyalertsequencedata"></a> <a id="tocscopyalertsequencedata"></a>

```json
{
  "type": "string",
  "server_id": 0,
  "database_name": "string",
  "schema_name": "string",
  "sequence_name": "string",
  "ignore_duplicate_alerts": true
}

```

#### Properties

| Name                      | Type    | Required | Restrictions | Description                                                  |
| ------------------------- | ------- | -------- | ------------ | ------------------------------------------------------------ |
| type                      | string  | false    | none         | Value must be "sequence"                                     |
| server\_id                | integer | false    | none         | none                                                         |
| database\_name            | string  | false    | none         | none                                                         |
| schema\_name              | string  | false    | none         | none                                                         |
| sequence\_name            | string  | false    | none         | none                                                         |
| ignore\_duplicate\_alerts | boolean | false    | none         | Defines whether to ignore the duplicate alerts to be copied. |

<span id="tocs_agent"></span>

## Agent

<a id="schemaagent"></a> <a id="schema_Agent"></a> <a id="tocSagent"></a> <a id="tocsagent"></a>

```json
[
  {
    "id": 0,
    "name": "string",
    "version": "string",
    "active": true,
    "heartbeat_int": 0,
    "alert_blackout": true,
    "owner": "string",
    "team": "string",
    "group": 0
  }
]

```

Returns the list of the objects, which contains the agent information, version, capabilities, and details about the host on which it has been installed.

**For example:**<br />\\

```json
[{
  /* Agent information */
  "id": 1,
  "gid": 0,
  "name": "Postgres Enterprise Manager Host"
  "version": "6.0.1",
  "active": True,
  "heartbeat_int": 30,
  "alert_blackout": False,
  "owner": "postgres",
  "team": None,

  /* Deatils about the Host, on which it is installed */
  "operating_sys": "Ubuntu 12.04.5 LTS",
  "host_name": "akshay-ubuntu",
  "boot_time": "2016-09-19 12:28:27+05:30",
   "domain_name": "(none)",
   "window_domain": None,

  /* Agent capabilities */
  "capability_list": "unix, getloadavg, disk_space, memory_usage, cpu_usage, network_statistics, io_analysis, data_log_file_analysis, disk_busy_info, 
os_statistics, os_info, slony_replication, auto_discover_servers, allow_server_restart",

  /* Monitored servers */
  "server_bind": "Postgres Enterprise Manager Server, PostgreSQL 9.3, PostgreSQL 9.4"
}]

```

a

#### Properties

| Name            | Type    | Required | Restrictions | Description                                                                                                                                                                             |
| --------------- | ------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id              | integer | true     | none         | Identity of the pem-agent                                                                                                                                                               |
| name            | string  | true     | none         | Description (name) of the agent.                                                                                                                                                        |
| version         | string  | true     | none         | Version of the pem-agent                                                                                                                                                                |
| active          | boolean | true     | none         | Whether the agent is active, or not.<br/>An active agent is responsible for collecting the statistics for the host, and the monitored server..                                          |
| heartbeat\_int  | integer | true     | none         | heartbeat interval (in seconds) for the agent.<br/>How frequently the agent will send the heartbeat status to the PEM database server about itself, and the monitoring database server. |
| alert\_blackout | boolean | true     | none         | Flag to indicates about the alert blacked out for the agent                                                                                                                             |
| owner           | string  | true     | none         | Username, using whom the agent was installed, is called owner.                                                                                                                          |
| team            | string  | true     | none         | Name of the role/user, who can see this agent.<br/>null/empty value suggest, all user can see this agent.                                                                               |
| group           | integer | false    | none         | Identity of the group                                                                                                                                                                   |

<span id="tocs_server"></span>

## Server

<a id="schemaserver"></a> <a id="schema_Server"></a> <a id="tocSserver"></a> <a id="tocsserver"></a>

```json
{
  "id": 0,
  "name": "string",
  "host": "string",
  "port": 0,
  "database": "string",
  "ssl": 0,
  "serviceid": "string",
  "active": true,
  "alert_blackout": true,
  "owner": 0,
  "team": "string",
  "server_owner": "string",
  "is_remote_monitoring": true,
  "efm_cluster_name": "string",
  "efm_service_name": "string",
  "efm_installation_path": "string",
  "comment": "string",
  "username": "string",
  "gid": 0,
  "db_restriction": "string",
  "role": "string",
  "is_edb": true,
  "agent_id": 0,
  "asb_host": "string",
  "asb_port": 0,
  "asb_username": "string",
  "asb_database": "string",
  "asb_sslmode": "string",
  "asb_password": "string",
  "asb_allowtakeover": "string",
  "agent_capability_list": [
    "string"
  ],
  "agent_description": "string",
  "fgcolor": "string",
  "bgcolor": "string",
  "sslcompression": true
}

```

#### Properties

| Name                    | Type      | Required | Restrictions | Description                                                                                                                                       |
| ----------------------- | --------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                      | integer   | false    | none         | Server id                                                                                                                                         |
| name                    | string    | false    | none         | Server name                                                                                                                                       |
| host                    | string    | false    | none         | Server host                                                                                                                                       |
| port                    | integer   | false    | none         | Server port                                                                                                                                       |
| database                | string    | false    | none         | Maintenance databse                                                                                                                               |
| ssl                     | integer   | false    | none         | SSL mode                                                                                                                                          |
| serviceid               | string    | false    | none         | Server service id                                                                                                                                 |
| active                  | boolean   | false    | none         | Defines whether the server is active, or not.                                                                                                     |
| alert\_blackout         | boolean   | false    | none         | Defines whether the alerts on the server are blacked out, or not.                                                                                 |
| owner                   | integer   | false    | none         | ID of the owner, who registered the server with PEM.                                                                                              |
| team                    | string    | false    | none         | Defines the role/username, who can see the server information.                                                                                    |
| server\_owner           | string    | false    | none         | Name of the user, who registered the server on the PEM database server.                                                                           |
| is\_remote\_monitoring  | boolean   | false    | none         | Defines whether this server is being monitored remotely (i.e. the monitoring pemAgent does not resides on the same host on the monitored server). |
| efm\_cluster\_name      | string    | false    | none         | Cluster name of EFM                                                                                                                               |
| efm\_service\_name      | string    | false    | none         | Service name of EFM                                                                                                                               |
| efm\_installation\_path | string    | false    | none         | Installation Path of EFM                                                                                                                          |
| comment                 | string    | false    | none         | Description about the Server.                                                                                                                     |
| username                | string    | false    | none         | Username for connecting the database server.                                                                                                      |
| gid                     | integer   | false    | none         | ID of the Server group                                                                                                                            |
| db\_restriction         | string    | false    | none         | Database restriction SQL clause                                                                                                                   |
| role                    | string    | false    | none         | The role the connection will use                                                                                                                  |
| is\_edb                 | boolean   | false    | none         | Is server an EDB Advanced Server?                                                                                                                 |
| agent\_id               | integer   | false    | none         | Agent id bound to the server                                                                                                                      |
| asb\_host               | string    | false    | none         | PEM database host used by agent while creating PEM connection.                                                                                    |
| asb\_port               | integer   | false    | none         | PEM database port used by agent while creating PEM connection.                                                                                    |
| asb\_username           | string    | false    | none         | PEM database user name used by agent while creating PEM connection.                                                                               |
| asb\_database           | string    | false    | none         | PEM database to which agent will connect.                                                                                                         |
| asb\_sslmode            | string    | false    | none         | PEM database ssl mode.                                                                                                                            |
| asb\_password           | string    | false    | none         | empty string.                                                                                                                                     |
| asb\_allowtakeover      | string    | false    | none         | Whether server allowed to take over by another agent.                                                                                             |
| agent\_capability\_list | \[string] | false    | none         | Array of capabilities the agent has                                                                                                               |
| agent\_description      | string    | false    | none         | Agent description                                                                                                                                 |
| fgcolor                 | string    | false    | none         | Foreground color of server node in browser tree                                                                                                   |
| bgcolor                 | string    | false    | none         | Background color of server node in browser tree                                                                                                   |
| sslcompression          | boolean   | false    | none         | Whether data sent over ssl should be compressed or not.                                                                                           |

<span id="tocs_database"></span>

## Database

<a id="schemadatabase"></a> <a id="schema_Database"></a> <a id="tocSdatabase"></a> <a id="tocsdatabase"></a>

```json
{
  "database_name": "string",
  "connections_allowed": true,
  "system_database": true,
  "recorded_time": "2019-08-24T14:15:22Z",
  "encoding": "string",
  "server_id": 0
}

```

#### Properties

| Name                 | Type              | Required | Restrictions | Description                                   |
| -------------------- | ----------------- | -------- | ------------ | --------------------------------------------- |
| database\_name       | string            | false    | none         | Database name                                 |
| connections\_allowed | boolean           | false    | none         | Is connection to database allowed             |
| system\_database     | boolean           | false    | none         | Is database system database                   |
| recorded\_time       | string(date-time) | false    | none         | When database was first detected by PEM agent |
| encoding             | string            | false    | none         | Database encoding                             |
| server\_id           | integer           | false    | none         | Server id of database                         |

<span id="tocs_schema"></span>

## Schema

<a id="schemaschema"></a> <a id="schema_Schema"></a> <a id="tocSschema"></a> <a id="tocsschema"></a>

```json
{
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}

```

#### Properties

| Name           | Type              | Required | Restrictions | Description                                 |
| -------------- | ----------------- | -------- | ------------ | ------------------------------------------- |
| schema\_name   | string            | false    | none         | Schema name                                 |
| database\_name | string            | false    | none         | Database name of schema                     |
| server\_id     | integer           | false    | none         | Server id schmea                            |
| recorded\_time | string(date-time) | false    | none         | When schema was first detected by PEM agent |

<span id="tocs_table"></span>

## Table

<a id="schematable"></a> <a id="schema_Table"></a> <a id="tocStable"></a> <a id="tocstable"></a>

```json
{
  "table_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "has_primary_key": true,
  "recorded_time": "string"
}

```

#### Properties

| Name              | Type    | Required | Restrictions | Description                                |
| ----------------- | ------- | -------- | ------------ | ------------------------------------------ |
| table\_name       | string  | false    | none         | Table name                                 |
| schema\_name      | string  | false    | none         | schema name                                |
| database\_name    | string  | false    | none         | Database name                              |
| server\_id        | integer | false    | none         | Server id                                  |
| has\_primary\_key | boolean | false    | none         | Weather table has primary key              |
| recorded\_time    | string  | false    | none         | When table was first detected by PEM agent |

<span id="tocs_index"></span>

## Index

<a id="schemaindex"></a> <a id="schema_Index"></a> <a id="tocSindex"></a> <a id="tocsindex"></a>

```json
{
  "index_name": "string",
  "ind_keys": [
    0
  ],
  "table_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "string"
}

```

#### Properties

| Name           | Type       | Required | Restrictions | Description                                |
| -------------- | ---------- | -------- | ------------ | ------------------------------------------ |
| index\_name    | string     | false    | none         | Index name                                 |
| ind\_keys      | \[integer] | false    | none         | indexed column positions in table          |
| table\_name    | string     | false    | none         | Table name                                 |
| schema\_name   | string     | false    | none         | Schema                                     |
| database\_name | string     | false    | none         | Database name                              |
| server\_id     | integer    | false    | none         | Server id                                  |
| recorded\_time | string     | false    | none         | When index was first detected by PEM agent |

<span id="tocs_sequence"></span>

## Sequence

<a id="schemasequence"></a> <a id="schema_Sequence"></a> <a id="tocSsequence"></a> <a id="tocssequence"></a>

```json
{
  "sequence_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}

```

#### Properties

| Name           | Type              | Required | Restrictions | Description                                   |
| -------------- | ----------------- | -------- | ------------ | --------------------------------------------- |
| sequence\_name | string            | false    | none         | Sequence name                                 |
| schema\_name   | string            | false    | none         | Schema name                                   |
| database\_name | string            | false    | none         | Database name                                 |
| server\_id     | integer           | false    | none         | Server id                                     |
| recorded\_time | string(date-time) | false    | none         | When sequence was first detected by PEM agent |

<span id="tocs_function"></span>

## Function

<a id="schemafunction"></a> <a id="schema_Function"></a> <a id="tocSfunction"></a> <a id="tocsfunction"></a>

```json
{
  "function_name": "string",
  "function_type": "string",
  "return_type": "string",
  "arg_types": [
    "string"
  ],
  "function_binary": "string",
  "extension_name": "string",
  "package_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}

```

#### Properties

| Name             | Type              | Required | Restrictions | Description                                   |
| ---------------- | ----------------- | -------- | ------------ | --------------------------------------------- |
| function\_name   | string            | false    | none         | Function name                                 |
| function\_type   | string            | false    | none         | Function type                                 |
| return\_type     | string            | false    | none         | Function return type                          |
| arg\_types       | \[string]         | false    | none         | Function argument types                       |
| function\_binary | string            | false    | none         | none                                          |
| extension\_name  | string            | false    | none         | none                                          |
| package\_name    | string            | false    | none         | Function package name                         |
| schema\_name     | string            | false    | none         | Function schema                               |
| database\_name   | string            | false    | none         | Function database name                        |
| server\_id       | integer           | false    | none         | Function server id                            |
| recorded\_time   | string(date-time) | false    | none         | When function was first detected by PEM agent |

<span id="tocs_view"></span>

## View

<a id="schemaview"></a> <a id="schema_View"></a> <a id="tocSview"></a> <a id="tocsview"></a>

```json
{
  "view_name": "string",
  "view_type": "string",
  "ispopulated": true,
  "view_owner": "string",
  "definition": "string",
  "tablespace_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "string"
}

```

#### Properties

| Name             | Type    | Required | Restrictions | Description                               |
| ---------------- | ------- | -------- | ------------ | ----------------------------------------- |
| view\_name       | string  | false    | none         | View name                                 |
| view\_type       | string  | false    | none         | View type                                 |
| ispopulated      | boolean | false    | none         | Is view populated                         |
| view\_owner      | string  | false    | none         | View owner                                |
| definition       | string  | false    | none         | View definition                           |
| tablespace\_name | string  | false    | none         | View tablespace                           |
| schema\_name     | string  | false    | none         | View schema                               |
| database\_name   | string  | false    | none         | View database                             |
| server\_id       | integer | false    | none         | View server id                            |
| recorded\_time   | string  | false    | none         | When view was first detected by PEM agent |

<span id="tocs_webhook"></span>

## Webhook

<a id="schemawebhook"></a> <a id="schema_Webhook"></a> <a id="tocSwebhook"></a> <a id="tocswebhook"></a>

```json
{
  "id": 0,
  "name": "string",
  "url": "string",
  "enabled": true,
  "method": "string",
  "http_headers": [
    {
      "http_header_id": 0,
      "http_header_key": "string",
      "http_header_value": "string"
    }
  ],
  "payload_template": "string",
  "low_alert": true,
  "med_alert": true,
  "high_alert": true,
  "cleared_alert": true
}

```

#### Properties

| Name              | Type                                                    | Required | Restrictions | Description                                                       |
| ----------------- | ------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------- |
| id                | integer                                                 | false    | none         | Webhook id                                                        |
| name              | string                                                  | false    | none         | Webhook name                                                      |
| url               | string                                                  | false    | none         | Webhook url                                                       |
| enabled           | boolean                                                 | false    | none         | Defines whether the webhook is enabled, or not.                   |
| method            | string                                                  | false    | none         | Request method                                                    |
| http\_headers     | \[[WebhookGetHTTPHeaders](#tocs_webhookgethttpheaders)] | false    | none         | List of the http header key/value pair to be used by the webhook. |
| payload\_template | string                                                  | false    | none         | Payload template                                                  |
| low\_alert        | boolean                                                 | false    | none         | Defines whether the low alert is enabled, or not.                 |
| med\_alert        | boolean                                                 | false    | none         | Defines whether the medium alert is enabled, or not.              |
| high\_alert       | boolean                                                 | false    | none         | Defines whether the high alert is enabled, or not.                |
| cleared\_alert    | boolean                                                 | false    | none         | Defines whether the cleared alert is enabled, or not.             |

<span id="tocs_webhookpostdata"></span>

## WebhookPostData

<a id="schemawebhookpostdata"></a> <a id="schema_WebhookPostData"></a> <a id="tocSwebhookpostdata"></a> <a id="tocswebhookpostdata"></a>

```json
{
  "name": "string",
  "url": "string",
  "enabled": true,
  "method": "string",
  "http_headers": [
    {
      "http_header_key": "string",
      "http_header_value": "string"
    }
  ],
  "payload_template": "string",
  "low_alert": true,
  "med_alert": true,
  "high_alert": true,
  "cleared_alert": true
}

```

#### Properties

| Name              | Type                                              | Required | Restrictions | Description                                                       |
| ----------------- | ------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------- |
| name              | string                                            | false    | none         | Webhook name                                                      |
| url               | string                                            | false    | none         | Webhook url                                                       |
| enabled           | boolean                                           | false    | none         | Defines whether the webhook is enabled, or not.                   |
| method            | string                                            | false    | none         | Request method                                                    |
| http\_headers     | \[[WebhookHTTPHeaders](#tocs_webhookhttpheaders)] | false    | none         | List of the http header key/value pair to be used by the webhook. |
| payload\_template | string                                            | false    | none         | Payload template                                                  |
| low\_alert        | boolean                                           | false    | none         | Defines whether the low alert is enabled, or not.                 |
| med\_alert        | boolean                                           | false    | none         | Defines whether the medium alert is enabled, or not.              |
| high\_alert       | boolean                                           | false    | none         | Defines whether the high alert is enabled, or not.                |
| cleared\_alert    | boolean                                           | false    | none         | Defines whether the cleared alert is enabled, or not.             |

<span id="tocs_webhookputdata"></span>

## WebhookPutData

<a id="schemawebhookputdata"></a> <a id="schema_WebhookPutData"></a> <a id="tocSwebhookputdata"></a> <a id="tocswebhookputdata"></a>

```json
{
  "id": 0,
  "name": "string",
  "url": "string",
  "enabled": true,
  "method": "string",
  "http_headers": {
    "added": [
      {
        "http_header_key": "string",
        "http_header_value": "string"
      }
    ],
    "changed": [
      {
        "http_header_id": 0,
        "http_header_key": "string",
        "http_header_value": "string"
      }
    ],
    "deleted": [
      {
        "http_header_id": 0
      }
    ]
  },
  "payload_template": "string",
  "low_alert": true,
  "med_alert": true,
  "high_alert": true,
  "cleared_alert": true
}

```

#### Properties

| Name                | Type                                                    | Required | Restrictions | Description                                           |
| ------------------- | ------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------- |
| id                  | integer                                                 | false    | none         | Webhook id                                            |
| name                | string                                                  | false    | none         | Webhook name                                          |
| url                 | string                                                  | false    | none         | Webhook url                                           |
| enabled             | boolean                                                 | false    | none         | Defines whether the webhook is enabled, or not.       |
| method              | string                                                  | false    | none         | Request method                                        |
| http\_headers       | object                                                  | false    | none         | none                                                  |
| » added             | \[[WebhookHTTPHeaders](#tocs_webhookhttpheaders)]       | false    | none         | List of the http header key/value pair to be added.   |
| » changed           | \[[WebhookGetHTTPHeaders](#tocs_webhookgethttpheaders)] | false    | none         | List of the http header key/value pair to be updated. |
| » deleted           | \[object]                                               | false    | none         | List of the http headerids to be deleted.             |
| »» http\_header\_id | integer                                                 | false    | none         | ID of the http header                                 |
| payload\_template   | string                                                  | false    | none         | Payload template                                      |
| low\_alert          | boolean                                                 | false    | none         | Defines whether the low alert is enabled, or not.     |
| med\_alert          | boolean                                                 | false    | none         | Defines whether the medium alert is enabled, or not.  |
| high\_alert         | boolean                                                 | false    | none         | Defines whether the high alert is enabled, or not.    |
| cleared\_alert      | boolean                                                 | false    | none         | Defines whether the cleared alert is enabled, or not. |

<span id="tocs_webhookgethttpheaders"></span>

## WebhookGetHTTPHeaders

<a id="schemawebhookgethttpheaders"></a> <a id="schema_WebhookGetHTTPHeaders"></a> <a id="tocSwebhookgethttpheaders"></a> <a id="tocswebhookgethttpheaders"></a>

```json
{
  "http_header_id": 0,
  "http_header_key": "string",
  "http_header_value": "string"
}

```

#### Properties

| Name                | Type    | Required | Restrictions | Description                 |
| ------------------- | ------- | -------- | ------------ | --------------------------- |
| http\_header\_id    | integer | false    | none         | ID of the http header       |
| http\_header\_key   | string  | false    | none         | Name of the http header key |
| http\_header\_value | string  | false    | none         | Name of the http header key |

<span id="tocs_webhookhttpheaders"></span>

## WebhookHTTPHeaders

<a id="schemawebhookhttpheaders"></a> <a id="schema_WebhookHTTPHeaders"></a> <a id="tocSwebhookhttpheaders"></a> <a id="tocswebhookhttpheaders"></a>

```json
{
  "http_header_key": "string",
  "http_header_value": "string"
}

```

#### Properties

| Name                | Type   | Required | Restrictions | Description                 |
| ------------------- | ------ | -------- | ------------ | --------------------------- |
| http\_header\_key   | string | false    | none         | Name of the http header key |
| http\_header\_value | string | false    | none         | Name of the http header key |

<span id="tocs_emailgroups"></span>

## EmailGroups

<a id="schemaemailgroups"></a> <a id="schema_EmailGroups"></a> <a id="tocSemailgroups"></a> <a id="tocsemailgroups"></a>

```json
{
  "id": 0,
  "oid": 0,
  "gid": 0,
  "name": "string",
  "to_addr": "string",
  "cc_addr": "string",
  "bcc_addr": "string",
  "from_addr": "string",
  "reply_to_addr": "string",
  "subject_prefix": "string",
  "from_time": "string",
  "to_time": "string"
}

```

#### Properties

| Name            | Type    | Required | Restrictions | Description                                                    |
| --------------- | ------- | -------- | ------------ | -------------------------------------------------------------- |
| id              | integer | false    | none         | Email group id                                                 |
| oid             | integer | false    | none         | Email group options id                                         |
| gid             | integer | false    | none         | Email group id                                                 |
| name            | string  | false    | none         | Email group name                                               |
| to\_addr        | string  | false    | none         | Email group options receiver address                           |
| cc\_addr        | string  | false    | none         | Email group options CC address                                 |
| bcc\_addr       | string  | false    | none         | Email group options BCC address                                |
| from\_addr      | string  | false    | none         | Email group options sender address                             |
| reply\_to\_addr | string  | false    | none         | Email group options reply to address                           |
| subject\_prefix | string  | false    | none         | Email group options subject prefix                             |
| from\_time      | string  | false    | none         | Email group options from time to select time range for members |
| to\_time        | string  | false    | none         | Email group options to time to select time range for members   |

<span id="tocs_emailgroupspostdata"></span>

## EmailGroupsPostData

<a id="schemaemailgroupspostdata"></a> <a id="schema_EmailGroupsPostData"></a> <a id="tocSemailgroupspostdata"></a> <a id="tocsemailgroupspostdata"></a>

```json
{
  "name": "string",
  "options": [
    {
      "to_addr": "string",
      "cc_addr": "string",
      "bcc_addr": "string",
      "from_addr": "string",
      "reply_to_addr": "string",
      "subject_prefix": "string",
      "from_time": "string",
      "to_time": "string"
    }
  ]
}

```

#### Properties

| Name    | Type                                            | Required | Restrictions | Description                                                    |
| ------- | ----------------------------------------------- | -------- | ------------ | -------------------------------------------------------------- |
| name    | string                                          | false    | none         | Email group name                                               |
| options | \[[EmailGroupOptions](#tocs_emailgroupoptions)] | false    | none         | List of the email group options to be used by the email group. |

<span id="tocs_emailgroupsputdata"></span>

## EmailGroupsPutData

<a id="schemaemailgroupsputdata"></a> <a id="schema_EmailGroupsPutData"></a> <a id="tocSemailgroupsputdata"></a> <a id="tocsemailgroupsputdata"></a>

```json
{
  "id": 0,
  "name": "string",
  "options": {
    "added": [
      {
        "to_addr": "string",
        "cc_addr": "string",
        "bcc_addr": "string",
        "from_addr": "string",
        "reply_to_addr": "string",
        "subject_prefix": "string",
        "from_time": "string",
        "to_time": "string"
      }
    ],
    "changed": [
      {
        "oid": 0,
        "to_addr": "string",
        "cc_addr": "string",
        "bcc_addr": "string",
        "from_addr": "string",
        "reply_to_addr": "string",
        "subject_prefix": "string",
        "from_time": "string",
        "to_time": "string"
      }
    ],
    "deleted": [
      {
        "oid": 0
      }
    ]
  }
}

```

#### Properties

| Name      | Type                                                          | Required | Restrictions | Description                               |
| --------- | ------------------------------------------------------------- | -------- | ------------ | ----------------------------------------- |
| id        | integer                                                       | false    | none         | Email group id                            |
| name      | string                                                        | false    | none         | Email group name                          |
| options   | object                                                        | false    | none         | none                                      |
| » added   | \[[EmailGroupOptions](#tocs_emailgroupoptions)]               | false    | none         | Email group options to be added.          |
| » changed | \[[EmailGroupOptionsChanged](#tocs_emailgroupoptionschanged)] | false    | none         | Email group options to be updated.        |
| » deleted | \[object]                                                     | false    | none         | List of the http headerids to be deleted. |
| »» oid    | integer                                                       | false    | none         | Email group options ID                    |

<span id="tocs_emailgroupoptions"></span>

## EmailGroupOptions

<a id="schemaemailgroupoptions"></a> <a id="schema_EmailGroupOptions"></a> <a id="tocSemailgroupoptions"></a> <a id="tocsemailgroupoptions"></a>

```json
{
  "to_addr": "string",
  "cc_addr": "string",
  "bcc_addr": "string",
  "from_addr": "string",
  "reply_to_addr": "string",
  "subject_prefix": "string",
  "from_time": "string",
  "to_time": "string"
}

```

#### Properties

| Name            | Type   | Required | Restrictions | Description                                                    |
| --------------- | ------ | -------- | ------------ | -------------------------------------------------------------- |
| to\_addr        | string | false    | none         | Email group options receiver address                           |
| cc\_addr        | string | false    | none         | Email group options CC address                                 |
| bcc\_addr       | string | false    | none         | Email group options BCC address                                |
| from\_addr      | string | false    | none         | Email group options sender address                             |
| reply\_to\_addr | string | false    | none         | Email group options reply to address                           |
| subject\_prefix | string | false    | none         | Email group options subject prefix                             |
| from\_time      | string | false    | none         | Email group options from time to select time range for members |
| to\_time        | string | false    | none         | Email group options to time to select time range for members   |

<span id="tocs_emailgroupoptionschanged"></span>

## EmailGroupOptionsChanged

<a id="schemaemailgroupoptionschanged"></a> <a id="schema_EmailGroupOptionsChanged"></a> <a id="tocSemailgroupoptionschanged"></a> <a id="tocsemailgroupoptionschanged"></a>

```json
{
  "oid": 0,
  "to_addr": "string",
  "cc_addr": "string",
  "bcc_addr": "string",
  "from_addr": "string",
  "reply_to_addr": "string",
  "subject_prefix": "string",
  "from_time": "string",
  "to_time": "string"
}

```

#### Properties

| Name            | Type    | Required | Restrictions | Description                                                    |
| --------------- | ------- | -------- | ------------ | -------------------------------------------------------------- |
| oid             | integer | false    | none         | Email group options ID                                         |
| to\_addr        | string  | false    | none         | Email group options receiver address                           |
| cc\_addr        | string  | false    | none         | Email group options CC address                                 |
| bcc\_addr       | string  | false    | none         | Email group options BCC address                                |
| from\_addr      | string  | false    | none         | Email group options sender address                             |
| reply\_to\_addr | string  | false    | none         | Email group options reply to address                           |
| subject\_prefix | string  | false    | none         | Email group options subject prefix                             |
| from\_time      | string  | false    | none         | Email group options from time to select time range for members |
| to\_time        | string  | false    | none         | Email group options to time to select time range for members   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
