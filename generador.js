var base = require('./pc-ansiedad-zona.json');
var fs = require('fs');

var palabras = [];

// console.log(base.prev)

base.prev.forEach(p => {
    base.clave.forEach((c) => {
        palabras.push(p + ' ' + c)//JUNTAMOS PREV Y CLAVE
    })
});

palabras = palabras.reduce((a, p) => {
    base.zonas.forEach(z => {
        a.push(p + ' ' + z);//AGREGAMOS ZONA AL FINAL
        a.push(z + ' ' + p);//AGREGAMOS ZONA AL PRINCIPIO
    })
    return a;
}, [])


palabras = palabras.concat(base.solas);

//ELIMINAMOS LAS QUE NO RESPETAN LOS PARAMETROS


palabras = palabras.filter(p=>

    // no mas de 10 palabras no mas de 80 caracteres  
    // console.log(p.replace(/\s/g, "").length);  
    (p.split(" ").length<11 && p.length<81)


);

fs.writeFile('palabras-ansiedad-zona.csv', palabras.join("\n"), function (err) {
    if (err) {
        console.log('Hubo un error');
    } else {
        console.log('Archivo generado con exito');
    }
});