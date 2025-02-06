import './InfoBox.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({ info }) {
    // Background image selection based on weather conditions
    const HOT_URL = "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?s=2048x2048&w=is&k=20&c=cn5lJgGTT1jTIy4Z38EAfxoJevgnZ0IJ-NsFEAscYnE=";
    const COLD_URL = "https://media.istockphoto.com/id/157565659/photo/thermometer-behind-the-frozen-window.webp?s=2048x2048&w=is&k=20&c=YCJB8TmRkDAOjqAh0KnhJJohEcKWMHD5iw-xHcnziq8=";
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU=";

    const backgroundImage = info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;
    const WeatherIcon = info.humidity > 80 ? ThunderstormIcon : info.temp > 15 ? LightModeIcon : AcUnitIcon;

    function getCurrentDetails() {
        const now = new Date();

        // Get current hours, minutes, and seconds
        let hours = now.getHours();
        const minutes = now.getMinutes();

        // Get AM/PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12;

        // Format minutes and seconds to two digits
        const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;

        const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
        const date = now.getDate();

        let timeOfDay = '';
        if (hours >= 5 && hours < 7) {
            timeOfDay = 'Sunrise Time';
        } else if (hours >= 18 && hours < 20) {
            timeOfDay = 'Sunset Time';
        } else if (hours >= 12 && hours < 18) {
            timeOfDay = 'Afternoon Time';
        } else {
            timeOfDay = 'Morning Time';
        }

        return {
            dayOfWeek,
            date,
            time: `${hours}:${minutesFormatted} ${ampm}`,
            timeOfDay
        };
    }


    return (
        <div className="infoContainer" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="tempInfo">
                <WeatherIcon />
                <h1>{info.temp}&deg;C</h1>
                <h3><b>{info.city.toUpperCase()}</b></h3>
            </div>
            <div className="dayInfo">
                <h3>{getCurrentDetails().time}</h3>
                <p>{getCurrentDetails().timeOfDay}, {getCurrentDetails().dayOfWeek}</p>
            </div>
        </div>
    );
}

export default InfoBox;
