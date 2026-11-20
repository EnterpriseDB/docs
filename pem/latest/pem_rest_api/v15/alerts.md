---
title: "EDB Postgres Enterprise Manager REST APIs v15.0: Alerts"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/alerts/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v15.0: Alerts

## `get__alert_config_global_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/global/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/',
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

`GET /alert/config/global/`

Gets `Alerts` for global level.

<span id="get__alert_config_global_-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_global_-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_global_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_global_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/global/ \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/',
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

`POST /alert/config/global/`

Creates `Alert` for global level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_global_-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                     | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                                   | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_global_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_global_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_global_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id}',
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

`GET /alert/config/global/{alert_id}`

Gets `Alerts` for global level by alert\_id.

<span id="get__alert_config_global_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| alert\_id    | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_global_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_global_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id}',
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

`PUT /alert/config/global/{alert_id}`

Updates `Alert` for global level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_global_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                     | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| alert\_id    | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token | header | string                                                                                                   | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_global_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_global_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_global_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/global/{alert_id}',
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

`DELETE /alert/config/global/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_global_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| alert\_id    | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_global_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_global_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}',
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

`GET /alert/config/agent/{agent_id}`

Gets `Alerts` for agent level by agent\_id.

<span id="get__alert_config_agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | Agent ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_agent_{agent_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}',
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

`POST /alert/config/agent/{agent_id}`

Creates `Alert` for agent level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                     | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                                  | true     | Agent ID               |
| X-Auth-Token | header | string                                                                                                   | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_agent_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_agent_{agent_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id}',
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

`GET /alert/config/agent/{agent_id}/{alert_id}`

Gets `Alerts` for agent level by agent\_id and alert\_id.

<span id="get__alert_config_agent_{agent_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | Agent ID               |
| alert\_id    | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_agent_{agent_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_agent_{agent_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id}',
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

`PUT /alert/config/agent/{agent_id}/{alert_id}`

Updates `Alert` for agent level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_agent_{agent_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                     | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                                  | true     | Agent ID               |
| alert\_id    | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token | header | string                                                                                                   | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_agent_{agent_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_agent_{agent_id}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_agent_{agent_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/agent/{agent_id}/{alert_id}',
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

`DELETE /alert/config/agent/{agent_id}/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_agent_{agent_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | Agent ID               |
| alert\_id    | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_agent_{agent_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_agent_{agent_id}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}',
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

`GET /alert/config/server/{server_id}`

Gets `Alerts` for server level by server\_id.

<span id="get__alert_config_server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| server\_id   | path   | integer | true     | Server ID              |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}',
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

`POST /alert/config/server/{server_id}`

Creates `Alert` for server level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                     | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id   | path   | integer                                                                                                  | true     | Server ID              |
| X-Auth-Token | header | string                                                                                                   | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id}',
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

`GET /alert/config/server/{server_id}/{alert_id}`

Gets `Alerts` for server level by server\_id and alert\_id.

<span id="get__alert_config_server_{server_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| server\_id   | path   | integer | true     | Server ID              |
| alert\_id    | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_server_{server_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/{alert_id}`

Updates `Alert` for server level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_server_{server_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                     | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id   | path   | integer                                                                                                  | true     | Server ID              |
| alert\_id    | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token | header | string                                                                                                   | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_server_{server_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_server_{server_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| server\_id   | path   | integer | true     | Server ID              |
| alert\_id    | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_server_{server_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}',
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

`GET /alert/config/server/{server_id}/database/{database_name}`

Gets `Alerts` for database level by server\_id and database\_name.

<span id="get__alert_config_server_{server_id}_database_{database_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}_database_{database_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}',
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

`POST /alert/config/server/{server_id}/database/{database_name}`

Creates `Alert` for database level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database Name          |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_server_{server_id}_database_{database_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}_database_{database_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/{alert_id}`

Gets `Alerts` for database level by server\_id, database\_name, and alert\_id.

<span id="get__alert_config_server_{server_id}_database_{database_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/database/{database_name}/{alert_id}`

Updates `Alert` for database level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| alert\_id      | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_server_{server_id}_database_{database_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_database_{database_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_database_{database_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/database/{database_name}/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_server_{server_id}_database_{database_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_database_{database_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}`

Gets `Alerts` for schema level by server\_id, database\_name, and schema\_name.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}',
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

`POST /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}`

Creates `Alert` for schema level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database Name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema Name            |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}`

Gets `Alerts` for schema level by server\_id, database\_name, schema\_name, and alert\_id.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}`

Updates `Alert` for schema level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema name            |
| alert\_id      | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}`

Gets `Alerts` for table level by server\_id, database\_name, schema\_name, and table\_name.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| table\_name    | path   | string  | true     | Table name             |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}',
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

`POST /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}`

Creates `Alert` for table level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema name            |
| table\_name    | path   | string                                                                                                   | true     | Table name             |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}`

Gets `Alerts` for table level by server\_id, database\_name, schema\_name, table\_name, and alert\_id.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema name            |
| table\_name    | path   | string  | true     | Table name             |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}`

Updates `Alert` for table level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema name            |
| table\_name    | path   | string                                                                                                   | true     | Table name             |
| alert\_id      | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| table\_name    | path   | string  | true     | Table name             |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}`

Gets `Alerts` for index level by server\_id, database\_name, schema\_name, and index\_name.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| index\_name    | path   | string  | true     | Index name             |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}',
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

`POST /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}`

Create `Alert` for index level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema name            |
| index\_name    | path   | string                                                                                                   | true     | Index name             |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}`

