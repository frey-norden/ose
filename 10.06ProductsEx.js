// JSON form
var json = '[{"number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready"},' + '{"number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless"},' + '{"number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions"}]';

// Parse the JSON text into Javascript objects (1 array, 3 'product' objects)
var jsonString = JSON.stringify(json);
var productsArray = JSON.parse(jsonString);
console.log(productsArray);
var outputText = '';

function listProducts() {

    // Handle the product objects from the array. Use i to index the array.
    for (var i = 0; i < productsArray.length; i++) {

      outputText += '<br><br>'+ 'Number: ' + productsArray[i].number + '<br>';
      outputText += 'Name: ' + productsArray[i].name + '<br>';
      outputText += 'Price: ' + productsArray[i].price + '<br>';
      outputText += 'Description: ' + productsArray[i].description;


    }
    console.log(outputText);
}
    // Write the answer on the page
    document.getElementById('productList').innerHTML = outputText;
