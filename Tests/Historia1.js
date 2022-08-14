require("dotenv").config();
const Usuario = require("../Models/Usuarios");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
describe("Como usuarios con privilegios podrán registrar nuevos usuarios",async function(){    
    it("Registrar nueva cuenta de empleado",async function(){
       const newEmpleado=await Usuario.create({
        id:10,
        id_sucursal:1,
        nombre:"Empleado 1",
        edad:20,
        correo:"empleado10@ejemplo.com",
        user:"user10",
        password:"123456",
        puesto:"supervisor"        
       });
       //BNR====="Buscar Nuevo Registro"
       const BNR = await Usuario.findOne({id:newEmpleado.id});
       if(BNR){

        assert(BNR.id, newEmpleado.id)
       }else{
        assert.fail()
       }
    });
    it("Cuenta duplicada", async function(){
        var correoRegistrado="empleado10@ejemplo.com";
        var duplicado =await Usuario.findOne({correo:correoRegistrado})
        if(duplicado){
        assert(correoRegistrado, duplicado.correo)
        }
        else{
        assert.fail()
        }
    })
    it("Validar datos",async function(){
        var contador=0
        var ListaAtributos=[11, 3, "Hector", 24, "empleado11@ejemplo.com", "user11", "12345", "vendedor"];
   
        if((typeof ListaAtributos[0])=='number'){
            contador=contador+1
        }
        if((typeof ListaAtributos[1]) =='number'){
            contador=contador+1;
        }
        if((typeof ListaAtributos[2]) =='string'){
            contador=contador+1;
        }
        if((typeof ListaAtributos[3]) =='number'){
            contador=contador+1;
        }
        if((typeof ListaAtributos[4]) =='string'){
            contador=contador+1;
        }
        if((typeof ListaAtributos[5] )=='string'){
            contador=contador+1;
        }
        if((typeof ListaAtributos[6]) =='string'){
            contador=contador+1;
        }
        if((typeof ListaAtributos[7]) =='string'){
            contador=contador+1;
        }
        if(contador==8){
        assert.equal(contador, 8)
        }else{
            assert.fail()
        }

    })
   
  })
}
