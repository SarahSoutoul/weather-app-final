import React from 'react'

export default function WeatherCard({weatherData}) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  let formattedDate = new Date(weatherData?.dt * 1000).toLocaleDateString('en-US', options)

  const toggleTemperature = () => {
    // Toggle the boolean (that needs to be in a state)
  }

  const renderTemperature = (temperature) => {
    // Convert temperature in F depending on boolean
    if (isCelsius) {

    } else {

    }
  }

  return (
    <>
        {weatherData && (
            <>
                <h2 className='city-name'>{weatherData.name}</h2>
                <p>{formattedDate}</p>
                <div className="temp"></div>
                <p className='weather-des'>{weatherData.weather[0].description.toUpperCase()}</p>
                <div className='weather-info'>
                    <div className='col'>
                        <div>
                            <p>{weatherData.wind.speed} m/s</p>
                            <p>Wind speed</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div>
                            <p>{weatherData.main.humidity} %</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                </div>
            </>
        )}
    </>
  )
}
