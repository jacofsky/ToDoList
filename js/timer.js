
let empezar = document.getElementById('empezarTimer');
let contenedor = document.getElementById('contenedorRelog')
let pMinutos = document.getElementById('contenedorRelog');
let masUnMinuto = document.getElementById('masUnMinuto')
let menosUnMinuto = document.getElementById('menosUnMinuto')
let skip = document.getElementById('botonTerminarContador')

let contando = false;
let tiemtiempoParaAlarma = 0;

pMinutos.innerHTML = `${tiemtiempoParaAlarma}:00`;

// 1. Empezar timer cuando se apreta el button empezar
empezar.onclick = () => {

    if (contando == false && tiemtiempoParaAlarma != 0) {
        let tiempo = tiemtiempoParaAlarma * 60;
        temporizadorFunction(tiempo, pMinutos);
        contando = true;
    }
}

// 2. Boton para aumentar un minuto
masUnMinuto.onclick = () => {
    if (tiemtiempoParaAlarma < 100 && !contando) {
        tiemtiempoParaAlarma++;
        pMinutos.innerHTML = `${tiemtiempoParaAlarma}:00`;
    }
}

// 3. Boton para disminuir un minuto
menosUnMinuto.onclick = () => {
    if (tiemtiempoParaAlarma > 0 && !contando) {
        tiemtiempoParaAlarma--;
        pMinutos.innerHTML = `${tiemtiempoParaAlarma}:00`;
    }
}

// 4. Timer funcional y skip
function temporizadorFunction (tiempo, pMinutos) {
    
    skip.onclick = () => {
        if (contando == true && tiemtiempoParaAlarma != 0) {
            clearInterval(temporizador);
            alarma();
            contando = false;
            tiemtiempoParaAlarma = 0;
        }
    }
    

    const temporizador = setInterval(() => {
    
        let minutos = Math.floor(tiempo / 60);
        let segundos = tiempo % 60;
    
        if (segundos < 10){
        pMinutos.innerHTML = `${minutos}:0${segundos}`;
        } else {
        pMinutos.innerHTML = `${minutos}:${segundos}`;
        }

        if (minutos == 0 && segundos == 0) {
            clearInterval(temporizador);
            alarma();
            contando = false;
            tiemtiempoParaAlarma = 0;
            
        }
        tiempo --;
    }, 1000);
    
}

// 6. Mostrar y sonar alarma
function alarma() {
    pMinutos.innerHTML = `<i class="bi bi-alarm"></i>`
    sonido = document.getElementById('sonidoAlarma')
    sonido.play();
}