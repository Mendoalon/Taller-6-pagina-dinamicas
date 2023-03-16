//Empleamos la ruta usuarios con y en cada enpoi llamamos a su controlador. 
const { Router } = require('express');
const { allGame } = require('../controllers/allGame');

const router = Router();


//Ingreso a optener juego
router.get('/:id', allGame);


module.exports = router;