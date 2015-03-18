
    //Incluímos nuestro modelo para poder interactuar con él
var  stockSchema= require('../models/stockModel.js'); // Nota: No necesitamos especificar extensión si es .js

// Escribimos nuestras funciones
module.exports = {

    updateStock: function(req, res, next) {
        stockSchema.updateLastStock(function(err, response) {
                


            if(err) { // Si tenemos un error, devolvemos al cliente el error.
                res.json({
                    status: "ERR",
                    message: "Ha ocurrido un error",
                    error: err
                });
            } else { // Si no tenemos errores, devolvemos un mensaje satisfactorio.
                res.json({
                    status: "OK",
                    data: response
                });
            }
        });
    }
};    