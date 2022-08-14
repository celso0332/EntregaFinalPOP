const Inventario = require("../Models/Inventario");

module.exports = async function(){
    await Inventario.create({
        id:3,
        id_sucursal:3,
        id_Supervisor:3,
        fecha:"10/feb/2022",
        listaLibros:[1,2,3]
    });
    await Inventario.create({
        id:2,
        id_sucursal:2,
        id_Supervisor:2,
        fecha:"10/feb/2022",
        listaLibros:[2,4]
    });
  
   
}

