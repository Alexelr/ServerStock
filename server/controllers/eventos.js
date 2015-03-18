var eventos = require('events');
var getApi=require('./getController.js');

var EmisorEventos = eventos.EventEmitter;
var ee = new EmisorEventos();

exports.lanzarEvento=function(){


ee.on('datos', function(Objeto){
	  console.log(Date.now());

});
setInterval(function(){
   ee.emit('datos', getApi.jsonObject());
}, 10000);
}

