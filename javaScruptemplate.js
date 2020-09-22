// TODO: JavaScript code
function calculateSalePrice() {
    // Step 1  get input from form box
    var listPrice =
        Number(document.getElementById("txtListPrice").value);
    var discountPercentage =
        Number(document.getElementById("txtDiscountPercentage").value);

    // Step 2   calculate discount price
    var discount = listPrice * discountPercentage / 100;
    var salePrice = listPrice - discount;

    // Step 3   display in browser for user
    document.getElementById("pOutput").innerHTML =
          "Sale price is " + salePrice.toFixed(2) + " €"
}
