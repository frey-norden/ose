function calculateUnitFine() {
        // Read the value from the input field into a variable
          var monthlyIncome =
              Number(document.getElementById("txtNetIncome").value);

		    // Calculate the unit fine and assign the result into another variable
          var unitFine =
              (monthlyIncome - 255)/60
          var kiitos = "Kiitos, thank you for shopping @ Poliisi!"
        // Write the answer to the web page DOM, in the answer div, as the content
          document.getElementById("answerDiv").innerHTML =
              "Unit fine is " + unitFine.toFixed(2) + " euros.";
          document.getElementById("kiitos").innerHTML =
              kiitos;
}
