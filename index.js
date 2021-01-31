// appID (need to remove before pushing to GitHub)
const api = `SET APP ID HERE`;

// function to fetch weather info from openweathermap api
const weatherData = placeOfInterest => fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${placeOfInterest}&${api}&units=metric`)
    .then(response => response.json());

// selection of animated icons (credit: https://codemyui.com/animated-weather-icons-in-css/)
const prettyIcons = { 
    '01d': `<div class="icon sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
            </div>`,
    '02d': `<div class="icon sun-shower">
                <div class="cloud"></div>
            <div class="sun">
                <div class="rays"></div>
            </div>
                <div class="rain"></div>
            </div>`,
    '03d': `<div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>`,
    '04d': `<div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>`,
    '09d': `<div class="icon rainy">
                <div class="cloud"></div>
                <div class="rain"></div>
            </div>`,
    '10d': `<div class="icon rainy">
                <div class="cloud"></div>
                <div class="rain"></div>
            </div>`,
    '11d': `<div class="icon thunder-storm">
                    <div class="cloud"></div>
                <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                </div>
            </div>`,
    '13d': `<div class="icon flurries">
                    <div class="cloud"></div>
                <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                </div>
            </div>`,
    '50d': `<div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>`, 
    '01n': `<div class="icon sunny">
                <div class="sun">
                    <div class="rays"></div>
                </div>
            </div>`,
    '02n': `<div class="icon sun-shower">
                    <div class="cloud"></div>
                <div class="sun">
                    <div class="rays"></div>
                </div>
                    <div class="rain"></div>
            </div>`,
    '03n': `<div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>`, 
    '04n': `<div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>`, 
    '09n': `<div class="icon rainy">
                <div class="cloud"></div>
                <div class="rain"></div>
            </div>`,
    '10n': `<div class="icon rainy">
                <div class="cloud"></div>
                <div class="rain"></div>
            </div>`,
    '11n': `<div class="icon thunder-storm">
                    <div class="cloud"></div>
                <div class="lightning">
                    <div class="bolt"></div>
                    <div class="bolt"></div>
                </div>
            </div>`,
    '13n': `<div class="icon flurries">
                    <div class="cloud"></div>
                <div class="snow">
                    <div class="flake"></div>
                    <div class="flake"></div>
                </div>
            </div>`,
    '50n': `<div class="icon cloudy">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>`, 
};


// getWeather function used to render the weatherReport
const getWeather = (here, currentTemp, feelTemp, icon) => `
    <div>
        ${icon}
        <h6>${here} is currently ${Math.round(currentTemp)} °C</h6>\n
        <h6>...though it feels like ${Math.round(feelTemp)} °C</h6>
    </div>
`;

// selecting the elements required
const here = document.querySelector('#placeOfInterest');
const letsGo = document.querySelector('#letsGo');
const weatherReport = document.querySelector(".weatherReport");
const error = document.querySelector("#error");

// add event listener for the click event on the button
letsGo.addEventListener('click', (event) => {
    event.preventDefault();
    // getting city entered (placeOfInterest) from the text input field. 
    const placeOfInterest = here.value;
    
    // collating weather data for placeOfInterest entered
    weatherData(placeOfInterest)
        .then(weather => {
            // collecting the data to be included in the response card HTML
            const here = weather.name;
                console.log(here);
            const currentTemp = weather.main.temp;
                console.log(currentTemp); 
            const feelsLike = weather.main.feels_like;
                console.log(feelsLike);
            const icon = prettyIcons[weather.weather[0].icon];
                console.log(icon);
            
            // create response card HTML
            const weatherHtml = getWeather(here, currentTemp, feelsLike, icon);
            weatherReport.innerHTML = weatherHtml;
            error.textContent = '';
        })

        // placeOfInterest not recognised (error response)
        .catch(() => {
            weatherReport.innerHTML = '';
            error.textContent = 'Where is that?! 🤔';
        });
    here.value = '';
});










/*

<div class="card-body">
<img class="card-img-bottom" alt="Card header image" src="https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80">
</div>


const hereImage = {
    '2158177': "https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
}
            const hereImage = weather.id;
                    console.log(hereImage);
                    , hereImage (line 23, 54)
    <div class="background-image" style="background-image: url('${hereImage}')"></div>
*/

// Based on dribbble shot https://dribbble.com/shots/2097042-Widget-Weather by kylor
