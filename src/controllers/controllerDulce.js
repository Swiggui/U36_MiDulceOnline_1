const Dulce = require("../models/Dulces");
const jwt = require("jsonwebtoken");

//Guardar dulce
const guardarDulces = async (req, res) => {
    try {
        const { referencia } = req.body;
        let candie = await Dulce.findOne({referencia});

        if(candie){
            return res.status(400).json({ aviso: "Dulce Existente" });
        } else {
            const dulce = new Dulce(req.body);
            await dulce.save();
            res.status(200).json({aviso: "Dulce almacenado correctamente"});
        }

        const payload = {
            Dulce: { id: Dulce.id },
          };
      
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
              expiresIn: 3600, //1 hora
            },
            (error, token) => {
              if (error) throw error;
      
              //Mensaje de confirmación
              res.json({ token });
            }
        );
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
        if(id){
            const dulce = await Dulce.findById(id);
            res.status(200).send(dulce);
        } else {
            res.send("No se puede tramitar la petición"); 
        }
    } catch (error) {
        console.log(error);
    }
}

//Eliminar dulce
const eliminarDulce = async (req, res) => {
    try {
        const id = req.params.id;
        await Dulce.findByIdAndDelete(id);
        res.status(200).json({ aviso: "Dulce eliminado correctamente"});

        const payload = {
            Dulce: { id: Dulce.id },
        };
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
              expiresIn: 3600, //1 hora
            },
            (error, token) => {
              if (error) throw error;
              //Mensaje de confirmación
              res.json({ token });
            }
        );
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
        return res.status(200).json({ aviso: "Dulce editado correctamente"});
        const payload = {
            dulce: { id: dulce.id },
        };
      
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
              expiresIn: 3600, //1 hora
            },
            (error, token) => {
              if (error) throw error;
      
              //Mensaje de confirmación
              res.json({ token });
            }
        );
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    guardarDulces,
    listarDulces,
    dulcesporID,
    editarDulces,
    eliminarDulce
}