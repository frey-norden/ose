/*jslint browser:true*/
/*global console*/
/*global window*/


function showPriceWithTax() {
    "use strict";

    var priceText = document.getElementById(
      "txtPrice").value;
    var price = Number(document.getElementById(
      "txtPrice").value);            //1

    var priceWithTax = 1.24 * price;                                      //2

    document.getElementById("pOutput").innerHTML = priceWithTax.toFixed(2);   //3
}
