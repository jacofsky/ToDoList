// Funciones generales
const FECHA = new Date();

const pedirInput = mensaje => {
    let input = prompt(mensaje);
    return input;
}

const pedirNumbrer = mensaje => {
    let numero = parseInt(prompt(mensaje));
    while (isNaN(numero)) {
        numero = parseInt(prompt(mensaje));
    }
    return numero;
}

const pedirNumeroPositivo = mensaje => {
    let numero = parseInt(prompt(mensaje));
    while (isNaN(numero) || numero < 0) {
        numero = parseInt(prompt(mensaje));
    }
    return numero;
}

const validarCurso = year => {
    while (year != '1 año' && year != '2 año' && year != '3 año' && year != '4 año' && year != '5 año') {
        year = pedirInput('Ingrese de la manera correcta su curso (1 año, 2 año, 3 año, 4 Año o 5 Año)');
    }
    return year;
}


function validarMes (mes) {
    while (mes < 0 || mes > 11) {
        alert('Ingrese un mes valido!!');
        mes = pedirNumbrer('Ingrese el mes') - 1;
    }
    return mes;
}

function validarDia (dia, mes, FECHA) {
    
    let diaActual = FECHA.getDate();
    let mesActual = FECHA.getMonth();

    while (((dia < diaActual || dia > 31) && mes == mesActual)) {
        alert('Ingrese una dia valido!!');
        dia = pedirNumbrer('Ingrese el dia');
    }

    while (dia < 0 || dia > 31) {
        alert('Ingrese una dia valido!!');
        dia = pedirNumbrer('Ingrese el dia');
    }
    return dia;
}

function tareaTerminada (termineUnaTarea, tamanioArray) {
    if (termineUnaTarea == true){
        let numeroDeTarea = pedirNumbrer('Ingrese el numero de la tarea terminada') - 1;
        while (numeroDeTarea <= -1 || numeroDeTarea >= tamanioArray){
            numeroDeTarea = pedirNumbrer('Ingrese el numero de la tarea terminada correctamente') - 1
        }
        return numeroDeTarea;
    }
}

function agregarTareaEnElDom(contenedorDeTareas) {
    
    for (const campoTarea of tareasAlmacenadas) {
    
        let liAlmacenaTarea = document.createElement("li");
        liAlmacenaTarea.setAttribute("class", "taskCard p-1 my-3 d-flex justify-content-between")
        liAlmacenaTarea.setAttribute("id", "nuevaTarea")
    
        liAlmacenaTarea.innerHTML = `
            <p class="taskCard__text my-auto">${campoTarea.tarea}</p>
                <button class="trashButton">
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_lvbgqvh4.json" background="transparent" speed="1.5" style="width: 2.5rem; height: 2.5rem;" hover></lottie-player>
                </button>
                `
        contenedorDeTareas.appendChild(liAlmacenaTarea)
    }
    
}

function quitarTareaEnElDom(tareaSelecionada, contenedorDeTareas) {
    const tareas = document.querySelectorAll("#nuevaTarea");
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[tareaSelecionada] == tareas[i]){
            contenedorDeTareas.removeChild(tareas[i])
            break;
        }   
    }   
}

// pedir tarea

let curso = 'a';
const tareasAlmacenadas = []
let continuarTareas = true;

while(continuarTareas == true){

curso = pedirInput('Ingrese su curso para empezar (1 año, 2 año, 3 año, 4 año o 5 año)');
curso = validarCurso(curso);
let tarea = pedirInput('Ingrese tarea a realizar');
alert('A continuacion ingrese la fecha numericamente (Asegurese de que sea valida)');
let mes = pedirNumbrer('Ingrese el mes') - 1;
mes = validarMes(mes);
let dia = pedirNumbrer('Ingrese el dia');
dia = validarDia(dia, mes, FECHA);



class GuardarTareas {
    constructor(curso, tarea, mes, dia) {
        this.curso = curso;
        this.tarea = tarea;
        this.mes = mes;
        this.dia = dia;
    }

    mostrarTarea() {
        console.log(`Se a programado que se debe realizar la tarea '${this.tarea}' para el ${this.dia} / ${this.mes + 1} en el curso ${this.curso}`);
    }

}

tareasAlmacenadas.push(new GuardarTareas(curso, tarea, mes, dia));

continuarTareas = confirm('Desea continuar?');
}

const contenedorDeTareas = document.getElementById('listaTareas');
agregarTareaEnElDom(contenedorDeTareas);

const tareas = document.querySelectorAll("#nuevaTarea");
console.log(tareas)


// eliminar tarea hecha

let tareaHecha = confirm('Terminaste alguna tarea?');
if (tareaHecha == true) {
    let posicionDeLaTareaHecha = tareaTerminada(tareaHecha, tareasAlmacenadas.length);
    tareasAlmacenadas.splice(posicionDeLaTareaHecha, 1); 
    quitarTareaEnElDom(posicionDeLaTareaHecha, contenedorDeTareas)  
}
console.log(tareasAlmacenadas);



// timer que puedas programar una alarma



let tiempoParaAlarma = pedirNumeroPositivo('Ingrese el tiempo del cronomentro en minutos');
let tiempo = tiempoParaAlarma * 60

const contenedorRelog = document.getElementById('contenedorRelog');

let pMinutos = document.getElementById("contenedorRelog");

let temporizador = setInterval(() => {
    
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;
    
    if (segundos < 10){
        pMinutos.innerHTML = `${minutos}:0${segundos}`;
    } else {
        pMinutos.innerHTML = `${minutos}:${segundos}`;
    }

    if (minutos == 0 && segundos == 0) {
        clearInterval(temporizador);
        console.log('RINGGGG!!')
    }
    tiempo --;
}, 1000);



