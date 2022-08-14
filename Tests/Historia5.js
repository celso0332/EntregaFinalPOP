require("dotenv").config();

const Inventario = require("../Models/Inventario");
const Usuario = require("../Models/Usuarios");
var assert = require("assert");
require('../mongoose');

module.exports= function(){
    describe("Como supervisor y almacenista de sucursal podrán crear los inventarios de su sucursal.", function(){
        it("Crear nuevo inventario.",async function(){
            puesto="supervisor"
            if(puesto=="supervisor"|| puesto=="almacenista"){
            const Usuarios=await Usuario.find({puesto:puesto})
            const nuevoInventario=await Inventario.create({
                id:1,
                id_sucursal:1,
                id_Supervisor:10,
                fecha:"10/jun/2022",
                listaLibros:[]
            })
            const InventarioNew=await Inventario.findOne({id:nuevoInventario.id})
            if(nuevoInventario.id==InventarioNew.id){
                assert(nuevoInventario.id, InventarioNew.id)
            }
            else{
                assert.fail()
            }
            }else{
            assert.fail("Solo un supervisor o almacenista puede crear un nuevo inventario")
            }
        })
       

    })

}
