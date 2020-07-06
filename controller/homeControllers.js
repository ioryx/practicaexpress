const fs = require("fs");
const db = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

const homeControllers = {
    index: (req, res) => {
        res.write("Bienvenidoa nuestro CENTRO DE SUCURSALES");
        res.write("\n\n")
        res.write("Estas son Nuestras Sucursales\n")
        res.write("-----------------------------\n")
        db.forEach((element) => {
            res.write(">>")
            rte(" " + element.sucursal + "\n\n")
        })
        res.write("-----------------------------\n")
        res.write("-----------------------------\n")
        res.end()
    },
};
module.exports = homeControllers;