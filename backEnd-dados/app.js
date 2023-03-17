//Archivo principal donde ejecutamos nuestro servidor.

//Creación de objeto server.
const Server = require('./models/server');

//Importamos la librería dotenv para el manejo de variable de entorno.
require('dotenv').config();

//Creación de instancia tipo servidor.
const server = new Server();

//Función listen para ejecutar el servidor.
server.listen();


