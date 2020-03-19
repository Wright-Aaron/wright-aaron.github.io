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