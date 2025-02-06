import './CurrentInfo.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function CurrentInfo({ info }) {
    return (
        <div className="currInfoContainer">
            <div className='weather'>
                <div>
                    <div className='sortInfo'>
                        <div>
                            <i class="fa-solid fa-droplet"></i>
                        </div>
                        <div>
                            <p>Humidity</p>
                            <p>{info.humidity} %</p>
                        </div>
                    </div>
                    <div className='sortInfo'>
                        <div className='icon' style={{color: "#7284ff"}}>
                            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <LightModeIcon /> : <AcUnitIcon />}
                        </div>
                        <div>
                            <p>Feels Like </p>
                            <p>{info.feelsLike}&deg;C</p>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div>
                    <div className='sortInfo'>
                        <div>
                            <i class="fa-solid fa-cloud-sun"></i>
                        </div>
                        <div>
                            <p>Min-Temp</p>
                            <p>{info.tempMin}&deg;C</p>
                        </div>
                    </div>
                    <div className='sortInfo'>
                        <div>
                            <i class="fa-solid fa-cloud-sun"></i>
                        </div>
                        <div>
                            <p>Max-Temp</p>
                            <p>{info.tempMax}&deg;C</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description'>
                <p>The weather can be described as <b><u><i>{info.weather}</i></u></b> and Feels Like <b>{info.feelsLike}&deg;C</b></p>
            </div>
        </div>
    )
}

export default CurrentInfo;