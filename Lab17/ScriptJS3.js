let eu = document.getElementById("eu");
let md = document.getElementById("md");
let usd = document.getElementById("usd");
let amount = document.getElementById("amount");
let button = document.getElementById("CalculateButton");
let values = [17.52, 20.23];

button.addEventListener("click", () => {
  Calculate();
});

let currency;
function findOption(select) {
  currency = select.value;
}

function Calculate() {
  if(currency == null){
    alert("Выберите валюту!");
  }

  switch (currency) {
    case "MD":
    {
      md.textContent = +amount.value;
      eu.textContent = (+amount.value / values[1]).toFixed(2);
      usd.textContent = (+amount.value / values[0]).toFixed(2);
    }
    break;
    case "USD":
    {
      usd.textContent = +amount.value;
      eu.textContent = ((+amount.value * values[0]) / values[1]).toFixed(2);
      md.textContent = (+amount.value / values[0]).toFixed(2);
    }
    break;
    case "EU":
    {
      eu.textContent = +amount.value;
      md.textContent = (+amount.value * values[1]).toFixed(2);
      usd.textContent = ((+amount.value * values[1]) / values[0]).toFixed(2);
    }
    break;
  }
}