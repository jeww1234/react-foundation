import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';
import { Container } from 'react-bootstrap';
import { ClipLoader } from "react-spinners";



// 0b455b67f7ff2cd45dcccd33831a3728
//앱 실행시 현재 위치기반 날씨 보여줌
//날씨 정보(도시, 섭씨, 화씨)
// 5개의 버튼(현재, 도시4개)
// 도시 버튼을 클릭 -> 도시별 날씨 UI
// 현재 위치 버튼 클릭 -> 현재 위치 기반 날씨 UI
// 데이터 들고오는 동안 로딩 스피너
function App() {
  const API_key = '0b455b67f7ff2cd45dcccd33831a3728'
  const cities = ['Paris', 'New York', 'Tokyo', 'Seoul']
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)

  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat =  position.coords.latitude
      let lon = position.coords.longitude
      console.log(lat, lon)
      getweatherByCurrentLocation(lat, lon)
    })
  }

  const getweatherByCurrentLocation = async(lat, lon) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  const getweatherByCity = async() =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  useEffect(()=>{
    if(!city){
      getCurrentLocation()
    }else{
      getweatherByCity()
    }
  },[city])

  return(
  <div>
    {loading?(<Container className='container'>    <ClipLoader className='loading-spinner'
        color = "#f88c6b"
        loading={loading}
        size={150}
      /></Container>):
      <Container className='container'>    
        <WeatherBox weather = {weather}/>
        <WeatherBtn cities={cities} setCity={setCity} getCurrentLocation={getCurrentLocation}/>
      </Container>}    
  </div>
) 
}
export default App;
