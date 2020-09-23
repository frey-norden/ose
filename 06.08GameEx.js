
function play() {
		// Read value from the input field
    var bet =
        Number(document.getElementById('bet').value);
		// Randomize dice pips between 1-6
    var pips = Math.round((Math.random()* 5) + 1 );
		// Calculate win base on pips
    var coins24 = bet * 1.25;
    var coins6 = bet * 1.5;

    if (pips == 2 || pips == 4) {
      var outputMsg = 'Pips was ' + bet + ' Paid back: ' + coins24.toFixed(2) + ' euros';
    }  else if (pips == 6) {
      var outputMsg = 'Pips was ' + bet + ' Paid back: ' + coins6.toFixed(2) + ' euros';
    } else {
      var outputMsg = 'no pay';
    }

		// Print it to the DOM, in answer div, as div content
    document.getElementById('answer').innerHTML =
        outputMsg;
}
