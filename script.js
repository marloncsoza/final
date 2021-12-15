/* set copyright date and current date*/

try{
    const options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
              
    }; 
    const theYear = {
        year: 'numeric'
    }
    document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-UK", options);
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-UK", theYear);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}



//FAQ JS
// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));







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
        High.textContent = `High: ${weather.birthdate} °C `;
        Windchill.textContent = `Windchill: ${weather.birthplace}`;
        Humidity.textContent = `Humidity: ${weather.birthplace} %`;
        Windspeed.textContent = `Wind Speed: ${weather.birthplace} km/ph`;
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
