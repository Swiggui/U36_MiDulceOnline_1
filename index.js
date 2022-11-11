const app = require("./app");
var port = 4000;
var mongoose = require('./database');
var dulceRouter = require('./src/routers/Dulces.routes');

app.listen(port, () =>{
    console.log("Servidor activo en el puerto: "+port);
});

app.use("/dulce", dulceRouter);

app.get("/", (req, res) => {
    res.send("App Working");
}) ;