Gets `Alerts` for index level by server\_id, database\_name, schema\_name, index\_name, and alert\_id.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| index\_name    | path   | string  | true     | Index name             |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}`

Updates `Alert` for index level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema name            |
| index\_name    | path   | string                                                                                                   | true     | Index name             |
| alert\_id      | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| index\_name    | path   | string  | true     | Index name             |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}`

Gets `Alerts` for sequence level by server\_id, database\_name, schema\_name, and sequence\_name.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| sequence\_name | path   | string  | true     | Sequence name          |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}',
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

`POST /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}`

Creates `Alert` for sequence level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema name            |
| sequence\_name | path   | string                                                                                                   | true     | Sequence Name          |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}`

Gets `Alerts` for sequence level by server\_id, database\_name, schema\_name, sequence\_name, and alert\_id.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| sequence\_name | path   | string  | true     | Sequence name          |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}`

Updates `Alert` for sequence level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                     | Required | Description            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                  | true     | Server ID              |
| database\_name | path   | string                                                                                                   | true     | Database name          |
| schema\_name   | path   | string                                                                                                   | true     | Schema name            |
| sequence\_name | path   | string                                                                                                   | true     | Sequence name          |
| alert\_id      | path   | integer                                                                                                  | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                   | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}`

Delete the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| sequence\_name | path   | string  | true     | Sequence name          |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/`

Gets `Alerts` for function level by server\_id, database\_name, schema\_name, and function\_name.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-parameters"></span>

### Parameters

| Name                | In     | Type    | Required | Description                                 |
| ------------------- | ------ | ------- | -------- | ------------------------------------------- |
| server\_id          | path   | integer | true     | Server ID                                   |
| database\_name      | path   | string  | true     | Database name                               |
| schema\_name        | path   | string  | true     | Schema name                                 |
| function\_name      | path   | string  | true     | Function name                               |
| function\_arguments | path   | string  | true     | Comma-separated list of function arguments. |
| X-Auth-Token        | header | string  | true     | Token of authorization                      |

##### Detailed descriptions

**function\_arguments**: Comma-separated list of function arguments.

