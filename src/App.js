import React from "react";
import Weather from "./Weather";

export default function App (){
   return (
     <div className="App">
       <div className="container">
         <weather defaultCity="Lisbon" />
         <footer>
           This project was coded by {""}
           <a href="" target="blank">
             {" "}
             Mokoena Thapelo
           </a>{" "}
           {""}
           and is {""}{" "}
           <a href="https://github.com/ThapeloM01/weather-react">
             open-sourced on GitHub
           </a>
         </footer>
       </div>
     </div>
   );
}
  