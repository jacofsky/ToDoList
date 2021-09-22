let modal = document.getElementById('modalAddTask');
let botonDeCierre = document.getElementById('closeAddTask');
let botonDeApertura = document.getElementById('openModal');

// 1. Muestra el modal para introducir monedas
$('#openModal').click(function (){
    $('#modalAddTask').show(500);
})

// 2. Oculta modal para introducir monedas
$('#closeAddTask').click(function (){
    $('#modalAddTask').hide(1000);
})
