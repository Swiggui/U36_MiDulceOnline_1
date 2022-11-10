const Dulce = require("../models/Dulces");

const dulceGuardar = async (req, res) => {
    try {
        const dulce = new Dulce(req.body);
    } catch (error) {
        
    }
}