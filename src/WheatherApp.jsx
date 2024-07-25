import React, { useState } from 'react'
import Searchbox from './Searchbox'
import Infobox from './Infobox'

const WheatherApp = () => {
    const[weatherinfo,setweatherinfo]=useState({city: "Delhi",

        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"})

let updateinfo=(newinfo)=>{
    setweatherinfo(newinfo)
}
  return (
    <div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
        <Searchbox updateinfo={updateinfo}/>
        <Infobox info={weatherinfo}/>
    </div>
  )
}

export default WheatherApp