import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    const HOT_URL = "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?s=2048x2048&w=is&k=20&c=cn5lJgGTT1jTIy4Z38EAfxoJevgnZ0IJ-NsFEAscYnE="
    const COLD_URL = "https://media.istockphoto.com/id/157565659/photo/thermometer-behind-the-frozen-window.webp?s=2048x2048&w=is&k=20&c=YCJB8TmRkDAOjqAh0KnhJJohEcKWMHD5iw-xHcnziq8="
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU="

    return (
        <div className='InfoBox'>
            <h2>Weather info - {info.weather}</h2>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b>{info.city.toUpperCase()}</b> &nbsp;
                            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <LightModeIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temprature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temprature = {info.tempMin}&deg;C</p>
                            <p>Max Temprature = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <u><i>{info.weather}</i></u> and Feels Like = {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}