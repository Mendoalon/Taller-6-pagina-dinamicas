//Importamos responsé y request para tener ayuda de tipado.
const { response, request } = require('express');

//Paquete fs para la creación, lectura, eliminación y actualización e archivos.
const fs = require('fs');

//Función para crear el ganador de la partida.
const winner = (req, res = response) => {
  const  winner  = req.body;
  const winners = JSON.stringify(winner);

  // Escribimos el archivo JSON
  fs.writeFile('./database/winner.json', winners, (err) => {


      if (err) {
          console.error(err);
          return;
      }
      console.log('Archivo JSON creado correctamente');
  });

  res.json({ 
              msg: 'Ganador Guardado'
          });
    
}

//Función para obtener el ganado de la partida.
const allWinner =( req, res= response) =>{

    try {
        
        //Creamos el archivo winner
        const jsonString = fs.readFileSync('./database/winner.json', 'utf-8');
        if(!jsonString.length){
            res.json({ msg: 'No ha guardado ganador' })
        }else{
            const winner = JSON.parse(jsonString);
            res.json( winner )
        }
        
    } catch (error) {
        console.log('No ha guardo ganador');
        
    }

}


//Exportamos la funciónes winner y allWinner.
module.exports = {
    winner,
    allWinner
}