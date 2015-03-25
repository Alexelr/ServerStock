var eventos = require('events');
var getApi=require('./getController.js');

var EmisorEventos = eventos.EventEmitter;
var ee = new EmisorEventos();
var promise = require('promises-promises');
var q = require('q');


var Client=require('node-rest-client').Client;
var client=new Client();
var dominioError=require('domain').create();


exports.lanzarEvento=function(){

dominioError.on('error',function(err){
	console.log(err);});

dominioError.run(function(){





ee.on('datos', function(Objeto){
	  console.log(Date.now());

});

setInterval(function(){
   ee.emit('datos', getApi.jsonObject());
}, 1000);



});


}

