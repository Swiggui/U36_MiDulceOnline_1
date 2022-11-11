const Dulce = require("../models/Dulces");

const dulceGuardar = async (req, res) => {
    try {
        const dulce = new Dulce(req.body);
        await dulce.save();
        res.send("Dulce almacenado correctamente");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    dulceGuardar
}