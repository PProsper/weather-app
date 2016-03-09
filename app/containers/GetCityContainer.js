var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var OpenWeatherMapHelper = require('../utils/OpenWeatherMapHelper');

var GetCityContainer = React.createClass({
  propTypes: {
    direction: PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function() {
    this.context.router.push('/forecast/' + this.state.city);
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    });
  },
  render: function() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
