---
title: "EDB Postgres Enterprise Manager REST APIs v17.0: Blackout"
description: Manage alert blackouts. A blackout suppresses alerts for a specific agent or server for a defined period.
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/blackout/
lastModified: 2026-06-22T21:47:06+05:30
---

# EDB Postgres Enterprise Manager REST APIs v17.0: Blackout

Manage alert blackouts. A blackout suppresses alerts for a specific agent or server for a defined period.

## `get__blackout_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/blackout/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/blackout/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/',
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

`GET /blackout/`

_List blackouts_

Returns blackout records from pem.blackout (active + future scheduled). Optionally filter by object\_type, object\_id, or source. Pass include\_history=true to also return archived records from pem.blackout\_history.

<span id="get__blackout_-parameters"></span>

### Parameters

| Name             | In     | Type    | Required | Description                                        |
| ---------------- | ------ | ------- | -------- | -------------------------------------------------- |
| X-Auth-Token     | header | string  | true     | Token for authentication                           |
| object\_type     | query  | integer | false    | Filter by object type: 100 (agent) or 200 (server) |
| object\_id       | query  | integer | false    | Filter by specific object ID                       |
| source           | query  | string  | false    | Filter by source: manual, scheduled, or auto       |
| include\_history | query  | boolean | false    | If true, also include archived blackout records    |

##### Enumerated Values

