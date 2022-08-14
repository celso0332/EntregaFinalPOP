const { default: mongoose } = require("mongoose");
const SchemaUsuario = new mongoose.Schema({
    id: Number,
    id_sucursal:Number,
    nombre: String,             
    edad: Number,
    correo: String,
    user: String,
    password: String,
    puesto: {
        type: String,
        enum : ['administrador','supervisor','vendedor','almacenista'],
        
    },
});

module.exports = mongoose.model('Usuario',SchemaUsuario,'usuarios');
