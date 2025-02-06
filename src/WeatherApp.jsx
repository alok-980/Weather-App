import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import WeatherInfo from './WeatherInfo.jsx'
// import './WeatherApp.css'
import { useState } from 'react'

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "delhi",
        temp: 29,
        tempMin: 29.0,
        tempMax: 29.1,
        humidity: 27,
        feelsLike: 27.72,
        weather: "clear sky"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            <WeatherInfo info={weatherInfo}/>
        </div>
    )
}