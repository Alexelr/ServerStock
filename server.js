/*
*dependencias
*/
var express   =require('express');
var bodyParser=require('body-parser');
var Client    =require('node-rest-client').Client;
var mongoose  =require('mongoose');

/**
* Locals
*/
var app = module.exports = express();
app.use(bodyParser.json('application/json'));
var client =new Client();
var port = 3000|| process.env.PORT ;

/*
*Archivos estaticos
*/ 
app.use(express.static(__dirname + '/public'));

/*
*Conexion a la base de datos
*/

// mongoose.connect('mongodb://localhost:27017/Stock'); // Conexión a la base de datos

/*
*definimos rutas 
*/
var router=express.Router();//creamos instancias de router de express
/*
*ruta principal
*todo lo dinamico se servira con url base /api
*/
app.use('/api',router);

/*
*Rutas no definidas
*/
app.all('*', function(req,res){
   res.status(400);
     res.sendfile('./public/404.html')
});



app.listen(port);
console.log('ejecutamos en el puerto '+port);
