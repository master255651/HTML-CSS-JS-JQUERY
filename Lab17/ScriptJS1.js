let totalItems = document.getElementById("total_items");
let totalUnits = document.getElementById("total_units");
let totalSum = document.getElementById("total_sum");

function AddToBasket() {
  switch (event.srcElement.id) {
    case "1":
      {
        var priceProduct = document.getElementById("product1_price");
        var countProduct = document.getElementById("product1_count");

        if (totalItems.dataset.product1 == "false") {
          totalItems.dataset.product1 = "true";
          totalItems.textContent = +totalItems.textContent + 1;
        }
      }
      break;
    case "2":
      {
        var priceProduct = document.getElementById("product2_price");
        var countProduct = document.getElementById("product2_count");

        if (totalItems.dataset.product2 == "false") {
          totalItems.dataset.product2 = "true";
          totalItems.textContent = +totalItems.textContent + 1;
        }
      }
      break;
    case "3":
      {
        var priceProduct = document.getElementById("product3_price");
        var countProduct = document.getElementById("product3_count");

        if (totalItems.dataset.product3 == "false") {
          totalItems.dataset.product3 = "true";
          totalItems.textContent = +totalItems.textContent + 1;
        }
      }
      break;
  }

  totalUnits.textContent = +totalUnits.textContent + +countProduct.value;
  let total = totalSum.textContent.substr(1);
  let price = priceProduct.textContent.substr(1);
  totalSum.textContent = "$" + (+total + +countProduct.value * +price).toFixed(2);
}