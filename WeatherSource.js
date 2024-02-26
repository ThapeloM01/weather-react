import React from "react";
import currentDate from "./currentDate";


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
            <div className="clearfix"></div>
            <img src={props.data.iconUrl} alt={props.data.description}></img>
            <div className="float-left">
              <span className="tempValue">
                {Math.round(props.data.temperature)}
              </span>
              <span className="tempUnit"></span>
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