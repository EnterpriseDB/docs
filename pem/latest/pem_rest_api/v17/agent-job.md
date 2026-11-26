---
title: "EDB Postgres Enterprise Manager REST APIs v17.0: Agent Job"
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/agent-job/
lastModified: 2026-06-22T21:47:06+05:30
---

# EDB Postgres Enterprise Manager REST APIs v17.0: Agent Job

## `get__agent_job_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}',
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

`GET /agent/job/{agent_id}`

Gets `Jobs` for agent level by agent\_id.

<span id="get__agent_job_{agent_id}-parameters"></span>

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
    "jobname": "string",
    "jobenabled": true,
    "jobdesc": "string"
  }
]
```

</details>

<span id="get__agent_job_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | Inline |

<span id="get__agent_job_{agent_id}-responseschema"></span>

### Response Schema

Status Code **200**

| Name         | Type                                                                                                              | Required | Restrictions | Description                                        |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------- |
| _anonymous_  | \[[AgentJobBodyGet](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_agentjobbodyget)] | false    | none         | none                                               |
| » jobname    | string                                                                                                            | false    | none         | Name of the job.                                   |
| » jobenabled | boolean                                                                                                           | false    | none         | Determines whether the job is enabled or disabled. |
| » jobdesc    | string                                                                                                            | false    | none         | Description of the job.                            |

> **Note: Info**
>
> This operation does not require authentication

## `post__agent_job_{agent_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id} \
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

r = requests.post('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "jobname": "string",
  "jobenabled": true,
  "jobdesc": "string",
  "jsteps": [],
  "jschedules": [
    {
      "jscname": "string",
      "jscdesc": "string",
      "jscenabled": true,
      "jscstart": "2023-10-09 22:43 +05:30",
      "jscend": "2023-10-11 22:43 +05:30",
      "jscweekdays": [
        "Friday"
      ],
      "jscmonthdays": [
        1,
        15
      ],
      "jscmonths": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "jschours": [
        16
      ],
      "jscminutes": [
        0,
        30
      ],
      "jscexceptions": [
        {
          "jexdate": "2023-10-19",
          "jextime": "09:39:00"
        }
      ],
      "jsctimezone": "America/New_York"
    }
  ],
  "notify": "DEFAULT",
  "email_group_id": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}',
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

`POST /agent/job/{agent_id}`

Creates `Job` for agent level.

**Body parameter**

```json
{
  "jobname": "string",
  "jobenabled": true,
  "jobdesc": "string",
  "jsteps": [],
  "jschedules": [
    {
      "jscname": "string",
      "jscdesc": "string",
      "jscenabled": true,
      "jscstart": "2023-10-09 22:43 +05:30",
      "jscend": "2023-10-11 22:43 +05:30",
      "jscweekdays": [
        "Friday"
      ],
      "jscmonthdays": [
        1,
        15
      ],
      "jscmonths": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "jschours": [
        16
      ],
      "jscminutes": [
        0,
        30
      ],
      "jscexceptions": [
        {
          "jexdate": "2023-10-19",
          "jextime": "09:39:00"
        }
      ],
      "jsctimezone": "America/New_York"
    }
  ],
  "notify": "DEFAULT",
  "email_group_id": "string"
}
```

<span id="post__agent_job_{agent_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                             | Required | Description            |
| ------------ | ------ | ---------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                                          | true     | Agent ID               |
| X-Auth-Token | header | string                                                                                                           | true     | Token of authorization |
| body         | body   | [AgentJobBodyPost](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_agentjobbodypost) | true     | none                   |

**Example responses**

<details>
<summary>201 Response</summary>

```json
{
  "id": 0
}
```

</details>

<span id="post__agent_job_{agent_id}-responses"></span>

### Responses

| Status | Meaning                                                      | Description          | Schema |
| ------ | ------------------------------------------------------------ | -------------------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | Created Successfully | Inline |

<span id="post__agent_job_{agent_id}-responseschema"></span>

### Response Schema

Status Code **201**

| Name | Type    | Required | Restrictions | Description   |
| ---- | ------- | -------- | ------------ | ------------- |
| » id | integer | false    | none         | Id of the job |

