---
title: "EDB Postgres Enterprise Manager REST APIs v3.0: Object"
description: Object can be an pem-agent, a monitored server, or a database object (i.e. database, schema, table, index, sequence, function, view).
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/object/
lastModified: 2026-03-26T11:49:42+05:30
---

# EDB Postgres Enterprise Manager REST APIs v3.0: Object

Object can be an pem-agent, a monitored server, or a database object (i.e. database, schema, table, index, sequence, function, view).

## `get__agent_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/agent/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/agent/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/agent/',
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

`GET /agent/`

_Retrieve of the pem-agent information_

It returns the list of the information, and status for the pem-agents visible to the user (represented by the token).

<span id="get__agent_-parameters"></span>

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

</details>

<span id="get__agent_-responses"></span>

### Responses

| Status | Meaning                                                 | Description                                                       | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Returns the list of information, and status about the pem-agents. | [Agent](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_agent) |

> **Note: Info**
>
> This operation does not require authentication

## `get__agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id}',
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

`GET /agent/{agent_id}`

_Retrieve the information for the agent, identified by the agent\_id._

<span id="get__agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [Agent](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_agent) |

> **Note: Info**
>
> This operation does not require authentication

## `put__agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '[
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
]';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id}',
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

`PUT /agent/{agent_id}`

_Update the agent information_

**Body parameter**

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

<span id="put__agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                      | Required | Description            |
| ------------ | ------ | ----------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                   | true     | none                   |
| X-Auth-Token | header | string                                                                                    | true     | Token of authorization |
| body         | body   | [Agent](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_agent) | true     | none                   |

**Example responses**

<span id="put__agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description           | Schema |
| ------ | ------------------------------------------------------- | --------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Updated successfully. | None   |

<span id="put__agent_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__agent_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/agent/{agent_id}',
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

`DELETE /agent/{agent_id}`

_Stop mananging the agent by PEM._

<span id="delete__agent_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__agent_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="delete__agent_{agent_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/',
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

`GET /server/`

_Retrieval of the managed server list_

<span id="get__server_-parameters"></span>

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
]
```

</details>

<span id="get__server_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                      | Type                                                                                           | Required | Restrictions | Description                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| _anonymous_               | \[[Server](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_server)] | false    | none         | none                                                                                                                                              |
| » id                      | integer                                                                                        | false    | none         | Server id                                                                                                                                         |
| » name                    | string                                                                                         | false    | none         | Server name                                                                                                                                       |
| » host                    | string                                                                                         | false    | none         | Server host                                                                                                                                       |
| » port                    | integer                                                                                        | false    | none         | Server port                                                                                                                                       |
| » database                | string                                                                                         | false    | none         | Maintenance databse                                                                                                                               |
| » ssl                     | integer                                                                                        | false    | none         | SSL mode                                                                                                                                          |
| » serviceid               | string                                                                                         | false    | none         | Server service id                                                                                                                                 |
| » active                  | boolean                                                                                        | false    | none         | Defines whether the server is active, or not.                                                                                                     |
| » alert\_blackout         | boolean                                                                                        | false    | none         | Defines whether the alerts on the server are blacked out, or not.                                                                                 |
| » owner                   | integer                                                                                        | false    | none         | ID of the owner, who registered the server with PEM.                                                                                              |
| » team                    | string                                                                                         | false    | none         | Defines the role/username, who can see the server information.                                                                                    |
| » server\_owner           | string                                                                                         | false    | none         | Name of the user, who registered the server on the PEM database server.                                                                           |
| » is\_remote\_monitoring  | boolean                                                                                        | false    | none         | Defines whether this server is being monitored remotely (i.e. the monitoring pemAgent does not resides on the same host on the monitored server). |
| » efm\_cluster\_name      | string                                                                                         | false    | none         | Cluster name of EFM                                                                                                                               |
| » efm\_service\_name      | string                                                                                         | false    | none         | Service name of EFM                                                                                                                               |
| » efm\_installation\_path | string                                                                                         | false    | none         | Installation Path of EFM                                                                                                                          |
| » comment                 | string                                                                                         | false    | none         | Description about the Server.                                                                                                                     |
| » username                | string                                                                                         | false    | none         | Username for connecting the database server.                                                                                                      |
| » gid                     | integer                                                                                        | false    | none         | ID of the Server group                                                                                                                            |
| » db\_restriction         | string                                                                                         | false    | none         | Database restriction SQL clause                                                                                                                   |
| » role                    | string                                                                                         | false    | none         | The role the connection will use                                                                                                                  |
| » is\_edb                 | boolean                                                                                        | false    | none         | Is server an EDB Advanced Server?                                                                                                                 |
| » agent\_id               | integer                                                                                        | false    | none         | Agent id bound to the server                                                                                                                      |
| » asb\_host               | string                                                                                         | false    | none         | PEM database host used by agent while creating PEM connection.                                                                                    |
| » asb\_port               | integer                                                                                        | false    | none         | PEM database port used by agent while creating PEM connection.                                                                                    |
| » asb\_username           | string                                                                                         | false    | none         | PEM database user name used by agent while creating PEM connection.                                                                               |
| » asb\_database           | string                                                                                         | false    | none         | PEM database to which agent will connect.                                                                                                         |
| » asb\_sslmode            | string                                                                                         | false    | none         | PEM database ssl mode.                                                                                                                            |
| » asb\_password           | string                                                                                         | false    | none         | empty string.                                                                                                                                     |
| » asb\_allowtakeover      | string                                                                                         | false    | none         | Whether server allowed to take over by another agent.                                                                                             |
| » agent\_capability\_list | \[string]                                                                                      | false    | none         | Array of capabilities the agent has                                                                                                               |
| » agent\_description      | string                                                                                         | false    | none         | Agent description                                                                                                                                 |
| » fgcolor                 | string                                                                                         | false    | none         | Foreground color of server node in browser tree                                                                                                   |
| » bgcolor                 | string                                                                                         | false    | none         | Background color of server node in browser tree                                                                                                   |
| » sslcompression          | boolean                                                                                        | false    | none         | Whether data sent over ssl should be compressed or not.                                                                                           |

> **Note: Info**
>
> This operation does not require authentication

## `post__server_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v3/server/ \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v3/server/', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/',
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

