require("dotenv").config();

const Usuario = require("../Models/Usuarios");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como usuarios con permisos podrán dar de baja cuentas de nivel inferior", function(){
        
        it("Eliminación de cuenta exitosa",async function(){
        const admin=await Usuario.findOne({correo:"admin@ejemplo.com"})
        const empleado=await Usuario.findOne({correo:"empleado01@ejemplo.com"}) 
        var puestoAdmin=admin.puesto;
        var puestoEmpleado=empleado.puesto
        if(((puestoAdmin=="administrador")||(puestoAdmin=="supervisor"))&&((puestoEmpleado=="vendedor")||(puestoEmpleado=="almacenista"))){
            const puestos=await Usuario.findOneAndDelete({id:empleado.id})
            assert("administrador",puestoAdmin)
        }
        else{
            assert.fail("Solo un adminstrador o supervisor pueden borrar cuentas")
        }
        })
    })
    }
