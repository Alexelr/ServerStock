var Client=require('node-rest-client').Client;
var client=new Client();
var dominioError=require('domain').create();
//Schema  nuevo a insertar
var Stock = require('../models/stockModel.js');

exports.jsonObject=function(){

var Datos={};
var Name={};

dominioError.on('error',function(err){
	console.log(err);});

	dominioError.run(function(){
 

	client.registerMethod("jsonMethod", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22IBM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", "GET");
 
	client.methods.jsonMethod( function(data,response){
			Datos=JSON.parse(data);
			Stock.createStock(Datos.query);
		
		});

	});

return Name;
  
}