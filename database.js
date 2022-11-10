//Importing connection with Mongoose module
const mongo = require('mongoose');

//Setting up connection
(async () => {//Creating await function and running it
    try {
        //Connection String
        const db = await mongo.connect("mongodb://localhost:27017/db_MiDulceOnline");

        //Checking the connection
        console.log("Conexion establecida en: ", db.connection.name);
    } catch (error) {
        //Catching error
        console.log(error);
    }
})();