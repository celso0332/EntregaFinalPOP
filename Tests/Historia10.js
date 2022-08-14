require("dotenv").config();

const Libro = require("../Models/Libro");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como Usuario podrá revisar los datos de libros", function(){
        it("Consulta de libros",async function(){
            var libro="Libro1"
            const buscar= await Libro.findOne({titulo:libro})
            if(buscar){
                assert(libro, buscar.titulo)
            }else{
                assert.fail()
            }
        })
        it("Libro no existe",async function(){
            var libro="Narnia"
           var noexiste=true
            const buscar=await Libro.findOne({titulo:libro})
            if(buscar){
                noexiste=false
                assert.fail()
            }
            else{
                
                assert(noexiste,true)
            }
        })
    })
}
 