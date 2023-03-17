//Importamos responsé y request para tener ayuda de tipado.
const { response, request } = require('express');

//Paquete fs para la creación, lectura, eliminación y actualización e archivos.
const fs = require('fs');


//Función para obtener el juego.
const allGame = (req, res = response) => {
 

try {
    const jsonString = fs.readFileSync('./database/gamer.json', 'utf-8');
    const gamer = JSON.parse(jsonString);
    res.json({gamer: gamer})
} catch (error) {
    console.error(error);
    
}
    

}

//Exportamos la función allGame.
module.exports = {
    allGame
}