const app = require("./app");
var port = 4000;
var mongoose = require('./database');
var router = require('./src/routers/Dulces.routes');

app.listen(port, () =>{
    console.log("Servidor activo en el puerto: "+port);
});

app.use(router);

router.get("/", (req, res) => {
    res.send("App Working");
}) ;