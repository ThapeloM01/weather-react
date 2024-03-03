import React from "react";
import IconWeather from "./IconWeather";

export default function ForecastDay(props) {
     function MaxTemperature() {
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}°`;
     }
      function MinTemperature() {
        let temperature= Math.round(props.data.temp.min);
        return `${temperature}°`;
      }
      function day() {
        let date= new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days =  ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"] ;
        return days[day];
      }
    return (
      <div>
        <div className="dayForecast">{day()}</div>
        <IconWeather code={props.data.weather[0].icon} size={36} />
        <div className="DailyForecast-temperature">
          <span className="Forecast-temperature-max">
            {MaxTemperature} 
          </span>
          <span className="Forecast-temperature-min">
            {MinTemperature}
          </span>
        </div>
      </div>
    );
}