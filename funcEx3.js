

// Definition of the function calculateTax
function calculateTax(price, taxPercentage) {
  var tax = price * (taxPercentage/100);
  return tax;
}

// Making a call to the function calculateTax
var tax = calculateTax(180.00, 24.00);

var outputText = 'The tax is ' + tax.toFixed(2) + ' euros';
document.getElementById('pOutputTax').innerHTML = outputText;

// Making a call to the function fahrenheitToCelcius
var celciusDegrees = fahrenheitToCelcius(100);

outputText = '100° F =' + celciusDegrees.toFixed(0) + '° C';
document.getElementById('pOutputTemp').innerHTML = outputText;

// Making a call to the function getCurrentTime
document.getElementById('pCurrentTime').innerHTML = 'Se on kello: ' + getCurrentTime();
