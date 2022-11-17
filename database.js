//Importing connection with Mongoose module
const mongo = require('mongoose');

//Setting up connection
(async () => {//Creating await function and running it
    try {
        //Connection String
        const db = await mongo.connect("mongodb+srv://Swiggui:Swiggui2200@cluster0.im632uv.mongodb.net/miDulceOnline?retryWrites=true&w=majority");

        //Checking the connectiony
        console.log("Conexion establecida en: ", db.connection.name);
    } catch (error) {
        //Catching error
        console.log(error);
    }
})();