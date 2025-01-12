import React from 'react'


const Weather = (temperature) => {
  return (
    <div>
     if(temperature < 15 )
     {
        <h1>It's cold outside</h1>
     }else if(temperature => 15 && temperature <= 30){
        <h1>It's nice outside </h1>
     }else{
      <h1>It's hot outside</h1>
     }
    </div>
  )
}

export default Weather
