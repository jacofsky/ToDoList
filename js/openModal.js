let modal = document.getElementById('modalAddTask');
let botonDeCierre = document.getElementById('closeAddTask');
let botonDeApertura = document.getElementById('openModal');

botonDeApertura.onclick = () => {
    modal.style.display = "block";
}

botonDeCierre.onclick = () => {
    modal.style.display = "none";
}

