const Venta = require("../Models/Venta");

module.exports = async function(){
    await Venta.create({
        id:1,
        id_libro:1,
        precio:150
    });
    await Venta.create({
        id:2,
        id_libro:2,
        precio:150
    });
    await Venta.create({
        id:3,
        id_libro:3,
        precio:150
    });

}