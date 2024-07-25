import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './index.css'

function Searchbox({updateinfo}) {
let [city, setcity] = useState("");  
// it is sccessible by all funct 
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="53739048a848b1e4aabe8385925de828";
// we are using openwhether api so it give to pass with longi and lattituse so it also give geocoder api so we can serch by city name hwee we have to pass querystring with city and apikey

let getWeatherInfo= async() =>{
 let response= await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
 let jsonResponse =await response.json()
//  convert to json
console.log(jsonResponse)
let result={
    city:city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,

    humidity:jsonResponse.main.humidity,
    feelslike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,

} 
console.log(result)
return result;
}

let handleChange= (e)=>{
    setcity(e.target.value)
}

 
  let handlesubmit =async(e) => {
    e.preventDefault();
    console.log(city)
    setcity("");
   let newinfo= await getWeatherInfo();
   updateinfo(newinfo)
  };

  return (
    <div className="text-center text-red-700">
      <form action="" onClick={handlesubmit}>
      <TextField
        id="city"
        label="city Name"
        variant="outlined"
        required
        value={city}
        onChange={handleChange}
      />
      {/*  value get from state */}
      <br />
      <br />
      <Button type="submit" variant="contained">
        Search
      </Button>
      </form>
    </div>
  );
}

export default Searchbox;
