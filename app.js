const express = require("express"); //requiero express
const app = express(); //asigno express a una variable

//<---rutas requeridas--->
const rutaAuto = require("./routes/autos.js");
const rutaHome = require("./routes/home.js");
const rutaMarca = require("./routes/marcas.js");
const rutaSucursal = require("./routes/sucursales.js");
//<---levantando servidor--->
app.listen(3030, () => console.log("servidor en linea ok-"));
//<---llamando metodos de express--->
app.use("/", rutaHome);
app.use("/sucursales", rutaSucursal);
app.use("/autos", rutaAuto);
app.use("/marcas", rutaMarca);