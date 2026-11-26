---
title: "EDB Postgres Enterprise Manager REST APIs v1.0: Alerts"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/alerts/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v1.0: Alerts

## `get__alert_config_global_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/global/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/',
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
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_global_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/global/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/',
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

Create `Alert` for global level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_global_-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                    | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                                  | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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

## `get__alert_config_global_{id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id}',
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

`GET /alert/config/global/{id}`

Gets `Alerts` for global level by alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_global_{id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| id           | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_global_{id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_global_{id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id}',
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

`PUT /alert/config/global/{id}`

Update `Alert` for global level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_global_{id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                    | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| id           | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token | header | string                                                                                                  | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_global_{id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_global_{id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_global_{id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/global/{id}',
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

`DELETE /alert/config/global/{id}`

Delete the `Alert` object.

<span id="delete__alert_config_global_{id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| id           | path   | integer | true     | Alert ID               |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_global_{id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_global_{id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}',
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

Gets `Alerts` for agent level by agent\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

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
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}',
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

Create `Alert` for agent level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                    | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                                 | true     | Agent ID               |
| X-Auth-Token | header | string                                                                                                  | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id}',
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

Gets `Alerts` for agent level by agent\_id and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

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
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_agent_{agent_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_agent_{agent_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id}',
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

Update `Alert` for agent level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_agent_{agent_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                    | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                                 | true     | Agent ID               |
| alert\_id    | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token | header | string                                                                                                  | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/agent/{agent_id}/{alert_id}',
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

Delete the `Alert` object.

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}',
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

Gets `Alerts` for server level by server\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

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
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}',
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

Create `Alert` for server level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                    | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id   | path   | integer                                                                                                 | true     | Server ID              |
| X-Auth-Token | header | string                                                                                                  | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id}',
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

Gets `Alerts` for server level by server\_id and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

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
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id}',
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

Update `Alert` for server level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_{alert_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                    | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id   | path   | integer                                                                                                 | true     | Server ID              |
| alert\_id    | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token | header | string                                                                                                  | true     | Token of authorization |
| body         | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/{alert_id}',
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

Delete the `Alert` object.

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}',
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

Gets `Alerts` for database level by server\_id and database\_name.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

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
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}',
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

Create `Alert` for database level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id}',
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

Gets `Alerts` for database level by server\_id, database\_name and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id}',
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

Update `Alert` for database level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| alert\_id      | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/{alert_id}',
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

Delete the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}',
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

Gets `Alerts` for schema level by server\_id, database\_name and schema\_name.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

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
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}',
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

Create `Alert` for schema level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}',
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

Gets `Alerts` for schema level by server\_id, database\_name, schema\_name and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}',
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

Update `Alert` for schema level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| alert\_id      | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/{alert_id}',
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

Delete the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}',
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

Gets `Alerts` for table level by server\_id, database\_name, schema\_name and table\_name.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| table\_name    | path   | string  | true     | Table Name             |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "alert_name": "string",
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}',
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

Create `Alert` for table level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| table\_name    | path   | string                                                                                                  | true     | Table Name             |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}',
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

Gets `Alerts` for table level by server\_id, database\_name, schema\_name, table\_name and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| table\_name    | path   | string  | true     | Table Name             |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}',
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

Update `Alert` for table level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| table\_name    | path   | string                                                                                                  | true     | Table Name             |
| alert\_id      | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/table/{table_name}/{alert_id}',
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

Delete the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_table_{table_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| table\_name    | path   | string  | true     | Table Name             |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}',
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

Gets `Alerts` for index level by server\_id, database\_name, schema\_name and index\_name.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| index\_name    | path   | string  | true     | Index Name             |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "alert_name": "string",
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}',
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
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| index\_name    | path   | string                                                                                                  | true     | Index Name             |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}',
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

Gets `Alerts` for index level by server\_id, database\_name, schema\_name, index\_name and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| index\_name    | path   | string  | true     | Index Name             |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}',
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

