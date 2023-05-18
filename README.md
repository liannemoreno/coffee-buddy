
# Welcome to Coffee Buddy

Coffee Buddy is intended to be your best friend through your coffee experience. 




## Tech Stack

**Client:** React

**Server:** Node, Express


## Installation

Run the following after dowload

```bash
  npm install 
```
    


## End Points 
 
 Here are the different end points I used in my backend. The end points fetch the collections and brewing techniques I stored in two JSO files respectively.

#### Get all collections

```http
  GET /collections
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `collections` | `string` | `gets all the collections on the backend` |

#### Get collection 

```http
  GET /collections/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the collection to fetch |

```http
  GET /brews
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `collections` | `string` | `gets all the brewing types on the backend` |

#### Get collection 

```http
  GET /brews/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the brewing type to fetch |
## Demo
The web application is only intended to be for mobile. The screen size is 390 x 844. 

