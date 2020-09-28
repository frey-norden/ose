function showComparisonScores() {
    // pull in input values
    var totalVotes = Number(document.getElementById('votes').value);
    var candidates = Number(document.getElementById('candidates').value);

    // For each candidates
    var score;

    var outputDiv = document.getElementById('answer')
    for (var i = 1; i <= candidates; i++) {
      // Calculate comparison score for candidate
      score = (totalVotes/i).toFixed(0);
      // Show scores - print it to tha DOM
      outputDiv.innerHTML += (i)+'. candidate: ' + score + '<br>';
    }

}