Note: Provide space if no function argument

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                      | Required | Restrictions | Description                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                                        |
| » id                               | integer                                                                                                   | false    | none         | Alert ID. NOTE: This property is not applicable for a POST request.                                                                                                                         |
| » alert\_name                      | string                                                                                                    | false    | none         | Name of the alert. NOTE: This property is a mandatory parameter for a POST request.                                                                                                         |
| » alert\_template                  | integer                                                                                                   | false    | none         | ID of the alert template. This property must be a positive integer value. NOTE: It is a mandatory parameter for a POST request.                                                             |
| » description                      | string                                                                                                    | false    | none         | none                                                                                                                                                                                        |
| » enabled                          | boolean                                                                                                   | false    | none         | Determines whether this alert is enabled/disabled. NOTE: This property is a mandatory parameter for a POST request.                                                                         |
| » history\_retention               | integer                                                                                                   | false    | none         | Specifies how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: This property is a mandatory parameter for a POST request.                            |
| » frequency\_min                   | integer                                                                                                   | false    | none         | Defines in minutes how frequently the alert must be checked on a PEM database server. Possible values are from 1 to 65534. NOTE: This property is a mandatory parameter for a POST request. |
| » auto\_created                    | boolean                                                                                                   | false    | none         | Specifies whether the alert is auto-created.                                                                                                                                                |
| » template\_id                     | string                                                                                                    | false    | none         | Defines the alert template.                                                                                                                                                                 |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertparams)] | false    | none         | List of parameter/value pairs to be used by the alert template for checking alerts. NOTE: The alert template requires the all parameter to be defined.                                      |
| »» paramname                       | string                                                                                                    | false    | none         | Name of the parameter. NOTE: This property must present on the alert template parameter list.Example:                                                                                       |
| »» paramvalue                      | string                                                                                                    | false    | none         | Value for the given parameter                                                                                                                                                               |
| » param\_names                     | \[string]                                                                                                 | false    | none         | Defines the name of parameters.                                                                                                                                                             |
| » param\_types                     | string                                                                                                    | false    | none         | Defines the type of parameters. Example: INTEGER/STRING..                                                                                                                                   |
| » params\_units                    | \[string]                                                                                                 | false    | none         | Defines the unit used for parameters.Example: 'DAYS','True or False','Hours','Minutes' etc                                                                                                  |
| » threshold\_unit                  | string                                                                                                    | false    | none         | Units used to calculate the threshold, such as MB/kB/seconds/days/... This value is only used for the GUI.                                                                                  |
| » operator                         | string                                                                                                    | false    | none         | Defines the operator for checking threshold values. Valid strings are ">" and "<". NOTE: This property is a mandatory parameter for a POST request.                                         |
| » low\_threshold\_value            | number                                                                                                    | false    | none         | Threshold value for triggering the low alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » medium\_threshold\_value         | number                                                                                                    | false    | none         | Threshold value for triggering the medium alert. This property can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                |
| » high\_threshold\_value           | number                                                                                                    | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                             |
| » send\_email                      | boolean                                                                                                   | false    | none         | Determines whether to send an email when the state of the alert changes.                                                                                                                    |
| » all\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'email\_group\_id' when the state of the alert changes.                                            |
| » email\_group\_id                 | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes.                                                                                           |
| » low\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'low\_email\_group\_id' when the state of the alert is set to LOW.                                 |
| » low\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to LOW.                                                                                    |
| » med\_alert\_enable               | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'medium\_email\_group\_id' when the state of the alert is set to MEDIUM.                           |
| » med\_email\_group\_id            | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when state of the alert changes to MEDIUM.                                                                                     |
| » high\_alert\_enable              | boolean                                                                                                   | false    | none         | Determines whether to send an email notification to the group specified by the parameter 'high\_email\_group\_id' when the state of the alert is set to HIGH.                               |
| » high\_email\_group\_id           | integer                                                                                                   | false    | none         | Defines the email group to which email notification are sent when the state of the alert changes to HIGH.                                                                                   |
| » send\_trap                       | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes.                                                                                                     |
| » snmp\_trap\_version              | integer                                                                                                   | false    | none         | Defines the SNMP trap version. Supported SNMP trap versions are 1, 2 or 3                                                                                                                   |
| » low\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notifications when the state of the alert changes to LOW.                                                                                              |
| » med\_send\_trap                  | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to MEDIUM.                                                                                            |
| » high\_send\_trap                 | boolean                                                                                                   | false    | none         | Determines whether to send SNMP trap notification when the state of the alert changes to HIGH.                                                                                              |
| » cleared\_alert\_enable           | boolean                                                                                                   | false    | none         | Determines whether to mute the notification for 'clear alert'.                                                                                                                              |
| » execute\_script                  | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert changes to LOW/MEDIUM/HIGH.                                                                                     |
| » execute\_script\_on\_clear       | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script if the state of the alert is cleared.                                                                                                     |
| » execute\_script\_on\_pem\_server | boolean                                                                                                   | false    | none         | Determines whether to execute the provided script on the PEM host or the host where the agent is monitoring the object.                                                                     |
| » script\_code                     | string                                                                                                    | false    | none         | The shell or batch script to be executed. Please read the documentation for detailed information.                                                                                           |
| » submit\_to\_nagios               | boolean                                                                                                   | false    | none         | Determines whether to send notification to the nagios when the state of the alert changes.                                                                                                  |
| » override\_default\_config        | boolean                                                                                                   | false    | none         | Determines whether to override the default webhook configuration.                                                                                                                           |
| » send\_notification               | boolean                                                                                                   | false    | none         | Determines whether to enable the webhook send notification.                                                                                                                                 |
| » low\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which low alerts are configured                                                                                                                                             |
| » med\_webhook\_ids                | \[integer]                                                                                                | false    | none         | Webhook IDs for which medium alerts are configured                                                                                                                                          |
| » high\_webhook\_ids               | \[integer]                                                                                                | false    | none         | Webhook IDs for which high alerts are configured                                                                                                                                            |
| » cleared\_webhook\_ids            | \[integer]                                                                                                | false    | none         | Webhook IDs for which cleared alerts are configured                                                                                                                                         |

##### Enumerated Values

| Property  | Value                       |
| --------- | --------------------------- |
| paramname | Exclude tables smaller than |
| paramname | mount point                 |
| paramname | Host IP Address             |
| paramname | Time interval to monitor    |
| paramname | Time since idle             |
| paramname | Per CPU utilization (K%)    |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/ \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/',
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

