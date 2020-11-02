//current weather elements
var cityInput = document.getElementById("city-input");
var searchBtn = document.getElementById("search-btn");
var savedSearchesEl = document.getElementById("saved-searches")
var currentDate = moment().subtract(10, 'days').calendar()
var displayCityName = document.getElementById("city-name")
var currentIcon = document.getElementById("current-icon");
var currentTemp = document.getElementById("current-temp");
var currentHumidity = document.getElementById("current-humidity");
var currentWindSpeed = document.getElementById("current-wind-speed");
var badgeColor = document.getElementById("badge-color")
var currentUvIndex = document.getElementById("current-uv-index");
//five day forecast elements
var dayOneCard = document.getElementById("day-one");
var dayOneDateEl = document.getElementById("day-one-date");
var dayOneIcon = document.getElementById("day-one-icon");
var dayOneTempEl = document.getElementById("day-one-temp");
var dayOneHumidEl = document.getElementById("day-one-humid");
var dayTwoCard = document.getElementById("day-two");
var dayTwoDateEl = document.getElementById("day-two-date");
var dayTwoIcon = document.getElementById("day-two-icon");
var dayTwoTempEl = document.getElementById("day-two-temp");
var dayTwoHumidEl = document.getElementById("day-two-humid");
var dayThreeCard = document.getElementById("day-three");
var dayThreeDateEl = document.getElementById("day-three-date");
var dayThreeIcon = document.getElementById("day-three-icon")
var dayThreeTempEl = document.getElementById("day-three-temp");
var dayThreeHumidEl = document.getElementById("day-three-humid");
var dayFourCard = document.getElementById("day-four");
var dayFourDateEl = document.getElementById("day-four-date");
var dayFourIcon = document.getElementById("day-four-icon")
var dayFourTempEl = document.getElementById("day-four-temp");
var dayFourHumidEl = document.getElementById("day-four-humid");
var dayFiveCard = document.getElementById("day-five");
var dayFiveDateEl = document.getElementById("day-five-date");
var dayFiveIcon = document.getElementById("day-five-icon")
var dayFiveTempEl = document.getElementById("day-five-temp");
var dayFiveHumidEl = document.getElementById("day-five-humid");
//API variable
// var apiUrl = `api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=a6b4f93ed9f64841d21b5d0442efb4fe`

//function to save search and return current weather
function currentWeather (event) {
    event.preventDefault();
    // console.log('clicked');
    var userCity = cityInput.value.trim();
    localStorage.setItem("city", userCity);
    var savedCity = document.createElement("li")
    savedCity.className = "list-group-item";
    savedCity.innerHTML = localStorage.getItem("city");
    savedSearchesEl.appendChild(savedCity);
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=a6b4f93ed9f64841d21b5d0442efb4fe`
    console.log(apiUrl);
    fetch(apiUrl)
      .then(function (response) {
          if (response.ok) {
              console.log(response);
              response.json().then(function (data){
                  console.log(data);
                  displayCityName.innerHTML = data.name + currentDate
                  var currentIconCode = data.weather[0].icon
                  var currentIconUrl = `http://openweathermap.org/img/w/${currentIconCode}.png`
                  currentIcon.src = currentIconUrl
                  currentTemp.innerHTML = "Temperature: " + data.main.temp + ' \u00B0 F';
                  currentHumidity.innerHTML = "Humidity: " + data.main.humidity + "%"
                  currentWindSpeed.innerHTML = "Wind Speed: " + data.wind.speed + " MPH";
                  currentLat = data.coord.lat
                  currentLon = data.coord.lon
                  var uVIndexUrl = `http://api.openweathermap.org/data/2.5/uvi?lat=${currentLat}&lon=${currentLon}&appid=a6b4f93ed9f64841d21b5d0442efb4fe`
                  fetch(uVIndexUrl)
                    .then(function (response) {
                        if (response.ok) {
                            console.log(response);
                            response.json().then(function (data){
                                console.log(data);
                                currentUvIndex.innerHTML = data.value
                                if (data.value >= 5.1) {
                                    badgeColor.className = "badge badge-danger"
                                } else if (data.value <= 2) {
                                    badgeColor.className = "badge badge-success"
                                } else if (data.value >= 2.1 && data.value <= 5) {
                                    badgeColor.className = "badge badge-warning"
                                }
                            })
                        }
                    })
                
              })
          }
      })
    var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=a6b4f93ed9f64841d21b5d0442efb4fe`


    console.log(fiveDayUrl);
    fetch(fiveDayUrl)
      .then(function (response) {
          if (response.ok) {
              console.log(response);
              response.json().then(function (data){
                  console.log(data);
                  //Day One Returns and Display
                  dayOneDateEl.innerHTML;
                  console.log(data.list[3].weather[0].icon)
                  var dayOneIconCode = data.list[3].weather[0].icon
                  var dayOneiconUrl = `http://openweathermap.org/img/w/${dayOneIconCode}.png`
                  dayOneIcon.src = dayOneiconUrl
                  dayOneTempEl.innerHTML = "Temp: " + data.list[3].main.temp + ' \u00B0 F';
                  dayOneHumidEl.innerHTML = "Humidity: " + data.list[3].main.humidity + "%";
                  //Day Two Returns and Display
                  var dayTwoIconCode = data.list[10].weather[0].icon
                  var dayTwoIconUrl = `http://openweathermap.org/img/w/${dayTwoIconCode}.png`
                  dayTwoIcon.src = dayTwoIconUrl
                  dayTwoTempEl.innerHTML = "Temp: " + data.list[10].main.temp + ' \u00B0 F';
                  dayTwoHumidEl.innerHTML = "Humidity: " + data.list[10].main.humidity + "%";
                  //Day Three Returns and Display
                  var dayThreeIconCode = data.list[19].weather[0].icon
                  var dayThreeIconUrl = `http://openweathermap.org/img/w/${dayThreeIconCode}.png`
                  dayThreeIcon.src = dayThreeIconUrl
                  dayThreeTempEl.innerHTML = "Temp: " + data.list[19].main.temp + ' \u00B0 F';
                  dayThreeHumidEl.innerHTML = "Humidity: " + data.list[19].main.humidity + "%";
                  //Day Four Returns and Display
                  var dayFourIconCode = data.list[27].weather[0].icon
                  var dayFourIconUrl = `http://openweathermap.org/img/w/${dayFourIconCode}.png`
                  dayFourIcon.src = dayFourIconUrl
                  dayFourTempEl.innerHTML = "Temp: " + data.list[27].main.temp + ' \u00B0 F';
                  dayFourHumidEl.innerHTML = "Humidity: " + data.list[27].main.humidity + "%";
                  //Day Five Returns and Display
                  var dayFiveIconCode = data.list[35].weather[0].icon
                  var dayFiveIconUrl = `http://openweathermap.org/img/w/${dayFiveIconCode}.png`
                  dayFiveIcon.src = dayFiveIconUrl
                  dayFiveTempEl.innerHTML = "Temp: " + data.list[35].main.temp + ' \u00B0 F';
                  dayFiveHumidEl.innerHTML = "Humidity: " + data.list[35].main.temp + "%";



              })
          }
      })

    }


//event listener for button
searchBtn.addEventListener("click", currentWeather);


