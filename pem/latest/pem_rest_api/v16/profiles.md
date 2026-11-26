---
title: "EDB Postgres Enterprise Manager REST APIs v16.0: Profiles"
description: "Manage Profiles API: create, list, update, publish/rollback drafts, and reassign/delete profiles for servers and agents."
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/profiles/
lastModified: 2026-06-22T21:47:06+05:30
---

# EDB Postgres Enterprise Manager REST APIs v16.0: Profiles

Manage Profiles API: create, list, update, publish/rollback drafts, and reassign/delete profiles for servers and agents.

## `get__profiles_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v16/profiles/ \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v16/profiles/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /profiles/`

_List profiles_

Returns a summary list of published profiles only. If a draft exists for a published profile, the item shows that profile's ID and 'published' is false. The response does not include 'target\_probe\_configs' or 'target\_alert\_configs'.

<span id="get__profiles_-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description                      |
| ------------ | ------ | ------ | -------- | -------------------------------- |
| X-Auth-Token | header | string | true     | Token for authentication purpose |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 34,
    "name": "Production Agents",
    "description": "Monitoring production agents",
    "target_kind": "a",
    "active_assignments": 0,
    "published": true
  }
]
```

</details>

<span id="get__profiles_-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__profiles_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                  | Type                                                                                                            | Required | Restrictions | Description                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------- |
| _anonymous_           | \[[ProfileSummary](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_profilesummary)] | false    | none         | \[A trimmed profile representation for list operations (no probe/alert config arrays).] |
| » id                  | integer                                                                                                         | false    | none         | none                                                                                    |
| » name                | string                                                                                                          | false    | none         | none                                                                                    |
| » description         | string                                                                                                          | false    | none         | none                                                                                    |
| » target\_kind        | string                                                                                                          | false    | none         | Target type for the profile: 's' for server, 'a' for agent.                             |
| » published           | boolean                                                                                                         | false    | none         | Convenience flag: true when status is 'published'.                                      |
| » active\_assignments | integer                                                                                                         | false    | none         | Count of active servers/agents assigned to this profile.                                |

##### Enumerated Values

| Property     | Value |
| ------------ | ----- |
| target\_kind | s     |
| target\_kind | a     |

> **Note: Info**
>
> This operation does not require authentication

## `post__profiles_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v16/profiles/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v16/profiles/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "Production Servers",
  "description": "Monitoring production database servers",
  "target_kind": "s"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /profiles/`

_Create a new profile_

Creates a new profile with the specified name (required), description (optional), and target\_kind (optional, defaults to 's' for server). Probes and auto-created alerts will be automatically created based on target\_kind.

**Body parameter**

```json
{
  "name": "Production Servers",
  "description": "Monitoring production database servers",
  "target_kind": "s"
}
```

<span id="post__profiles_-parameters"></span>

### Parameters

| Name           | In     | Type   | Required | Description                                                            |
| -------------- | ------ | ------ | -------- | ---------------------------------------------------------------------- |
| X-Auth-Token   | header | string | true     | Token for authorization                                                |
| body           | body   | object | false    | none                                                                   |
| » name         | body   | string | true     | Profile name (required)                                                |
| » description  | body   | string | false    | Profile description (optional)                                         |
| » target\_kind | body   | string | false    | Target kind: 's' for server, 'a' for agent (optional, defaults to 's') |

##### Enumerated Values

| Parameter      | Value |
| -------------- | ----- |
| » target\_kind | s     |
| » target\_kind | a     |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "success": 0,
  "data": "string"
}
```

</details>

<span id="post__profiles_-responses"></span>

### Responses

| Status | Meaning                                                                    | Description                                 | Schema |
| ------ | -------------------------------------------------------------------------- | ------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                    | Profile created successfully                | Inline |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)           | Bad request - missing required field 'name' | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Internal server error                       | None   |

<span id="post__profiles_-responseschema"></span>

### Response Schema

Status Code **200**

| Name      | Type    | Required | Restrictions | Description |
| --------- | ------- | -------- | ------------ | ----------- |
| » success | integer | false    | none         | none        |
| » data    | string  | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `get__profiles_{profile_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id} \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /profiles/{profile_id}`

