import React, {useState} from "react";

export default function weatherTempUnits(props) {
    
    const [units, setUnits]= useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnits("Fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnits("Celsius")
    }
    if (units === "celsius") {
        return (
          <div className="Units">
            <span className="tempValue">{Math.round(props.celsius)}</span>
            <span className="tempUnit">
              °C |{""}
              <a href="/" onClick={convertToFahrenheit}>
                °F
              </a>
            </span>
          </div>
        );
    } else {
        const fahrenheit = (props.celsius * 9)/5 + 32;
        return (
          <div className="Units">
            <span className="tempValue">{Math.round(fahrenheit)}</span>
            <span className="tempUnit">
              <a href="/" onClick={convertToCelsius}>
                °C
              </a>
              {""}| °F
            </span>
          </div>
        );
    }
}