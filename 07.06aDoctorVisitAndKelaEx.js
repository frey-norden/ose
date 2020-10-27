// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function kelaReimbursement(visitLength) {
  if (visitLength < 10) {
    return 8.00;
  } else if (visitLength >= 10 && visitLength < 20) {
    return 11.00;
  } else if (visitLength >= 20 && visitLength < 30) {
    return 13.50;
  } else if (visitLength >= 30 && visitLength < 45) {
    return 16.50;
  } else {
    return 21.00;
  }
}
// function to calculate how much owed after kela reimbursement
function amountDue(doctorsFee, reimbursement) {
  var officeFee = 15.90;
  var toPay = doctorsFee + officeFee - reimbursement;
  return toPay;
}

// Define a function
function calculate() {
		// Read values from the input fields
    var visitLength = Number(document.getElementById('length').value);
    var doctorsFee = Number(document.getElementById('doctorsFee').value);
		// Call the function (1.) which calculates and returns Kela reimbursement
    var reimbursement = kelaReimbursement(visitLength);
    var paymentDue = amountDue(doctorsFee, reimbursement);

		// Write the answer on the page, to the answer div, as content of the div
    var outputVisit = "Doctor's Fee is " + doctorsFee.toFixed(2) + ' euros.<br>';
    var outputRepay = 'Kela reimbursement is ' + reimbursement.toFixed(2) + ' euros.<br>';
    var officeFee = 'Office Fee is 15.90 euros<br>';
    var need2Pay = 'Customer needs to pay ' + paymentDue.toFixed(2) + ' euros.'

    document.getElementById('answer').innerHTML = outputVisit + outputRepay + officeFee + need2Pay;
}