`POST /server/`

_Add a new managed database server._

**Body parameter**

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

<span id="post__server_-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                        | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| X-Auth-Token | header | string                                                                                      | true     | Token of authorization |
| body         | body   | [Server](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_server) | true     | none                   |

**Example responses**

<span id="post__server_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="post__server_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{server_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{server_id}',
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

`GET /server/{server_id}`

_Retrieve the information for the server, identified by the server\_id._

<span id="get__server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| server\_id   | path   | string | true     | none                   |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description          | Schema                                                                                      |
| ------ | ------------------------------------------------------- | -------------------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Created successfully | [Server](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_server) |

> **Note: Info**
>
> This operation does not require authentication

## `put__server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v3/server/{server_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v3/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{server_id}',
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

`PUT /server/{server_id}`

_Update the server information_

**Body parameter**

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

<span id="put__server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                        | Required | Description            |
| ------------ | ------ | ------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| server\_id   | path   | string                                                                                      | true     | none                   |
| X-Auth-Token | header | string                                                                                      | true     | Token of authorization |
| body         | body   | [Server](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_server) | true     | none                   |

**Example responses**

<span id="put__server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description           | Schema |
| ------ | ------------------------------------------------------- | --------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Updated successfully. | None   |

<span id="put__server_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__server_{server_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v3/server/{server_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v3/server/{server_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{server_id}',
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

`DELETE /server/{server_id}`

_Stop mananging the server by PEM._

<span id="delete__server_{server_id}-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| server\_id   | path   | string | true     | none                   |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<span id="delete__server_{server_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="delete__server_{server_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/',
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

`GET /server/{sid}/database/`

_Retrieve the list of properties of database(s) for a managed server._

<span id="get__server_{sid}_database_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| X-Auth-Token | header | string  | true     | Token of authorization |
| sid          | path   | integer | true     | Server ID              |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "database_name": "string",
    "connections_allowed": true,
    "system_database": true,
    "recorded_time": "2019-08-24T14:15:22Z",
    "encoding": "string",
    "server_id": 0
  }
]
```

</details>

<span id="get__server_{sid}_database_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                   | Type                                                                                               | Required | Restrictions | Description                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------- |
| _anonymous_            | \[[Database](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_database)] | false    | none         | none                                          |
| » database\_name       | string                                                                                             | false    | none         | Database name                                 |
| » connections\_allowed | boolean                                                                                            | false    | none         | Is connection to database allowed             |
| » system\_database     | boolean                                                                                            | false    | none         | Is database system database                   |
| » recorded\_time       | string(date-time)                                                                                  | false    | none         | When database was first detected by PEM agent |
| » encoding             | string                                                                                             | false    | none         | Database encoding                             |
| » server\_id           | integer                                                                                            | false    | none         | Server id of database                         |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}',
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

`GET /server/{sid}/database/{db_name}`

_Retrieve the properties of the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__server_{sid}_database_{db_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                          |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Database](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_database) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/',
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

`GET /server/{sid}/database/{db_name}/schema/`

_Retrieve the list of properties of schema(s) for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "recorded_time": "2019-08-24T14:15:22Z"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_-responseschema"></span>

### Response Schema

Status Code **200**

| Name             | Type                                                                                           | Required | Restrictions | Description                                 |
| ---------------- | ---------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------- |
| _anonymous_      | \[[Schema](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_schema)] | false    | none         | none                                        |
| » schema\_name   | string                                                                                         | false    | none         | Schema name                                 |
| » database\_name | string                                                                                         | false    | none         | Database name of schema                     |
| » server\_id     | integer                                                                                        | false    | none         | Server id schmea                            |
| » recorded\_time | string(date-time)                                                                              | false    | none         | When schema was first detected by PEM agent |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}`

