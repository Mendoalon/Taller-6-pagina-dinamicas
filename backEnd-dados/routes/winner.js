//Empleamos la ruta usuarios con y en cada enpoi llamamos a su controlador. 
const { Router } = require('express');
const { winner, allWinner } = require('../controllers/winner');

const router = Router();


//Ingreso a guardar ganador
router.post('/', winner);

//Ingreso a optener ganador
router.get('/', allWinner);


module.exports = router;