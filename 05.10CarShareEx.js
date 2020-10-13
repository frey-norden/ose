function calculateCosts() {

		// Read them values from input dump em into a var
    var kilometers =
        Number(document.getElementById("kilometers").value);

    var consumption =
        Number(document.getElementById("consumption").value);

    var fuelPrice =
        Number(document.getElementById("price").value);

    var participants =
        Number(document.getElementById("participants").value);

    // Do them cal-cuh-lay-shuns
    var calculatedCosts = ((consumption/100.0)*fuelPrice*kilometers/participants);

    // Display it to tha DOM, baby !!!
    document.getElementById("answerId").innerHTML =
        "Fuel costs per participant is " + calculatedCosts.toFixed(2) + " euros.";


}
