const apikey = '32e74b758fd1e11f85c74cb3cfdac74f';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

function converter (temp){
  const newtemp = temp-273.15;
  return newtemp;
}

async function fetchData (city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
    const result = await response.json();
    console.log(result);

    // document.querySelector(".description").innerHTML = result.weather[description];
    document.querySelector(".city").innerHTML = result.name;
    document.querySelector(".temp").innerHTML = Math.ceil(converter((result.main.temp))) + '°C';
    document.querySelector(".info").innerHTML = Math.ceil(converter((result.main.temp_max))) + '°C / ' + Math.ceil(converter((result.main.temp_min))) + '°C Feels like ' + Math.ceil(converter((result.main.feels_like))) + '°C';
    document.querySelector(".humidity").innerHTML = result.main.humidity + '%';
    document.querySelector(".rain").innerHTML = result.clouds['all'] + '%';
    document.querySelector(".wind").innerHTML = result.wind.speed + ' km/h';
    document.querySelector(".pressure").innerHTML = (result.main.pressure/33.864).toFixed(2) + ' \"Hg';

  } catch (error) {
    console.error(error);
  }
}

searchBtn.addEventListener("click", ()=>{
  fetchData(searchBox.value);
})


