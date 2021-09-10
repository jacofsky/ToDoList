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
        let weatherIcon;
        switch (estado) {
            case 'Thunderstorm':
                $(".weatherBox").css("background-image", `url("assets/Climas/Thunderstorm.jpg")`)
                weatherIcon = 'bi bi-cloud-lightning-rain';
                break;
            case 'Drizzle':
                $(".weatherBox").css("background-image", `url("assets/Climas/Drizzle.jpg")`)

                weatherIcon = 'bi bi-cloud-drizzle';
                break;
            case 'Rain':
                $(".weatherBox").css("background-image", `url("assets/Climas/Rain.jpg")`)

                weatherIcon = 'bi bi-cloud-rain';
                break;
            case 'Snow':
                $(".weatherBox").css("background-image", `url("assets/Climas/Snow.jpg")`)

                weatherIcon = 'bi bi-cloud-snow';
                break;
            case 'Clear':
                $(".weatherBox").css("background-image", `url("assets/Climas/Clear.jpg")`)

                weatherIcon = 'bi bi-brightness-high';
                break;
            case 'Clouds':
                $(".weatherBox").css("background-image", `url("assets/Climas/Cloud.jpg")`)

                weatherIcon = 'bi bi-clouds';
                break;
            default:
                $(".weatherBox").css("background-image", `url("assets/Climas/Mist.jpg")`)
                weatherIcon = 'bi bi-cloud-haze-1';
                break;
        }

        return weatherIcon;

    }

    function WeatherEnDom(weatherInfo, celsius, ultimoArrayWeather, imageWeather) {


        
        $(".weatherBox").append(`
        <h2>${weatherInfo.name}</h2>
        <div class="temperaturaYEstado d-flex">
            <i class="${imageWeather}"></i>
            <p class="ps-1">${celsius}°C</p>
        </div>
        <p class="weatherDescription">${weatherInfo.weather[ultimoArrayWeather].description}</p>`);
    }






})