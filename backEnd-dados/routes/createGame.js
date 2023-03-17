//Obtenemos el objeto ruta de express.
const { Router } = require('express');
const router = Router();

//Importamos los archivos de nombre startGame y deleteGame, donde aplicamos la lógica de las petición.
const { startGame, deleteGame } = require('../controllers/createGame');


//Ingreso a crear juegos
router.post('/', startGame);

//Ingreso a eliminar juegos
router.delete('/', deleteGame);

//exportamos las rutas creadas.
module.exports = router;