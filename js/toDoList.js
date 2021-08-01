// Funciones generales
const FECHA = new Date();

const pedirInput = mensaje => {
    let input = prompt(mensaje);
    return input;
}

const pedirNumbrer = mensaje => {
    let numero = parseInt(prompt(mensaje));
    return numero;
}

// cursos

const validarCurso = year => {
    while (year != '1 año' && year != '2 año' && year != '3 año' && year != '4 año' && year != '5 año') {
        year = pedirInput('Ingrese de la manera correcta su curso (1 año, 2 año, 3 año, 4 Año o 5 Año)');
    }
    return year;
}

let curso = pedirInput('Ingrese su curso para empezar (1 año, 2 año, 3 año, 4 año o 5 año)');
curso = validarCurso(curso);
console.log(`Bienvenido estudiante de ${curso}!`);

// agregar y quitar las tareas con fecha limite


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


let tarea = pedirInput('Ingrese tarea a realizar');
alert('A continuacion ingrese la fecha numericamente (Asegurese de que sea valida)');
let mes = pedirNumbrer('Ingrese el mes') - 1;
mes = validarMes(mes);
let dia = pedirNumbrer('Ingrese el dia');
dia = validarDia(dia, mes, FECHA);

console.log(`Se a programado que se debe realizar la tarea '${tarea}' para el ${dia} / ${mes + 1}`)

// timer que puedas programar una alarma




