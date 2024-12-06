import { useState } from 'react';
import './App.css'
import { WeatherForm, WeatherCard } from './components'

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchAPI = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_API_KEY}&units=metric`);
    const data = await response.json();
    setWeatherData(data)
  }

  return (
    <div className='App'>
      <WeatherForm city={city} setCity={setCity} fetchAPI={fetchAPI}/>
      <WeatherCard weatherData={weatherData} />
    </div>
  )
}

export default App
