// Create an array of twelve average temperatures
var temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8,
				16.3, 11.5, 6.6, 1.6, -2.0];

function loopTemperatures() {
    // For loop
		for (var i = 1; i <= temperatures.length; i++) {
			var temp = Number(temperatures[i-1]);
			console.log(i + '. ' + temp.toFixed(1));
		}
}
        // Use the console.log() method to write each temperature of the array
