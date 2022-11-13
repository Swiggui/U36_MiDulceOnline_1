const app = require("./app");
var port = 4000;
var mongoose = require('./database');
var dulceRouter = require('./src/routers/Dulces.routes');
var usuarioRouter = require('./src/routers/Usuarios.routes');
var cors = require('cors');

app.listen(port, () =>{
    console.log("Servidor activo en el puerto: "+port);
});

app.use("/dulce", dulceRouter);
app.use("/usuario", usuarioRouter);

app.get("/", (req, res) => {
    res.send("App Working");
}) ;