Update `Alert` for index level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| index\_name    | path   | string                                                                                                  | true     | Index Name             |
| alert\_id      | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/index/{index_name}/{alert_id}',
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

Delete the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_index_{index_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| index\_name    | path   | string  | true     | Index Name             |
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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}',
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

Gets `Alerts` for sequence level by server\_id, database\_name, schema\_name and sequence\_name.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| sequence\_name | path   | string  | true     | Sequence Name          |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "alert_name": "string",
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}',
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

Create `Alert` for sequence level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| sequence\_name | path   | string                                                                                                  | true     | Sequence Name          |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}',
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

Gets `Alerts` for sequence level by server\_id, database\_name, schema\_name, sequence\_name and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| sequence\_name | path   | string  | true     | Sequence Name          |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}',
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

Update `Alert` for sequence level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_sequence_{sequence_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| sequence\_name | path   | string                                                                                                  | true     | Sequence Name          |
| alert\_id      | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/sequence/{sequence_name}/{alert_id}',
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
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| sequence\_name | path   | string  | true     | Sequence Name          |
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

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}`

Gets `Alerts` for view level by server\_id, database\_name, schema\_name and view\_name.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| view\_name     | path   | string  | true     | View Name              |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "alert_name": "string",
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
  }
]
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-responseschema"></span>

### Response Schema

Status Code **200**

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}',
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

`POST /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}`

Create `Alert` for view level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| view\_name     | path   | string                                                                                                  | true     | View Name              |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}',
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

`GET /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}`

Gets `Alerts` for view level by server\_id, database\_name, schema\_name, view\_name and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| view\_name     | path   | string  | true     | View Name              |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}',
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

`PUT /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}`

Update `Alert` for view level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type                                                                                                    | Required | Description            |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id     | path   | integer                                                                                                 | true     | Server ID              |
| database\_name | path   | string                                                                                                  | true     | Database Name          |
| schema\_name   | path   | string                                                                                                  | true     | Schema Name            |
| view\_name     | path   | string                                                                                                  | true     | View Name              |
| alert\_id      | path   | integer                                                                                                 | true     | Alert ID               |
| X-Auth-Token   | header | string                                                                                                  | true     | Token of authorization |
| body           | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                   |

**Example responses**

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}',
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

`DELETE /alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/view/{view_name}/{alert_id}`

Delete the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| server\_id     | path   | integer | true     | Server ID              |
| database\_name | path   | string  | true     | Database Name          |
| schema\_name   | path   | string  | true     | Schema Name            |
| view\_name     | path   | string  | true     | View Name              |
| alert\_id      | path   | integer | true     | Alert ID               |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_view_{view_name}_{alert_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/',
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

Gets `Alerts` for function level by server\_id, database\_name, schema\_name and function\_name.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-parameters"></span>

### Parameters

| Name                | In     | Type    | Required | Description                        |
| ------------------- | ------ | ------- | -------- | ---------------------------------- |
| server\_id          | path   | integer | true     | Server ID                          |
| database\_name      | path   | string  | true     | Database Name                      |
| schema\_name        | path   | string  | true     | Schema Name                        |
| function\_name      | path   | string  | true     | Function Name                      |
| function\_arguments | path   | string  | true     | Function arguments comma separated |
| X-Auth-Token        | header | string  | true     | Token of authorization             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "id": 0,
    "alert_name": "string",
    "template_id": 0,
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
    "snmp_trap_version": true,
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
    "submit_to_nagios": true
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

| Name                               | Type                                                                                                     | Required | Restrictions | Description                                                                                                                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_                        | \[[Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert)]             | false    | none         | none                                                                                                                                                                              |
| » id                               | integer                                                                                                  | false    | none         | Alert Id. NOTE: It is not applicable for POST request.                                                                                                                            |
| » alert\_name                      | string                                                                                                   | false    | none         | Name of the alert. NOTE: It is a mandatory parameter for the POST request.                                                                                                        |
| » template\_id                     | integer                                                                                                  | false    | none         | ID of the alert template, positive integer value. NOTE: It is a mandatory parameter for the POST request.                                                                         |
| » description                      | string                                                                                                   | false    | none         | none                                                                                                                                                                              |
| » enabled                          | boolean                                                                                                  | false    | none         | Defines whether this alert is enabled/disabled. NOTE: It is a mandatory parameter for the POST request.                                                                           |
| » history\_retention               | integer                                                                                                  | false    | none         | For how many days to keep the history of this alert. Possible values are from 1 to 99999. NOTE: It is a mandatory parameter for the POST request.                                 |
| » frequency\_min                   | integer                                                                                                  | false    | none         | Defines how frequently the alert needs to be checked on PEM database server. Possible values are from 1 to 65534 minutes. NOTE: It is a mandatory parameter for the POST request. |
| » operator                         | string                                                                                                   | false    | none         | Defines the operator for checking the threshold values. Valid string are ">" and "<". NOTE: It is a mandatory parameter for the POST request.                                     |
| » low\_threshold\_value            | number                                                                                                   | false    | none         | Threshold value for triggering the low alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                    |
| » medium\_threshold\_value         | number                                                                                                   | false    | none         | Threshold value for triggering the medium alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                 |
| » high\_threshold\_value           | number                                                                                                   | false    | none         | Threshold value for triggering the high alert. It can be any valid integer/float value. NOTE: It is a mandatory parameter for the POST request.                                   |
| » send\_email                      | boolean                                                                                                  | false    | none         | Defines whether to send an email, when the state of alert is changed.                                                                                                             |
| » all\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'email\_group\_id' when state of the alert is changed.                                     |
| » email\_group\_id                 | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of alert is changed.                                                                                 |
| » low\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'low\_email\_group\_id' when state of the alert is set to LOW.                             |
| » low\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to LOW.                                                                      |
| » med\_alert\_enable               | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'medium\_email\_group\_id' when state of the alert is set to MEDIUM.                       |
| » med\_email\_group\_id            | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to MEDIUM.                                                                   |
| » high\_alert\_enable              | boolean                                                                                                  | false    | none         | Defines whether to send an email notification to the group, specified by the parameter 'high\_email\_group\_id' when state of the alert is set to HIGH.                           |
| » high\_email\_group\_id           | integer                                                                                                  | false    | none         | Defines to which email group the email notification will be sent, when state of the alert is changed to HIGH.                                                                     |
| » send\_trap                       | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when the state of the alert changes.                                                                                           |
| » snmp\_trap\_version              | boolean                                                                                                  | false    | none         | Defines the SNMP trap version. Supported SNMP trap version is 1, or 2                                                                                                             |
| » low\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to LOW.                                                                                        |
| » med\_send\_trap                  | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to MEDIUM.                                                                                     |
| » high\_send\_trap                 | boolean                                                                                                  | false    | none         | Defines whether to send the SNMP trap notification when state of the alert chagnes to HIGH.                                                                                       |
| » params                           | \[[AlertParams](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertparams)] | false    | none         | List of the parameter/value pair to be used by the alert template for checking the alerts. NOTE: The all parameter must be defined as per the alert template.                     |
| »» paramname                       | string                                                                                                   | false    | none         | Name of the parameter. NOTE: This has to present on the alert template parameter list.                                                                                            |
| »» paramvalue                      | string                                                                                                   | false    | none         | Value for the given parameter                                                                                                                                                     |
| » execute\_script                  | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is changed to LOW/MEDIUM/HIGH.                                                                           |
| » execute\_script\_on\_clear       | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script if the state of the alert is cleared.                                                                                              |
| » execute\_script\_on\_pem\_server | boolean                                                                                                  | false    | none         | Defines whether to execute the provided script on the PEM Host, or on the host from where the object is being monitored by the agent.                                             |
| » script\_code                     | string                                                                                                   | false    | none         | The script, which will be executed. It could be a shell/batch script. Please read the documention for detailed information.                                                       |
| » submit\_to\_nagios               | boolean                                                                                                  | false    | none         | Defines whether to send notification to the nagios, when state of the alert is chagned.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/',
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

Create `Alert` for function level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="post__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_-parameters"></span>

### Parameters

| Name                | In     | Type                                                                                                    | Required | Description                        |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------- |
| server\_id          | path   | integer                                                                                                 | true     | Server ID                          |
| database\_name      | path   | string                                                                                                  | true     | Database Name                      |
| schema\_name        | path   | string                                                                                                  | true     | Schema Name                        |
| function\_name      | path   | string                                                                                                  | true     | Function Name                      |
| function\_arguments | path   | string                                                                                                  | true     | Function arguments comma separated |
| X-Auth-Token        | header | string                                                                                                  | true     | Token of authorization             |
| body                | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                               |

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
curl -X GET https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}',
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

Gets `Alerts` for function level by server\_id, database\_name, schema\_name, function\_name and alert\_id.<br> <h4 class="opblock-title_normal"> Warning: Due to support added for SNMP v3 in API version 3, API may return wrong value for <code>snmp_trap_version</code> parameter.</h4>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-parameters"></span>

### Parameters

| Name                | In     | Type    | Required | Description                        |
| ------------------- | ------ | ------- | -------- | ---------------------------------- |
| server\_id          | path   | integer | true     | Server ID                          |
| database\_name      | path   | string  | true     | Database Name                      |
| schema\_name        | path   | string  | true     | Schema Name                        |
| function\_name      | path   | string  | true     | Function Name                      |
| function\_arguments | path   | string  | true     | Function arguments comma separated |
| alert\_id           | path   | integer | true     | Alert ID                           |
| X-Auth-Token        | header | string  | true     | Token of authorization             |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

</details>

<span id="get__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Alert](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alert) |

> **Note: Info**
>
> This operation does not require authentication

## `put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}',
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

