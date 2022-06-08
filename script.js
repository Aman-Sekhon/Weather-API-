let weather = {
    apikey: <KEY>,
    fetchWeather: function (city) {
        fetch(
            </*LINK_EDITED1*/> + city + </*LINK_EDITED2*/> + this.apikey
        )
        .then((response) => {
            if(!response.ok){
                alert ("Data not found");
                throw new Error("Data not found");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = </*LINK_EDITED1*/> + icon + </*LINK_EDITED2*/>;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Mumbai");
