$(document).ready(function () {


    getLocation()

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    function showPosition(position) {

        const WEATHERAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=22415c8625bded6564ac1a706f710746&lang=sp`;

        $.get(WEATHERAPI, function (respuesta, estado) {
            if (estado === 'success') {
                let weatherInfo = respuesta;
                console.log(weatherInfo);

                let ultimoArrayWeather = weatherInfo.weather.length - 1;
                let imageWeather = imageWeatherSelector(weatherInfo.weather[ultimoArrayWeather].main)

                let celsiusTemp = kelvinToCelsius(weatherInfo)
                WeatherEnDom(weatherInfo, celsiusTemp, ultimoArrayWeather, imageWeather);
            }
        })
    }

    function kelvinToCelsius(weatherInfo) {
        return Math.round(300 - weatherInfo.main.temp);
    }

    function imageWeatherSelector(estado) {
        let imageDirection;
        switch (estado) {
            case 'Thunderstorm':
                imageDirection = 'assets/Climas/Thunderstorm.jpg';
                break;
            case 'Drizzle':
                imageDirection = 'assets/Climas/Drizzle.jpg';
                break;
            case 'Rain':
                imageDirection = 'assets/Climas/Rain.jpg';
                break;
            case 'Snow':
                imageDirection = 'assets/Climas/Snow.jpg';
                break;
            case 'Clear':
                imageDirection = 'assets/Climas/Clear.jpg';
                break;
            case 'Clouds':
                imageDirection = 'assets/Climas/Clouds.jpg';
                break;
            default:
                imageDirection = 'assets/Climas/Mist.jpg';
                break;
        }

        return imageDirection;

    }

    function WeatherEnDom(weatherInfo, celsius, ultimoArrayWeather, imageWeather) {


        $(".weatherBox").css("background-image", `url("${imageWeather}")`)
        $(".weatherBox").append(`
        <h2>${weatherInfo.name}</h2>
        <div class="temperaturaYEstado d-flex">
            <img class="weatherIcon" src="http://openweathermap.org/img/wn/${weatherInfo.weather[ultimoArrayWeather].icon}@2x.png">
            <p class="ps-1">${celsius}°C</p>
        </div>
        <p class="weatherDescription">${weatherInfo.weather[ultimoArrayWeather].description}</p>`);
    }






})