function showStudyGrant() {

        // Read values from the input fields
				var age =
						Number(document.getElementById('age').value);

				var withParents =
						document.getElementById('withParents').value;

				var grantLrg = 335.20.toFixed(2);
				var grantSm = 136.70.toFixed(2);
				var askKela = "Ask Kela."
				// if student is living with parents and his/her age is greater than 20 or equal
				if (age >= 20 && withParents == "n") {
						//assign text "The study grant is 335.20 euros." to a variable
						var outputMsg = "The study grant is " + grantLrg + " euros.";
				} else if (age >= 20 && withParents == "y") {
						// you still at your parents house. That's cool I guess.
						var outputMsg = "The study grant is " + grantSm + " euros.";
				} else {
						//otherwise if ....
					var outputMsg = askKela;
				}


		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById('answer').innerHTML =
				 outputMsg;

}
