const description = {
    description: {
        demand: true,
        alias: 'd'
    }
}
const completado = {
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
                    .command('crear','Crear un elemento por hacer', description)
                    .command('actualizar', 'Actualiza el estado completado de una tarea', {
                        ...description,
                        ...completado
                    })
                    .command('listar', 'Lista las tareas por un filtro', {
                        completado: {
                            alias: 'c'
                        }
                    }) 
                    .command('borrar', 'Borra un elemento pasandole la description', description)
                    .help()
                    .argv;

module.exports = {
    argv
}