/*
*One -to-Many Relathionship
*/

var mongoose= require('mongoose');
var promise = require('promises-promises');
var	Schema= mongoose.Schema;
var Global;
var cantidadb;
var SCHEMAULTIMO;

var stockSchema = new Schema ({
    count:Number,
    contador:Number,
    created:String,
    lang:String,
    _v:0,
    results:
        {quote:[{},{},{},{},{}]
    
    
} });

var Stock=mongoose.model('Stock',stockSchema);

module.exports = {
    createStock: function(Objetostock ) {
        // Creamos un nuevo objeto que lleva como información 
        //el parametro "stockObject" de la función.
        //var cantidadb= Stock.count();


        var newSchemastock = new Stock(Objetostock);
        
         ///////////////////////////////////////////////////////
        newSchemastock.save();
        
        console.log('si guardamos correctamente');

     Stock.count(function(err,response){
        if(err) {
                //callback(err, null); // Si hay un error, devolvemos el callback con el error devuelto.
            } else {
                cantidadb=response+1;
                
                newSchemastock.contador=cantidadb;
                newSchemastock.save();
                 console.log("cantidad en la base de datos:"+cantidadb);
                //callback(null,response);

               }

 
         });

         ////////////////////////////////////////////////////////


       // idd=newSchemastock.get("_id");
    },

    updateLastStock: function(callback) {

      console.log('----------------recibi update');
           
///////////////////////////////////////////////////////////////
 

Stock.findOne({contador:cantidadb},function(err,response){
        if(err) {
               callback(err,null); // Si hay un error, devolvemos el callback con el error devuelto.
            } else {
           

           try{           
                          
                 
                var countt=response.count;
                var createdd=response.created;
                var companies=response.results.quote;
                 console.log('created:-----'+createdd);
                 console.log('companies:-----'+companies);
               

                  var assk1=companies[0].Ask;
                  var bid1=companies[0].Bid;
                  
                   var percent1=companies[0].PercentChange;
                   
                   var change1=companies[0].Change;
                   


                   var assk2=companies[1].Ask;
                  var bid2=companies[1].Bid;
                   var percent2=companies[1].PercentChange;
                   var change2=companies[1].Change;


                  var assk3=companies[2].Ask;
                  var bid3=companies[2].Bid;
                   var percent3=companies[2].PercentChange;
                   var change3=companies[2].Change;

                   var assk4=companies[3].Ask;
                  var bid4=companies[3].Bid;
                   var percent4=companies[3].PercentChange;
                   var change4=companies[3].Change;

                   var assk5=companies[4].Ask;
                  var bid5=companies[4].Bid;
                   var percent5=companies[4].PercentChange;
                   var change5=companies[4].Change;

                   console.log('------ask1:'+assk1);
                   console.log('------bid1:'+bid1);
                   console.log('------percent1:'+percent1);
                   console.log('------change1:'+change1);
                   console.log('------------------------');
                   console.log('------------------------');
                   console.log('------ask2:'+assk2);
                   console.log('------bid2:'+bid2);
                   console.log('------percent2:'+percent2);
                   console.log('------change2:'+change2);
                   console.log('------------------------');
                   console.log('------ask3:'+assk3);
                   console.log('------bid3:'+bid3);
                   console.log('------percent3:'+percent3);
                   console.log('------change3:'+change3);
                   console.log('------------------------');
                   console.log('------ask4:'+assk4);
                   console.log('------bid4:'+bid4);
                   console.log('------percent4:'+percent4);
                   console.log('------change4:'+change4);
                   console.log('------------------------');
                   console.log('------ask5:'+assk5);
                   console.log('------bid5:'+bid5);
                   console.log('------percent5:'+percent5);
                   console.log('------change5:'+change5);
                   console.log('------------------------');

                console.log('response es ......'+assk1);

                response={data:{
                  count:countt,
                  created:createdd,
                  ask1:assk1,
                  bidd1:bid1,
                  percentt1:percent1,
                  changee1:change1,
                  ask2:assk2,
                  bidd2:bid2,
                  percentt2:percent2,
                  changee2:change2,
                  ask3:assk3,
                  bidd3:bid3,
                  percentt3:percent3,
                  changee3:change3,
                  ask4:assk4,
                  bidd4:bid4,
                  percentt4:percent4,
                  changee4:change4,
                  ask5:assk5,
                  bidd5:bid5,
                  percentt5:percent5,
                  changee5:change5,
                  
                  

                }};
                callback(null,response);

                
                
             }
             catch(e){
              callback(err,null); 
              
              console.log(e);
            }

          }

 
    });
  //////////////////

/*el chido antes de 
var query=Stock.find({contador:cantidadb},function(err,res){
         if (err){
          console.log('----------------rror al encontrarlo');
           res={status:"304"};
                }else{

         console.log("Lo hemos encontrado lang es -----------"+res); 
       res={status:"OK"}
     
                               
                     }
                });
  */   
//////////////////
         

        //Buscamos por ID y actualizamos la información con lo contenido en el parametro "todo".
    /*
    Stock.findOne({contador:cantidadb},function(err,response){
        if(err) {
                callback(err, null); // Si hay un error, devolvemos el callback con el error devuelto.
            } else {
                var count=response.lang;
                var createdd=response.created;
                console.log('created:-----'+createdd);

                var yahoo=response.results.results[1];

                console.log('ask es ......'+yahoo);

                response={status:"ok",data:count ,esto:"mi rspuesta",created:createdd};

                callback(null, response)
                
            }

 
    });
     */



 
      }
};