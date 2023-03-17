
//Obtenemos el objeto ruta de express.
const { Router } = require('express');
const router = Router();

//Importamos el archivo de nombre allGame donde aplicamos la lógica de las petición.
const { allGame } = require('../controllers/allGame');




//Ingreso a obtener juego por ID
router.get('/:id', allGame);

//exportamos las rutas creadas.
module.exports = router;