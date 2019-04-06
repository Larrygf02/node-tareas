
const { argv } = require('./config/yargs');

let comando = argv._[0];

const crearTarea = require('./views/tareas')

switch(comando) {
    case 'crear':
        let tarea = crearTarea.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no es reconocido');

}

