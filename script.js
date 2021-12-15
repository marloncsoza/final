const requestURL = 'https://marloncsoza.github.io/final/final.json';
let weather = [];

function createCard(weatherList){
    weatherList.forEach(weather => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let High = document.createElement("p");
        let Windchill = document.createElement("p");
        let Humidity = document.createElement("p");
        let Windspeed = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = `Current: ${weather.Current} `;
        High.textContent = `High: ${weather.High} °C `;
        Windchill.textContent = `Windchill: ${weather.Windchill}`;
        Humidity.textContent = `Humidity: ${weather. Humidity} %`;
        Windspeed.textContent = `Wind Speed: ${weather.Windspeed} km/ph`;
        image.setAttribute('src', weather.imageurl);
        image.setAttribute('alt', `${weather.Current} ${weather.Current} - ${weather.order}`);


        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(High);
        card.appendChild(Windchill);
        card.appendChild(Humidity);
        card.appendChild(Windspeed);
        

        document.querySelector('div.cards').appendChild(card);        
    });
}



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    weather = jsonObject['weather'];
    createCard(weather);
  });
