require("dotenv").config();

const Inventario = require("../Models/Inventario");
const Libro = require("../Models/Libro");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como usuarios podrán realizar búsquedas de libros", function(){
        it("Obtener lista de libros",async function(){
            var sucursal=3
            const lista = await Inventario.findOne({id_sucursal:sucursal})
          
           if(lista){
            assert(lista,!null)
           }else{
            assert.fail("Lista Nula")
           }
        })
        it("Lista de libros vacía ", async function(){
            var sucursal=1
            const lista= await Inventario.findOne({id_sucursal:sucursal})
            var listaNula=lista.listaLibros
            var longitud=listaNula.length
         
            if(longitud==0){
                assert.equal(longitud, 0)
            }else{
                assert.fail("Si tiene contenido")
            }
        })
        it("filtrado de libros por datos clave", async function(){
            const autor="autor 1"
            const libro=await Libro.findOne({autor:autor})
            var id_libro=libro.id
            const buscar_libro= await Inventario.find({listaLibros:id_libro})
            if(buscar_libro){
                assert(buscar_libro,!null)
            }else{
                assert.fail("Libro no existe")
            }
        })
    })
}