const form = document.querySelector('#search-form');
const list = document.querySelector('.js-list');

const errorRequest = 'https://global.discourse-cdn.com/brave/original/3X/b/2/b25ce7b5ef1396e782cee4f7bbffaefd7f9d3b49.jpeg';

const emptyValue = 'https://www.shutterstock.com/image-illustration/no-value-red-rubber-stamp-260nw-426853699.jpg';

form.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault();
    // console.dir(e.currentTarget.elements);
    const { searchQuery, days } = e.currentTarget.elements;

    if(searchQuery.value) {
        weatherApi(searchQuery.value, days.value)
        .then(data => createMarkup(data))
        .catch(err => createErrorMessage(err, errorRequest))
    } else {
        createErrorMessage("Empty search value", emptyValue)
    };
}

function weatherApi(city, days) {
    const BASE_URL = 'http://api.weatherapi.com/v1';
    const key = '94a040c94bab4dcabf9130808222712';
    return fetch(`${BASE_URL}/forecast.json?key=${key}&=${city}&days=${days}`)
    .then(resp => {
        if(!resp.ok) {
            throw new Error(resp.statusText)
        };
        return resp.json();
    })
};

function createMarkup({
forecast: {
    forecastday: arr
}
})
{
    const markup = arr.map(({
        date,
        day: {
            avgtemp_c: avg,
            condition: {
                text,
                icon
            }
        }
    }) => `<li>
    <img src="${icon}" alt="${text}">
    <h2>Date: ${date}</h2>
    <h3>Temperature: ${avg}</h3>
    <span>${text}</span>
  </li>`);

  list.innerHTML = markup.join('');
};

function createErrorMessage(err) {
    const markup = `<li>
    <h2>${err}</h2>
    <img src="errorRequest" alt="">
  </li>`;

  list.innerHTML = markup;
};

// console.log(form, list);