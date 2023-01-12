import './App.css';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const apiKey = "a41ea884bd0e17cf6a3e653d9b2752d1";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([""]);


  const getWeatherData = (event) => {
    if(event.key == "Enter"){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
    .then(
      response => response.json()
    ).then(
      data => setWeatherData(data)
    )
    }
  }



  return (
    <div className="App">
      <h1>WEATHER APP</h1><br/>

    <input className="search" placeholder="search city.." value={city} onChange={e => setCity(e.target.value)} onKeyDown={getWeatherData}></input>
    {typeof weatherData.main === 'undefined' ?
    <h3>Enter a valid city name!</h3> :
    
    <div className='output'>
     <h2 className='displayname'> {weatherData.name}</h2>
     <h3 className='displaytemp'> {weatherData.main.temp}°F</h3>
     <h3 className='displaydesc'> {weatherData.weather[0].description} </h3>
    </div>
}
    

    </div>
  );
}

export default App;
