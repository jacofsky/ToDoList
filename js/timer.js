// let botonRestarMinuto = document.getElementById('menosUnMinuto');
// let botonSumarMinuto = document.getElementById('masUnMinuto');

let empezar = document.getElementById('empezarTimer');
let contando = false;


empezar.onclick = () => {
    
    
    if (contando == false) {
    let pMinutos = document.getElementById('contenedorRelog');
    let tiemtiempopoParaAlarma = 25;
    tiempo = tiemtiempopoParaAlarma * 60
    temporizadorFunction(tiempo, pMinutos);
    contando = true;
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











