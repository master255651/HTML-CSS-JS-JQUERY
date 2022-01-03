var digits = document.querySelectorAll('.digit');

clockTik();

function clockTik() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  setRis(0, Math.floor(hours/10));
  setRis(1, hours%10);
  setRis(2, Math.floor(minutes/10));
  setRis(3, minutes%10);
  setRis(4, Math.floor(seconds/10));
  setRis(5, seconds%10);
}

function setRis(position, digit) {
  digits[position].src = "Images/" + digit + ".jpg";
}

setInterval(clockTik, 1000);