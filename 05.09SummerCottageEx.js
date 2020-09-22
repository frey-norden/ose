function calculateRent() {
        // Read the value from the input field into a variable
        var totalRent =
            Number(document.getElementById("rent").value);
        var participants =
            Number(document.getElementById("participants").value);
        // Do the calculation
        var rentPerPerson = totalRent/participants;
        // Write the answer to the DOM, in the answer div, as the content
        document.getElementById("answerDiv").innerHTML =
          "Rent per participant is " + rentPerPerson.toFixed(2) + " euros.";

}
