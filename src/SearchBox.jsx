import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fbe8226654b37662db331caad38f0810";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) throw new Error("City not found");

            let jsonResponse = await response.json();

            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!city.trim()) return;

        setLoading(true);
        setError(false);

        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
            setCity("");
        }
    };

    return (
        <div>
            <div className="navContainer">
                <div className="logo">
                    <h1>Weather App</h1>
                </div>
                <div className="searchBox">
                    <div>
                        <form onSubmit={handleSubmit} className="search-form">
                            <TextField
                                id="city outlined-basic"
                                label="Enter city name"
                                variant="outlined"
                                required
                                value={city}
                                onChange={handleChange}
                            />
                            &nbsp;&nbsp;
                            <Button variant="contained" type="submit" startIcon={<SearchIcon />} disabled={loading}>
                                {loading ? "Loading..." : "Search"}
                            </Button>
                        </form>
                    </div>
                    
                </div>
            </div>
            <div className='error'>
                {error && <Alert severity="error" style={{border: "1px solid red", borderRadius: "1rem"}}>No such place exists!</Alert>}
            </div>
        </div>
    )
}

export default SearchBox;