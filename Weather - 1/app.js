const apiKey = "9100aa2b6e20e1d0d15f2765f0165b86";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.getElementById("input");
let btn = document.getElementById("button");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";


        var data = await response.json();
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + `°C`;
        document.querySelector(".humidity").textContent = data.main.humidity + `%`;
        document.querySelector(".wind").textContent = data.wind.speed + ` KM/H`;
        console.log(data);
        let weatherimgsrc = document.querySelector(".weathericon");
        if (data.weather[0].main == "Drizzle") {
            weatherimgsrc.src = "./assets/drizzle.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherimgsrc.src = "./assets/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherimgsrc.src = "./assets/clear.png";
        }
        else if (data.weather[0].main == "Humidity") {
            weatherimgsrc.src = "./assets/humidity.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherimgsrc.src = "./assets/mist.png";
        }
        else if (data.weather.main == "Rain") {
            weatherimgsrc.src = "./assets/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherimgsrc.src = "./assets/snow.png";
        }
        else if (data.weather[0].main == "Wind") {
            weatherimgsrc.src = "./assets/wind.png";
        }
    }
}


btn.addEventListener("click", () => {
    document.querySelector(".demo").style.display = "none";
    checkWeather(input.value);
});
