import SearchButton from './SearchButton'
import InfoBox from './InfoBox'
import { useState } from 'react';
import './WeatherApp.css';
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city: "anantapur",
        description: "overcast clouds",
        feelslike: 27.65,
        humidity: 25,
        temp: 29.03,
        temp_max: 29.03,
        temp_min: 29.03
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div id='grid'>
            <h2 style={{textAlign:"center",margin:0}}>Weather App By Sudarshan</h2>
            <SearchButton updateInfo={updateInfo}/>
            <InfoBox demo={weatherInfo}/>
        </div>
    );
}