| Parameter    | Value     |
| ------------ | --------- |
| object\_type | 100       |
| object\_type | 200       |
| source       | manual    |
| source       | scheduled |
| source       | auto      |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "blackouts": [
    {
      "id": 0,
      "start_time": "2019-08-24T14:15:22Z",
      "end_time": "2019-08-24T14:15:22Z",
      "object_type": 0,
      "object_id": 0,
      "source": "manual",
      "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
      "created_by": "string",
      "created_at": "2019-08-24T14:15:22Z"
    }
  ]
}
```

</details>

<span id="get__blackout_-responses"></span>

### Responses

| Status | Meaning                                                 | Description              | Schema |
| ------ | ------------------------------------------------------- | ------------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | List of blackout records | Inline |

<span id="get__blackout_-responseschema"></span>

### Response Schema

Status Code **200**

| Name        | Type     | Required | Restrictions | Description                                                                                                                                          |
| ----------- | -------- | -------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| » blackouts | \[oneOf] | false    | none         | Active blackout records. When include\_history=true, may also contain BlackoutHistory objects with additional actual\_end\_time and archived fields. |

_oneOf_

| Name             | Type                                                                                             | Required | Restrictions | Description           |
| ---------------- | ------------------------------------------------------------------------------------------------ | -------- | ------------ | --------------------- |
| »» _anonymous_   | [Blackout](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_blackout) | false    | none         | none                  |
| »»» id           | integer                                                                                          | false    | none         | none                  |
| »»» start\_time  | string(date-time)                                                                                | false    | none         | none                  |
| »»» end\_time    | string(date-time)¦null                                                                           | false    | none         | none                  |
| »»» object\_type | integer                                                                                          | false    | none         | 100=agent, 200=server |
| »»» object\_id   | integer                                                                                          | false    | none         | none                  |
| »»» source       | string                                                                                           | false    | none         | none                  |
| »»» batch\_id    | string(uuid)¦null                                                                                | false    | none         | none                  |
| »»» created\_by  | string                                                                                           | false    | none         | none                  |
| »»» created\_at  | string(date-time)                                                                                | false    | none         | none                  |

_xor_

| Name                     | Type                                                                                                           | Required | Restrictions | Description                                                                                                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| »» _anonymous_           | [BlackoutHistory](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_blackouthistory) | false    | none         | Archived blackout record. Returned by GET /blackout/?include\_history=true (mixed with live rows) and by GET /blackout/{id} when the id is found only in pem.blackout\_history. |
| »»» id                   | integer                                                                                                        | false    | none         | none                                                                                                                                                                            |
| »»» start\_time          | string(date-time)                                                                                              | false    | none         | none                                                                                                                                                                            |
| »»» scheduled\_end\_time | string(date-time)¦null                                                                                         | false    | none         | Original end\_time when the blackout was created                                                                                                                                |
| »»» actual\_end\_time    | string(date-time)                                                                                              | false    | none         | When the blackout actually ended                                                                                                                                                |
| »»» object\_type         | integer                                                                                                        | false    | none         | 100=agent, 200=server                                                                                                                                                           |
| »»» object\_id           | integer                                                                                                        | false    | none         | none                                                                                                                                                                            |
| »»» source               | string                                                                                                         | false    | none         | none                                                                                                                                                                            |
| »»» batch\_id            | string(uuid)¦null                                                                                              | false    | none         | none                                                                                                                                                                            |
| »»» created\_by          | string                                                                                                         | false    | none         | none                                                                                                                                                                            |
| »»» created\_at          | string(date-time)                                                                                              | false    | none         | none                                                                                                                                                                            |
| »»» archived             | boolean                                                                                                        | false    | none         | Always true for history records                                                                                                                                                 |

##### Enumerated Values

| Property | Value     |
| -------- | --------- |
| source   | manual    |
| source   | scheduled |
| source   | auto      |
| source   | manual    |
| source   | scheduled |
| source   | auto      |

> **Note: Info**
>
> This operation does not require authentication

## `post__blackout_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v17/blackout/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v17/blackout/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "start_time": "2019-08-24T14:15:22Z",
  "duration": 1,
  "object_type": 100,
  "object_ids": [
    0
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/',
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

`POST /blackout/`

_Create one or more blackouts_

Creates blackout records for specified objects. Multiple object\_ids can be provided to create a batch.

**Body parameter**

```json
{
  "start_time": "2019-08-24T14:15:22Z",
  "duration": 1,
  "object_type": 100,
  "object_ids": [
    0
  ]
}
```

<span id="post__blackout_-parameters"></span>

### Parameters

| Name           | In     | Type              | Required | Description                                                                                                                                                                                    |
| -------------- | ------ | ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| X-Auth-Token   | header | string            | true     | Token for authentication                                                                                                                                                                       |
| body           | body   | object            | true     | none                                                                                                                                                                                           |
| » start\_time  | body   | string(date-time) | true     | When the blackout starts (ISO 8601)                                                                                                                                                            |
| » duration     | body   | integer           | true     | Length of the blackout in hours. Must be an integer from 1 to 24, matching the values offered by the Schedule Alert Blackout dialog so that REST-created blackouts render correctly in the UI. |
| » object\_type | body   | integer           | true     | 100 = agent, 200 = server                                                                                                                                                                      |
| » object\_ids  | body   | \[integer]        | true     | Array of agent or server IDs                                                                                                                                                                   |

##### Enumerated Values

| Parameter      | Value |
| -------------- | ----- |
| » duration     | 1     |
| » duration     | 2     |
| » duration     | 3     |
| » duration     | 4     |
| » duration     | 5     |
| » duration     | 6     |
| » duration     | 7     |
| » duration     | 8     |
| » duration     | 9     |
| » duration     | 10    |
| » duration     | 11    |
| » duration     | 12    |
| » duration     | 13    |
| » duration     | 14    |
| » duration     | 15    |
| » duration     | 16    |
| » duration     | 17    |
| » duration     | 18    |
| » duration     | 19    |
| » duration     | 20    |
| » duration     | 21    |
| » duration     | 22    |
| » duration     | 23    |
| » duration     | 24    |
| » object\_type | 100   |
| » object\_type | 200   |

**Example responses**

<details>
<summary>201 Response</summary>

```json
{
  "ids": [
    0
  ],
  "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20"
}
```

</details>

<span id="post__blackout_-responses"></span>

### Responses

| Status | Meaning                                                                | Description                                            | Schema |
| ------ | ---------------------------------------------------------------------- | ------------------------------------------------------ | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)           | Blackout(s) created successfully                       | Inline |
| 428    | [Precondition Required](https://tools.ietf.org/html/rfc6585#section-3) | Validation error (invalid input, constraint violation) | None   |

<span id="post__blackout_-responseschema"></span>

### Response Schema

Status Code **201**

| Name        | Type         | Required | Restrictions | Description |
| ----------- | ------------ | -------- | ------------ | ----------- |
| » ids       | \[integer]   | false    | none         | none        |
| » batch\_id | string(uuid) | false    | none         | none        |

> **Note: Info**
>
> This operation does not require authentication

## `get__blackout_{blackout_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/blackout/{blackout_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/blackout/{blackout_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/{blackout_id}',
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

`GET /blackout/{blackout_id}`

_Get a specific blackout_

Returns a blackout record. If the id is not present in pem.blackout, the handler falls back to pem.blackout\_history and returns the archived record (distinguishable by "archived": true and the presence of actual\_end\_time / scheduled\_end\_time fields). Returns 404 if the id is not found in either table.

<span id="get__blackout_{blackout_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| blackout\_id | path   | integer | true     | none                     |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "start_time": "2019-08-24T14:15:22Z",
  "end_time": "2019-08-24T14:15:22Z",
  "object_type": 0,
  "object_id": 0,
  "source": "manual",
  "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
  "created_by": "string",
  "created_at": "2019-08-24T14:15:22Z"
}
```

</details>

<span id="get__blackout_{blackout_id}-responses"></span>

### Responses

| Status | Meaning                                                        | Description                                                                                                                                                                                 | Schema |
| ------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Blackout record. May be a live row from pem.blackout (Blackout schema) or, when the id is found only in pem.blackout\_history, an archived row (BlackoutHistory schema with archived=true). | Inline |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Blackout not found                                                                                                                                                                          | None   |

<span id="get__blackout_{blackout_id}-responseschema"></span>

### Response Schema

##### Enumerated Values

| Property | Value     |
| -------- | --------- |
| source   | manual    |
| source   | scheduled |
| source   | auto      |
| source   | manual    |
| source   | scheduled |
| source   | auto      |

> **Note: Info**
>
> This operation does not require authentication

## `delete__blackout_{blackout_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v17/blackout/{blackout_id} \
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

r = requests.delete('https://PEM-SERVER-IP/pem/api/v17/blackout/{blackout_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/{blackout_id}',
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

`DELETE /blackout/{blackout_id}`

_End a blackout_

Ends (archives) a blackout record, moving it to history.

<span id="delete__blackout_{blackout_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| blackout\_id | path   | integer | true     | none                     |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "id": 0,
  "deleted": true,
  "warnings": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

</details>

<span id="delete__blackout_{blackout_id}-responses"></span>

### Responses

| Status | Meaning                                                        | Description                 | Schema |
| ------ | -------------------------------------------------------------- | --------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Blackout ended and archived | Inline |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Blackout not found          | None   |

<span id="delete__blackout_{blackout_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name       | Type                                                                                                              | Required | Restrictions | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| » id       | integer                                                                                                           | false    | none         | ID of the ended blackout                                                                                                                                                                                                                                                                                                                                                                                        |
| » deleted  | boolean                                                                                                           | false    | none         | Always true on success                                                                                                                                                                                                                                                                                                                                                                                          |
| » warnings | \[[BlackoutWarning](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_blackoutwarning)] | false    | none         | Optional non-fatal warnings — present only when the archive INSERT affected fewer rows than the DELETE returned (e.g. RLS or trigger drift on pem.blackout\_history). Each warning carries the BlackoutId, ArchivedCount, and ExpectedArchived for diagnostics.                                                                                                                                                 |
| »» code    | string                                                                                                            | true     | none         | Stable warning identifier. Known codes: `manual_post_state_unavailable` (toggle response-shape SELECT failed after COMMIT), `in_blackout_post_state_unavailable` (likewise for the synced flag), `flag_select_failed` (status helper fell back to records-derived in\_blackout), `history_archive_incomplete` (DELETE archived fewer rows than expected — investigate RLS / triggers on pem.blackout\_history). |
| »» message | string                                                                                                            | true     | none         | none                                                                                                                                                                                                                                                                                                                                                                                                            |

> **Note: Info**
>
> This operation does not require authentication

## `get__blackout_server_{sid}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid}',
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

`GET /blackout/server/{sid}`

_Get blackout status for a server_

Returns the synced alert\_blackout flag and the breakdown of active records by source for the specified server.

<span id="get__blackout_server_{sid}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| sid          | path   | integer | true     | Server id                |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "object_type": 100,
  "object_id": 0,
  "in_blackout": true,
  "manual": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "scheduled": [
    {
      "id": 0,
      "start_time": "2019-08-24T14:15:22Z",
      "end_time": "2019-08-24T14:15:22Z",
      "object_type": 0,
      "object_id": 0,
      "source": "manual",
      "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
      "created_by": "string",
      "created_at": "2019-08-24T14:15:22Z"
    }
  ],
  "auto": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "warnings": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

</details>

<span id="get__blackout_server_{sid}-responses"></span>

### Responses

| Status | Meaning                                                                | Description                                 | Schema                                                                                                                   |
| ------ | ---------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | Blackout status for the server.             | [ObjectBlackoutStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_objectblackoutstatus) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)         | No server with the given id exists.         | None                                                                                                                     |
| 428    | [Precondition Required](https://tools.ietf.org/html/rfc6585#section-3) | The server id was not provided in the path. | None                                                                                                                     |

> **Note: Info**
>
> This operation does not require authentication

## `put__blackout_server_{sid}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /blackout/server/{sid}`

_Enable manual blackout for a server_

Idempotent. Inserts a manual indefinite record if none exists for this server; otherwise returns the existing record with changed=false. Only one active manual record per object is allowed (enforced by pem.idx\_blackout\_one\_active\_indefinite).

<span id="put__blackout_server_{sid}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| sid          | path   | integer | true     | Server id                |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "changed": true,
  "in_blackout": true,
  "manual": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "ended_records": [
    {
      "id": 0,
      "source": "manual",
      "scheduled_end": "2019-08-24T14:15:22Z",
      "ended_early": true
    }
  ],
  "warnings": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

</details>

<span id="put__blackout_server_{sid}-responses"></span>

### Responses

| Status | Meaning                                                        | Description                                                                     | Schema                                                                                                                               |
| ------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Toggle result. changed=true on first enable; changed=false on idempotent no-op. | [ObjectBlackoutToggleResult](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_objectblackouttoggleresult) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | No object with the given id exists.                                             | None                                                                                                                                 |

> **Note: Info**
>
> This operation does not require authentication

## `delete__blackout_server_{sid}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid} \
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

r = requests.delete('https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/server/{sid}',
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

`DELETE /blackout/server/{sid}`

_End all blackouts on a server_

Idempotent. Ends every active blackout record on this server regardless of source (manual + scheduled + auto). Matches the dashboard checkbox unchecking-an-already-active behaviour: the user intent is "alerts back on now". Records that had started are archived to pem.blackout\_history; future-scheduled records are simply deleted.

<span id="delete__blackout_server_{sid}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| sid          | path   | integer | true     | Server id                |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "changed": true,
  "in_blackout": true,
  "manual": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "ended_records": [
    {
      "id": 0,
      "source": "manual",
      "scheduled_end": "2019-08-24T14:15:22Z",
      "ended_early": true
    }
  ],
  "warnings": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

</details>

<span id="delete__blackout_server_{sid}-responses"></span>

### Responses

| Status | Meaning                                                        | Description                                                                                        | Schema                                                                                                                               |
| ------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Toggle result. changed=true when at least one record was ended; changed=false on idempotent no-op. | [ObjectBlackoutToggleResult](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_objectblackouttoggleresult) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | No object with the given id exists.                                                                | None                                                                                                                                 |

> **Note: Info**
>
> This operation does not require authentication

## `get__blackout_agent_{aid}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid}',
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

`GET /blackout/agent/{aid}`

_Get blackout status for an agent_

Returns the synced alert\_blackout flag and the breakdown of active records by source for the specified agent.

<span id="get__blackout_agent_{aid}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| aid          | path   | integer | true     | Agent id                 |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "object_type": 100,
  "object_id": 0,
  "in_blackout": true,
  "manual": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "scheduled": [
    {
      "id": 0,
      "start_time": "2019-08-24T14:15:22Z",
      "end_time": "2019-08-24T14:15:22Z",
      "object_type": 0,
      "object_id": 0,
      "source": "manual",
      "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
      "created_by": "string",
      "created_at": "2019-08-24T14:15:22Z"
    }
  ],
  "auto": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "warnings": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

</details>

<span id="get__blackout_agent_{aid}-responses"></span>

### Responses

| Status | Meaning                                                                | Description                                | Schema                                                                                                                   |
| ------ | ---------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | Blackout status for the agent.             | [ObjectBlackoutStatus](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_objectblackoutstatus) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)         | No agent with the given id exists.         | None                                                                                                                     |
| 428    | [Precondition Required](https://tools.ietf.org/html/rfc6585#section-3) | The agent id was not provided in the path. | None                                                                                                                     |

> **Note: Info**
>
> This operation does not require authentication

## `put__blackout_agent_{aid}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /blackout/agent/{aid}`

_Enable manual blackout for an agent_

Idempotent. Inserts a manual indefinite record if none exists for this agent; otherwise returns the existing record with changed=false. Only one active manual record per object is allowed (enforced by pem.idx\_blackout\_one\_active\_indefinite).

<span id="put__blackout_agent_{aid}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| aid          | path   | integer | true     | Agent id                 |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "changed": true,
  "in_blackout": true,
  "manual": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "ended_records": [
    {
      "id": 0,
      "source": "manual",
      "scheduled_end": "2019-08-24T14:15:22Z",
      "ended_early": true
    }
  ],
  "warnings": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

</details>

<span id="put__blackout_agent_{aid}-responses"></span>

### Responses

| Status | Meaning                                                        | Description                                                                     | Schema                                                                                                                               |
| ------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Toggle result. changed=true on first enable; changed=false on idempotent no-op. | [ObjectBlackoutToggleResult](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_objectblackouttoggleresult) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | No object with the given id exists.                                             | None                                                                                                                                 |

> **Note: Info**
>
> This operation does not require authentication

## `delete__blackout_agent_{aid}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid} \
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

r = requests.delete('https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/blackout/agent/{aid}',
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

`DELETE /blackout/agent/{aid}`

_End all blackouts on an agent_

Idempotent. Ends every active blackout record on this agent regardless of source (manual + scheduled + auto). Matches the dashboard checkbox unchecking-an-already-active behaviour: the user intent is "alerts back on now". Records that had started are archived to pem.blackout\_history; future-scheduled records are simply deleted.

<span id="delete__blackout_agent_{aid}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description              |
| ------------ | ------ | ------- | -------- | ------------------------ |
| X-Auth-Token | header | string  | true     | Token for authentication |
| aid          | path   | integer | true     | Agent id                 |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "changed": true,
  "in_blackout": true,
  "manual": {
    "id": 0,
    "start_time": "2019-08-24T14:15:22Z",
    "end_time": "2019-08-24T14:15:22Z",
    "object_type": 0,
    "object_id": 0,
    "source": "manual",
    "batch_id": "4da22c97-b7d5-4e31-8c3a-03870ebc7b20",
    "created_by": "string",
    "created_at": "2019-08-24T14:15:22Z"
  },
  "ended_records": [
    {
      "id": 0,
      "source": "manual",
      "scheduled_end": "2019-08-24T14:15:22Z",
      "ended_early": true
    }
  ],
  "warnings": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

</details>

<span id="delete__blackout_agent_{aid}-responses"></span>

### Responses

| Status | Meaning                                                        | Description                                                                                        | Schema                                                                                                                               |
| ------ | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Toggle result. changed=true when at least one record was ended; changed=false on idempotent no-op. | [ObjectBlackoutToggleResult](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_objectblackouttoggleresult) |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | No object with the given id exists.                                                                | None                                                                                                                                 |

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-monitored-object-status"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
