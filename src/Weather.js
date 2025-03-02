import React from "react";
import axios from "axios";

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
    }
    let apiKey = "a17a18dcaf1b3015a8ae057fbdda325d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    
    axios.get(apiUrl).then(handleResponse);
    return ( 
        <h2>Hello from Weather</h2>
    )
}