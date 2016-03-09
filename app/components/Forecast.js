var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var DetailItem = require('./DetailItem');

var styles = {
  city: {
    fontSize: '55px',
    fontWeight: '100',
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '30px'
  },
  forecast: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '50px auto'
  },
  select: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  }
}

function getForecast (props) {
  return props.forecast.map(function(day) {
    var icon = day.weather[0].icon;
    return (
      <DetailItem icon={icon} date={day.dt}
        onSelectDay={props.onSelectDay.bind(null, day)}/>
    )
  });
}

function Forecast (props) {
  return props.isLoading === true
    ? <Loading />
    : <div style={{textAlign: 'center'}}>
        <h1 style={styles.city}> {props.city} </h1>
        <p style={styles.select}>Select a day</p>
        <div style={styles.forecast}>{getForecast(props)}</div>
      </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSelectDay: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired
}

module.exports = Forecast;
