let tareas = [];


const inputTarea = document.getElementById("input_tarea");
const selectCategoria = document.getElementById("selectTarea");
const otraCategoria = document.getElementById("otraCategoria");
const listaTarea = document.getElementById("listaTaeas");
const errorMensaje = document.getElementById("mensajeError");

//Funcion para mostrar un input adicional cuando el usuario selecciona otra categoria
function selectOtraCategoria() {
    if (selectCategoria.value === "Otra") {
        otraCategoria.style.display = "block";
    } else {
        otraCategoria.style.display = "none";
    }
};
//Funcion para calcular el total de tareas y cuantas estan completadas
function actualizarTareasCompletadas() {
    const total = tareas.length;
    const completadas = tareas.filter(t => t.done).length
    //Se actualiza el DOM con los valores 
    document.getElementById("totalTareas").textContent = total;
    document.getElementById("cantidadCompletadas").textContent = completadas;
    console.log(`Tareas actualizadas:${completadas}/${total}`);
}
function rendarizarTareas(){
    
}