_Retrieve the properties of schema(s) for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                      |
| ------ | ------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Schema](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_schema) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_table_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/table/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/table/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/table/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/table/`

_Retrieve the list of properties of tables resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "table_name": "string",
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "has_primary_key": true,
    "recorded_time": "string"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_-responseschema"></span>

### Response Schema

Status Code **200**

| Name                | Type                                                                                         | Required | Restrictions | Description                                |
| ------------------- | -------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------ |
| _anonymous_         | \[[Table](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_table)] | false    | none         | none                                       |
| » table\_name       | string                                                                                       | false    | none         | Table name                                 |
| » schema\_name      | string                                                                                       | false    | none         | schema name                                |
| » database\_name    | string                                                                                       | false    | none         | Database name                              |
| » server\_id        | integer                                                                                      | false    | none         | Server id                                  |
| » has\_primary\_key | boolean                                                                                      | false    | none         | Weather table has primary key              |
| » recorded\_time    | string                                                                                       | false    | none         | When table was first detected by PEM agent |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_table_{table_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/table/{table_name}`

_Retrieve the properties of tables resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_{table_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| table\_name  | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_table_{table_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Table](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_table) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_index_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/index/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/index/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/index/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/index/`

_Retrieve the list of properties of indexes resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_-responseschema"></span>

### Response Schema

Status Code **200**

| Name             | Type                                                                                         | Required | Restrictions | Description                                |
| ---------------- | -------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------ |
| _anonymous_      | \[[Index](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_index)] | false    | none         | none                                       |
| » index\_name    | string                                                                                       | false    | none         | Index name                                 |
| » ind\_keys      | \[integer]                                                                                   | false    | none         | indexed column positions in table          |
| » table\_name    | string                                                                                       | false    | none         | Table name                                 |
| » schema\_name   | string                                                                                       | false    | none         | Schema                                     |
| » database\_name | string                                                                                       | false    | none         | Database name                              |
| » server\_id     | integer                                                                                      | false    | none         | Server id                                  |
| » recorded\_time | string                                                                                       | false    | none         | When index was first detected by PEM agent |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_index_{index_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/index/{index_name}`

_Retrieve the properties of indexes resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_{index_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| index\_name  | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_index_{index_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                    |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Index](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_index) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/sequence/`

_Retrieve the list of properties of sequences resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
  {
    "sequence_name": "string",
    "schema_name": "string",
    "database_name": "string",
    "server_id": 0,
    "recorded_time": "2019-08-24T14:15:22Z"
  }
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_-responseschema"></span>

### Response Schema

Status Code **200**

| Name             | Type                                                                                               | Required | Restrictions | Description                                   |
| ---------------- | -------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------- |
| _anonymous_      | \[[Sequence](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_sequence)] | false    | none         | none                                          |
| » sequence\_name | string                                                                                             | false    | none         | Sequence name                                 |
| » schema\_name   | string                                                                                             | false    | none         | Schema name                                   |
| » database\_name | string                                                                                             | false    | none         | Database name                                 |
| » server\_id     | integer                                                                                            | false    | none         | Server id                                     |
| » recorded\_time | string(date-time)                                                                                  | false    | none         | When sequence was first detected by PEM agent |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_{sequence_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/sequence/{sequence_name}`

_Retrieve the properties of sequences resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_{sequence_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| sid            | path   | integer | true     | Server ID              |
| db\_name       | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| sequence\_name | path   | string  | true     | none                   |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "sequence_name": "string",
  "schema_name": "string",
  "database_name": "string",
  "server_id": 0,
  "recorded_time": "2019-08-24T14:15:22Z"
}
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_sequence_{sequence_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                          |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Sequence](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_sequence) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_view_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/view/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/view/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/view/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/view/`

_Retrieve the list of properties of views resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_-responseschema"></span>

### Response Schema

Status Code **200**

| Name               | Type                                                                                       | Required | Restrictions | Description                               |
| ------------------ | ------------------------------------------------------------------------------------------ | -------- | ------------ | ----------------------------------------- |
| _anonymous_        | \[[View](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_view)] | false    | none         | none                                      |
| » view\_name       | string                                                                                     | false    | none         | View name                                 |
| » view\_type       | string                                                                                     | false    | none         | View type                                 |
| » ispopulated      | boolean                                                                                    | false    | none         | Is view populated                         |
| » view\_owner      | string                                                                                     | false    | none         | View owner                                |
| » definition       | string                                                                                     | false    | none         | View definition                           |
| » tablespace\_name | string                                                                                     | false    | none         | View tablespace                           |
| » schema\_name     | string                                                                                     | false    | none         | View schema                               |
| » database\_name   | string                                                                                     | false    | none         | View database                             |
| » server\_id       | integer                                                                                    | false    | none         | View server id                            |
| » recorded\_time   | string                                                                                     | false    | none         | When view was first detected by PEM agent |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_view_{view_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/view/{view_name}`

_Retrieve the properties of views resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_{view_name}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| view\_name   | path   | string  | true     | none                   |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_view_{view_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                  |
| ------ | ------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [View](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_view) |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_function_`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/function/ \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/function/', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/function/',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/function/`

_Retrieve the list of properties of functions resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| sid          | path   | integer | true     | Server ID              |
| db\_name     | path   | string  | true     | Database name          |
| schema\_name | path   | string  | true     | Schema name            |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
[
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
]
```

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | Inline |

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_-responseschema"></span>

### Response Schema

Status Code **200**

| Name               | Type                                                                                               | Required | Restrictions | Description                                   |
| ------------------ | -------------------------------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------- |
| _anonymous_        | \[[Function](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_function)] | false    | none         | none                                          |
| » function\_name   | string                                                                                             | false    | none         | Function name                                 |
| » function\_type   | string                                                                                             | false    | none         | Function type                                 |
| » return\_type     | string                                                                                             | false    | none         | Function return type                          |
| » arg\_types       | \[string]                                                                                          | false    | none         | Function argument types                       |
| » function\_binary | string                                                                                             | false    | none         | none                                          |
| » extension\_name  | string                                                                                             | false    | none         | none                                          |
| » package\_name    | string                                                                                             | false    | none         | Function package name                         |
| » schema\_name     | string                                                                                             | false    | none         | Function schema                               |
| » database\_name   | string                                                                                             | false    | none         | Function database name                        |
| » server\_id       | integer                                                                                            | false    | none         | Function server id                            |
| » recorded\_time   | string(date-time)                                                                                  | false    | none         | When function was first detected by PEM agent |

> **Note: Info**
>
> This operation does not require authentication

## `get__server_{sid}_database_{db_name}_schema_{schema_name}_function_{function_name}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v3/server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name}',
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

`GET /server/{sid}/database/{db_name}/schema/{schema_name}/function/{function_name}`

_Retrieve the properties of function resides under a schema for the particular database of a managed server._

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_{function_name}-parameters"></span>

### Parameters

| Name           | In     | Type    | Required | Description            |
| -------------- | ------ | ------- | -------- | ---------------------- |
| sid            | path   | integer | true     | Server ID              |
| db\_name       | path   | string  | true     | Database name          |
| schema\_name   | path   | string  | true     | Schema name            |
| function\_name | path   | string  | true     | none                   |
| X-Auth-Token   | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

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

</details>

<span id="get__server_{sid}_database_{db_name}_schema_{schema_name}_function_{function_name}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema                                                                                          |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | [Function](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/schemas/#tocs_function) |

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-alerts"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
