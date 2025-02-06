import './WeatherInfo.css'
import CurrentInfo from './CurrentInfo';
import FutureInfo from './FutureInfo';

function WeatherInfo({ info }) {
    return (
        <div className='weatherInfoContainer'>
            <div className='currentInfo'>
                <CurrentInfo info={info}/>
            </div>
            <div className='futureInfo'>
                <FutureInfo/>
            </div>
        </div>
    )
}

export default WeatherInfo;