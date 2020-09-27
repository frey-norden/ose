function runForLoop() {
  var divOut = document.getElementById('divOut');
  var i;
  for (i = 0; i < 31; i++) {
    divOut.innerHTML = i + "<br>";
    console.log(i);
  }

}
