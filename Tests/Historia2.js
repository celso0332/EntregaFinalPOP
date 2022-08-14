require("dotenv").config();

const Usuario = require("../Models/Usuarios");
var assert = require("assert");
require('../mongoose');

module.exports=function(){
    describe("Como usuarios registrados podrán iniciar sesión", function(){
        
        it("Realizar el login con éxito",async function(){
            var Email="empleado01@ejemplo.com"
            var password="12345"
            const login=await Usuario.findOne({correo:Email,password:password})
            if(login){
                correos=login.correo
                pass=login.password
                assert({correos,pass},{Email,password})
            }
            else{
            assert.fail("credenciales introducidas no se reconocen")
            }
        })

       
    })
    
}