`POST /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/`

Creates `Alert` for function level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-parameters"></span>

### Parameters

| Name                | In     | Type                                                                                                     | Required | Description                                 |
| ------------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------- |
| server\_id          | path   | integer                                                                                                  | true     | Server ID                                   |
| database\_name      | path   | string                                                                                                   | true     | Database name                               |
| schema\_name        | path   | string                                                                                                   | true     | Schema name                                 |
| function\_name      | path   | string                                                                                                   | true     | Function name                               |
| function\_arguments | path   | string                                                                                                   | true     | Comma-separated list of function arguments. |
| X-Auth-Token        | header | string                                                                                                   | true     | Token of authorization                      |
| body                | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                                        |

##### Detailed descriptions

**function\_arguments**: Comma-separated list of function arguments.

Note: Provide space if no function argument

**Example responses**

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}`

Gets `Alerts` for function level by server\_id, database\_name, schema\_name, function\_name, and alert\_id.

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-parameters"></span>

### Parameters

| Name                | In     | Type    | Required | Description                                 |
| ------------------- | ------ | ------- | -------- | ------------------------------------------- |
| server\_id          | path   | integer | true     | Server ID                                   |
| database\_name      | path   | string  | true     | Database name                               |
| schema\_name        | path   | string  | true     | Schema name                                 |
| function\_name      | path   | string  | true     | Function name                               |
| function\_arguments | path   | string  | true     | Comma-separated list of function arguments. |
| alert\_id           | path   | integer | true     | Alert ID                                    |
| X-Auth-Token        | header | string  | true     | Token of authorization                      |

##### Detailed descriptions

**function\_arguments**: Comma-separated list of function arguments.

Note: Provide space if no function argument

**Example responses**

<details>
<summary>200 Response</summary>

```json
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
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                     |
| ------ | ------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id} \
  -H 'Content-Type: application/json' \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'X-Auth-Token': 'string'
}

r = requests.put('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}`

Updates `Alert` for function level.

**Body parameter**

```json
{
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
  "email_group_id": 1,
  "low_alert_enable": true,
  "low_email_group_id": 1,
  "med_alert_enable": true,
  "med_email_group_id": 1,
  "high_alert_enable": true,
  "high_email_group_id": 1,
  "send_trap": false,
  "snmp_trap_version": 0,
  "low_send_trap": true,
  "med_send_trap": true,
  "high_send_trap": true,
  "cleared_alert_enable": true,
  "params": [],
  "execute_script": true,
  "execute_script_on_clear": true,
  "execute_script_on_pem_server": true,
  "script_code": "string",
  "submit_to_nagios": true,
  "override_default_config": true,
  "send_notification": false,
  "low_webhook_ids": [],
  "med_webhook_ids": [],
  "high_webhook_ids": [],
  "cleared_webhook_ids": []
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-parameters"></span>

### Parameters

| Name                | In     | Type                                                                                                     | Required | Description                                 |
| ------------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------- |
| server\_id          | path   | integer                                                                                                  | true     | Server ID                                   |
| database\_name      | path   | string                                                                                                   | true     | Database name                               |
| schema\_name        | path   | string                                                                                                   | true     | Schema name                                 |
| function\_name      | path   | string                                                                                                   | true     | Function name                               |
| function\_arguments | path   | string                                                                                                   | true     | Comma-separated list of function arguments. |
| alert\_id           | path   | integer                                                                                                  | true     | Alert ID                                    |
| X-Auth-Token        | header | string                                                                                                   | true     | Token of authorization                      |
| body                | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/schemas/#tocs_alertpayload) | true     | none                                        |

##### Detailed descriptions

**function\_arguments**: Comma-separated list of function arguments.

Note: Provide space if no function argument

**Example responses**

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v15/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}`

Deletes the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-parameters"></span>

### Parameters

| Name                | In     | Type    | Required | Description                                 |
| ------------------- | ------ | ------- | -------- | ------------------------------------------- |
| server\_id          | path   | integer | true     | Server ID                                   |
| database\_name      | path   | string  | true     | Database name                               |
| schema\_name        | path   | string  | true     | Schema name                                 |
| function\_name      | path   | string  | true     | Function name                               |
| function\_arguments | path   | string  | true     | Comma-separated list of function arguments. |
| alert\_id           | path   | integer | true     | Alert ID                                    |
| X-Auth-Token        | header | string  | true     | Token of authorization                      |

##### Detailed descriptions

**function\_arguments**: Comma-separated list of function arguments.

Note: Provide space if no function argument

**Example responses**

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-copy-alert"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
