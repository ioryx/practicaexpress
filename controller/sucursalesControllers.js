const fs = require("fs");
const db = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

const sucursalesControllers = {
    index: (req, res) => {
        res.set({ "content-type": "text/plain;charset=utf-8" })
        res.write("ESTAS SON NUESTRAS SUCURSALES\n")
        res.write("-------------------------------\n")
        db.forEach((element) => {
            res.write(`Sucursal: ${element.sucursal} \n`)
            res.write(`Direccion: ${element.direccion} \n`)
            res.write(`telefono: ${element.telefono} \n`)
            res.write("\n\n")
        })
        res.end()
    },
    id: (req, res) => {
        res.set({ "content-type": "text/plain;charset=utf-8" })
        let idSucursal = req.params.sucursal
        db.forEach((element) => {
            if (element.sucursal == idSucursal) {
                res.write("Sucursal: " + element.sucursal + "\n")
                res.write("Direccion: " + element.direccion + "\n")
                res.write("Telefono: " + element.telefono + "\n")
                res.write("----------------------------------\n\n")
                element.autos.forEach((element) => {
                    res.write("------------------------------\n")
                    res.write("Marca: " + element.marca + "\n")
                    res.write("Modelo: " + element.modelo + "\n")
                    res.write("Año: " + element.anio + "\n")
                    res.write("Color: " + element.color + "\n")
                    res.write("\n------------------------------")
                })
                res.end()
            }
        })
        res.send("ERROR-404")
    }
};

module.exports = sucursalesControllers;