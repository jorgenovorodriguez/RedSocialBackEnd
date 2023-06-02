# tatooArt

- App para tatuadores.

- Se trata de una web donde los usuarios tienen dos roles (artista o cliente) y los primeros publican fotos de sus trabajos.

- Cada publicación tiene un título, descripción, lugar y una foto asignada.

- Cada publicación puede ser valorada con un like.

- Cada publicación puede ser comentada por los demás usuarios registrados, independientemente de su rol.

- La finalidad es poner encontacto a los artistas con posibles clientes.

- Sólo los usuarios registrados pueden acceder a los datos de contacto de los artistas.

## Instalar

- Crear una base de datos vacía en una instancia de MySQL local.

- Instalar las dependencias mediante el comando `npm install` o `npm i`.

- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos anteriormente creada.

- Ejecutar `npm run dev` o `npm start` para lanzar el servidor.

- Importar la colección de Postman para poder probar los endpoints.

## Base de datos

- **`users:`** id, email, password, username, avatar, active, registrationCode, recoverPassCode, createdAt, modifiedAt.

- **`publications:`** id, name, photoName, description, place, userId, createdAt.

- **`Likes:`** id, publicationId, userId, createdAt, modifiedAt.

- **`Comments:`** id, text, publicationId, userId, createdAt.

## Endpoints del usuario

- **POST** - [`/users`] - Crea un usuario pendiente de validar.
- **PUT** - [`/users/validate/:regCode`] - Valida a un usuario recién registrado.
- **POST** - [`/users/login`] - Logea a un usuario retornando un token.
- **GET** - [`/users/:userId`] - Retorna información de un usuario concreto.
- **GET** - [`/users`] - Retorna información del usuario del token. ➡️ `Token`
- **PUT** - [`/users/avatar`] - Permite actualizar el avatar del usuario. ➡️ `Token`
- **PUT** - [`/users/password/recover`] - Envía al usuario un correo de recuperación de contraseña.
- **PUT** - [`/users/password`] - Resetea la contraseña de un usuario utilizando un código de recuperación.

## Endpoints de las publicaciones

- **POST** - [`/publications`] - Crea una publicación. ➡️ `Token`
- **GET** - [`/publications`] - Retorna el listado de publicaciones.
- **GET** - [`/publications/:place`] - Retorna el listado de publicaciones de un lugar concreto.
- **GET** - [`/publications/:publicationId`] - Retorna una entrada en concreto. ????
- **POST** - [`/publications/:publicationId/likes`] - Agrega un like a una publicación. ➡️ `Token`
- **POST** - [`/publications/:publicationId/photos`] - Agregar una foto a una entrada. ➡️ `Token` ?????
- **DELETE** - [`/publications/:publicationId`] - Eliminar una publicación. ➡️ `Token`
- **POST** - [`/publications/:publicationId/comments`] - Agregar un comentario a una entrada. ➡️ `Token`