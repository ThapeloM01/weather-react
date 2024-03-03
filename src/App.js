import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App (){
   return (
     <div className="App">
       <div className="container">
         <Weather defaultCity="Lisbon" />
         <footer>
           This project was coded by {""}
           <a href="" target="blank" ref="noopener noreferrer">
             {" "}
             Mokoena Thapelo
           </a>{" "}
           {""}
           and is {""}{" "}
           <a
             href="https://github.com/ThapeloM01/weather-react"
             ref="noopener noreferrer"
           >
             open-sourced on GitHub
           </a>
           and{""}
           <a href="" target="_blank" ref="noopener noreferrer">
            hosted on Netlify
           </a>
         </footer>
       </div>
     </div>
   );
}
  