
# Restful-API

This is a simples Restful API created to exercise the concept and learn sequelize as a tool to manage databases and data itself, alongside important features like authentication and file storage.




## Data Info

#### Student

| Attribute  |  Description |
|:--------|:--------|
|nome | String with 3-255 characters|
|sobrenome | String with 3-255 characters |
|email | String with a valid email format |
|idade| Integer containing Student's age  |
|peso | Float Containing Student's weigth |
|altura | Float Containg Stundet's heigth |

#### Picture

| Attribute  |  Description |
|:--------|:--------|
|originalname | String |
|filename | String generated within the system |

#### User

| Attribute  |  Description |
|:--------|:--------|
|nome | String with 3-255 characters|
|email | String with a valid email format |
|password| String with a 4-50 characters|

## API Documentation 

#### Returns Ok

```http
  GET /
```


#### Returns a Bearer Token

```http
  POST /tokens/
```

| Parameter   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------|
| `email`     | `string`   | **Required**. User email for validation    |
| `senha`     | `string`   | **Required**. User password for validation |

#### Creates an User

```http
    POST /users/
```

* **Auth Required**

| Parameter   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------|
| `nome`      | `string`   | **Required**. User name                    |
| `email`     | `string`   | **Required**. User email                   |
| `password`  | `string`   | **Required**. User password                |

#### Updates an User

```http
    PUT /users/
```

* **Auth Required**

| Parameter   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------|
| `id`        | `integer`  | **Required**. User id                      |
| `email`     | `string`   | User's new email                           |
| `password`  | `string`   | User's new password                        |

#### Deletes an User

```http
    DELETE /users/
```

* **Auth Required**

| Parameter   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------|
| `id`        | `integer`  | **Required**. User id                      |


#### Returns all Students

```http
    GET /students/
```

#### Returns a single Student

```http
    GET /students/:id
```

#### Creates a Student

```http
    POST /students/
```

* **Auth Required**

#### Updates a Student

```http
    PUT /students/:id
```

* **Auth Required**

#### Deletes a Student

```http
    DELETE /students/:id
```

* **Auth Required**


#### Uploads a Student Picture

```http
    POST /pictures/
```

* **Auth Required**

| Parameter   | Type       | Description                                         |
| :---------- | :--------- | :------------------------------------------         |
| `aluno_id`  | `integer`  | **Required**. Student id                            |
| `file`      | `file`     | **Required**. Binary data in PNG, JPEG or JPG format|
