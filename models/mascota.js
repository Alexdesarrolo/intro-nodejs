const mongoose = require ('mongoose');
const { Schema } = mongoose;

const mascotaShema = new Schema({
    nombre: String,
    descripcion: String
});

// crear modelo
const Mascota = mongoose.model('Mascota', mascotaShema);

module.exports = Mascota
