function calculateSalary(hours, hourlySalary) {
		// calculate salary
    var grossPay = Number(hours * hourlySalary);
		// return the gross salary with the return statement
    return grossPay;
}

function showGrossSalary() {
		// assign the input field value to the variable hours
    var hours = Number(document.getElementById('hours').value);
		// assign the second input field value to the variable hourlySalary
    var hourlyRate = Number(document.getElementById('hourlySalary').value);
		// call the calculateSalary function
    var grossPay = calculateSalary(hours, hourlyRate);
		// write the answer on the html page
    var outputMsg = 'Gross salary is ' + grossPay.toFixed(2) + ' euros.';
    document.getElementById('answer').innerHTML = outputMsg;

}
