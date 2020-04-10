   // Responsive Button
  function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }
  
  // Time
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
  
  // LazyLoad
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

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e13503e22a461e9043203aaf017f9f1d';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);
    const currentCondition = document.querySelector('#condition');
    const currentTemp = document.querySelector('#temp');
    const currentHumidity = document.querySelector('#humidity');
    const currentWindspeed = document.querySelector('#windspeed');

    currentCondition.textContent = jsObject2.weather[0].main;
    console.log(currentCondition);
    currentTemp.textContent = Math.round(jsObject2.main.temp);
    currentHumidity.textContent = Math.round(jsObject2.main.humidity);
    currentWindspeed.textContent = Math.round(jsObject2.wind.speed);

    const temp = jsObject2.main.temp;
    const windspeed = jsObject2.wind.speed;
    console.log(temp);
    console.log(windspeed);

    if (temp <= 50 && windspeed >= 3) {
        const windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16))).toFixed(2);
        document.getElementById('windchill').textContent = Math.round(windchill);
    } else {
        const windchill = ('N/A');
        document.getElementById('windchill').textContent = windchill;
    }
  });