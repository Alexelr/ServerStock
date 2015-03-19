#DESCRIPCION

Todo se encuentra dentro de la carpeta ServerStock pues me falto diseñar la pagina principal en eso estoy en resumen el server se encuentra en estado funcional para tabajar solo en frontend ya no es necesario definir nada de backend.
 

La carpeta que contiene todo es ServerStock dentro de esta se encuentra el script principal que es server.js desde aca solo ruteo con express para que pueda consumirse el recurso de datos a mostrar,y agrego solo los modulos para poder usarlos ,tengo 3 modulos principales que se encuentran en la carpeta /server/controlers estos son los que controlan la parte del servidor,para  consumir la APi esta el modulo getController.js donde  uso client-request,cada ves que es llamado este ingresa los valores obtenidos en nuestra base de datos , este pasara los datos a mi modelo para ir ingresando cada objeto capturado asi como el Parseo a JSon ,este modulo es llamada por eventController que maneja por eventos a el modulo de getController,cada 10 segundos este ejecuta. 

En  la carpeta model esta mi modelo o schema ,este solo crea un documento con  5 valores de los cuales uno de ellos trae dentro mas objetos es por esto que solo declaro los primeros 5 valores para que cuando se igrese el objeto json a nuestro schema este se modele con los datos que contiene, de igual forma declaro funciones de insercion y de lectura las cuales son llamadas desde mi controlador del lado del servidor para responder las peticiones get.


En la carpeta Public se encuentra lo referente a la parte de la pagina web en la carpeta css se encuentran mis estilos hasta ahora solo normalize.css para normalizar la pagina ,en js/app se encuentra lo que angular trabaja como controlador y modelo 
donde declaro la ruta que tomara mi pagina para actualizar los valores que recibe el servidor pero esto no me lo da directamente el servidor ,sino tengo que hacer una peticion get para poder obtener estos datos ,para comprobarlo si tipeamos http://localhost:8080/api/updt nos devolvera un json este objeto es el que se debe de mostrar,dentro de esta carpeta /app se encuentra mi archivo index.js que es el que contiene codigo html de momento sin conectar mi controlador angular,y tenemos un 404.html que es el que mostramos cuando la peticion no es correcta o no tiene los parametros correctos.

Cada que es echa una solicitud la resuelve express definiendo 2 unicas rutas la principal que es localhost:8080/  y para actualizar nuestros datos el servidor nos da un json desde la direccion localhost:8080/api/updt

##FLUJO 
el flujo esta conforme me lo pediste consumir la api de yahoo guardarlo todo el objeto en la base de datos 
consultar desde node una direccion web--> carpeta / server/controllers  archivos--> getController.js eventos.js
guardar los datos obtenidos todos en una colecion mongo --> carpeta /server/models archivos -->stochModels.js
controlador y modelo  fronend-->/public/js/app  archivos --> app.js   controller.js
frontend index y 404 ----->public/js/   archivos -->index.html 404.html
ruteo y manejo de modularidad desde el archivo principal ---> server.js
  




