import{convert as tempratur} from "./Temperature.js";
import{convert as length} from "./convertLength.js";
import{convert as weight} from "./convertWeight.js";

function init(){
   console.log("celsuis = 5 fahrenheit = " + tempratur(5)) 
   console.log("meter = 100 centimeter =" + length(100))
   console.log("kilogram = 1000 gram =" + weight(1000) )

}


window.addEventListener("load", init)