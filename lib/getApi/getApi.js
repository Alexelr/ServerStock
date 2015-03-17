var Client=require('node-rest-client').Client;
var client=new Client();
var bodyParser=require('body-parser');
var Datos='';

exports.jsonObject=function(){

///////////////////////////////////////////////////////////////////
client.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22IBM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",  function(data,response) {
    //    
     Datos=JSON.parse(data);
     console.log(Datos.query.results);
});
 
// registrando metodos remotes 
/*
client.registerMethod("jsonMethod", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22IBM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", "GET");
 
client.methods.jsonMethod( function(data,response){

});
*/
return Datos;
  
}