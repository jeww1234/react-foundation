import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherBtn = ({cities, setCity, getCurrentLocation}) => {
  return (
    <div className='Btn-Box'>
      <Button variant="danger" onClick={()=>getCurrentLocation()}>Current Location</Button>
      {cities.map((item, index)=>(
        <Button key={index} variant="warning" onClick={()=>setCity(item)}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherBtn
