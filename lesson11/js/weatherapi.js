const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e13503e22a461e9043203aaf017f9f1d';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp');

    currentTemp.textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('apiicon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('apiicon').setAttribute('alt', desc);
  });