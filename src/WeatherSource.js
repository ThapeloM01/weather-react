import React from "react";
import weatherTempUnits from "./weatherTempUnits";
import currentDate from "./currentDate";
import IconWeather from "./IconWeather";

export default function WeatherSource(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <currentDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-let"></div>
            <IconWeather code={props.data.icon} alt={props.data.description} />
            
            <div className="float-left">
              <weatherTempUnits celsius={props.data.temperature}/>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 18</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
