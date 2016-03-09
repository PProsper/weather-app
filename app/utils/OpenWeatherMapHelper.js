var axios = require('axios');

var app_id = "bc1a64b8a7229620344fa40ed55d98c8";
var param = "&APPID=" + app_id;

var getCityWeatherToday = function(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather' + '?q=' + city + '&type=accurate' + param);
}

var getCityWeatherForecast = function(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily' + '?q=' + city + '&type=accurate&cnt=5' + param);
}

var helpers = {
  getCityWeather: function(city) {
    return getCityWeatherToday(city)
      .then(function (weather) {
          return weather.data;
      })
      .catch(function (err) {
        console.warn('Error in getCityWeather', err);
      });
  },
  getCityForecast: function(city) {
    return getCityWeatherForecast(city)
      .then(function (weather) {
          return weather.data.list;
      })
      .catch(function (err) {
        console.warn('Error in getCityForecast', err);
      });
  }
}

module.exports = helpers;
