import React from 'react'

const Weather = ({temperature}) => {
    let message;
    if(temperature < 15){
        message = <h1>It is cold outside</h1>;
    }else if(temperature >= 15 && temperature < 30){
        message = <h1> It is nice outside</h1>;

    }else{
        message = <h1> It is hot outside</h1>;
    }
  return (
    <div>
      {message}
    </div>
  )
}

export default Weather
