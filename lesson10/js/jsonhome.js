const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];  // temporary checking for valid response and data parsing
    

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {
        let townsDiv = document.createElement('div');
        let card = document.createElement('section');
        

        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let year = document.createElement('p')
        let pop = document.createElement('p')
        let rain = document.createElement('p')
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