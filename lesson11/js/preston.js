// Webfont JavaScript
WebFont.load({
    google: {
        families: ['Poppins', 'Cormorant+SC']
    }
  });

// Time Javascript for footer.
try {
    document.getElementById('currentYear').innerHTML = new Date().getFullYear();
}
catch (e) {
    alert ["Function not supported"]
}

try {
    document.getElementById('lastUpdated').innerHTML = new Date().toLocaleDateString("en-US") + " " + new Date().toLocaleTimeString("en-US");
}
catch (e) {
    alert ["Function not supported"]
}

// Alert Javascript
var now = new Date();
var dayOfWeek = now.getDay();
console.log(dayOfWeek);
if (dayOfWeek != 5) {
    document.getElementById("message").style.display = "none";
} else {
    document.getElementById("message").style.display = "block";
} 

// Events Javascipt
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
    if (towns[i].name == 'Preston') {
        let eventsDiv = document.createElement('div');
        let card = document.createElement('section');

        let h2 = document.createElement('h2');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        let event4 = document.createElement('p');

        h2.textContent = "Upcoming Events";
        event1.textContent = towns[i].events[0];
        event2.textContent = towns[i].events[1];
        event3.textContent = towns[i].events[2];
        event4.textContent = towns[i].events[3];
        console.log(event1);

        card.appendChild(h2);
        card.appendChild(event1);
        card.appendChild(event2);
        card.appendChild(event3);
        card.appendChild(event4);
        eventsDiv.appendChild(card);
        console.log(eventsDiv);

        document.querySelector('div.events').appendChild(eventsDiv);
    }
  
    else {
        continue;
    }

}
});

// LazyLoad JavaScript
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}

const imgOptions = {
    threshold: 0.5,
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})

// Responsive nav JavaScript
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Forcast JavaScript
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
    currentTemp.textContent = Math.round(jsObject.list[0].main.temp);
    currentHumidity.textContent = Math.round(jsObject.list[0].main.humidity);
    currentWindspeed.textContent = Math.round(jsObject.list[0].wind.speed);

    const temp = jsObject.list[0].main.temp;
    const windspeed = jsObject.list[0].wind.speed;
    console.log(temp);
    console.log(windspeed);

    if (temp <= 50 && windspeed >= 3) {
        const windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16))).toFixed(2);
        document.getElementById('windchill').textContent = Math.round(windchill);
    } else {
        const windchill = ('N/A');
        document.getElementById('windchill').textContent = windchill;
    }

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);

    for(let i=0; i<fivedayforecast.length; i++) {
        document.getElementById('forecast'+(i+1)).textContent = Math.round(fivedayforecast[i].main.temp);

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