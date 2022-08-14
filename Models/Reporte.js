const { default: mongoose } = require("mongoose");

const SchemaReporte = new mongoose.Schema({
    id: Number,
    id_sucursal: Number,       
    id_supervisor: Number,       
    listVentas:[Number],
    fecha: String,
    
});

module.exports = mongoose.model('Reporte',SchemaReporte,'reportes');
