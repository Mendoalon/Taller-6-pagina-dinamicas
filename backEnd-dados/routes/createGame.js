//Empleamos la ruta usuarios con y en cada enpoi llamamos a su controlador. 
const { Router } = require('express');
const { startGame, deleteGame } = require('../controllers/createGame');

const router = Router();


//Ingreso a crear juegos
router.post('/', startGame);

//Ingreso a crear juegos
router.delete('/', deleteGame);


module.exports = router;