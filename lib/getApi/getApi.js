var Client=require('node-rest-client').Client;
var client=new Client();
var bodyParser=require('body-parser');
var d=require('domain').create();



exports.jsonObject=function(){
/*


///////////////////////////////////////////////////////////////////
client.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22IBM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",  function(data,response) {
    //    
     Datos=JSON.parse(data);
     nuevaVariable=Datos.query.results.quote[1].symbol;
     
	console.log(nuevaVariable);
});*/
 
// registrando metodos remotes
//manejndo error si lo hay 
var Datos={};
var nuevaVariable;
d.on('error',function(err){console.log(err);});
d.run(function(){
 

client.registerMethod("jsonMethod", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22IBM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", "GET");
 
client.methods.jsonMethod( function(data,response){
	Datos=JSON.parse(data);
	 nuevaVariable=Datos.query.results.quote[1].symbol;
 
	console.log(nuevaVariable);

	});

	
});

return nuevaVariable;
  
}