import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function Searchbox({ updateInfo }) {

    let [city, setCity] = useState("")
    let [error, setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fbe8226654b37662db331caad38f0810";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json()
            console.log(jsonResponse)

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }
            console.log(result)
            return result;
        } catch (err) {
            throw err
        }
    }

    let handelChange = (event) => {
        setCity(event.target.value)
    }

    let handelSubmit = async (event) => {
        try {
            event.preventDefault()
            console.log(city)
            setCity("")
            let newInfo = await getWeatherInfo()
            updateInfo(newInfo)
        } catch(err) {
            setError(true)
        }
    }

    return (
        <div className='SearchBox'>
            <h2>Search for weather</h2>
            <form action="" onSubmit={handelSubmit}>
                <TextField
                    id="city"
                    label="city name"
                    variant="filled"
                    required
                    value={city}
                    onChange={handelChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                <br /><br />
                {error && <Alert severity="error">no such place exist!</Alert>}
            </form>
        </div>
    )
}