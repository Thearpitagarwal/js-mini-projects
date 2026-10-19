document.addEventListener('DOMContentLoaded', () =>{
  const cityInp =  document.getElementById('city-input')
  const getweatherbtn = document.getElementById('get-weather-btn')
  const  weatherinfo =  document.getElementById('weather-info')
  const cityName = document.getElementById('city-name')
  const temp = document.getElementById('temperature')
  const description = document.getElementById('description')
  const  errormsg = document.getElementById('error-message')

  const API_KEY = "729f2cb0e78521109f16b7fe823ae888"

  getweatherbtn.addEventListener('click', async() => {
    const  city =  cityInp.value.trim()
    if (!city) return;

    try {
      const  weatherData = await fetchWeatherData(city)
      console.log(weatherData)
      displayweatherData(weatherData)
    } catch (error) {
      showError()
    }
  })
  


  async function  fetchWeatherData(city){
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data
}

  function  displayweatherData(data){
    weatherinfo.classList.remove('hidden')
    errormsg.classList.add('hidden')

    cityName.textContent = data.name
    temp.textContent = `${data.main.temp} °C`
    description.textContent = data.weather[0].description
  }

  function showError(){
    weatherinfo.classList.add('hidden')
    errormsg.classList.remove('hidden')
  }
})