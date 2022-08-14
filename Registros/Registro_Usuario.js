const Usuario = require("../Models/Usuarios");

module.exports = async function(){
    await Usuario.create({
        id:1,
        id_sucursal:1,
        nombre:"Empleado 1",
        edad:"25",
        correo:"empleado01@ejemplo.com",
        usuario:"Usuario01",
        password:"12345",
        puesto:"vendedor"
    });
    await Usuario.create({
        id:3,
        id_sucursal:1,
        nombre:"supervisor 1",
        edad:"25",
        correo:"supervisor01@ejemplo.com",
        usuario:"Usuario10",
        password:"12345",
        puesto:"supervisor"
    });
    await Usuario.create({
        id:2,
        id_sucursal:1,
        nombre:"Admin",
        edad:"40",
        correo:"admin@ejemplo.com",
        usuario:"admin",
        password:"12345",
        puesto:"administrador"
    });
}

