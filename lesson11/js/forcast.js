const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e13503e22a461e9043203aaf017f9f1d';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
});