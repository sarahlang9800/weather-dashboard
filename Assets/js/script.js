var apiKey = '1b84b3d807e22917f303632143eabcc6'
var searchInput = ''
var cityName = ''
var cityStorage = [];
var today = dayjs();
$('#currentDate').text(today.format('(DD/MM/YYYY)'));

var searchBtn = $('#searchBtn')
searchBtn.on('click', function(event){
    event.preventDefault();
    searchInput = $('#searchCity').val().trim();
    getLocation(searchInput)
    saveSearchHistory(searchInput);
})

function saveSearchHistory(city) {
    cityStorage.push(city)
    localStorage.setItem("searched", JSON.stringify(cityStorage));
};
function renderInput() {
    cityStorage = JSON.parse(localStorage.getItem("searched"));
    if(!cityStorage) { cityStorage = []}
    else { 
        //for loop to append search history as buttons
        for (var i = 0; i < cityStorage.length; i++) {
            var  cityButton = document.createElement('button')
            cityButton.textContent.cityStorage[i]
            var previousSearched = document.getElementById('#previousSearched')
            cityButton.appendChild(previousSearched)
        }

    }
}


function getLocation(searchInput) {
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&limit=5&appid=" + apiKey;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var latitude = data[0].lat;
                var longitude = data[0].lon;
                var latString = latitude.toString();
                var lonString = longitude.toString();
                var cityName = document.getElementById('cityName')
                cityName.textContent = data[0].name;
                getWeather(latString, lonString)
            })
        }
    })

}
function getWeather(lat, lon) {
    var apiKey = '1b84b3d807e22917f303632143eabcc6'
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + '&units=imperial';
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (main) {
            var fiveDayContainer = document.getElementById('fiveDayForecastContainer')
            fiveDayContainer.innerHTML = ""; 
                for (var i = 0; i < 5; i++) {
                    var card = document.createElement('div')
                    var date = document.createElement('p')
                    var temp = document.createElement('p')
                    var wind = document.createElement('p')
                    var humidity = document.createElement('p')

                    var dateText = today.add(i, 'day').format('(DD/MM/YYYY)');
                    date.innerHTML = dateText;

                    temp.innerHTML = `Temp: ${main.list[i * 8].main.temp} ℉`;
                    wind.innerHTML = `Wind: ${main.list[i * 8].wind.speed} MPH`;
                    humidity.innerHTML = `Humidity: ${main.list[i * 8].main.humidity} %`;

                    card.classList.add('card')
                    card.appendChild(date)
                    card.appendChild(temp)
                    card.appendChild(wind)
                    card.appendChild(humidity)

                    fiveDayContainer.appendChild(card)
                }
            })
        }
    })

}
renderInput();