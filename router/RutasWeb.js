const express = require('express')
const router = express.Router();

router.get('/', (req, res) => { // En la función flecha siempre tendremos un requerimiento y una respuesta
    //res.send('mi respuesta desde express v.3'); // Enviamos respuesta en string
    
    res.render('index', {titulo : "mi titulo dinámico"}) // Renderizamos. Indicamos el nombre del archivo, y podemos pasar parámetros a la vista
    console.log(__dirname)
})

router.get('/servicios', (req, res) => {
    //res.send(' Estas en la paginna de servicios')
    res.render('servicios', {tituloServicios : "mi titulo dinámico {Servicio}"}) // Renderizamos. Indicamos el nombre del archivo, y podemos pasar parámetros a la vista
})

module.exports = router;