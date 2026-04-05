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
//Funcion para renderizar todas las tareas en pantalla a partir del array tareas, mostrar la tarea en pantalla
function rendarizarTareas() {
    listaTarea.innerHTML = "";
    tareas.forEach((tarea) => {
        //crea un elemento tipo lista en memoria
        const li = document.createElement('li');
        li.className = `tarjetaTarea ${tarea.done ? 'is-done' : ''} ${tarea.urgent ? 'is-urgent' : ''} `;

        // Inserta los elementos HTML en la etiqueta li
        li.innerHTML = `
        <strong>${tarea.emoji}</strong> ${tarea.text}

        <div class="acciones">
          <button onclick="marcarHecha(${tarea.id})">✅ Hecha</button>
        <button onclick="marcarUrgente(${tarea.id})">⚠️ Urgente</button>
        <button onclick="eliminarTarea(${tarea.id})">🗑️ Eliminar</button>
        </div>
        `;
    listaTarea.appendChild(li);
});
actualizarTareasCompletadas();
}

