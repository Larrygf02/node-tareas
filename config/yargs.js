const description = {
    description: {
        demand: true,
        alias: 'd'
    }
}
const argv = require('yargs')
                    .command('crear','Crear un elemento por hacer', description)
                    .command('actualizar', 'Actualiza el estado completado de una tarea', {
                        ...description,
                        completado: {
                            alias: 'c',
                            default: true
                        }
                    })
                    .help()
                    .argv;

module.exports = {
    argv
}