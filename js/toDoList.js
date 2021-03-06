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
    let advertencia = document.getElementById('advertencia1')
    let advertencia2 = document.getElementById('advertencia2')


    

    if (!validarTarea(tarea.value)){
        tarea.style.border = '3px solid #ff5b5b'
        advertencia.style.display = 'block'

    } else{
        tarea.style.border = '3px solid #dbdbdb'
        advertencia.style.display = 'none'
    }

    if (!validarMasInfo(masInfo.value)){
        masInfo.style.border = '3px solid #ff5b5b'
        advertencia2.style.display = 'block'

    } else{
        masInfo.style.border = '3px solid #dbdbdb'
        advertencia2.style.display = 'none'
    }
    
    if (!validarDia(dia.value)){
        dia.style.border = '3px solid #ff5b5b'
    }

    if (validarTarea(tarea.value) && validarMasInfo(masInfo.value) && validarDia(dia.value)) {
        let tareaNueva = new GuardarTareas(tarea.value, masInfo.value, dia.value, true);
        
        tareaNueva.agregaryQuitarEnTareas();
        tareaNueva.agregarEnHistorial();
        tareasAlmacenadas.push(tareaNueva);
        guardarTareaEnStorage(tareasAlmacenadas)
        modal.style.display = "none";
    }
}

// 5. Guardar tarea en storage 

function guardarTareaEnStorage (tareasAlmacenadas) {
    localStorage.setItem("TareaAlmacenada", JSON.stringify(tareasAlmacenadas));
}

// 6. Obtener el storage

function obtenerElStorage (tareasAlmacenadas) {

    itemsAlmacenados = JSON.parse(localStorage.getItem("TareaAlmacenada"))
    for (let i = 0; i < itemsAlmacenados.length; i++) {
        tareasAlmacenadas.push(new GuardarTareas(itemsAlmacenados[i].tarea, itemsAlmacenados[i].masInfo, itemsAlmacenados[i].dia, itemsAlmacenados[i].activo))
    }
    iterarStorageEnElDom(tareasAlmacenadas)
}

// 7. Iterar en el storage en el DOM

function iterarStorageEnElDom () {
    for (let i = 0; i < tareasAlmacenadas.length; i++) {
        if (tareasAlmacenadas[i].activo === true){
            tareasAlmacenadas[i].agregaryQuitarEnTareas();
            tareasAlmacenadas[i].agregarEnHistorial();
        } else {
            tareasAlmacenadas[i].agregarEnHistorial();
        }
    }
}

// 8. Actualizar Storage En el

function actualizarStorage () {
    localStorage.removeItem("TareaAlmacenada");
    guardarTareaEnStorage(tareasAlmacenadas);
}

// 9. Borrar historial en el storage

function borrarStorage () {
    localStorage.removeItem("TareaAlmacenada");
    borrarHistorialDom();
}

// 10. Borrar historial en el dom
function borrarHistorialDom() {
    let tareasDelHistorial = document.querySelectorAll("#contenedorDeTareasEnHistorial li");
    for (const tarea of tareasDelHistorial){
        tarea.remove();
    }
}

// ---------------------- CLASE GUARDAR TAREA -----------------------------
class GuardarTareas {
    constructor(tarea, masInfo, dia, activo) {
        this.tarea = tarea;
        this.masInfo = masInfo;
        this.dia = dia;
        this.activo = activo;
    }

    agregaryQuitarEnTareas() {
        let liAlmacenaTarea = document.createElement("li");
        
    
        
        liAlmacenaTarea.setAttribute("class", "taskCard p-1 my-3 d-flex justify-content-between")
        
        liAlmacenaTarea.innerHTML = `
                <p class="taskCard__text my-auto">${this.tarea}</p>`
        
        

        
        liAlmacenaTarea.onclick = () => {
            liAlmacenaTarea.remove();
            this.activo = false;
            actualizarStorage();
        }
        
        contenedorDeTareas.appendChild(liAlmacenaTarea)
    }

        
    agregarEnHistorial() {
        let liAlmacenaTarea = document.createElement("li");
        liAlmacenaTarea.setAttribute("class", "taskCard p-1 my-3 d-flex justify-content-between")
        liAlmacenaTarea.innerHTML = ` <p class="taskCard__text my-auto">${this.tarea}</p> `
        contenedorDeTareasHistorial.appendChild(liAlmacenaTarea)
    }
}

// -------------------------------------------------------------------------------------------------------------

const FECHA = new Date();
const tareasAlmacenadas = []
const contenedorDeTareas = document.getElementById('listaTareas');
const contenedorDeTareasHistorial = document.getElementById('contenedorDeTareasEnHistorial')


let formulario = document.getElementById('formularioTarea')
formulario.addEventListener("submit", datosForm)

let borrarHistorial = document.getElementById('borrarHistorial');
borrarHistorial.addEventListener("click", borrarStorage);

obtenerElStorage(tareasAlmacenadas)