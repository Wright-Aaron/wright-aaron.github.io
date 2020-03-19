// Web Font
WebFont.load({
  google: {
      families: ['Poppins', 'Cormorant+SC']
  }
});

// Responsive Button
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Alert
var now = new Date();
var dayOfWeek = now.getDay();
console.log(dayOfWeek);
if (dayOfWeek != 5) {
    document.getElementById("message").style.display = "none";
} else {
    document.getElementById("message").style.display = "block";
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

// Card generator
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {
        let townsDiv = document.createElement('div');
        let card = document.createElement('section');
        
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        year.textContent = "Year Founded: " + towns[i].yearFounded;
        pop.textContent = "Population: " + towns[i].currentPopulation;
        rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', towns[i].name);

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(year);
        card.appendChild(pop);
        card.appendChild(rain);
        
        townsDiv.appendChild(card);
        townsDiv.appendChild(image);
      

        document.querySelector('div.towns').appendChild(townsDiv);
        
    }
        else {
            continue;
        }


    }
  });