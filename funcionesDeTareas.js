const fs = require('fs');

//creamos un objeto literal, que tiene la propiedad de leer el archivo
let archivoTareas = {
    archivo: 'tareas.json',

    leerArchivo: function(){
    return JSON.parse(fs.readFileSync('tareas.json','utf8'));
    },
    
    escribirArchivo: function(nuevaTarea)    {
        let tareasListado= this.leerArchivo();
        tareasListado.push(nuevaTarea);
        let tareasJSON = JSON.stringify(tareasListado);
        fs.writeFileSync('tareas.json', tareasJSON,'utf8'); 
        console.log("<<<Se agregó correctamente la tarea: " + nuevaTarea.titulo + " >>>"); 
    },
    leerPorEstado: function(estado)     {
        let tareasListado=this.leerArchivo();
        return tareasListado.filter(filtrarPorEstado);
  
    function filtrarPorEstado(tareasListado){
            if (tareasListado.estado == estado){
                return true;
            }
        }        
    },
    eliminarTarea: function (tarea){
        // usé dos metodos aprendidos googleando ".finIndex" y ".splice"
        let tareasListado=this.leerArchivo();
        let indiceEliminar=tareasListado.findIndex(element=>{
            return element.titulo==tarea;
        })
        tareasListado.splice(indiceEliminar,1);
        console.log("<<< Se eliminó correctamente la tarea: " + tarea + " >>>");
        let tareasJSON = JSON.stringify(tareasListado);
        fs.writeFileSync('tareas.json', tareasJSON,'utf8');
        },
        
    modificarEstado : function(tareaModificar, estadoModificar){
        let tareasListado = this.leerArchivo();
         tareasListado.map(modificarEstado);
        let tareasJSON = JSON.stringify(tareasListado);
        fs.writeFileSync('tareas.json', tareasJSON,'utf8'); 
        console.log("<<< Se modificó correctamente la tarea: " + tareaModificar + " >>>");
    
        function modificarEstado(lista){
           if(lista.titulo==tareaModificar){
            lista.estado=estadoModificar;
            }
        } 
        
    }
    
}
module.exports = archivoTareas;