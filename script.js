const apiKey = '3a6fa4ee209cd140483239a9027e9b43';
const currentTemperature = document.querySelector('#temp');

async function getTemperature(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error in the request: ${response.status}`);
      }
      const data = await response.json();

      const temperature = Math.floor(data.main.temp);
      currentTemperature.innerHTML = `${temperature}°C in ${city}`

    } catch (error) {
      document.querySelector('.erro').innerHTML = error
    }
};
getTemperature('Sao Paulo');