const API_KEY = "b47ee6c59547a06e81baf5839bcf0af7";

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    console.log("You live in ", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather");
        const cityName = document.querySelector("#city_name");
        console.log(weather, cityName);
        cityName.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);