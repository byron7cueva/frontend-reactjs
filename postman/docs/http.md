# Protocolo HTTP

* Un protocolo especifica reglas de comunicación, en este caso, entre dos dispositivos.
* Fue creado exclusivamente para la web.
* Significa Hyper Text Transfer Protocol.

## Verbos HTTP

Estos indican acciones.

* **GET:** Solicitar datos o algún recurso.
* **HEAD:** Traer headers, como una petición GET pero sin contenido.
* **POST:** Enviar datos a un recurso para la creación.
* **PUT:** Reemplazar por completo un recurso. Se utiliza para actualizar un recurso completamente.
* **PATCH:** Se utiliza para actualizar infromación pero solo una parte del recurso no toda.
* **DELETE:** Eliminar el recurso.

## HTTP Status Code

Sirve para describir el estado de la petición hecha al servidor. Nos indican como esta siendo procesada la solicitud o en que parte va.

### 1xx

Esto indica que la peticion fue recibida y el servidor sigue trabajando en el proceso.

### 2xx

Indican que la petición fue recibida, aceptada y procesada correctamente.

### 3xx

Indican que hay que tomar acciones adicionales para completar la solicitud. Por lo general estos códigos indican redirección.

### 4xx

Errores del lado del cliente. Indica que se hizo mal una solicitud, faltan datos, headers o cualquier otro error que puede ocurrir.

### 5xx

Errores del servidor. Indica que falló completamente la ejecución.

## Códigos más usados

* **200** Este es el estado que se retorna cuando una solicitud GET fue resuelta correctamente.
* **201** Este es el estado cuando una solicitud POST fue resuelta correctamente.
* **204** La solicitud fue realizada correctamente pero no nos devuelve información. Se utiliza cuando se realiza una solicitud con el verbo DELETE.
* **400** Es un bad request. No se envió algún dato o se realizo mal la solicitud. Por lo general en su respuesta nos indica cuales fueron los errores que tuvimos a la hora de realizar el request.
* **403** Foorbiden. Significa que no tengo acceso a ese recurso aunque este autenticado.
* **401** Significa un Authorized. Significa que para hacer la solicitud primero debemos de autenticarnos con el servidor.
* **404** Not Found. No existe el recurso.
* **500** Internal Server Error. Es cuando la solicitud el servidor no pudo procesarla y el servidor nos dio un error.

## API

* No contienen estados, toda la información para mostrarla esta contenida en una la solicitud, no se guarda un estado en el servidor.

