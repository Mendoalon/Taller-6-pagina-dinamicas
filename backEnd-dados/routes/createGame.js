//Empleamos la ruta usuarios con y en cada enpoi llamamos a su controlador. 
const { Router } = require('express');
const { startGame } = require('../controllers/createGame');

const router = Router();

//Ingreso a crear juegos
router.get('/',(req, res)=>{
    res.json({msg: 'hola'}) 
} );

//Ingreso a crear juegos
router.post('/', startGame);


module.exports = router;