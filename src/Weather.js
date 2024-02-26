import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function weather(props) {

  const [weatherData, setWeatherData] = useState({ready: false});


  function tempResponse(response) {
    
    ready: true,
    setWeatherData({temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    description:response.data.weather[0].description,
    iconUrl: ``,
    date: "monday",
    humidity: response.data.main.humidity,
  city: response.data.name,})
  }
  if (weatherData.ready) {
    return(
    <div className="weather">
      <form>
        <div className="row">
        <div  className="col-9">
          <input type="search" placeholder="Enter a city" className="searchInput"
           autoFocus="on"
          />
        </div>
        <div className="col-3">
           <input type="submit" value="Search" className="submitSearch btn btn-primary w-100"/>
        </div>
        </div>
      </form>
      <h1>
        {weatherData.city}
      </h1>
      <ul>
        <li>
         {weatherData.date}
        </li>
        <li className="text-capitalize">
            {weatherData.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix"></div>
           <img src={weatherData.iconUrl} alt={weatherData.description}></img>
           <div className="float-left">
           <span className="tempValue">{Math.round(weatherData.temperature)}</span>
           <span className="tempUnit"></span>
        </div>
        </div>
        </div>
        <div className="col-6">
           <ul>
            <li>
                Precipitation: 18
            </li>
            <li>
                Humidity: {weatherData.humidity}%
            </li>
            <li>
                Wind: {weatherData.wind} km/h
            </li>
           </ul>
        </div>
      </div>
    
 );
  } else {
  let apiKey= "f09d3949047ab6c9e3bcaf79cf61f619";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(tempResponse);
  return "loading...";
  }
}
  
  