_Get a profile by id_

Returns a single profile with full probe and alert configurations. The response includes a boolean 'published' field (true when the profile is published).

<span id="get__profiles_{profile_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description             |
| ------------ | ------ | ------- | -------- | ----------------------- |
| profile\_id  | path   | integer | true     | none                    |
| X-Auth-Token | header | string  | true     | Token for authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "target_kind": "s",
  "published": true,
  "parent_id": 0,
  "draft_id": 0,
  "target_probe_configs": [
    {
      "probe_id": 0,
      "probe_name": "string",
      "enabled": true,
      "interval": 0,
      "lifetime": 0,
      "default_enabled": true,
      "default_interval": 0,
      "default_lifetime": 0,
      "target_type": 0,
      "force_enabled": true
    }
  ],
  "target_alert_configs": [
    {
      "id": 0,
      "alert_name": "string",
      "alert_template": 0,
      "description": "string",
      "enabled": true,
      "history_retention": 0,
      "frequency_min": 0,
      "auto_created": true,
      "template_id": "string",
      "params": [],
      "param_names": [
        "string"
      ],
      "param_types": "string",
      "params_units": [
        "string"
      ],
      "threshold_unit": "string",
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
      "cleared_alert_enable": true,
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
  ]
}
```

> Profile not found

```json
{
  "message": "Not found"
}
```

</details>

<span id="get__profiles_{profile_id}-responses"></span>

### Responses

| Status | Meaning                                                        | Description         | Schema                                                                                         |
| ------ | -------------------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Successful response | [Profile](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_profile) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Profile not found   | Inline                                                                                         |

<span id="get__profiles_{profile_id}-responseschema"></span>

### Response Schema

Status Code **404**

| Name      | Type   | Required | Restrictions | Description |
| --------- | ------ | -------- | ------------ | ----------- |
| » message | string | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `put__profiles_{profile_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "Production Servers (v2)",
  "description": "Tightened thresholds and probe intervals.",
  "target_probe_configs": {
    "changed": [
      {
        "probe_id": 7,
        "execution_frequency": 5,
        "lifetime": 60
      },
      {
        "probe_id": 15,
        "enabled": true,
        "execution_frequency": 10,
        "lifetime": 30
      }
    ]
  },
  "target_alert_configs": {
    "changed": [
      {
        "id": 101,
        "enabled": true,
        "frequency_min": 2
      },
      {
        "id": 102,
        "operator": ">",
        "low_threshold_value": 70,
        "medium_threshold_value": 85,
        "high_threshold_value": 95
      }
    ],
    "added": [
      {
        "alert_name": "Replication Lag",
        "alert_template": 18,
        "enabled": true,
        "history_retention": 30,
        "frequency_min": 5,
        "operator": ">",
        "medium_threshold_value": 60,
        "high_threshold_value": 120
      }
    ],
    "deleted": [
      {
        "id": 103
      }
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /profiles/{profile_id}`

_Update a profile by id_

Update a single profile identified by 'profile\_id'. Use 'name'/'description' for metadata. For probes, use 'target\_probe\_configs.changed' to modify existing probe configs only (keys: probe\_id, enabled?, enabled\_by\_default?, execution\_frequency?, lifetime?; also accepts legacy 'use\_default\_enabled' and 'interval'). Adding probes via this endpoint is not supported. For alerts, use 'target\_alert\_configs' with changed/added/deleted (deleted accepts objects with only 'id').

**Body parameter**

```json
{
  "name": "Production Servers (v2)",
  "description": "Tightened thresholds and probe intervals.",
  "target_probe_configs": {
    "changed": [
      {
        "probe_id": 7,
        "execution_frequency": 5,
        "lifetime": 60
      },
      {
        "probe_id": 15,
        "enabled": true,
        "execution_frequency": 10,
        "lifetime": 30
      }
    ]
  },
  "target_alert_configs": {
    "changed": [
      {
        "id": 101,
        "enabled": true,
        "frequency_min": 2
      },
      {
        "id": 102,
        "operator": ">",
        "low_threshold_value": 70,
        "medium_threshold_value": 85,
        "high_threshold_value": 95
      }
    ],
    "added": [
      {
        "alert_name": "Replication Lag",
        "alert_template": 18,
        "enabled": true,
        "history_retention": 30,
        "frequency_min": 5,
        "operator": ">",
        "medium_threshold_value": 60,
        "high_threshold_value": 120
      }
    ],
    "deleted": [
      {
        "id": 103
      }
    ]
  }
}
```

<span id="put__profiles_{profile_id}-parameters"></span>

### Parameters

| Name                                 | In     | Type                                                                                                                         | Required | Description                                                                                                                                                                            |
| ------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| profile\_id                          | path   | integer                                                                                                                      | true     | none                                                                                                                                                                                   |
| X-Auth-Token                         | header | string                                                                                                                       | true     | Token for authorization                                                                                                                                                                |
| body                                 | body   | object                                                                                                                       | true     | none                                                                                                                                                                                   |
| » name                               | body   | string                                                                                                                       | false    | New name for the profile (optional).                                                                                                                                                   |
| » description                        | body   | string                                                                                                                       | false    | New description/notes for the profile (optional).                                                                                                                                      |
| » target\_probe\_configs             | body   | [ProbeConfigsUpdateOnly](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_probeconfigsupdateonly) | false    | Delta for probe configs when updating by profile id: only modify existing probes using 'changed'. Adding probes is not supported via this endpoint.                                    |
| »» changed                           | body   | \[[ProbeConfigUpsert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_probeconfigupsert)]        | false    | Existing probe configs to modify (identified by probe\_id).                                                                                                                            |
| »»» probe\_id                        | body   | integer                                                                                                                      | true     | Probe identifier to add/update.                                                                                                                                                        |
| »»» enabled                          | body   | boolean                                                                                                                      | false    | Enable/disable this probe in the profile.                                                                                                                                              |
| »»» enabled\_by\_default             | body   | boolean                                                                                                                      | false    | Whether the probe follows default enablement. Alias: 'use\_default\_enabled' accepted.                                                                                                 |
| »»» execution\_frequency             | body   | integer                                                                                                                      | false    | Probe execution frequency in minutes. Alias: 'interval' accepted.                                                                                                                      |
| »»» lifetime                         | body   | integer                                                                                                                      | false    | History retention (days).                                                                                                                                                              |
| » target\_alert\_configs             | body   | [AlertConfigsDelta](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_alertconfigsdelta)           | false    | Delta for alert configs within a profile.                                                                                                                                              |
| »» changed                           | body   | \[allOf]                                                                                                                     | false    | Modify existing alerts.                                                                                                                                                                |
| »»» id                               | body   | integer                                                                                                                      | false    | Alert ID to modify.                                                                                                                                                                    |
| »»» name                             | body   | string                                                                                                                       | false    | Alert name.                                                                                                                                                                            |
| »»» enabled                          | body   | boolean                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» history\_retention               | body   | integer                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» frequency\_min                   | body   | integer                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» operator                         | body   | string                                                                                                                       | false    | none                                                                                                                                                                                   |
| »»» low\_threshold\_value            | body   | number                                                                                                                       | false    | none                                                                                                                                                                                   |
| »»» medium\_threshold\_value         | body   | number                                                                                                                       | false    | none                                                                                                                                                                                   |
| »»» high\_threshold\_value           | body   | number                                                                                                                       | false    | none                                                                                                                                                                                   |
| »»» all\_alert\_enable               | body   | boolean                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» email\_group\_id                 | body   | integer                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» low\_alert\_enable               | body   | boolean                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» low\_email\_group\_id            | body   | integer                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» med\_alert\_enable               | body   | boolean                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» med\_email\_group\_id            | body   | integer                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» high\_alert\_enable              | body   | boolean                                                                                                                      | false    | none                                                                                                                                                                                   |
| »»» high\_email\_group\_id           | body   | integer                                                                                                                      | false    | none                                                                                                                                                                                   |
| »» added                             | body   | \[[AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_alertpayload)]                  | false    | Add new alerts. See AlertPayload for required fields.                                                                                                                                  |
| »»» alert\_name                      | body   | string                                                                                                                       | false    | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                    |
| »»» alert\_template                  | body   | integer                                                                                                                      | false    | ID of the alert template. The ID must be a positive integer value. NOTE: This property is a mandatory parameter for a POST request.                                                    |
| »»» description                      | body   | string                                                                                                                       | false    | none                                                                                                                                                                                   |
| »»» enabled                          | body   | boolean                                                                                                                      | false    | Defines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                       |
| »»» history\_retention               | body   | integer                                                                                                                      | false    | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                       |
| »»» frequency\_min                   | body   | integer                                                                                                                      | false    | Defines how frequently (in minutes) the alert must be checked on PEM database server. Possible values are 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| »»» operator                         | body   | string                                                                                                                       | false    | Defines the operator for checking threshold values. Valid string are ">" and "<". NOTE: This property is a mandatory parameter for the POST request.                                   |
| »»» low\_threshold\_value            | body   | number                                                                                                                       | false    | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for a POST request.                                |
| »»» medium\_threshold\_value         | body   | number                                                                                                                       | false    | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for a POST request.                             |
| »»» high\_threshold\_value           | body   | number                                                                                                                       | false    | Threshold value for triggering the high alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for a POST request.                               |
| »»» all\_alert\_enable               | body   | boolean                                                                                                                      | false    | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                       |
| »»» email\_group\_id                 | body   | integer                                                                                                                      | false    | Defines the email group to which email notification are sent, when the state of the alert changes.                                                                                     |
| »»» low\_alert\_enable               | body   | boolean                                                                                                                      | false    | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                            |
| »»» low\_email\_group\_id            | body   | integer                                                                                                                      | false    | Defines the email group to which email notifications are sent when the state of the alert changes to LOW.                                                                              |
| »»» med\_alert\_enable               | body   | boolean                                                                                                                      | false    | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                      |
| »»» med\_email\_group\_id            | body   | integer                                                                                                                      | false    | Defines the email group to which email notifications are sent when the state of the alert changes to MEDIUM.                                                                           |
| »»» high\_alert\_enable              | body   | boolean                                                                                                                      | false    | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                          |
| »»» high\_email\_group\_id           | body   | integer                                                                                                                      | false    | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                              |
| »»» send\_trap                       | body   | boolean                                                                                                                      | false    | Determines whether to send an SNMP trap notification when the state of the alert changes.                                                                                              |
| »»» snmp\_trap\_version              | body   | integer                                                                                                                      | false    | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3.                                                                                                             |
| »»» low\_send\_trap                  | body   | boolean                                                                                                                      | false    | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                         |
| »»» med\_send\_trap                  | body   | boolean                                                                                                                      | false    | Determines whether to send SNMP trap notifications when the state of the alert changes to MEDIUM.                                                                                      |
| »»» high\_send\_trap                 | body   | boolean                                                                                                                      | false    | Determines whether to send SNMP trap notifications when the state of the alert chagnes to HIGH.                                                                                        |
| »»» cleared\_alert\_enable           | body   | boolean                                                                                                                      | false    | Determines whether to mute the notification for 'clear alert'.                                                                                                                         |
| »»» params                           | body   | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_alertparams)]                    | false    | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                 |
| »»»» paramname                       | body   | string                                                                                                                       | false    | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                  |
| »»»» paramvalue                      | body   | string                                                                                                                       | false    | Value for the given parameter                                                                                                                                                          |
| »»» execute\_script                  | body   | boolean                                                                                                                      | false    | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                |
| »»» execute\_script\_on\_clear       | body   | boolean                                                                                                                      | false    | Determines whether to execute the provided script if the state of the alert clears.                                                                                                    |
| »»» execute\_script\_on\_pem\_server | body   | boolean                                                                                                                      | false    | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                |
| »»» script\_code                     | body   | string                                                                                                                       | false    | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                      |
| »»» submit\_to\_nagios               | body   | boolean                                                                                                                      | false    | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                                |
| »»» override\_default\_config        | body   | boolean                                                                                                                      | false    | Determines whether to override the default webhook configuration.                                                                                                                      |
| »»» send\_notification               | body   | boolean                                                                                                                      | false    | Determines whether the webhook send notification is enabled.                                                                                                                           |
| »»» low\_webhook\_ids                | body   | \[integer]                                                                                                                   | false    | Defines webhook IDs for which low alerts can be configured.                                                                                                                            |
| »»» med\_webhook\_ids                | body   | \[integer]                                                                                                                   | false    | Defines webhook IDs for which medium alerts can be configured.                                                                                                                         |
| »»» high\_webhook\_ids               | body   | \[integer]                                                                                                                   | false    | Defines webhook IDs for which high alerts can be configured.                                                                                                                           |
| »»» cleared\_webhook\_ids            | body   | \[integer]                                                                                                                   | false    | Defines webhook IDs for which cleared alerts can be configured.                                                                                                                        |
| »» deleted                           | body   | \[[AlertDeleteRef](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_alertdeleteref)]              | false    | Delete existing alerts by id.                                                                                                                                                          |
| »»» id                               | body   | integer                                                                                                                      | true     | Alert config id to delete.                                                                                                                                                             |

##### Enumerated Values

| Parameter      | Value                       |
| -------------- | --------------------------- |
| »»» operator   | >                           |
| »»» operator   | <                           |
| »»»» paramname | Exclude tables smaller than |
| »»»» paramname | mount point                 |
| »»»» paramname | Host IP Address             |
| »»»» paramname | Time interval to monitor    |
| »»»» paramname | Time since idle             |
| »»»» paramname | Per CPU utilization (K%)    |

**Example responses**

<details>
<summary>Invalid JSON body</summary>

```json
{
  "message": "Invalid JSON body"
}
```

</details>

<span id="put__profiles_{profile_id}-responses"></span>

### Responses

| Status | Meaning                                                          | Description                  | Schema |
| ------ | ---------------------------------------------------------------- | ---------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)          | Profile updated successfully | None   |
| 400    | [Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) | Invalid JSON body            | None   |

<span id="put__profiles_{profile_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__profiles_{profile_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /profiles/{profile_id}`

_Delete a profile_

<span id="delete__profiles_{profile_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description             |
| ------------ | ------ | ------- | -------- | ----------------------- |
| profile\_id  | path   | integer | true     | none                    |
| X-Auth-Token | header | string  | true     | Token for authorization |

**Example responses**

<span id="delete__profiles_{profile_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description                  | Schema |
| ------ | ------------------------------------------------------- | ---------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Profile deleted successfully | None   |

<span id="delete__profiles_{profile_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__profiles_{profile_id}_assigned`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/assigned \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/assigned', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/assigned',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /profiles/{profile_id}/assigned`

_Get servers and agents assigned to a profile_

<span id="get__profiles_{profile_id}_assigned-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description             |
| ------------ | ------ | ------- | -------- | ----------------------- |
| profile\_id  | path   | integer | true     | none                    |
| X-Auth-Token | header | string  | true     | Token for authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "servers": [
    "string"
  ],
  "agents": [
    "string"
  ]
}
```

</details>

<span id="get__profiles_{profile_id}_assigned-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__profiles_{profile_id}_assigned-responseschema"></span>

### Response Schema

Status Code **200**

| Name      | Type      | Required | Restrictions | Description |
| --------- | --------- | -------- | ------------ | ----------- |
| » servers | \[string] | false    | none         | none        |
| » agents  | \[string] | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `get__profiles_{profile_id}_draft`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/draft \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.get('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/draft', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/draft',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /profiles/{profile_id}/draft`

_Get a draft by profile id_

Returns the draft profile associated with the given published profile id, including full probe and alert configurations. The response does not include parent\_id or draft\_id fields.

<span id="get__profiles_{profile_id}_draft-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description             |
| ------------ | ------ | ------- | -------- | ----------------------- |
| profile\_id  | path   | integer | true     | none                    |
| X-Auth-Token | header | string  | true     | Token for authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "target_kind": "s",
  "published": true,
  "target_probe_configs": [
    {
      "probe_id": 0,
      "probe_name": "string",
      "enabled": true,
      "interval": 0,
      "lifetime": 0,
      "default_enabled": true,
      "default_interval": 0,
      "default_lifetime": 0,
      "target_type": 0,
      "force_enabled": true
    }
  ],
  "target_alert_configs": [
    {
      "id": 0,
      "alert_name": "string",
      "alert_template": 0,
      "description": "string",
      "enabled": true,
      "history_retention": 0,
      "frequency_min": 0,
      "auto_created": true,
      "template_id": "string",
      "params": [],
      "param_names": [
        "string"
      ],
      "param_types": "string",
      "params_units": [
        "string"
      ],
      "threshold_unit": "string",
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
      "cleared_alert_enable": true,
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
  ]
}
```

> Draft not found for profile

```json
{
  "message": "Not found"
}
```

</details>

<span id="get__profiles_{profile_id}_draft-responses"></span>

### Responses

| Status | Meaning                                                        | Description                 | Schema                                                                                                   |
| ------ | -------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Successful response         | [ProfileDraft](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/schemas/#tocs_profiledraft) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Draft not found for profile | Inline                                                                                                   |

<span id="get__profiles_{profile_id}_draft-responseschema"></span>

### Response Schema

Status Code **404**

| Name      | Type   | Required | Restrictions | Description |
| --------- | ------ | -------- | ------------ | ----------- |
| » message | string | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `delete__profiles_{profile_id}_rollback`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/rollback \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/rollback', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/rollback',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /profiles/{profile_id}/rollback`

_Rollback draft for a profile_

<span id="delete__profiles_{profile_id}_rollback-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description             |
| ------------ | ------ | ------- | -------- | ----------------------- |
| profile\_id  | path   | integer | true     | none                    |
| X-Auth-Token | header | string  | true     | Token for authorization |

**Example responses**

<span id="delete__profiles_{profile_id}_rollback-responses"></span>

### Responses

| Status | Meaning                                                 | Description                         | Schema |
| ------ | ------------------------------------------------------- | ----------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Draft deleted or no draft available | None   |

<span id="delete__profiles_{profile_id}_rollback-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `post__profiles_{profile_id}_publish`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/publish \
  -H 'Accept: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/publish', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/publish',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /profiles/{profile_id}/publish`

_Publish a profile_

Publishes the draft for the given profile if present. Returns a message indicating the profile is already published when no draft exists.

<span id="post__profiles_{profile_id}_publish-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description             |
| ------------ | ------ | ------- | -------- | ----------------------- |
| profile\_id  | path   | integer | true     | none                    |
| X-Auth-Token | header | string  | true     | Token for authorization |

**Example responses**

<details>
<summary>Profile not found</summary>

```json
{
  "message": "Not found"
}
```

</details>

<span id="post__profiles_{profile_id}_publish-responses"></span>

### Responses

| Status | Meaning                                                        | Description                                         | Schema |
| ------ | -------------------------------------------------------------- | --------------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Profile published successfully or already published | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Profile not found                                   | Inline |

<span id="post__profiles_{profile_id}_publish-responseschema"></span>

### Response Schema

Status Code **404**

| Name      | Type   | Required | Restrictions | Description |
| --------- | ------ | -------- | ------------ | ----------- |
| » message | string | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `delete__profiles_{profile_id}_{new_profile_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/{new_profile_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/{new_profile_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v16/profiles/{profile_id}/{new_profile_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /profiles/{profile_id}/{new_profile_id}`

_Delete a profile and reassign to new profile_

<span id="delete__profiles_{profile_id}_{new_profile_id}-parameters"></span>

### Parameters

| Name             | In     | Type    | Required | Description             |
| ---------------- | ------ | ------- | -------- | ----------------------- |
| profile\_id      | path   | integer | true     | none                    |
| new\_profile\_id | path   | integer | true     | none                    |
| X-Auth-Token     | header | string  | true     | Token for authorization |

**Example responses**

<span id="delete__profiles_{profile_id}_{new_profile_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description                                 | Schema |
| ------ | ------------------------------------------------------- | ------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Profile deleted and reassigned successfully | None   |

<span id="delete__profiles_{profile_id}_{new_profile_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-monitored-object-status"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
