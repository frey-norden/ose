function randomInteger(from, to) {
    // Return randomizedNumber between 'from' and 'to'.
    var randomInt = Number(Math.floor(Math.random() * to) + from);
    return randomInt;
}

function rollEm() {
    // Call the function randomInteger(from, to) with parameter values 1 and 6.

    // Assign the return value of the function to the variable.
    var rnum = randomInteger(1, 6);
    //Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
    document.getElementById('dice').innerHTML = rnum;
}
