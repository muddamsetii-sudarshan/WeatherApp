import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchButton.css";
import { useState } from 'react';
export default function SearchButton({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let API_link="https://api.openweathermap.org/data/2.5/weather";
    let api_key="30e91f0b14b0285572628cabe58d06cd";
    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_link}?q=${city}&appid=${api_key}&units=metric`);
        let info=await response.json();
        let result={
            city:city,
            temp:info.main.temp,
            temp_max:info.main.temp_max,
            temp_min:info.main.temp_min,
            humidity:info.main.humidity,
            feelslike:info.main.feels_like,
            description:info.weather[0].description
        };
        console.log(result);
        return result;}catch(err){
            throw(err);
        }
    }
    let handleChange=(e)=>{
        setCity(e.target.value);
    }
    let handleSubmit=async (e)=>{
        try{
        e.preventDefault();
        setError(false);
        setCity("");
         let newInfo=await getWeatherInfo();
         updateInfo(newInfo);}catch(err){
            setError(true);
         }
    }
    return(
        <div className='searchbutton'>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange}/><br/><br/>
            <Button variant="outlined" type="submit">Search</Button>
            </form>
            {error && alert("No such place in our API")};
        </div>
    );
}