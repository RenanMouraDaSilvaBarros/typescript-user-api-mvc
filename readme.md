
# CRUD application

Aplicação de crud e autentição de usuários.


## Tech Stack

**Server:** Node, Express, prisma, bcrypt, typescript, jsonwebtoken, joi, cors
**Database** postgresql



## API Reference


#### Get user

```http
  GET /api/user/:${id}
```

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `id`       | `Path` |`string`|  **Required**. id do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |


Response
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

#### Get all users

```http
  GET /api/user/all
```

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |

Response
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


#### Update user

```http
  PUT /api/user/${id}
```

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `id`       | `Path` |`string`|  **Required**. id do usuário |
| `email`       | `Path` |`string`|  **Required**. email do usuário |
| `password`       | `Path` |`string`|  **Required**. senha do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |

Response
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


#### Delete  user

```http
  DELETE /api/user/${id}
```

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `id`       | `Path`   |`string`|  **Required**. id do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |

Response
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


#### Login

```http
  POST /api/auth/login
```

| Name      | Parameter | Type  |Description                | 
| :-------- | :-------  |:----- | :------------------------- |
| `email`       | `Path` |`string`|  **Required**. email do usuário |
| `password`       | `Path` |`string`|  **Required**. senha do usuário |
| `Authorization`       | `Header` |`string`|  **Required**. token de autenticação do usuário |


Response
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI4MmU5NDVlLWMxYWQtNDZiNS05ZjM1LTdmOGZhOTdhMTYxZCIsImlhdCI6MTY2ODg2NzI4MCwiZXhwIjoxNjY5MDgzMjgwfQ.oa1vitlcrSBNQIK0i__vqviHsGMFrL3Ts-KqSBiQzVg"
}

```




## Authors

- [@RenanMouraDaSilvaBarros](https://github.com/RenanMouraDaSilvaBarros)


## Run Locally

Clone the project

```bash
  git clone https://github.com/RenanMouraDaSilvaBarros/crud-application.git
```

Go to the project directory

```bash
  cd crud-application
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

