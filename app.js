const { escribirArchivo } = require('./funcionesDeTareas');
let archivoTareas = require('./funcionesDeTareas');


let accion = process.argv[2];

switch(accion) {
    
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(element => {
            console.log(element);
        });
        break;
    case "nueva":
        let nuevaTarea = { titulo: process.argv[3], estado: 'Pendiente'};
        archivoTareas.escribirArchivo(nuevaTarea);
        break;
    case "filtrar":
        let filtradoTareas= archivoTareas.leerPorEstado(process.argv[3]);
        filtradoTareas.forEach(function(tarea){
            console.log("<tarea : " + tarea.titulo + " " +"estado : "+ tarea.estado + ">");
        })
        break;
    case "borrar":
        let borrarTarea =process.argv[3];
        archivoTareas.eliminarTarea(borrarTarea);
        break;
    case "modificar":
        let tareaModificar =process.argv[3];
        let estadoModificar =process.argv[4];
        archivoTareas.modificarEstado(tareaModificar,estadoModificar);
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
