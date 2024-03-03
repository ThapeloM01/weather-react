import React, {useState, useEffect} from "react";
import "./DailyForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function DailyForecast(props) {
let [loading, setLoading] = useState(false);
let [ForecastData, setForecastData]=useState(null);

useEffect(() => {
setLoading(false);
}, [props.coordinates]);

  function dailyResponse(response) {
  setForecastData(response.data.daily);
  setLoading(true);
  }

  if (loading) {
    return (
      <div className="dailyForecast">
        <div className="row">
            {ForecastData.map(function(dailyForecast, index)
            { if (index < 5){
                return (
                  <div className="col" key={index}>
           <ForecastDay data={dailyForecast}/>
          </div>
                );} else {
                    return null;
                }
            })}
          
        </div>
      </div>
    );
  } else {
    let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(dailyResponse);

    return null;
  };
}
