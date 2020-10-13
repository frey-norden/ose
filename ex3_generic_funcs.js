// temperature functions to convert Fahrenheit to Celcius

// convert Celcius to Fahrenheit
function celciusToFahrenheit(celcius) {
  return (celcius * 9)/5 + 32;
}

function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32)* 5/9;
}

// Returns current time as 'hh:mm'
function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
}
