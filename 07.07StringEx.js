function processName() {

    // read value of name from the input field
    var name = document.getElementById('name').value;
    // show it with "ALL CAPS" using toUpperCase()
    var big = name.toUpperCase();
    document.getElementById('upperCase').innerHTML = 'With upper case letters: ' + big;
    // show it with  "all small letters" using toLowerCase()
    var little = name.toLowerCase();
    document.getElementById('lowerCase').innerHTML = 'With lower case letters: ' + little;
    //tell how many characters are there (length, includes also all spaces)
    var howLong = name.length;
    document.getElementById('length').innerHTML = 'Character count: ' + howLong;
    // tell, whether the input string contains the word 'muumi'
    var muumi = 'muumi';
    var gotMuumi = name.indexOf(muumi);
    if (gotMuumi < 0) {
      var msg = "Doesn't contain the text muumi."
    } else {
      var msg = "Does contain the text muumi."
    }
    //console.log(gotMuumi);
    document.getElementById('contains').innerHTML = msg;
    // tell the first character using charAt()
    var firstChar = name.charAt(0);
    document.getElementById('firstCharacter').innerHTML = 'First character: ' + firstChar;
    // tell which ones are the first three characters using substr().
    var firstThree = name.substr(0, 3);
    document.getElementById('manyCharacters').innerHTML = 'First three characters: ' + firstThree;
}
