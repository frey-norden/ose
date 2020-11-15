// 10.object_more_tasks_1.js JavasScript code
// Initially, this program shows the name and population of a country.
// Modify the program so that it shows also the name of the country in Finnish.
// NB! Add a new property to the object constructor for this purpose.

function Country(countryName, maaNimi, countryPopulation) {
    this.name = countryName;
    this.nimi = maaNimi;
    this.population = countryPopulation;
}

var myCountry = new Country("Finland", 'Suomi', 5501043);

var outputText = myCountry.nimi + "/" + myCountry.name + ", population is " + myCountry.population;

document.getElementById("pOutput").innerHTML = outputText;
 
