const { default: mongoose } = require("mongoose");

const SchemaInventario = new mongoose.Schema({
    id: Number,
    id_sucursal: Number,
    id_Supervisor:Number,       
    fecha: String,       
    listaLibros:[Number] //Lista de libros por medio de id    
});

module.exports = mongoose.model('Inventario',SchemaInventario,'inventarios');
