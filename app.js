const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

//conexión a base de datos
const mongoose = require('mongoose');

// datos para conectarnos a la BD
const user = 'alexMongoDB';
const password = '6CLnlCggqDKqRnID';
// Configuramos el nombre de la base de datos y colección
const dbName = "veterinaria";
const nombreColeccion = "mascotas"

//const uri = `mongodb+srv://${user}:${password}@cluster0.xveksyc.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`; // url de conexión
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xveksyc.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`; // url de conexión


//const uri = `mongodb+srv://${user}:${password}@cluster0.xveksyc.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`; // URL de conexión



mongoose.connect(uri

).then(() => console.log('Base de datos conectada'))
.catch(e => console.log("Error papá", e));





// motor de plantilla
app.set('view engine', 'ejs'); // Motor de plantilla que vamos a utilizar 'ejs'
app.set('views', __dirname + '/views') // Indicamos la ruta donde se encuentra la plantilla

// Se le llama middleware. ruta estatica 
app.use(express.static(__dirname + "/public")) // '__dirname' hará referencia a la ruta que tengamos configurada local o en nuestro servidor


// middleware. Rutas web o Rutas Api
app.use('/', require('./router/RutasWeb'));

// middleware. Rutas web o Rutas Api
app.use('/mascotas', require('./router/Mascotas'));

// Se le llama middleware. Siempre se lee primero y despues lee las rutas
app.use((req, res, next) => { // cuando tena el '.use' es un middleware
    
    res.status(404).render('404', {
        titulo: '404',
        descripcion: 'descripción del error'
    })
    //console.log('<>>', req.host);
})

app.listen(port, () => { // Para que siempre este escuchando por solicitudes
    console.log('Servidor a su servicio en el puerto ', port)
})