Update `Alert` for function level.

**Body parameter**

```json
{
  "id": 0,
  "alert_name": "string",
  "template_id": 0,
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
  "snmp_trap_version": true,
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
  "submit_to_nagios": true
}
```

<span id="put__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-parameters"></span>

### Parameters

| Name                | In     | Type                                                                                                    | Required | Description                        |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------- |
| server\_id          | path   | integer                                                                                                 | true     | Server ID                          |
| database\_name      | path   | string                                                                                                  | true     | Database Name                      |
| schema\_name        | path   | string                                                                                                  | true     | Schema Name                        |
| function\_name      | path   | string                                                                                                  | true     | Function Name                      |
| function\_arguments | path   | string                                                                                                  | true     | Function arguments comma separated |
| alert\_id           | path   | integer                                                                                                 | true     | Alert ID                           |
| X-Auth-Token        | header | string                                                                                                  | true     | Token of authorization             |
| body                | body   | [AlertPayload](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/schemas/#tocs_alertpayload) | true     | none                               |

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
curl -X DELETE https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v1/alert/config/server/{server_id}/database/{database_name}/schema/{schema_name}/function/{function_name}/args/{function_arguments}/{alert_id}',
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

Delete the `Alert` object.

<span id="delete__alert_config_server_{server_id}_database_{database_name}_schema_{schema_name}_function_{function_name}_args_{function_arguments}_{alert_id}-parameters"></span>

### Parameters

| Name                | In     | Type    | Required | Description                        |
| ------------------- | ------ | ------- | -------- | ---------------------------------- |
| server\_id          | path   | integer | true     | Server ID                          |
| database\_name      | path   | string  | true     | Database Name                      |
| schema\_name        | path   | string  | true     | Schema Name                        |
| function\_name      | path   | string  | true     | Function Name                      |
| function\_arguments | path   | string  | true     | Function arguments comma separated |
| alert\_id           | path   | integer | true     | Alert ID                           |
| X-Auth-Token        | header | string  | true     | Token of authorization             |

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
