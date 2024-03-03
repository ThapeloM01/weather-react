import React from "react";
import IconWeather from "./IconWeather";
import CurrentDate from "./CurrentDate";
import WeatherTempUnits from "./WeatherTempUnits";

export default function WeatherSource(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <CurrentDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="clearfix">
            <div className=" TempIcon float-let">
              <IconWeather
                code={props.data.icon}
                alt={props.data.description}
                size={52}
              />
            </div>
            <div className="float-left">
              <WeatherTempUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <strong>{props.data.humidity}%</strong>
          </li>
          <li>
            Wind: <strong>{props.data.wind} km/h</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
