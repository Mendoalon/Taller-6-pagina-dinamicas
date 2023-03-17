//Paquete para la creación de servidor en express.
const express = require('express');

//Paquete para solucionar problemas de cors con los navegadores al realizar petición.
const cors = require('cors');

//Creación de clase servidor.
class Server {

    constructor() {
        //Creación de instancia de express.
        this.app = express();

        //Objetos de rutas.
        this.paths = {
            createGame: '/createGame',
            allGame: '/game',
            winner: '/winner',
        }

        //Middlewares.
        this.middleware();

        //rutas de mi aplicación.
        this.routes();

    }

    middleware() {
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body y archivos json en express.
        this.app.use(express.json());
    }

    //Importación de las rutas.
    routes() {
        this.app.use(this.paths.createGame, require('../routes/createGame'));
        this.app.use(this.paths.allGame, require('../routes/allGame'));
        this.app.use(this.paths.winner, require('../routes/winner'));
    }

    //Se asigna el puerto del servidor donde recibirá las peticiones.
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }

}

module.exports = Server;