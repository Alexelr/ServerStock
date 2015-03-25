/*
*Modulo controlador para actualizaar nuestro DOM
*cada que es llamada esta funcion hace una apticion a nuestro modelo 
*/

    //Incluímos nuestro modelo para poder interactuar con él
var  stockSchema= require('../models/stockModel.js');


// Escribimos nuestras funciones
module.exports = {

    updateStock: function(req, res) {
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
                    message:"se ha actualizadocon exito",
                    data: response
                });
            }
        });
    }
};    