require("dotenv").config();

const Reporte = require("../Models/Reporte");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como vendedor podrá realizar ventas.", function(){
        it("Agregar ventas al reporte.",async function(){
            const reporte= await Reporte.findOne({id:1})
            var id_libro=4;
            var list=reporte.listVentas
            var existe=list.filter(id=>id==id_libro)
            if(existe.length==0){
                list.push(id_libro)
                console.log(list)
                const modificado=await Reporte.findByIdAndUpdate({id:1},{listVentas:list})
                const  buscar = await Reporte.findOne({id:1})
                var longitud=list.length
                var longitudNueva=(buscar.listVentas).length
                assert(longitud, longitudNueva)
            }else{
                assert("Ya agregado")
            }

        })
    })
    
    
}