/*
*One -to-Many Relathionship
*/

var mongoose= require('mongoose');
var	Schema= mongoose.Schema;
var idd=String;

var stockSchema = new Schema ({
    count:Number,
    created:String,
    lang:String,
    results:
        {quote:[{},{},{},{},{}]
    
    
} });

var Stock=mongoose.model('Stock',stockSchema);

module.exports = {
    createStock: function(Objetostock) {
        // Creamos un nuevo objeto que lleva como información 
        //el parametro "stockObject" de la función.
         
        var newSchemastock = new Stock(Objetostock);
        idd=newSchemastock.get("_id");
    },

    updateLastStock: function(callback) {


        //Buscamos por ID y actualizamos la información con lo contenido en el parametro "todo".
        Stock.findOne( function(err, response) {

            if(err) {
                callback(err, null); // Si hay un error, devolvemos el callback con el error devuelto.
            } else {
                callback(null, response) 
            dominioError.on('error',function(err,response){console.log(err);});

            dominioError.run(function(response){
                     response.json({
                        status: "OK",
                        data: response
                     });// Si no hay error, devolvemos el callback sin errores y con la respuesta de la base de datos.
              });
            }
        });
           
    

      }
};