
const { argv } = require('./config/yargs');
const colors = require('colors')

let comando = argv._[0];

const tareasView = require('./views/tareas')

switch(comando) {
    case 'crear':
        let tarea = tareasView.crear(argv.description);
        console.log(tarea);
        break;
    case 'listar':
        let tareas = tareasView.listar();
        console.log("=====Tareas======".green);
        for (let tarea of tareas) {
            console.log(tarea.description);
            console.log(`Estado: ${tarea.completado}`);
            console.log("-----------------");
        }
        console.log("==============".green);
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando no es reconocido');

}

