var React = require('react');
var PropTypes = React.PropTypes;
var moment = require('moment');

var styles = {
  date: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  }
}

function getStyles (props) {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '35px',
    cursor: props.onSelectDay ? 'pointer' : 'default'
  }
}

function formatDate (datetime) {
  return moment.unix(datetime).format('dddd, MMM D');
}

function DetailItem (props) {
  return (
    <div style={getStyles(props)} key={props.date} onClick={props.onSelectDay}>
      <img style={{height: 130}} src={'./app/images/weather-icons/'+props.icon+'.svg'} alt="Weather" />
      <h2 style={styles.date}>{formatDate(props.date)}</h2>
    </div>
  )
}

DetailItem.propTypes = {
  icon: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  onSelectDay: PropTypes.func
}

module.exports = DetailItem;
