var React = require('react');
var Forecast = require('../components/Forecast');
var OpenWeatherMapHelper = require('../utils/OpenWeatherMapHelper');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: true,
      forecast: []
    }
  },
  componentDidMount: function() {
    OpenWeatherMapHelper.getCityForecast(this.props.routeParams.city)
      .then(function(forecast) {
        this.setState({
          isLoading: false,
          forecast: forecast
        })
      }.bind(this));
  },
  handleSelectDay: function(weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        onSelectDay={this.handleSelectDay}
        city={this.props.routeParams.city}
        forecast={this.state.forecast} />
    )
  }
});

module.exports = ForecastContainer;
