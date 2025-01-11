
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

### Test Route

#### Returns Ok

```http
  GET /
```

### Token Route

#### Returns a Bearer Token

```http
  POST /tokens/
```

| Parameter   | Type       | Description                                |
| :---------- | :--------- | :------------------------------------------|
| `email`     | `string`   | **Required**. User email for validation    |
| `senha`     | `string`   | **Required**. User password for validation |

### User Routes

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


### Students Routes

#### Returns all Students with theirs pictures url

```http
    GET /students/
```

#### Returns a single Student with it's picture url

```http
    GET /students/:id
```

| URL Parameter   | Type       | Description                                |
| :----------     | :--------- | :------------------------------------------|
| `id`            | `integer`  | **Required**. User id                      |

#### Creates a Student

```http
    POST /students/
```

* **Auth Required**

| Parameter       | Type       | Description                                |
| :----------     | :--------- | :------------------------------------------|
| `nome`          | `string`   | **Required**. Student name, 3-255 characters|
| `sobrenome`     | `string`   | **Required**. Student surname, 3-255 charracters|
| `email`         | `string`   | **Required**. Student valid email          |
| `idade`         | `integer`  | **Required**. Student age, must be integer |
| `peso`          | `float`    | **Required**. Student weight               |
| `altura`        | `float`    | **Required**. Student heigth               |

#### Updates a Student

```http
    PUT /students/:id
```

* **Auth Required**

| URL Parameter   | Type       | Description|
| :----------     | :--------- | :----------|
| `id`            | `integer`  | **Required**. Student Id|


| Body Parameter  | Type       | Description                                |
| :----------     | :--------- | :------------------------------------------|
| `nome`          | `string`   | Student name, 3-255 characters|
| `sobrenome`     | `string`   | Student surname, 3-255 charracters|
| `email`         | `string`   | Student valid email          |
| `idade`         | `integer`  | Student age, must be integer |
| `peso`          | `float`    | Student weight               |
| `altura`        | `float`    | Student heigth               |

#### Deletes a Student

```http
    DELETE /students/:id
```

* **Auth Required**

| Parameter       | Type       | Description                                |
| :----------     | :--------- | :------------------------------------------|
| `id`            | `integer`  | **Required**. Student id                   |

### Picture Route

#### Uploads a Student Picture

```http
    POST /pictures/
```

* **Auth Required**

| Parameter   | Type       | Description                                         |
| :---------- | :--------- | :------------------------------------------         |
| `aluno_id`  | `integer`  | **Required**. Student id                            |
| `file`      | `file`     | **Required**. Binary data in PNG, JPEG or JPG format|
