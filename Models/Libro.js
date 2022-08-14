const { default: mongoose } = require("mongoose");

const SchemaLibro = new mongoose.Schema({
    id: Number,
    titulo: String,       
    autor: String,       
    editorial: String,
    genero: {
        type: String,
        enum : ['drama','horror','comedia','aventura'],
        default: 'otro'
    },
    precio:Number
});

module.exports = mongoose.model('Libro',SchemaLibro,'libros');
