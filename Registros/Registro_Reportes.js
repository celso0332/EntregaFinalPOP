const Reporte = require("../Models/Reporte");
module.exports = async function(){
    await Reporte.create({
        id:1,
        id_sucursal:1,       
        id_supervisor:3,       
        listVentas:[4,3],
        fecha:"13/Ago/2022",
    });

}