import Searchbox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import './WeatherApp.css'
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
        <div style={{ textAlign: "center" }}>
            <h1>Weather App</h1>
            <div className='searchBox'>
                <Searchbox updateInfo={updateInfo}/>
            </div>
            <div className="infoBox">
                <InfoBox info={weatherInfo}/>
            </div>
        </div>
    )
}