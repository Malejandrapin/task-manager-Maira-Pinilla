let tareas = [];


const inputTarea = document.getElementById("input_tarea");
const selectCategoria = document.getElementById("selectTarea");
const otraCategoria = document.getElementById("otraCategoria");
const listaTarea = document.getElementById("listaTareas");
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
    const completadas = tareas.filter(t => t.done).length;
    //Se actualiza el DOM con los valores 
    document.getElementById("totalTareas").textContent = total;
    document.getElementById("cantidadCompletadas").textContent = completadas;
    console.log(`Tareas actualizadas:${completadas}/${total}`);
}

//Funcion para el boton agregar tarea
document.getElementById('btnAgregarTarea').addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    let categoria = selectCategoria.value;

    if (texto === "") {
        errorMensaje.style.display = "block";
        return;
    }
    // Validamos si se ha seleccionado una categoria
    if (!categoria) {
        errorMensaje.innerText = "⚠️ Debes seleccionar una categoria";
        errorMensaje.style.display = "block";
        return;
    }
    errorMensaje.style.display = "none";
    errorMensaje.innerHTML = "⚠️Debes agregar una tarea";
    // Valida si el usuario selecciono "Otra categoria" y dejo el input en blanco, usar por defecto Otra
    if (categoria === "Otra") {
        const defectoCategoria = otraCategoria.value.trim(); categoria = defectoCategoria ? "🏷️ " + defectoCategoria : "🏷️ Otra";
    }

    tareas.push({
        texto: texto,
        categoria: categoria,
        done: false,
        urgent: false
    });
    console.log("✅ La tarea ha sido agregada con éxito");
    inputTarea.value = "";
    selectCategoria.value = "";
    otraCategoria.value = "";
    selectOtraCategoria();
    renderizarTareas();

});

//Funcion para renderizar todas las tareas en pantalla a partir del array tareas, mostrar la tarea en pantalla
function renderizarTareas() {
    listaTarea.innerHTML = "";
    tareas.forEach((tarea, index) => {
        //crea un elemento tipo lista en memoria
        const li = document.createElement('li');
        li.className = `tarjetaTarea ${tarea.done ? 'is-done' : ''} ${tarea.urgent ? 'is-urgent' : ''} `;
        //Extraemos el emoji y el texto de la categoria
        let categoriaDis = tarea.categoria;
        if (tarea.categoria.includes(' ')) {
            const partes = tarea.categoria.split(' ');
            categoriaDis = `<span class = "iconoCategoria"> ${partes[0]} </span> ${partes.slice(1).join(' ')}`;
        }

        // Inserta los elementos HTML en la etiqueta li
        li.innerHTML = `
        <div class = "infoTarea">
        ${categoriaDis} - ${tarea.texto}
        </div>

        <div class="acciones">
        <button onclick="marcarHecha(${index})">✅ Hecha</button>
        <button onclick="marcarUrgente(${index})">🔴 Urgente</button>
        <button onclick="eliminarTarea(${index})">🗑️ Eliminar</button>
        </div>
        `;
        listaTarea.appendChild(li);
    });
    //Llamamos la funcion que nos actualiza el contador de tareas
    actualizarTareasCompletadas();
}

//Funciones para los botones de cada tarea listada
window.marcarHecha = (index) => {
    tareas[index].done = !tareas[index].done;
    renderizarTareas();
}
window.marcarUrgente = (index) => {
    tareas[index].urgent = !tareas[index].urgent;
    renderizarTareas();
}