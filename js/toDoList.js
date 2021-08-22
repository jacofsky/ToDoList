// Funciones generales


// 1. El maximo de caracteres de tarea es de 30

function validarTarea(tarea) {
    
    if (tarea.length < 30 && tarea.length > 0){
        return true;
    }
    return false;
}


// 2. El maximo de caracteres de info de tarea es de 150

function validarMasInfo(masInfo) {
    
    if (masInfo.length < 150 && masInfo.length > 0){
        return true;
    }
    return false;
}

// 3. dia debe ser mayor a 0

function validarDia(dia) {
    
    if (dia > 0){
        return true;
    }
    return false;
}

// 4. Agregar tarea


function datosForm(e) {
    
    e.preventDefault();

    let tarea = document.getElementById('tarea');
    let masInfo = document.getElementById('masInfo');
    let dia = document.getElementById('dia');

    console.log(tarea.value + masInfo.value + dia.value)
    
    

    if (!validarTarea(tarea.value)){
        tarea.style.border = '5px solid red'
    }
    if (!validarMasInfo(masInfo.value)){
        masInfo.style.border = '5px solid red'
    }
    if (!validarDia(dia.value)){
        dia.style.border = '5px solid red'
    }

    if (validarTarea(tarea.value) && validarMasInfo(masInfo.value) && validarDia(dia.value)) {
        let tareaNueva = new GuardarTareas(tarea.value, masInfo.value, dia.value);
        tareasAlmacenadas.push(tareaNueva);
        tareaNueva.agregaryQuitarEnTareas();
        tareaNueva.agregarEnHistorial();
        modal.style.display = "none";
    }
}


const FECHA = new Date();
const tareasAlmacenadas = []
const contenedorDeTareas = document.getElementById('listaTareas');
const contenedorDeTareasHistorial = document.getElementById('contenedorDeTareasEnHistorial')

let formulario = document.getElementById('formularioTarea')
formulario.addEventListener("submit", datosForm)







class GuardarTareas {
    constructor(tarea, masInfo, dia) {
        this.tarea = tarea;
        this.masInfo = masInfo;
        this.dia = dia;
    }

    agregaryQuitarEnTareas() {
        let liAlmacenaTarea = document.createElement("li");
        liAlmacenaTarea.setAttribute("class", "taskCard p-1 my-3 d-flex justify-content-between")
    
        liAlmacenaTarea.innerHTML = `
                <p class="taskCard__text my-auto">${this.tarea}</p>
                <button class="trashButton">
                <i class="bi bi-trash"></i>
                </button>
            `

        liAlmacenaTarea.onclick = () => {
            liAlmacenaTarea.remove();
        }
        contenedorDeTareas.appendChild(liAlmacenaTarea)
    }
    
    agregarEnHistorial() {
        let liAlmacenaTarea = document.createElement("li");
        liAlmacenaTarea.setAttribute("class", "taskCard p-1 my-3 d-flex justify-content-between")
        liAlmacenaTarea.innerHTML = ` <p class="taskCard__text my-auto">${this.tarea}</p> `
        contenedorDeTareasHistorial.appendChild(liAlmacenaTarea)
    }
    
    subirTareaStorage() {

    }

}

