function modifyTitle() {

    // Read value of title from the input field
    var title = document.getElementById('title').value;
    //console.log(title);
    // Call allCapsTitleTrimmed() function
    var modified = allCapsTitleTrimmed(title);
    return modified;
}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
  var strip = text.trim();
	// Changes the text given to it to be ALL CAPS
  var big = strip.toUpperCase();
  console.log(big);
  document.getElementById('title').innerHTML  = big;
	// Return the changed text
  return document.getElementById('title').innerHTML  = big;
}


function calculate() {

    // Calculate length of the work as minutes.
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;
    var sTHours = startTime.substr(0, 2);
    sTHours = parseInt(sTHours) * 60;
    var sTMins = startTime.substr(3, 5);
    sTMins = parseInt(sTMins);
    sTMins += sTHours;

    var eTHours = endTime.substr(0, 2);
    eTHours = parseInt(eTHours) * 60;
    var eTMins = endTime.substr(3, 5);
    eTMins = parseInt(eTMins);
    eTMins += eTHours;

    var totalTime = eTMins - sTMins;

    console.log('Total time in mins ' + totalTime);


    // If it is not Sunday  (Call isSunday() function)
        //Calculate and show price of the repair work during the workdays
    //otherwise
        //Calculate and showprice of the repair work on Sundays


    var totalPrice = (totalTime / 60) * 48;


    var outputMsg1 = 'Length of the work was ' + totalTime + ' minutes.<br>'
    var outputMsg2 = 'The hourly price is during the workdays 48.00 euros.<br>'
    var outputMsg3 = 'The price of this repair work is ' + totalPrice.toFixed(2) + ' euros.'
    document.getElementById('answer').innerHTML = outputMsg1 + outputMsg2 + outputMsg3;
}

 // The function gets the date text in the format "dd.MM.yyyy".
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {

	// Split the given date text into day, month and year parts using the substr() method


	// Create a new Date object to a variable asDate


	// Get the day of the week with its getDay() method. Sunday is number 0 .


	// If day of the week is Sunday

		// return Boolean value true

	// otherwise

       // return Boolean value false

}
