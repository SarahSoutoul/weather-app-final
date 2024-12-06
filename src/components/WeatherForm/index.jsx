import React from 'react'

export default function WeatherForm({city, setCity, fetchAPI}) {

  const handleChange = (e) => {
    let enteredCity = e.target.value;
    setCity(enteredCity);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make the API call
    fetchAPI()
    setCity("")
  }

  return (
    <form className="SearchEngine" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter city name' onChange={handleChange} value={city} />
        <button>Get weather</button>
    </form>
  )
}


// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_API_KEY}&units=metric