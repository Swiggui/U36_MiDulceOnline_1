const Dulce = require("../models/Dulces");

//Guardar dulce
const guardarDulces = async (req, res) => {
    try {
        const dulce = new Dulce(req.body);
        await dulce.save();
        res.send("Dulce almacenado correctamente");
    } catch (error) {
        console.log(error);
    }
}

//Leer dulces
const listarDulces = async (req, res) => {
    try {
        const listaDulces = await Dulce.find();
        res.status(200).send(listaDulces);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    guardarDulces,
    listarDulces
}