> **Note: Info**
>
> This operation does not require authentication

## `get__agent_job_{agent_id}_{job_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X GET https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id} \
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

r = requests.get('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'Accept':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id}',
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

`GET /agent/job/{agent_id}/{job_id}`

Gets `Jobs` for agent level by agent\_id and job\_id.

<span id="get__agent_job_{agent_id}_{job_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | Agent ID               |
| job\_id      | path   | integer | true     | Job ID                 |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<details>
<summary>200 Response</summary>

```json
{
  "jobid": 0,
  "jobname": "string",
  "jobenabled": true,
  "jobdesc": "string",
  "jobcreated": "2019-08-24T14:15:22Z",
  "jobchanged": "2019-08-24T14:15:22Z",
  "jlgstatus": "string",
  "jobnextrun": "2019-08-24T14:15:22Z",
  "joblastrun": "2019-08-24T14:15:22Z",
  "is_alert_job": true,
  "notify": "string",
  "email_group_id": "string",
  "jsteps": [],
  "jschedules": [
    {
      "jscid": 0,
      "jscjobid": 0,
      "jscname": "string",
      "jscdesc": "string",
      "jscenabled": true,
      "jscstart": "2019-08-24T14:15:22Z",
      "jscend": "2019-08-24T14:15:22Z",
      "jscweekdays": [
        false,
        false,
        false,
        false,
        false,
        true,
        false
      ],
      "jscmonthdays": [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "jscmonths": [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "jschours": [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "jscminutes": [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "jscexceptions": [
        null
      ],
      "jsctimezone": "string"
    }
  ]
}
```

</details>

<span id="get__agent_job_{agent_id}_{job_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema                                                                                                   |
| ------ | ------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful response | [AgentJobBody](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_agentjobbody) |

> **Note: Info**
>
> This operation does not require authentication

## `put__agent_job_{agent_id}_{job_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X PUT https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id} \
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

r = requests.put('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript
const inputBody = '{
  "jobname": "string",
  "jobenabled": true,
  "jobdesc": "string",
  "jsteps": {
    "added": [
      {
        "jstname": "string",
        "jstdesc": "string",
        "jstenabled": true,
        "jstkind": true,
        "jstcode": "string",
        "server_id": 0,
        "database_name": "string",
        "jstonerror": "f",
        "report_template_id": 0
      }
    ],
    "changed": [
      {
        "jstid": 0,
        "jstname": "string",
        "jstdesc": "string",
        "jstenabled": true,
        "jstkind": true,
        "jstcode": "string",
        "server_id": 0,
        "database_name": "string",
        "jstonerror": "f",
        "report_template_id": 0,
        "jstnextrun": "string"
      }
    ]
  },
  "jschedules": {
    "added": [
      {
        "jscname": "string",
        "jscdesc": "string",
        "jscenabled": true,
        "jscstart": "2023-10-09 22:43 +05:30",
        "jscend": "2023-10-11 22:43 +05:30",
        "jscweekdays": [
          "Friday"
        ],
        "jscmonthdays": [
          1,
          15
        ],
        "jscmonths": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "jschours": [
          16
        ],
        "jscminutes": [
          0,
          30
        ],
        "jscexceptions": [
          {
            "jexdate": "2023-10-19",
            "jextime": "09:39:00"
          }
        ],
        "jsctimezone": "America/New_York"
      }
    ],
    "changed": [
      {
        "jscid": 0,
        "jscname": "string",
        "jscdesc": "string",
        "jscenabled": true,
        "jscstart": "2023-10-09 22:43 +05:30",
        "jscend": "2023-10-11 22:43 +05:30",
        "jscweekdays": [
          "Friday"
        ],
        "jscmonthdays": [
          1,
          15
        ],
        "jscmonths": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "jschours": [
          16
        ],
        "jscminutes": [
          0,
          30
        ],
        "jscexceptions": [
          {
            "jexdate": "2023-10-19",
            "jextime": "09:39:00"
          }
        ],
        "jsctimezone": "America/New_York"
      }
    ]
  },
  "notify": "DEFAULT",
  "email_group_id": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id}',
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

`PUT /agent/job/{agent_id}/{job_id}`

Updates `Job` for agent level.

**Body parameter**

```json
{
  "jobname": "string",
  "jobenabled": true,
  "jobdesc": "string",
  "jsteps": {
    "added": [
      {
        "jstname": "string",
        "jstdesc": "string",
        "jstenabled": true,
        "jstkind": true,
        "jstcode": "string",
        "server_id": 0,
        "database_name": "string",
        "jstonerror": "f",
        "report_template_id": 0
      }
    ],
    "changed": [
      {
        "jstid": 0,
        "jstname": "string",
        "jstdesc": "string",
        "jstenabled": true,
        "jstkind": true,
        "jstcode": "string",
        "server_id": 0,
        "database_name": "string",
        "jstonerror": "f",
        "report_template_id": 0,
        "jstnextrun": "string"
      }
    ]
  },
  "jschedules": {
    "added": [
      {
        "jscname": "string",
        "jscdesc": "string",
        "jscenabled": true,
        "jscstart": "2023-10-09 22:43 +05:30",
        "jscend": "2023-10-11 22:43 +05:30",
        "jscweekdays": [
          "Friday"
        ],
        "jscmonthdays": [
          1,
          15
        ],
        "jscmonths": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "jschours": [
          16
        ],
        "jscminutes": [
          0,
          30
        ],
        "jscexceptions": [
          {
            "jexdate": "2023-10-19",
            "jextime": "09:39:00"
          }
        ],
        "jsctimezone": "America/New_York"
      }
    ],
    "changed": [
      {
        "jscid": 0,
        "jscname": "string",
        "jscdesc": "string",
        "jscenabled": true,
        "jscstart": "2023-10-09 22:43 +05:30",
        "jscend": "2023-10-11 22:43 +05:30",
        "jscweekdays": [
          "Friday"
        ],
        "jscmonthdays": [
          1,
          15
        ],
        "jscmonths": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "jschours": [
          16
        ],
        "jscminutes": [
          0,
          30
        ],
        "jscexceptions": [
          {
            "jexdate": "2023-10-19",
            "jextime": "09:39:00"
          }
        ],
        "jsctimezone": "America/New_York"
      }
    ]
  },
  "notify": "DEFAULT",
  "email_group_id": "string"
}
```

<span id="put__agent_job_{agent_id}_{job_id}-parameters"></span>

### Parameters

| Name         | In     | Type                                                                                                           | Required | Description            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| agent\_id    | path   | integer                                                                                                        | true     | Agent ID               |
| job\_id      | path   | integer                                                                                                        | true     | Job ID                 |
| X-Auth-Token | header | string                                                                                                         | true     | Token of authorization |
| body         | body   | [AgentJobBodyPut](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/schemas/#tocs_agentjobbodyput) | true     | none                   |

**Example responses**

<span id="put__agent_job_{agent_id}_{job_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Status 200  | None   |

<span id="put__agent_job_{agent_id}_{job_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

## `delete__agent_job_{agent_id}_{job_id}`

**Code samples**

### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id} \
  -H 'X-Auth-Token: string'

```

### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id}', headers = headers)

print(r.json())

```

### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/v17/agent/job/{agent_id}/{job_id}',
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

`DELETE /agent/job/{agent_id}/{job_id}`

Deletes the `Job` using agent\_id and job\_id.

<span id="delete__agent_job_{agent_id}_{job_id}-parameters"></span>

### Parameters

| Name         | In     | Type    | Required | Description            |
| ------------ | ------ | ------- | -------- | ---------------------- |
| agent\_id    | path   | integer | true     | Agent ID               |
| job\_id      | path   | integer | true     | Job ID                 |
| X-Auth-Token | header | string  | true     | Token of authorization |

**Example responses**

<span id="delete__agent_job_{agent_id}_{job_id}-responses"></span>

### Responses

| Status | Meaning                                                 | Description         | Schema |
| ------ | ------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Successful deletion | None   |

<span id="delete__agent_job_{agent_id}_{job_id}-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

<span id="edb-postgres-enterprise-manager-rest-apis-alerts-history"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
