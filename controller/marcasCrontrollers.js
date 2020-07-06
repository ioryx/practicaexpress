const fs = require("fs")
const db = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))

const marcasControllers = {
    index: (req, res) => {
        res.set({ "content-type": "text/plain;charset=utf-8" })
        let marcas = []
        res.write("ESTAS SON TODAS NUESTRAS MARCAS: \n")
        res.write("-----------------------------------\n")
        db.forEach((element) => {
            element.autos.forEach((element) => {
                if (!marcas.includes(element.marca)) {
                    marcas.push(element.marca)
                }
            })
        })
        marcas.forEach((element) => {
            res.write(">Marcas: " + element + "\n")
        })
        res.end()
    },
    id: (req, res) => {
        res.set({ "content-type": "text/plain;charset=utf-8" })
        let id = req.params.marca
        res.write("ESTOS SON LOS AUTOS DE LA MARCA " + ">>" + id.toUpperCase() + "<<\n\n")
        db.forEach((element) => {
            element.autos.forEach((element) => {
                if (element.marca == id) {
                    res.write("Marca: " + element.marca + "\n")
                    res.write("Modelo: " + element.modelo + "\n")
                    res.write("Año: " + element.anio + "\n")
                }
            })
        })
        res.end()
    },
}
module.exports = marcasControllers;