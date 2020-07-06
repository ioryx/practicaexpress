const fs = require("fs"); //requiero fs para trabajar con JSON
const db = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8")); //parseo el JSON

const auto = {
    index: (req, res) => {
        res.set({ "content-type": "text/plain;charset=utf-8" })
        let cantidad = 0;
        db.forEach((element) => { cantidad += element.autos.length; })
        res.write("ESTOS SON TODOS NUESTROS AUTOS\n")
        res.write("--------------------------------\n")
        res.write("cantidad de autos: " + cantidad)
        res.write("\n--------------------------------\n")
        db.forEach((element) => {
            element.autos.forEach((element) => {
                res.write("Marca: " + element.marca + "\n")
                res.write("Modelo: " + element.modelo + "\n")
                res.write("Año: " + element.anio + "\n")
                res.write("Color: " + element.color + "\n")
                res.write("---------------------------\n")
                res.write("---------------------------\n")
            })
        })
        res.end()
    },
    id: (req, res) => {
        res.set({ "content-type": "text/plain;charset=utf-8" })
        let idMarca = req.params.marca
        res.write("ESTOS SON LOS AUTOS DISPONIBLES DE LA MARCA")
        res.write("\n--------------------------------\n\n")
        db.forEach((element) => {
            element.autos.forEach((element) => {
                if (element.marca == idMarca) {
                    res.write("Marca: " + element.marca + "\n")
                    res.write("Modelo: " + element.modelo + "\n")
                    res.write("Año: " + element.anio + "\n")
                    res.write("Color: " + element.color + "\n")
                    res.write("----------------------------\n")
                    res.write("----------------------------\n")
                }
            })
        })
        res.end()
    },



};
module.exports = auto;