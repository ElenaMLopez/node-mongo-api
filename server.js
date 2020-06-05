const Database = require('./app/config/database');
const CONFIG = require('./app/config/config');
const App = require('./app/app');

Database.connect();
<<<<<<< HEAD

App.listen(CONFIG.PORT, function(error) {
  if(error) return console.log('Error en el puerto de escucha: ', error)
  console.log('Conexión con BBDD Mongo exitosa');
  
})
=======
>>>>>>> cba3ed8a802552f661c4889b3686d8d3ad3e480e
