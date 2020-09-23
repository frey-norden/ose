function calculateBMI() {

  // input vars for weight and height
  var weight =
      Number(document.getElementById("weight").value);

  var height =
      Number(document.getElementById("height").value);

  // calculations
  var bodyMassIndex = (weight / (height/100.0 * height/100.0));

  // conditional choices

  if (bodyMassIndex <= 18.4) {
    // Weight less than normal weight
    var outputMsg = "(Weight less than normal weight)";

  } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9){
    // normal weight zone
    var outputMsg = "(Normal weight)";

  } else {
    // Overweight zone
    var outputMsg = "(Overweight)";

  }


  // display to DOM
  document.getElementById('answer').innerHTML =
        "Body Mass Index (BMI) is " + bodyMassIndex.toFixed(2) + " " + outputMsg;

}
