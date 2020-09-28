function showWeightGoals() {
    // read the original weight to a variable
    var weight = Number(document.getElementById('weight').value);

    // calculate how many kgs one should get lighter each week = weight * 0.1 / 7
    var wkGoal = weight * 0.1 / 7;

    // initialize output text variable to start from empty text: ""
    var outputMsg = "";
    // it will be used later to gather all the output lines. (String can hold also line breaks)

    for (var i = 1; i <= 7; i++) {
     	// give the weight variable a new value which is weight after last
      weight -= wkGoal;
      // measurement reduced by the how much to lose this week.
      // add this week’s text + line break to the output text variable
      outputMsg += 'After ' + i + '. week ' + weight.toFixed(1) + ' kg' + '<br>'
    }

    // write the whole output text to the HTML page at once
    document.getElementById('answer').innerHTML = outputMsg;
}
