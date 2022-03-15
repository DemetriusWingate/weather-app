let weather = {
    apiKey: "d7ae39d65c1f452cd3a6078089ce28b4",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=imperial&appid=" 
             + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
    }
};