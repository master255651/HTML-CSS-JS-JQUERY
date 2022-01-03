function SwapTextArea() {
  let firstField = document.getElementById("text1");
  let secondField = document.getElementById("text2");

  [firstField.value, secondField.value] = [secondField.value, firstField.value];
}

let numParagraphsSecond  = document.querySelectorAll('.secondTask');

numParagraphsSecond.forEach(np => {
  np.onclick = function(){
    np.innerText = np.innerText * np.innerText;
    np.onclick = null;
  }
})

let numParagraphsThird = document.querySelectorAll('.thirdTask');

numParagraphsThird.forEach(np => {
  np.clickNumber = 0;
  np.number = +np.innerText;
  np.onclick = function(){
    if(np.clickNumber < 3){
      np.innerText = np.innerText * np.number;
      np.clickNumber++;
    }
    else{
      np.onclick = null;
    }
  }
})

let inputsToCheck = document.querySelectorAll('input');

inputsToCheck.forEach(value => {
  value.addEventListener('focusout', () => {
    if(value.value.length == value.dataset.length){
      value.style.borderColor = "green";
    }
    else{
      value.style.borderColor = "red";
    }
  })
})

function SetRed(div) {
  div.target.style.backgroundColor = 'red';
  div.target.removeEventListener('click', SetRed);
  div.target.addEventListener('click', SetDefault);
  div.target.nextColor = "green";
}

function SetGreen(div) {
  div.target.style.backgroundColor = 'green';
  div.target.removeEventListener('click', SetGreen);
  div.target.addEventListener('click', SetDefault);
  div.target.nextColor = "red";
}

function SetDefault(div) {
  div.target.style.backgroundColor = "#f5d4b0";
  div.target.removeEventListener('click', SetDefault);
  if (div.target.nextColor == "red") {
    div.target.addEventListener('click', SetRed);
  }
  else {
    div.target.addEventListener('click', SetGreen);
  }
}

let coloredDivs = document.querySelectorAll('.coloredDiv');

coloredDivs.forEach(coloredDiv => {
  coloredDiv.nextColor = 'green';
  coloredDiv.addEventListener('click', SetRed);
})

let daySelect = document.getElementById('day');
let monthSelect = document.getElementById('month');
let yearSelect = document.getElementById('year');
let monthDays = daySelect.querySelectorAll('option');

let days30 = ['4', '6', '9', '11'];


function changeData() {
    monthDays.forEach(day => {
    day.disabled = false;
  })
if(days30.indexOf(monthSelect.selectedIndex) != -1){
  monthDays[monthDays.length - 1].disabled = true;
    monthDays[monthDays.length - 2].selected = true;
}
else if(monthSelect.selectedIndex == 2){
  if((yearSelect.selectedIndex + 2010 - 1) % 4 == 0){
    monthDays[monthDays.length - 1].disabled = true;
    monthDays[monthDays.length - 2].disabled = true;
    monthDays[monthDays.length - 3].selected = true;
  }
  else{
    monthDays[monthDays.length - 1].disabled = true;
    monthDays[monthDays.length - 2].disabled = true;
    monthDays[monthDays.length - 3].disabled = true;
    monthDays[monthDays.length - 4].selected = true;
  }
}
else{
  monthDays.forEach(day => {
    day.disabled = false;
  })
}
}

monthSelect.addEventListener('change', () => {
  changeData();
});

yearSelect.addEventListener('change', () => {
  changeData();
})