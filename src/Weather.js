import React, {useState} from "react";
import axios from "axios";
import WeatherSource from "../WeatherSource";
import "./Weather.css";

export default function weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false});
  function tempResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      ready: true,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      city: response.data.name,
    });

   
  }
  function result() {
     let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(tempResponse);
  }
   function submitSearch(event) {
     event.preventDefault();
     result();
   }

   function cityResult(event) {
    setCity(event.target.value);
   }
  if (weatherData.ready) {
    return(
    <div className="weather">
      <form onSubmit={submitSearch}>
        <div className="row">
        <div  className="col-9">
          <input type="search" placeholder="Enter a city" className="searchInput"
           autoFocus="on"
           onChange={cityResult}
          />
        </div>
        <div className="col-3">
           <input type="submit" value="Search" className="submitSearch btn btn-primary w-100"/>
        </div>
        </div>
      </form>
      <WeatherSource data={weatherData}/>
      </div>
    
 );
  } else {
  result();
  return "loading...";
  }
}
  
  