const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();

        //Objetos de rutas.
        this.paths = {
            createGame: '/createGame',
            allGame: '/game',
            winner: '/winner',
        }

        //Middlewares
        this.middleware();

        //rutas de mi aplicacion.
        this.routes();

    }

    middleware() {
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body y archivos json en express
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.createGame, require('../routes/createGame'));
        this.app.use(this.paths.allGame, require('../routes/allGame'));
        this.app.use(this.paths.winner, require('../routes/winner'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }

}

module.exports = Server;