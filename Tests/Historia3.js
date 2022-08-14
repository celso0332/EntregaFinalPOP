require("dotenv").config();
const Usuario = require("../Models/Usuarios");
const Sucursal = require("../Models/Sucursal");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como administrador podrá registrar nuevas sucursales", function(){
        it("Registrar con éxito nueva sucursal", async function(){
            const administrador = await Usuario.findOne({puesto:"administrador"})
            if(administrador){
                const newSucursal=await Sucursal.create({
                    id:10,
                    nombre:"Sucursal01",
                    direccion:"Macroplaza"
                   });
                const creado = await Sucursal.findOne({id:newSucursal.id})
                if(creado){
                    assert(newSucursal.id, creado.id)
                }else{
                    assert.fail("Sucursal no registrada")
                }
            }else{
                assert.fail("Usuario no es adminitrador")
            }
        })
        it("Sucursal duplicada por ubicación",async function(){
            var nombre="sucursal1"
            var direccion="macroplaza"
            const sucursalExiste=await Sucursal.findOne({nombre:nombre, direccion:direccion})
            if(sucursalExiste){
                var nombres=sucursalExiste.nombre
                var direcciones=sucursalExiste.direccion
                assert.equal({nombres,direcciones},{nombre, direccion})
            }else{
                const newSucursal2=await Sucursal.create({
                    id:10,
                    nombre:"Sucursal1",
                    direccion:"Macroplaza"
                });
            }
        })
    })
}