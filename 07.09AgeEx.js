function tellAge() {
    // Read value of yearOfBirth from the input field

    var yearOfBirth = Number(document.getElementById('yearOfBirth').value);
    console.log(yearOfBirth);
    // Figure out the current date into today variable
    var today = new Date();
    console.log(today);
    // Use getFullYear() method to get the current year out from the today variable
    var foolYear = today.getFullYear();
    console.log(foolYear);
    // Calculate the (rough estimate of the) age
    var age = foolYear - yearOfBirth;
    console.log(age)
    // If age is less than zero
    if (age < 0) {
      var msg = 'Error: you have not been born year. Please go back through the time portal.'
    } else {
      var msg = 'You are now ' + age + ' years old.<br> (Current year is ' + foolYear + '.)';
    }
        //  Show an error message

    // otherwise tell the age
    document.getElementById('answer').innerHTML = msg;
}
