const { response, request } = require('express');

const fs = require('fs');


const allGame = (req, res = response) => {
 
try {
    const jsonString = fs.readFileSync('./database/gamer.json', 'utf-8');
    const gamer = JSON.parse(jsonString);
    res.json({gamer: gamer})
} catch (error) {
    console.error(error);
    
}
    

}

module.exports = {
    allGame
}