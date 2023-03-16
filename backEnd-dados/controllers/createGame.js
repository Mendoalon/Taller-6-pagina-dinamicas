const { response, request } = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


const startGame = (req, res = response) => {
    const { id, type, gamers } = req.body;

    //Creamos el objetos games
    const game = {
        id: id,
        type: type,
        games: gamers.map(gamer => ({
            id: uuidv4(),
            name: gamer,
            winner: 0
        }))

    }

    // Convertimos el objeto a formato JSON
    const datosJSON = JSON.stringify(game);

    // Escribimos el archivo JSON
    fs.writeFile('./database/gamer.json', datosJSON, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Archivo JSON creado correctamente');
    });

    res.json({ 
                msg: 'Partida creada correctamente!', 
                id: id
            });

}

    const deleteGame = (req, res = response) =>{


        const filePath1 = './database/gamer.json';
        const filePath2 = './database/winner.json';
  

       

            if (fs.existsSync(filePath1)) {
                fs.unlinkSync(filePath1);
                console.log('Archivo 1 eliminado');
              } else {
                console.log('El archivo 1 no existe');
              }
              
              if (fs.existsSync(filePath2)) {
                fs.unlinkSync(filePath2);
                console.log('Archivo 2 eliminado');
              } else {
                console.log('El archivo 2 no existe');
              }  
              
              res.json({
                msg: 'Se elimino la partida'
            });


    }   
    
 

    



module.exports = {
    startGame,
    deleteGame
}