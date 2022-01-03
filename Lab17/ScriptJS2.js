let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let count = document.getElementById("count");

let subtotalPrice = document.getElementById("subtotal_price");
let deliveryPrice = document.getElementById("delivery_price");
let totalPrice = document.getElementById("total_price");

let typeDelivery = document.getElementById("delivery_type");

typeDelivery.addEventListener('change', function(evt){
    CountTotalSum();
})

increase.addEventListener("click", () => {
  count.textContent = +count.textContent + +1;
  CountTotalSum();
});

decrease.addEventListener("click", () => {
  if(count.textContent > 0)
    count.textContent = +count.textContent - +1;
  CountTotalSum();
});

function CountTotalSum() {
  let total;
  if(document.getElementById('delivery').checked){
    total = +25;
    deliveryPrice.textContent = "25 MDL";
  }
  else{
    total = +0;
    deliveryPrice.textContent = "0 MDL";
  }

  let price = parseInt(document.getElementById('count').textContent) * parseFloat(document.getElementById('price').textContent);
  subtotalPrice.textContent = price + " MDL";

  total += +price;
  totalPrice.textContent = total + " MDL";
}