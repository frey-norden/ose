var costNames = ['golf', 'tax', 'tax audit', 'lunch meeting', 'team meeting', 'sales call']
var costs    = [100, 750, 300000, 40, 0, 0]

function randomizeDay() {
  var randomIndex = Math.floor(Math.random()*costNames.length);
  console.log('The randomized index was ' + randomIndex + '.');

  var itemOfTheDay = costNames[randomIndex];
  var itemCost = costs[randomIndex];
  console.log('Favorite thing is ' + itemOfTheDay + '!');

  document.getElementById('output').innerHTML =
      itemOfTheDay + ', ' + itemCost + ' euros.';

}

function addCost() {
  var name = document.getElementById('txtName').value;
  var cost = Number(document.getElementById('numbCost').value);

  //console.log(typeof(cost));
  costNames.push(name);
  costs.push(cost);

  document.getElementById('txtName').value = '';
  document.getElementById('numberCost').value = '0';

  randomizeDay();
  printAllCostsToConsole();
}

function printAllCostsToConsole() {
  for (var i = 0; i < costNames.length; i++) {
    console.log(costNames[i] + ':' + costs[i])
  }
}
