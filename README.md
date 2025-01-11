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

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.

