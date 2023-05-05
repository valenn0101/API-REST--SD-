
# Api Rest StoryDots

Bienvenidos! Aqui una breve descripcion del backend de mi app


## Installation

Instala  este proyecto con
```bash
  npm install 
  npm run dev
```

El deploy es en http://localhost:3000/api/v1/crud
    
## Funcionalidades

1) Autentica usuarios: Mediante un metodo Post puede verificar si los datos que ingresaste en el login coincide con nuestra base de datos de usuarios.

2) Seguridad: Si pudiste autenticar tus datos correctamente recibiras un 'sessionId' el cual te permitira realizar metodos solo accesibles para administradores (Post, Delete, Put).

3) Crear, Editar y Elimitar: La aplicacion permite realizar estas acciones con dos elementos, 'products' y 'brands'

4) Almacenamiento de datos: Permite poder recuperar y visualizar informacion acerca de los productos, marcas y usuarios registrados

5) Interaccion con otras APIs: Todos los archivos que subas, imagenes en este caso, seran almacenados en Cloudinary.

6) Api Documentada: Se uso swagger para faciliar a otros desarrolladores la logica de los distintos metodos, sus acciones y comandos aceptados. https://story-dots-api.onrender.com/api/v1/docs

7) Documentacion de errores: En la carpeta utils/error.log se registraran los errores de todos los metodos.


## Librerias Utilizadas

- @prisma/client: Una herramienta de modelado y acceso a datos para bases de datos SQL y  MySQL, utilizada para interactuar con la base de datos.
- body-parser: Un middleware de Node.js para analizar el cuerpo de las solicitudes HTTP, utilizado para extraer datos del cuerpo de las solicitudes.
- cloudinary: Una plataforma de almacenamiento y manipulación de imágenes y videos en la nube, utilizada para gestionar archivos multimedia.
- cookie-parser: Un middleware de Node.js para analizar las cookies de las solicitudes HTTP, utilizado para extraer datos de las cookies.
- cors: Un middleware de Node.js que proporciona un mecanismo de seguridad para permitir solicitudes HTTP desde diferentes dominios o fuentes.
- dotenv: Una librería que carga variables de entorno desde un archivo .env, utilizada para gestionar la configuración del entorno.
- express: Un framework web rápido y minimalista para Node.js, utilizado para crear el servidor y definir las rutas y los controladores.
- express-myconnection: Un middleware de Express.js para administrar conexiones de bases de datos, utilizado para establecer conexiones de base de datos.
- method-override: Un middleware de Express.js que permite usar métodos HTTP como PUT o DELETE en lugares donde normalmente solo se admite GET o POST.
- multer: Un middleware de Node.js para el manejo de formularios multiparte (multipart/form-data), utilizado para subir archivos al servidor.
- multer-storage-cloudinary: Un adaptador para multer que permite almacenar archivos en - Cloudinary, utilizado para subir archivos multimedia a Cloudinary.
- mysql: Un controlador de base de datos MySQL para Node.js, utilizado para interactuar con la base de datos MySQL.
- swagger: Un middleware de Express.js para mostrar la documentación Swagger generada, utilizado para exponer una interfaz de usuario para explorar los endpoints.
- uuid: Una librería para generar identificadores únicos universales (UUID), utilizada para generar identificadores únicos para los recursos.
- winston: Una librería de registro y registro de eventos para Node.js, utilizada para gestionar el registro de eventos y errores en la aplicación.
