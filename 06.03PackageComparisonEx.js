function comparePackages() {

		// assign input field values into a variables
    var textMessages =
        Number(document.getElementById("textMessages").value);
    var callTime =
        Number(document.getElementById("callTime").value);
		// calculate the costs of the Special Package
    var rate = 0.069;
    var specialPkg = 19.90 + (textMessages*rate) + (callTime*rate);
    var allInclusive = 29.90;
		// If the Special package is cheaper than the All-inclusive package
    if (specialPkg < allInclusive) {
      // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
      var outputMsg = "The Special package (" + specialPkg.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)"
    } else {
      // otherwise
        // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
        // to a variable
      var outputMsg = "The All-inclusive package (29.90) is cheaper than the Special package (" + specialPkg.toFixed(2) + ")"
    }

		// write answer to the DOM, in answer div, as content
    document.getElementById('answer').innerHTML =
        outputMsg;
}
