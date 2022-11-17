// var apiKey = '1b84b3d807e22917f303632143eabcc6'
// var searchBtn = $('#searchBtn')
// var searchInput = ''
// var cityName = ''
// var currentWeather = ''
// var today = dayjs();
// $('#currentDate').text(today.format('dddd, MMM D, YYYY'));


// searchBtn.click(function(){
//     console.log("btn was clicked")
//     searchInput = $('#searchCity').val().trim();
//     console.log(searchInput)
//     getLocation(searchInput)
// })


// function getLocation(searchInput) {
//     var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&limit=1&appid=" + apiKey;
//     console.log(searchInput)
//     fetch(apiUrl).then(function(response) {
//         if (response.ok) {
//             response.json().then(function(data) {
//                 console.log(data)
//                 var latitude = data[0].lat;
//                 var longitude = data[0].lon;
//                 var latString = latitude.toString();
//                 var lonString = longitude.toString();
//                 var cityName = document.getElementById('cityName')
//                 cityName.textContent = data[0].name;
//                 getWeather(latString, lonString)
//             })
//         }
//     })

// }
// function getWeather(lat, lon) {
//     var apiKey = '1b84b3d807e22917f303632143eabcc6'
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;
//     fetch(apiUrl).then(function(response) {
//         if (response.ok) {
//             response.json().then(function(main) {
//                 console.log(main)
//                 var temperature = main.main.temp;
//                 var windSpeed = main.wind.speed;
//                 var humidity = main.main.humidity;
//                 var tempString = temperature.toString();
//                 var windString = windSpeed.toString();
//                 var humidityString = humidity.toString();
//                 var currentWeather = document.getElementById('currentWeather')
//                 // currentWeather.textContent = main.name;
//                 getWeather(tempString, windString, humidityString)

//             })
//         }
//     })

// }



var apiKey = '1b84b3d807e22917f303632143eabcc6'
var searchBtn = $('#searchBtn')
var searchInput = ''
var cityName = ''
var currentWeather = ''
var today = dayjs();
$('#currentDate').text(today.format('dddd, MMM D, YYYY'));


searchBtn.click(function(){
    console.log("btn was clicked")
    searchInput = $('#searchCity').val().trim();
    console.log(searchInput)
    getLocation(searchInput)
})


function getLocation(searchInput) {
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&limit=1&appid=" + apiKey;
    console.log(searchInput)
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
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
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(main) {
                console.log(main)
                var temperature = main.main.temp;
                var windSpeed = main.wind.speed;
                var humidity = main.main.humidity;
                var tempString = temperature.toString();
                var windString = windSpeed.toString();
                var humidityString = humidity.toString();
                var todaysTemp = document.getElementById('todaysTemp')
                todaysTemp.textContent = temperature;
                var todaysWind = document.getElementById('todaysWind')
                todaysWind.textContent = windSpeed;
                var todaysHumidity = document.getElementById('todaysHumidity')
                todaysHumidity.textContent = humidity;
                // getWeather(tempString, windString, humidityString)

            })
        }
    })

}