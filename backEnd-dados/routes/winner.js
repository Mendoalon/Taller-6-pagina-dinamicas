//Obtenemos el objeto ruta de express.
const { Router } = require('express');
const router = Router();

//Importamos los archivos de nombre winner y allWinner, donde aplicamos la lógica de las petición.
const { winner, allWinner } = require('../controllers/winner');




//Ingreso a guardar ganador
router.post('/', winner);

//Ingreso a optener ganador
router.get('/', allWinner);

//exportamos las rutas creadas
module.exports = router;