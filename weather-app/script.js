const apikey = 'fe63ac7994dd96348e17d79726677104';

const mainEl = document.getElementById('main');
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
const langBtn = document.getElementById('lang');

// const APIURL = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
const APIURL = (city, lang) => `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const lang = langBtn.innerHTML;
    const resp = await fetch(APIURL(city, lang), { mode: 'cors' });
    const respData = await resp.json();

    console.log(respData);

    renderTemp(respData);

}

function renderTemp(data) {
    if (data.cod === "404") {
        console.log(data.message);
        return;
    }

    const temp = kelvinToCelcius(data.main.temp);
    const weatherEl = document.createElement('div');

    weatherEl.classList.add('weather');
    weatherEl.innerHTML = `
        <span>${data.name}(${data.sys.country})</span>
        <h2>${temp}°C</h2>
        <img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' />
        <small>${data.weather[0].description}</small>
    `;

    weatherEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        weatherEl.remove();
    })

    mainEl.appendChild(weatherEl);
}

function kelvinToCelcius(K) {
    return Math.floor(K - 273.15);
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = searchEl.value;


    if (city) {
        getWeatherByLocation(city);
    }

    searchEl.value = '';
});

langBtn.addEventListener('click', () => {
    // langBtn.innerHTML = langBtn.innerHTML === "VI"? "EN" : "VI";
    if (langBtn.innerHTML === "VI") {
        langBtn.innerHTML = "EN";
        searchEl.placeholder = "Search by location";
    } else {
        langBtn.innerHTML = "VI";
        searchEl.placeholder = "Tìm kiếm bằng vị trí";
    }
});