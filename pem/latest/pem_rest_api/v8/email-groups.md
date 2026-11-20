---
title: "EDB Postgres Enterprise Manager REST APIs v8.0: Email Groups"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/email-groups/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v8.0: Email Groups

## `get__email_groups`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/email/groups \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/email/groups', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/email/groups',
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

`GET /email/groups`

_Retrieve the email groups list._

<span id="get__email_groups-parameters"></span>

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
    "oid": 0,
    "gid": 0,
    "name": "string",
    "to_addr": "string",
    "cc_addr": "string",
    "bcc_addr": "string",
    "from_addr": "string",
    "reply_to_addr": "string",
    "subject_prefix": "string",
    "from_time": "00:00:00",
    "to_time": "23:59:59"
  }
]
```

</details>

<span id="get__email_groups-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__email_groups-responseschema"></span>

### Response Schema

Status Code **200**

| Name              | Type                                                                                                     | Required | Restrictions | Description                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------- |
| _anonymous_       | \[[EmailGroups](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_emailgroups)] | false    | none         | none                                                           |
| » id              | integer                                                                                                  | false    | none         | Email group ID                                                 |
| » oid             | integer                                                                                                  | false    | none         | Email group options ID                                         |
| » gid             | integer                                                                                                  | false    | none         | Email group ID                                                 |
| » name            | string                                                                                                   | false    | none         | Email group name                                               |
| » to\_addr        | string                                                                                                   | false    | none         | Email group options receiver address                           |
| » cc\_addr        | string                                                                                                   | false    | none         | Email group options CC address                                 |
| » bcc\_addr       | string                                                                                                   | false    | none         | Email group options BCC address                                |
| » from\_addr      | string                                                                                                   | false    | none         | Email group options sender address                             |
| » reply\_to\_addr | string                                                                                                   | false    | none         | Email group options reply to address                           |
| » subject\_prefix | string                                                                                                   | false    | none         | Email group options subject prefix                             |
| » from\_time      | string                                                                                                   | false    | none         | Email group options from time to select time range for members |
| » to\_time        | string                                                                                                   | false    | none         | Email group options to time to select time range for members   |

> **Note: Info**
>
> This operation does not require authentication

## `post__email_groups`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v8/email/groups \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v8/email/groups', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "name": "string",
  "options": [
    {
      "to_addr": "string",
      "cc_addr": "string",
      "bcc_addr": "string",
      "from_addr": "string",
      "reply_to_addr": "string",
      "subject_prefix": "string",
      "from_time": "00:00:00",
      "to_time": "23:59:59"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/email/groups',
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

`POST /email/groups`

_Add a new email group._

**Body parameter**

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
      "from_time": "00:00:00",
      "to_time": "23:59:59"
    }
  ]
}
```

<span id="post__email_groups-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                                  | Required | Description            |
| ------------ | ------ | --------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                                                | true     | Token of authorization |
| body         | body   | [EmailGroupsPostData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_emailgroupspostdata) | true     | none                   |

**Example responses**

<span id="post__email_groups-responses"></span>

### Responses

| Status | Meaning                                                 | Description                      | Schema |
| ------ | ------------------------------------------------------- | -------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Email group created successfully | None   |

<span id="post__email_groups-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__email_groups_{email_group_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id}',
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

`GET /email/groups/{email_group_id}`

_Retrieve information for the email group, identified by the email\_group\_id._

<span id="get__email_groups_{email_group_id}-parameters"></span>

### Parameters

| Name             | In     | Type   | Required | Description            |
| ---------------- | ------ | ------ | -------- | ---------------------- |
| email\_group\_id | path   | string | true     | none                   |
| X-Auth-Token     | header | string | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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
  "from_time": "00:00:00",
  "to_time": "23:59:59"
}
```

</details>

<span id="get__email_groups_{email_group_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                                |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [EmailGroups](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_emailgroups) |

> **Note: Info**
>
> This operation does not require authentication

## `put__email_groups_{email_group_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
        "from_time": "00:00:00",
        "to_time": "23:59:59"
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
        "from_time": "00:00:00",
        "to_time": "23:59:59"
      }
    ],
    "deleted": [
      {
        "oid": 0
      }
    ]
  }
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id}',
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

`PUT /email/groups/{email_group_id}`

_Update the email group information._

**Body parameter**

```json
{
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
        "from_time": "00:00:00",
        "to_time": "23:59:59"
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
        "from_time": "00:00:00",
        "to_time": "23:59:59"
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

<span id="put__email_groups_{email_group_id}-parameters"></span>

### Parameters

| Name             | In     | Type                                                                                                                | Required | Description            |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| email\_group\_id | path   | string                                                                                                              | true     | none                   |
| X-Auth-Token     | header | string                                                                                                              | true     | Token of authorization |
| body             | body   | [EmailGroupsPutData](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/schemas/#tocs_emailgroupsputdata) | true     | none                   |

**Example responses**

<span id="put__email_groups_{email_group_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description                           | Schema |
| ------ | ------------------------------------------------------- | ------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Excluded databases added successfully | None   |

<span id="put__email_groups_{email_group_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__email_groups_{email_group_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v8/email/groups/{email_group_id}',
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

`DELETE /email/groups/{email_group_id}`

_Delete the email group._

<span id="delete__email_groups_{email_group_id}-parameters"></span>

### Parameters

| Name             | In     | Type   | Required | Description            |
| ---------------- | ------ | ------ | -------- | ---------------------- |
| email\_group\_id | path   | string | true     | none                   |
| X-Auth-Token     | header | string | true     | Token of authorization |

**Example responses**

<span id="delete__email_groups_{email_group_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description                      | Schema |
| ------ | ------------------------------------------------------- | -------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Email group deleted successfully | None   |

<span id="delete__email_groups_{email_group_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-include-exclude-database-monitoring"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
