require("dotenv").config();

const Inventario = require("../Models/Inventario");
const Libro = require("../Models/Libro");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como almacenistas podrán agregar y editar libros dentro del inventario", function(){
        it("Agregar libros nuevos", async function(){
            const LibroNuevo= await Libro.create({
                id:6,
                titulo:"Libro 6",
                autor:"autor 6",
                editorial:"editorial 6",
                genero:"drama",
                precio:150
            })
            const inventary=await Inventario.findOne({id:3})
            var lista=inventary.listaLibros

            var existe=lista.filter(id=>id==LibroNuevo.id)
         
            if(existe.length==0){
               
            lista.push(LibroNuevo.id)
            console.log(lista)
            const modificado=await Inventario.findOneAndUpdate({id:3},{listaLibros:lista})
            const  buscar = await Inventario.findOne({id:3})
            var longitud=lista.length
            var longitudNueva=(buscar.listaLibros).length
            assert(longitud, longitudNueva) 
            }else{
                assert("Libro ya existe","Libro ya existe")
            }
        })
        
    })
}