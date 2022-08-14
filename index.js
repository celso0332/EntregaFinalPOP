require("dotenv").config();
require('./mongoose');
const Registro = require("./Registros/Registro_Usuario");
const Registro_Inventario = require("./Registros/Registro_Inventario");
const Registro_Ventas = require("./Registros/Registro_Ventas");
const Registro_Reportes = require("./Registros/Registro_Reportes");
const Registro_Libro = require("./Registros/Registro_Libro");

const Prueba01=require("./Tests/Historia1");
const Prueba02=require("./Tests/Historia2")
const Prueba03=require("./Tests/Historia3")
const Prueba04=require("./Tests/Historia4")
const Prueba05=require("./Tests/Historia5")
const Prueba06=require("./Tests/Historia6")
const Prueba07=require("./Tests/Historia7")
const Prueba08=require("./Tests/Historia8")
const Prueba09=require("./Tests/Historia9")
const Prueba10=require("./Tests/Historia10")

const Usuario = require("./Models/Usuarios");
const Venta = require("./Models/Venta");
const Reporte = require("./Models/Reporte");
const Inventario = require("./Models/Inventario");
const Sucursal = require("./Models/Sucursal");
const Libro = require("./Models/Libro");

describe("Pruebas Unitarias", function(){
    before("Registro", function(){
        Registro_Inventario()
        Registro_Libro()
        Registro_Ventas()
        Registro_Reportes()
    })
    it("funcion", function(){
    Prueba01()
    Prueba02()
    Prueba03()
    Prueba04()
    Prueba05()
    Prueba06()
    Prueba07()
    Prueba08()
    Prueba09()
    Prueba10()
    })
   

    after(async function(){
        const eliminar1=await Usuario.deleteMany()      
        const eliminar2=await Venta.deleteMany()
        const eliminar3=await Reporte.deleteMany()
        const eliminar4=await Inventario.deleteMany()
        const eliminar5=await Sucursal.deleteMany()
        const eliminar6=await Libro.deleteMany()
        Registro()
        Registro_Inventario()
        Registro_Libro()
        Registro_Ventas()
        Registro_Reportes()

        
    })    
})
