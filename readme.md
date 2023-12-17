# User-api

Implementação de um sistema de gerenciamento de usuários com funcionalidades de CRUD e autenticação.


## Tech Stack

**Server:** Node, Express, prisma, bcrypt, typescript, jsonwebtoken, joi, cors, docker, docker compose, postgressql

### Get all users

#### Request

```http
  GET /api/user/all
```

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |

#### Response
```json
  [
	{
		"id": "e6a45f19-b382-41bb-aa01-cc9df8a37839",
		"name": "renan 10",
		"email": "renan1@gmail.com",
		"password":"$2b$10$tNBABb3EEBFxlsPC6etok.1wl.UlE8OfKz15WAyymRytQszH0ax22",
		"update_at": "2022-11-18T07:20:37.403Z",
		"create_at": "2022-11-18T07:20:37.403Z"
	},
	{
		"id": "957a05d5-bd9b-47c1-91ba-7cfd1f22a066",
		"name": "renan 11",
		"email": "renan45@gmail.com",
		"password": "$2b$10$tNBABb3EEBFxlsPC6etok.1wl.UlE8OfKz15WAyymRytQszH0ax22",
		"update_at": "2022-11-18T07:37:17.804Z",
		"create_at": "2022-11-18T07:37:17.804Z"
	}
]

```
## API Reference

### Get user

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `id`       | `Path` |`string`|  **Required**. id do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |

#### Request

```http
  GET /api/user/:${id}
```



#### Response
```json
 {
	"id": "8d427fd1-b5cf-4293-882d-7dd97594d921",
	"name": "renan",
	"email": "rena4f@gmail.com",
	"password": "$2b$10$tNBABb3EEBFxlsPC6etok.1wl.UlE8OfKz15WAyymRytQszH0ax22",
	"update_at": "2022-11-19T14:12:32.074Z",
	"create_at": "2022-11-18T06:45:21.456Z"
}

```


### Update user

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `id`       | `Path` |`string`|  **Required**. id do usuário |
| `email`       | `body` |`string`|  **Required**. email do usuário |
| `password`       | `body` |`string`|  **Required**. senha do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |

#### Request

```http
  PUT /api/user/${id}
```

#### body
```json
{
    "email": "d@cmail.com",
    "password": "123456"
}
```

#### Response
```json
 {
	"id": "8d427fd1-b5cf-4293-882d-7dd97594d921",
	"name": "renan",
	"email": "rena4f@gmail.com",
	"password": "$2b$10$tNBABb3EEBFxlsPC6etok.1wl.UlE8OfKz15WAyymRytQszH0ax22",
	"update_at": "2022-11-19T14:12:32.074Z",
	"create_at": "2022-11-18T06:45:21.456Z"
}

```


### Delete  user


| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `id`       | `Path`   |`string`|  **Required**. id do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |


#### Request
```http
  DELETE /api/user/${id}
```


#### Response
```json
 {
	"id": "8d427fd1-b5cf-4293-882d-7dd97594d921",
	"name": "renan",
	"email": "rena4f@gmail.com",
	"password": "$2b$10$tNBABb3EEBFxlsPC6etok.1wl.UlE8OfKz15WAyymRytQszH0ax22",
	"update_at": "2022-11-19T14:12:32.074Z",
	"create_at": "2022-11-18T06:45:21.456Z"
}

```


### Login
| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `email`       | `body` |`string`|  **Required**. email do usuário |
| `password`       | `body` |`string`|  **Required**. senha do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |

#### Request
```http
  POST /api/auth/login
```
#### body
```json
{
    "email": "d@cmail.com",
    "password": "123456"
}
```

#### Response
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI4MmU5NDVlLWMxYWQtNDZiNS05ZjM1LTdmOGZhOTdhMTYxZCIsImlhdCI6MTY2ODg2NzI4MCwiZXhwIjoxNjY5MDgzMjgwfQ.oa1vitlcrSBNQIK0i__vqviHsGMFrL3Ts-KqSBiQzVg"
}

```

## Run Locally by shell script

Clone the project

```bash
  git clone https://github.com/RenanMouraDaSilvaBarros/user-management.git
```

Go to the project directory

```bash
  cd user-management
```

Set permission

```bash
  chmod u+x start.sh
```

Run shell script

```bash
  ./start.sh
```

## Run Locally Manually

Clone the project

```bash
  git clone https://github.com/RenanMouraDaSilvaBarros/user-management.git
```

Go to the project directory

```bash
  cd user-management
```

Run docker compose

```bash
  docker compose up -d
```

Create tables

```bash
  npx prisma migrate dev
```


## Authors

- [@RenanMouraDaSilvaBarros](https://github.com/RenanMouraDaSilvaBarros)

