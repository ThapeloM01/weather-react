import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState();

  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function Forecast(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function SubmitResult(event) {
    event.preventDefault();
    let apiKey = "ebef9ca4a8de66ed586fac628fade056";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(Forecast);
  }

  function CityResult(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={SubmitResult}>
      <input type="text" placeholder="Type a city..." onChange={CityResult} />
      <button type="submit">Search </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
