// 04002OneButtonEx.js JavasScript code
// here is some code that got the correct output to console
// but a type-error was thrown saying the var btn was null.
// the fix was putting the var btn = declaration inside the logPressing() function.
// no error occured with this code.

//var btn = document.getElementById("clickMe");

//btn.addEventListener("click", logPressing);

function logPressing() {
  var btn =
    document.getElementById("clickMe");
  console.log("Button pressed.")
}
