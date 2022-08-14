const Libro = require("../Models/Libro");

module.exports = async function(){
    await Libro.create({
        id:1,
        titulo:"Libro1",
        autor:"autor 1",
        editorial:"editorial 1",
        genero:"drama",
        precio:150
        
    });
    await Libro.create({
        id:2,
        titulo:"Libro2",
        autor:"autor 2",
        editorial:"editorial 2",
        genero:"horror",
        precio:150
        
    });
    await Libro.create({
        id:3,
        titulo:"Libro3",
        autor:"autor 3",
        editorial:"editorial 3",
        genero:"comedia",
        precio:150
        
    });
    await Libro.create({
        id:4,
        titulo:"Libro4",
        autor:"autor 4",
        editorial:"editorial 4",
        genero:"aventura",
        precio:150
        
    });

}