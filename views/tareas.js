const fs = require('fs')

let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo agregar el archivo', err);
    })
}

const cargarDB = () => {
    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }
    return listadoTareas;
}
 
const crear = (description) => {

    cargarDB();

    let tarea = {
        description,
        completado: false
    };
    listadoTareas.push(tarea);
    guardarDB();
    return tarea;
}

const listar = (completado) => {
    cargarDB();
    if (completado === undefined){
        return listadoTareas
    }
    return listadoTareas.filter(tarea => {
        return tarea.completado === JSON.parse(completado)
    });
}

const actualizar = (description, completado=true) => {
    cargarDB();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.description == description
    })
    if (index >= 0){
        listadoTareas[index].completado = JSON.parse(completado);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (description) => {
    cargarDB();
    let index = listadoTareas.findIndex(tarea => {
        return tarea.description == description
    })
    if (index >=0){
        listadoTareas.splice(index, 1)
        guardarDB();
        return {
            'success': 1,
            'verbose': 'Se elimino correctamente'
        }
    }else{
        return {
            'success':0,
            'verbose': `No existe el elemento con description ${description}`
        }
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}