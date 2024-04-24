# graph-apollo-for-vue-class

## Instalation:
``` npm install ```

## Launch server:
``` npm start ```

## Example Query
query ExampleQuery {
  getAllComments {
    name
    text
  }
}
-----
query GetCommentsFromUser($name: String!) {
  getCommentsFromUser(name: $name) {
    name
    text
  }
}
-variables
{
  "name": "User 1"
}

## Example muttation
-POST
mutation($name: String!, $text: String!){
  createComment(name: $name, text: $text)
}
-variables
{
  "name": "User 4",
  "text": "Comentario user 4"
}


## Example subcription
subscription{
  commentCreated {
    name
    text
  }
}
---
asi el servidor estara escuchando cuando se cree un nuevo comentario 



