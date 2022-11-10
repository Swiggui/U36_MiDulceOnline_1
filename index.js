const app = require("./app");
var port = 4000;

app.listen(port, () =>{
    console.log("Servidor activo en el puerto: "+port);
});