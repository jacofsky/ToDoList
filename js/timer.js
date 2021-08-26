// let botonRestarMinuto = document.getElementById('menosUnMinuto');
// let botonSumarMinuto = document.getElementById('masUnMinuto');

let empezar = document.getElementById('empezarTimer');
let contenedor = document.getElementById('contenedorRelog')
let pMinutos = document.getElementById('contenedorRelog');
let masUnMinuto = document.getElementById('masUnMinuto')
let menosUnMinuto = document.getElementById('menosUnMinuto')


let contando = false;
let tiemtiempoParaAlarma = 0;

pMinutos.innerHTML = `${tiemtiempoParaAlarma}:00`;


empezar.onclick = () => {

    if (contando == false) {
        let tiempo = tiemtiempoParaAlarma * 60;
        temporizadorFunction(tiempo, pMinutos);
        contando = true;
    }
}

masUnMinuto.onclick = () => {
    if (tiemtiempoParaAlarma < 100 && !contando) {
        tiemtiempoParaAlarma++;
        pMinutos.innerHTML = `${tiemtiempoParaAlarma}:00`;
    }
}

menosUnMinuto.onclick = () => {
    if (tiemtiempoParaAlarma > 0 && !contando) {
        tiemtiempoParaAlarma--;
        pMinutos.innerHTML = `${tiemtiempoParaAlarma}:00`;
    }
}




function temporizadorFunction (tiempo, pMinutos) {
    
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
            contando = false;
            tiemtiempoParaAlarma = 0;
            console.log('RINGGGG!!')
        }
        tiempo --;
    }, 1000);
    
}


function restarMinuto () {
    minuto--;
    if (minuto > 0){
        pMinutos.innerHTML = `${minutos}:0${segundos}`    
    }
    
}











