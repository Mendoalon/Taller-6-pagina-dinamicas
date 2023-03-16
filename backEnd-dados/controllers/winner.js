const { response, request } = require('express');

const fs = require('fs');


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

const allWinner =( req, res= response) =>{

    try {
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



module.exports = {
    winner,
    allWinner
}