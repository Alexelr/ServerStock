var Client=require('node-rest-client').Client;
var client=new Client();
var dominioError=require('domain').create();
//Schema  nuevo a insertar
var Stock = require('../models/stockModel.js');
var q = require('q');

exports.jsonObject=function(){

var Datos={};
/*
dominioError.on('error',function(err){
	console.log(err);});
*/
	//dominioError.run(function(){
 

	client.registerMethod("jsonMethod", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22%2C%22IBM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json", "GET");
 
	client.methods.jsonMethod( function(data,response){

///////////////////////
	function doSomethingAsync() {
  var deferred = q.defer();
  setTimeout(function() {
     Datos=JSON.parse(data);
    deferred.resolve('hello world');
  }, 500);

  return deferred.promise;
}

doSomethingAsync().then(function(val) {

	 Stock.createStock(Datos.query);
  console.log('Promise Resolved!', val);
});

///////////////////////


			
          




			
		
		});

	//});


  
}