const fs = require('fs')

let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo agregar el archivo', err);
    })
}
 
const crear = (description) => {
    let tarea = {
        description,
        completado: false
    };
    listadoTareas.push(tarea);
    guardarDB();

    return tarea;
}

module.exports = {
    crear
}