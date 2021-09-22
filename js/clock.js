$(document).ready(function () {
    const clock = setInterval(() => {
    
        let minutesSubZero = `0${DateNow.getMinutes()}`
        $('#weatherClock').html(`${DateNow.getHours()}:${DateNow.getMinutes() < 10 ? minutesSubZero : DateNow.getMinutes()}:${DateNow.getSeconds()}`)
    }, 1000);

})