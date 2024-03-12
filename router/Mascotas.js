const express = require('express');
const router = express.Router();

const Mascotass = require('../models/mascota');

router.get('/', async (req, res) => {
        // Seleccionar la base de datos que deseas usar
        //const db = mongoose.connection.db;
        //db.collection("nombre_de_tu_coleccion").find().toArray((err, result) => {

        
        
        
    try{
        const arrayMascotasDB = await Mascotass.find(); // Va a trar todos los documentos. Colección
        console.log(arrayMascotasDB);
        res.render("mascotas", {arrayMascotasDB: arrayMascotasDB}); // parametro 1: nombre de la vista; parámetro 2: la colección en un objeto
    }catch(error){
        console.log(error);
    }

    /*res.render("mascotas", { // datos de forma estática
        arrayMascotas: [ 
            {id: "aaaa", nombre: "mono", descripcion: "mono descripción"},
            {id: "bbbb", nombre: "chanchan", descripcion: "chanchan descripción"}
        ]
    });*/
})

module.exports = router;