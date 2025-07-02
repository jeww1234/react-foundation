import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("?",weather)
  return (
    <div className='WeatherBox'>
      <div>{weather?.name}</div>
      <div>{weather?.weather[0].main}</div>
      <div>섭씨 {Math.floor(weather?.main.temp)}도</div>
      <div>화씨 {Math.floor(weather?.main.temp*1.8+32)}도</div>
    </div>
  )
}

export default WeatherBox
