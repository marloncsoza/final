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







const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
let prophets = [];


function createTemplate(prophetsList){
    prophetsList.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pBirthdate = document.createElement("p");
        let pBirthplace = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        pBirthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        pBirthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);


        card.appendChild(h2);
        card.appendChild(pBirthdate);
        card.appendChild(pBirthplace);
        card.appendChild(image);

        document.querySelector('div.templates').appendChild(card);        
    });
}



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    prophets = jsonObject['prophets'];
    createTemplate(prophets);
  });



















