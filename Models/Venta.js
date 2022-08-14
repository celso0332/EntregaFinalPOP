const { default: mongoose } = require("mongoose");

const SchemaVenta = new mongoose.Schema({
    id: Number,
    id_libro:Number,
    precio:Number,  
});

module.exports = mongoose.model('Venta',SchemaVenta,'ventas');
