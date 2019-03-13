var base = require('./mpc-general.json');
var fs = require('fs');


var prevArchivos = "Z-CAPITAL-";
var archivos = ["PS+Z+2",
    "TC+Z+3",
    "PS+TC+Z+5",
    "TR+TC+Z+5",
    "OR+TR+TC+Z+8",
    "PS+OR+TC+Z+8"];

archivos.forEach(archivo => {

    var palabras = [];

    if (archivo === "PS+Z+2") {
        base.zona.forEach(z => {
            base.psicologos.forEach(ps => {
                palabras.push(z + " " + ps);
                palabras.push(ps + " " + z);
            })
        })
    }

    if (archivo === "TC+Z+3") {
        base.zona.forEach(z => {
            base.tipoConsulta.forEach(tc => {
                palabras.push(z + " " + tc);
                palabras.push(tc + " " + z);
            })
        })
    }

    if (archivo === "PS+TC+Z+5") {
        base.zona.forEach(z => {
            base.tipoConsulta.forEach(tc => {
                base.psicologos.forEach(ps => {
                    palabras.push(z + " " + tc + " " + ps);
                    palabras.push(z + " " + ps + " " + tc);
                    palabras.push(tc + " " + z + " " + ps);
                    palabras.push(tc + " " + ps + " " + z);
                    palabras.push(ps + " " + tc + " " + z);
                    palabras.push(ps + " " + z + " " + tc);
                })
            })
        })
    }

    if (archivo === "TR+TC+Z+5") {
        base.zona.forEach(z => {
            base.tipoConsulta.forEach(tc => {
                base.tratamiento.forEach(tr => {
                    palabras.push(z + " " + tc + " " + tr);
                    palabras.push(z + " " + tr + " " + tc);
                    palabras.push(tc + " " + z + " " + tr);
                    palabras.push(tc + " " + tr + " " + z);
                    palabras.push(tr + " " + tc + " " + z);
                    palabras.push(tr + " " + z + " " + tc);
                })
            })
        })
    }

    if (archivo === "OR+TR+TC+Z+8") {
        base.zona.forEach(z => {
            base.tipoConsulta.forEach(tc => {
                base.tratamiento.forEach(tr => {
                    base.orientacion.forEach(or => {
                        palabras.push(z + " " + tc + " " + tr + " " + or);
                        palabras.push(z + " " + tc + " " + or + " " + tr);
                        palabras.push(z + " " + tr + " " + tc + " " + or);
                        palabras.push(z + " " + tr + " " + or + " " + tc);
                        palabras.push(z + " " + or + " " + tr + " " + tc);
                        palabras.push(z + " " + or + " " + tc + " " + tr);

                        palabras.push(tc + " " + z + " " + tr + " " + or);
                        palabras.push(tc + " " + z + " " + or + " " + tr);
                        palabras.push(tc + " " + tr + " " + z + " " + or);
                        palabras.push(tc + " " + tr + " " + or + " " + z);
                        palabras.push(tc + " " + or + " " + tr + " " + z);
                        palabras.push(tc + " " + or + " " + z + " " + tr);

                        palabras.push(tr + " " + z + " " + tc + " " + or);
                        palabras.push(tr + " " + z + " " + or + " " + tc);
                        palabras.push(tr + " " + tc + " " + z + " " + or);
                        palabras.push(tr + " " + tc + " " + or + " " + z);
                        palabras.push(tr + " " + or + " " + tc + " " + z);
                        palabras.push(tr + " " + or + " " + z + " " + tc);
                    })

                })
            })
        })
    }

    if (archivo === "PS+OR+TC+Z+8") {
        base.zona.forEach(z => {
            base.tipoConsulta.forEach(tc => {
                base.psicologos.forEach(ps => {
                    base.orientacion.forEach(or => {
                        palabras.push(z + " " + tc + " " + ps + " " + or);
                        palabras.push(z + " " + tc + " " + or + " " + ps);
                        palabras.push(z + " " + ps + " " + tc + " " + or);
                        palabras.push(z + " " + ps + " " + or + " " + tc);
                        palabras.push(z + " " + or + " " + ps + " " + tc);
                        palabras.push(z + " " + or + " " + tc + " " + ps);

                        palabras.push(tc + " " + z + " " + ps + " " + or);
                        palabras.push(tc + " " + z + " " + or + " " + ps);
                        palabras.push(tc + " " + ps + " " + z + " " + or);
                        palabras.push(tc + " " + ps + " " + or + " " + z);
                        palabras.push(tc + " " + or + " " + ps + " " + z);
                        palabras.push(tc + " " + or + " " + z + " " + ps);

                        palabras.push(ps + " " + z + " " + tc + " " + or);
                        palabras.push(ps + " " + z + " " + or + " " + tc);
                        palabras.push(ps + " " + tc + " " + z + " " + or);
                        palabras.push(ps + " " + tc + " " + or + " " + z);
                        palabras.push(ps + " " + or + " " + tc + " " + z);
                        palabras.push(ps + " " + or + " " + z + " " + tc);
                    })

                })
            })
        })
    }
<<<<<<< HEAD
});
=======

    //ELIMINAMOS LAS QUE NO RESPETAN LOS PARAMETROS
    palabras = palabras.filter((p,i) =>
        // no mas de 10 palabras no mas de 80 caracteres menos de 20000 lineas
        (p.split(" ").length < 11 && p.length < 81 && i<20000)
    );



    fs.writeFile('./gruposPC/'+prevArchivos + archivo + '.csv', palabras.join("\n"), function (err) {
        if (err) {
            console.log('Hubo un error');
        } else {
            console.log('Archivo ' + prevArchivos + archivo);
        }
    });

})







>>>>>>> 39bd2992ee736e94e47e285e5f31cb92d9f1ee4d
