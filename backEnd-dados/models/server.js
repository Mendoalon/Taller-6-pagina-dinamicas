const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {


    constructor() {
        this.app = express();

        //Objetos de rutas.
        this.paths ={
            createGame: '/createGame',
        }

        //Conectar a base de datos
        this.connectarDB();

        //Middlewares
        this.middleware();

        //rutas de mi aplicacion.
        this.routes();

    }

    async connectarDB(){
        await dbConnection();
    } 


    middleware() {
        //CORS
        this.app.use( cors() );


        //Parseo y lectura del body y archivos json en express
        this.app.use( express.json());
    }

    routes() {
        this.app.use( this.paths.createGame, require('../routes/createGame') );   
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }

}

module.exports = Server;