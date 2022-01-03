var timer = document.getElementById('timer');
var board = document.getElementById('board');
var buttonStart = document.getElementById('start');
var curElem = 1;
var curTime = 60;
var interval;

for(let i = 0; i < 25; i++) {
  let digit = document.createElement('div');
  digit.classList.add('digit');
  digit.innerHTML = 0;
  board.append(digit);
}

buttonStart.onclick = NewGame;
board.onclick = CheckDigit;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function CheckDigit(event) {
  if (event.target.id == 25 && curElem == 25) {
    alert("Вы выиграли!");
    clearInterval(interval);
    board.onclick = null;
  }

  if (event.target.id == curElem) {
    curElem++;
    event.target.style.background = 'red';
    event.target.style.color = "black";
  }
}

function TimeTick() {
  curTime--;
  timer.innerHTML = "Осталось: " + curTime;

  if (curTime <= 0) {
    alert("Вы проиграли!");
    clearInterval(interval);
    board.onclick = null;
  }
}

function NewGame() {
  clearInterval(interval);
  board.innerHTML = "";
  let digits = [];
  
  curTime = 60;
  timer.innerHTML = "Осталось: " + curTime;

  for(let i = 0; i < 25; i++) {
    let digit = document.createElement('div');
    let fontSize = Math.floor(Math.random()*(40 - 10) + 10);

    digit.classList.add('digit');
    let pos = i+1;
    digit.id = pos;
    digit.innerHTML = pos;
    digit.style.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    digit.style.fontSize = fontSize + "px";
    digits.push(digit);
  }

  digits = shuffle(digits);

  for(let i = 0; i < digits.length; i++) {
    board.append(digits[i]);
  }

  interval = setInterval(TimeTick, 1000);
}
