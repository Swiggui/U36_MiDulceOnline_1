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

//Consultar por ID
const dulcesporID = async (req, res) => {
    try {
        const id = req.params.id;
        const dulce = await Dulce.findById(id);
        res.status(200).send(dulce);
    } catch (error) {
        console.log(error);
    }
}

//Actualizar productos
const editarDulces = async (req, res) => {
    try {
        const id = req.params.id;
        const dulce = req.body;
        await Dulce.findByIdAndUpdate(id, dulce);
        res.send("Dulce editado correctamente");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    guardarDulces,
    listarDulces,
    dulcesporID,
    editarDulces
}