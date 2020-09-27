function tellInfractionFine() {
    // store input in vars
    var drivingSpeed =
          Number(document.getElementById('drivingSpeed').value);

    var speedLimit =
          Number(document.getElementById('speedLimit').value);

    var speedDiff = drivingSpeed - speedLimit;
    // do some calcs
    var noFine = 'No speeding, no fine.';
    var infractionFine1 = 85;
    var infractionFine2 = 115;
    var infractionFine3 = 70;
    var infractionFine4 = 100;
    var unitFine = 'Income-based unit fine.';
    var text = 'Infraction fine is ';
    // not speeding - no fine
    if (speedDiff <= 0) {
      var outputMsg = noFine;
    } else if (speedLimit >= 10 && speedLimit <= 60 && speedDiff <= 15 ){
      var outputMsg = text + infractionFine1 + ' euros.';
    } else if (speedLimit >= 10 && speedLimit <= 60 && speedDiff > 15 && speedDiff <= 20 ) {
      var outputMsg = text + infractionFine2 + ' euros.';
    } else if (speedLimit >= 70 && speedLimit <= 120 && speedDiff <= 15){
      var outputMsg = text + infractionFine3 + ' euros.';
    } else if (speedLimit >= 70 && speedLimit <= 120 && speedDiff > 15 && speedDiff <= 20){
      var outputMsg = text + infractionFine4 + ' euros.';
    } else if (speedDiff > 20) {
      var outputMsg = unitFine;
    }

    // output to the DOM,
    document.getElementById('answer').innerHTML = outputMsg;
}
