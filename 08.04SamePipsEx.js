function rollEm() {
  // Randomize the pips once

  var pips1 = Math.round((Math.random() * 5) + 1);
  var pips2 = Math.round((Math.random() * 5) + 1);


  var count = 0;
  // Set the count to be one (now you have randomized once)
  count += 1;

  // Repeat as long as (pips are not equal)
  while (pips1 != pips2) {
    // Randomize again
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1);
    // Increment counter by one
    count += 1;
  }



  var outputMsg = "It took " + count + " rolls to get the same pips on both dice."

  // Write the answer (including the count) to the html page (answer div)
  document.getElementById('answer').innerHTML = outputMsg;
}
