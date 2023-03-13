const { response, request } = require('express');

const startGame = async(req, res = response ) => {

    res.json({ 
        msg: 'holaaa'
    });

};

module.exports = {
    startGame
}