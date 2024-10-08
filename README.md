
# CompassCar

O projeto CompassCar é uma API RESTful desenvolvida para gerenciar informações sobre carros e seus itens. Utilizando Node.js, Express, e MySQL, a API permite realizar operações CRUD (Create, Read, Update, Delete) tanto para os carros quanto para os itens associados a cada carro. A estrutura do projeto segue boas práticas de desenvolvimento, incluindo validação de dados, padronização de commits, e documentação adequada.


## Documentação da API

### Criando 2 models

#### cars 
 - id: INTEGER
 - brand: STRING
 - model: STRING
 - year: INTEGER

#### cars_items 
 - id :INTEGER

 - name: STRING

 - car_id: INTEGER

### Endpoints

#### Adiciona um carro

```http
  POST /api/v1/cars
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do item que você quer |
| `brand`      | `string` | **Obrigatório**. A marca do carro |
| `model`      | `string` | **Obrigatório**. O modelo do carro |
| `year`      | `integer` | **Obrigatório**. O ano do carro |
| `items`      | `Array` | **Obrigatório**. Itens do carro|


#### Retorna todos os itens

```http
  GET /api/v1/cars
```



#### Retorna um item

```http
  GET /api/v1/cars/:id
```

#### Query Params

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `page`      | `integer` | Opcional. Número da página para paginação |
| `brand`      | `string` | Opcional. A marca do carro |
| `model`      | `string` | Opcional. O modelo do carro |
| `year`      | `integer` | Opcional. O ano do carro |
| `limit`      | `integer` | Opcional. Limite de resultados por página (mínimo 1, máximo 10)|


#### Atualiza um item

```http
  PATCH /api/v1/cars/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | O ID do item que você quer |
| `brand`      | `string` |  A marca do carro |
| `model`      | `string` |  O modelo do carro |
| `year`      | `integer` |  O ano do carro |
| `items`      | `Array` |  Itens do carro|


#### remover um item

```http
  DELETE /api/v1/cars/:id
```

 Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. Obrigatório. O ID do carro que você quer remover |