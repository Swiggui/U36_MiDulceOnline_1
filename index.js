const app = require("./app");
var port = 4000;
var mongoose = require('./database');
var router = require('./src/routers/Dulces.routes');
var cors = require('cors');

app.use(cors());

app.listen(port, () =>{
    console.log("Servidor activo en el puerto: "+port);
});

app.use(router);

router.get("/", (req, res) => {
    res.send("App Working");
}) ;