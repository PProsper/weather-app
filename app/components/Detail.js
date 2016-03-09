var React = require('react');
var PropTypes = React.PropTypes;
var DetailItem = require('./DetailItem');

var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function convertKelvinToCelius (kelvin) {
  return parseInt(kelvin - 273.15);
}

function Detail (props) {
  return (
    <div>
      <DetailItem
        date={props.weather.dt}
        icon={props.weather.weather[0].icon} />
      <div style={styles.descriptionContainer}>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {convertKelvinToCelius(props.weather.temp.min)} degrees C</p>
        <p>max temp: {convertKelvinToCelius(props.weather.temp.max)} degrees C</p>
        <p>humidity: {props.weather.humidity}</p>
      </div>
    </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
}

module.exports = Detail;
