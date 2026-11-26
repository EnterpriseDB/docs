---
title: "EDB Postgres Enterprise Manager REST APIs v5.0: Webhook"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/webhook/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v5.0: Webhook

## `get__webhook_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v5/webhook/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v5/webhook/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/webhook/',
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

`GET /webhook/`

_Retrieval of the webhook list_

<span id="get__webhook_-parameters"></span>

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
]
```

</details>

<span id="get__webhook_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__webhook_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                   | Type                                                                                                                         | Required | Restrictions | Description                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------- |
| _anonymous_            | \[[Webhook](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_webhook)]                             | false    | none         | none                                                              |
| » id                   | integer                                                                                                                      | false    | none         | Webhook id                                                        |
| » name                 | string                                                                                                                       | false    | none         | Webhook name                                                      |
| » url                  | string                                                                                                                       | false    | none         | Webhook url                                                       |
| » enabled              | boolean                                                                                                                      | false    | none         | Defines whether the webhook is enabled, or not.                   |
| » method               | string                                                                                                                       | false    | none         | Request method                                                    |
| » http\_headers        | \[[WebhookGetHTTPHeaders](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_webhookgethttpheaders)] | false    | none         | List of the http header key/value pair to be used by the webhook. |
| »» http\_header\_id    | integer                                                                                                                      | false    | none         | ID of the http header                                             |
| »» http\_header\_key   | string                                                                                                                       | false    | none         | Name of the http header key                                       |
| »» http\_header\_value | string                                                                                                                       | false    | none         | Name of the http header key                                       |
| » payload\_template    | string                                                                                                                       | false    | none         | Payload template                                                  |
| » low\_alert           | boolean                                                                                                                      | false    | none         | Defines whether the low alert is enabled, or not.                 |
| » med\_alert           | boolean                                                                                                                      | false    | none         | Defines whether the medium alert is enabled, or not.              |
| » high\_alert          | boolean                                                                                                                      | false    | none         | Defines whether the high alert is enabled, or not.                |
| » cleared\_alert       | boolean                                                                                                                      | false    | none         | Defines whether the cleared alert is enabled, or not.             |

> **Note: Info**
>
> This operation does not require authentication

## `post__webhook_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v5/webhook/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v5/webhook/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/webhook/',
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

`POST /webhook/`

_Add a new webhook._

**Body parameter**

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

<span id="post__webhook_-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                          | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                                        | true     | Token of authorization |
| body         | body   | [WebhookPostData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_webhookpostdata) | true     | none                   |

**Example responses**

<span id="post__webhook_-responses"></span>

### Responses

| Status | Meaning                                                 | Description                   | Schema |
| ------ | ------------------------------------------------------- | ----------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Webhook created successfully. | None   |

<span id="post__webhook_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__webhook_{webhook_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id}',
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

`GET /webhook/{webhook_id}`

_Retrieve the information for the webhook, identified by the webhook\_id._

<span id="get__webhook_{webhook_id}-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| webhook\_id  | path   | string | true     | none                   |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__webhook_{webhook_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                        |
| ------ | ------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Webhook](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_webhook) |

> **Note: Info**
>
> This operation does not require authentication

## `put__webhook_{webhook_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id}',
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

`PUT /webhook/{webhook_id}`

_Update the webhook information_

**Body parameter**

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

<span id="put__webhook_{webhook_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                        | Required | Description            |
| ------------ | ------ | ----------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| webhook\_id  | path   | string                                                                                                      | true     | none                   |
| X-Auth-Token | header | string                                                                                                      | true     | Token of authorization |
| body         | body   | [WebhookPutData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/schemas/#tocs_webhookputdata) | true     | none                   |

**Example responses**

<span id="put__webhook_{webhook_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description                   | Schema |
| ------ | ------------------------------------------------------- | ----------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Webhook updated successfully. | None   |

<span id="put__webhook_{webhook_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__webhook_{webhook_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v5/webhook/{webhook_id}',
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

`DELETE /webhook/{webhook_id}`

_Delete the webhook._

<span id="delete__webhook_{webhook_id}-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| webhook\_id  | path   | string | true     | none                   |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<span id="delete__webhook_{webhook_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description                   | Schema |
| ------ | ------------------------------------------------------- | ----------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Webhook deleted successfully. | None   |

<span id="delete__webhook_{webhook_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-email-groups"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
