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

const validarCurso = year => {
    while (year != '1 año' && year != '2 año' && year != '3 año' && year != '4 año' && year != '5 año') {
        year = pedirInput('Ingrese de la manera correcta su curso (1 año, 2 año, 3 año, 4 Año o 5 Año)');
    }
    return year;
}


function validarMes (mes) {
    while (mes <= 0 || mes > 12) {
        alert('Ingrese un mes valido!!');
        mes = pedirNumbrer('Ingrese el mes')
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
        while (numeroDeTarea <= 0 && numeroDeTarea > tamanioArray.length){
            numeroDeTarea = pedirNumbrer('Ingrese el numero de la tarea terminada correctamente') - 1
        }
        return numeroDeTarea;
    }
}


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

// eliminar tarea hecha

let tareaHecha = confirm('Terminaste alguna tarea?');
let posicionDeLaTareaHecha = tareaTerminada(tareaHecha, tareasAlmacenadas.length)
tareasAlmacenadas.splice(posicionDeLaTareaHecha, 1);
console.log(tareasAlmacenadas)

// timer que puedas programar una alarma

let tiempoParaAlarma = pedirNumbrer('Ingrese el tiempo del cronomentro en minutos');
let segundos = 60;
let minutos = tiempoParaAlarma - 1;

let temporizador = setInterval(() => {
    segundos --;
    

    console.log(`Pasaron ${minutos}:${segundos}`);
    if (minutos == 0 && segundos == 0) {
        clearInterval(temporizador);
        console.log('RINGGGG!!')
    }
    if (segundos == 0){
        minutos --;
        segundos = 60;
    }

}, 1000);
