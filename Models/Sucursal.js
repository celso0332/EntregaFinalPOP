const { default: mongoose } = require("mongoose");

const SchemaSucursal = new mongoose.Schema({
    id: Number,
    nombre: String,       
    direccion: String,       
});

module.exports = mongoose.model('Sucursal',SchemaSucursal,'sucursales');
