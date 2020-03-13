const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e13503e22a461e9043203aaf017f9f1d';
var now = new Date();
var dayOfWeek = now.getDay();

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentCondition = document.querySelector('#condition');
    const currentTemp = document.querySelector('#temp');
    const currentHumidity = document.querySelector('#humidity');
    const currentWindspeed = document.querySelector('#windspeed');

    currentCondition.textContent = jsObject.list[0].weather[0].main;
    console.log(currentCondition);
    currentTemp.textContent = jsObject.list[0].main.temp;
    currentHumidity.textContent = jsObject.list[0].main.humidity;
    currentWindspeed.textContent = jsObject.list[0].wind.speed;

    const temp = jsObject.list[0].main.temp;
    const windspeed = jsObject.list[0].wind.speed;
    console.log(temp);
    console.log(windspeed);

    if (temp && windspeed) {
        const windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16))).toFixed(2);
        document.getElementById('windchill').textContent = windchill;
    } else {
        const windchill = ('N/A');
        document.getElementById('windchill').textContent = windchill;
    }

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);

    for(let i=0; i<fivedayforecast.length; i++) {
        document.getElementById('forecast'+(i+1)).textContent = fivedayforecast[i].main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + fivedayforecast[i].weather[0].icon + '.png';
        console.log(imagesrc);
        const desc = fivedayforecast[i].weather[0].description;
        document.getElementById('conditionico'+(i+1)).setAttribute('src', imagesrc);
        document.getElementById('conditionico'+(i+1)).setAttribute('alt', desc);
    }
    
    switch(dayOfWeek) {
        case 1:
            document.getElementById('day1').textContent = "Tue";
            document.getElementById('day2').textContent = "Wed";
            document.getElementById('day3').textContent = "Thur";
            document.getElementById('day4').textContent = "Fri";
            document.getElementById('day5').textContent = "Sat";
            break;
        case 2:
            document.getElementById('day1').textContent = "Wed";
            document.getElementById('day2').textContent = "Thur";
            document.getElementById('day3').textContent = "Fri";
            document.getElementById('day4').textContent = "Sat";
            document.getElementById('day5').textContent = "Sun";
            break;
        case 3:
            document.getElementById('day1').textContent = "Thur";
            document.getElementById('day2').textContent = "Fri";
            document.getElementById('day3').textContent = "Sat";
            document.getElementById('day4').textContent = "Sun";
            document.getElementById('day5').textContent = "Mon";
            break;
        case 4:
            document.getElementById('day1').textContent = "Fri";
            document.getElementById('day2').textContent = "Sat";
            document.getElementById('day3').textContent = "Sun";
            document.getElementById('day4').textContent = "Mon";
            document.getElementById('day5').textContent = "Tue";
            break;
        case 5:
            document.getElementById('day1').textContent = "Sat";
            document.getElementById('day2').textContent = "Sun";
            document.getElementById('day3').textContent = "Mon";
            document.getElementById('day4').textContent = "Tue";
            document.getElementById('day5').textContent = "Wed";
            break;
        case 6:
            document.getElementById('day1').textContent = "Sun";
            document.getElementById('day2').textContent = "Mon";
            document.getElementById('day3').textContent = "Tue";
            document.getElementById('day4').textContent = "Wed";
            document.getElementById('day5').textContent = "Thur";
            break;  
        case 7:
            document.getElementById('day1').textContent = "Mon";
            document.getElementById('day2').textContent = "Tue";
            document.getElementById('day3').textContent = "Wed";
            document.getElementById('day4').textContent = "Thur";
            document.getElementById('day5').textContent = "Fri";
            break;
    }
});