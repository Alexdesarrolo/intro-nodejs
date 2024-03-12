const express = require('express');
const app = express();

const port = 3000;

// motor de plantilla
app.set('view engine', 'ejs'); // Motor de plantilla que vamos a utilizar 'ejs'
app.set('views', __dirname + '/views') // Indicamos la ruta donde se encuentra la plantilla

// Se le llama middleware
app.use(express.static(__dirname + "/public")) // '__dirname' hará referencia a la ruta que tengamos configurada local o en nuestro servidor

app.get('/', (req, res) => { // En la función flecha siempre tendremos un requerimiento y una respuesta
    //res.send('mi respuesta desde express v.3'); // Enviamos respuesta en string
    
    res.render('index', {titulo : "mi titulo dinámico"}) // Renderizamos. Indicamos el nombre del archivo, y podemos pasar parámetros a la vista
    console.log(__dirname)
})

app.get('/servicios', (req, res) => {
    //res.send(' Estas en la paginna de servicios')
    res.render('servicios', {tituloServicios : "mi titulo dinámico {Servicio}"}) // Renderizamos. Indicamos el nombre del archivo, y podemos pasar parámetros a la vista
})

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