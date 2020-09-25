const api = `&APPID=`;
const weatherData = placeOfInterest => fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${placeOfInterest}&${api}&units=metric`)
    .then(response => response.json());

const here = document.querySelector('#placeOfInterest');

const getWeather = (here, currentTemp, feelTemp) => `
    <div class="card-body">
        <h6>${here} is currently ${Math.round(currentTemp)} °C</h6>\n
        <h6>...though it feels like ${Math.round(feelTemp)} °C</h6>
    </div>
`;




const reportWeather = document.querySelector('#reportWeather');

reportWeather.addEventListener('click', (event) => {
    event.preventDefault();

    const placeOfInterest = here.value;
    const msg = document.querySelector(".msg");

    weatherData(placeOfInterest)
        .then(weather => {

            const here = weather.name;
                console.log(here);

            const currentTemp = weather.main.temp;
                console.log(currentTemp); 
            const feelsLike = weather.main.feels_like;
                console.log(feelsLike);
        
            const weatherHtml = getWeather(here, currentTemp, feelsLike);
            response.innerHTML = weatherHtml;
        })
    .catch(() => {
            msg.textContent = 'Where is that?! 🤔';
    });

    here.value = '';
    
});









const background = document.querySelector('.background'); 



/*

<div class="card-body">
<img class="card-img-bottom" alt="Card header image" src="https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
</div>

*/
