require("dotenv").config();

const Libro = require("../Models/Libro");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como supervisor y almacenista podrán dar de baja los libros", function(){
        it("Eliminado con éxito", async function(){
            var id_libro=3
            const removido=await Libro.deleteMany({id:id_libro})
            const libro=await Libro.findOne({id:id_libro})
            if(libro==null){
                assert(1,1)
            }
            else{
                assert.fail("No se borró")
            }
        })
    })
}