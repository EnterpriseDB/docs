---
title: EDB Postgres Enterprise Manager REST APIs v1.0.0
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/
lastModified: 2026-08-19T12:46:15+02:00
---

# EDB Postgres Enterprise Manager REST APIs v1.0.0

**EDB Postgres Enterprise Manager** uses a token-based authentication mechanism to allow access to exposed REST APIs.

PEM uses tokens for authentication purposes. To generate a token, please refer the section <a href="#token">Token</a>. After receiving a token string, you should include the token string in the 'X-Auth-Token' header when calling any resources except https\://PEM-SERVER-IP/api/token/.

**NOTE:**

- **EDB Postgres Enterprise Manager** _is referred as_ **PEM** _in this documentation._
- **PEM** \*uses self-certified SSL certificates, so you may encounter errors such as 'SSL certificate problem: self signed certificate'. You may need to use an 'insecure' connection to connect to the server.

**Rest api versions:**

- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v1/">v1</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v2/">v2</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v3/">v3</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v4/">v4</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v5/">v5</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v6/">v6</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v7/">v7</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v8/">v8</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v9/">v9</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v10/">v10</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v11/">v11</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v12/">v12</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v13/">v13</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v14/">v14</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v15/">v15</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v16/">v16</a>
- <a href="https://www.enterprisedb.com/docs/docs/pem/latest/pem_rest_api/v17/">v17</a>  (Current)

Base URLs:

- <a href="https://PEM-SERVER-IP/pem/api"><a href="https://PEM-SERVER-IP/pem/api">https://PEM-SERVER-IP/pem/api</a></a>

Email: <a href="mailto:support@enterprisedb.com">EnterpriseDB</a> Web: <a href="https://www.enterprisedb.com">EnterpriseDB</a>
License: <a href="https://www.enterprisedb.com/ba/limited-license-v2-9">Limited Use Software License Agreement</a>

<span id="-token"></span>

## Token

A string generated and used by PEM REST APIs for authentication purposes

### `TokenGeneration`

<a id="opIdTokenGeneration"></a>

**Code samples**

#### cURL

```shell
# You can also use wget
curl -X POST https://PEM-SERVER-IP/pem/api/token/ \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

#### Python

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('https://PEM-SERVER-IP/pem/api/token/', headers = headers)

print(r.json())

```

#### JavaScript

```javascript
const inputBody = '{
  "username": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://PEM-SERVER-IP/pem/api/token/',
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

`POST /token/`

_Generate a token for authentication._

This URL creates a token to be used by the other REST APIs exposed by PEM.
You must provide a valid username and password, which will be validated during the process.

The token will be valid for 20 mins.

**Body parameter**

```json
{
  "username": "string",
  "password": "string"
}
```

<span id="tokengeneration-parameters"></span>

### Parameters

| Name       | In   | Type   | Required | Description                                    |
| ---------- | ---- | ------ | -------- | ---------------------------------------------- |
| body       | body | object | true     | Creates the token using the /token/ URL first. |
| » username | body | string | true     | Validates username, which has pem\_user role.  |
| » password | body | string | true     | Password for the username                      |

**Example responses**

<details>
<summary>201 Response</summary>

```json
{
  "issuedAt": "2019-08-24T14:15:22Z",
  "expiresAt": "2019-08-24T14:15:22Z",
  "schema_version": 0,
  "backend_schema_version": 0,
  "version_long": 0,
  "version": "string",
  "supported_api_versions": [
    "string"
  ],
  "deprecated_api_versions": [
    "string"
  ]
}
```

</details>

<span id="tokengeneration-responses"></span>

### Responses

| Status | Meaning                                                                    | Description                                                                     | Schema |
| ------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)               | Token was created and can be found as 'X-Subject-Token' in the response header. | Inline |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)            | The given information is not valid.                                             | None   |
| 500    | [Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) | Something went wrong.                                                           | None   |
| 503    | [Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)   | PEM backend database server is down. Service is not available now.              | None   |

<span id="tokengeneration-responseschema"></span>

### Response Schema

Status Code **201**

_Contains information related to when the token was generated and when it expired._

| Name                        | Type              | Required | Restrictions | Description                                    |
| --------------------------- | ----------------- | -------- | ------------ | ---------------------------------------------- |
| » issuedAt                  | string(date-time) | false    | none         | Token was generated at this time.              |
| » expiresAt                 | string(date-time) | false    | none         | Provides date and time when the token expires. |
| » schema\_version           | integer           | false    | none         | Application-supported schema version           |
| » backend\_schema\_version  | integer           | false    | none         | Backend database schema version                |
| » version\_long             | integer           | false    | none         | Version represented in long format             |
| » version                   | string            | false    | none         | String reprentation of the PEM version         |
| » supported\_api\_versions  | \[string]         | false    | none         | List of supported API versions                 |
| » deprecated\_api\_versions | \[string]         | false    | none         | List of deprecated API versions                |

#### Response Headers

| Status | Header          | Type   | Format | Description                                                                    |
| ------ | --------------- | ------ | ------ | ------------------------------------------------------------------------------ |
| 201    | X-Subject-Token | string |        | Returns the new token, which can be used with REST APIs for further operations |

> **Note: Info**
>
> Unlike other API calls, this operation doesn't use token-based authentication; instead, supply the username and password.

### `delete__token_`

**Code samples**

#### cURL

```shell
# You can also use wget
curl -X DELETE https://PEM-SERVER-IP/pem/api/token/ \
  -H 'X-Auth-Token: string'

```

#### Python

```python
import requests
headers = {
  'X-Auth-Token': 'string'
}

r = requests.delete('https://PEM-SERVER-IP/pem/api/token/', headers = headers)

print(r.json())

```

#### JavaScript

```javascript

const headers = {
  'X-Auth-Token':'string'
};

fetch('https://PEM-SERVER-IP/pem/api/token/',
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

`DELETE /token/`

_Release the token._

Invalidates the token.
It will no longer be available for further operations.

<span id="delete__token_-parameters"></span>

### Parameters

| Name         | In     | Type   | Required | Description            |
| ------------ | ------ | ------ | -------- | ---------------------- |
| X-Auth-Token | header | string | true     | Token of authorization |

**Example responses**

<span id="delete__token_-responses"></span>

### Responses

| Status                                                 | Meaning                                                         | Description                               | Schema |
| ------------------------------------------------------ | --------------------------------------------------------------- | ----------------------------------------- | ------ |
| 204                                                    | [No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5) | Successfully released the token from PEM. |        |
| This token can not be used for any further operations. | None                                                            |                                           |        |

<span id="delete__token_-responseschema"></span>

### Response Schema

> **Note: Info**
>
> This operation does not require authentication

- [v17](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v17/): NOTE:
- [v16](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v16/): NOTE:
- [v15](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v15/): NOTE:
- [v14](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v14/): NOTE:
- [v13](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v13/): NOTE:
- [v12](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v12/): NOTE:
- [v11](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v11/): NOTE:
- [v10](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v10/): NOTE:
- [v9](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v9/): NOTE:
- [v8](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v8/): NOTE:
- [v7](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v7/): NOTE:
- [v6](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v6/): NOTE:
- [v5](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v5/): NOTE:
- [v4](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v4/): NOTE:
- [v3](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v3/): NOTE:
- [v2](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v2/): NOTE:
- [v1](https://www.enterprisedb.com/docs/pem/latest/pem_rest_api/v1/): NOTE:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
