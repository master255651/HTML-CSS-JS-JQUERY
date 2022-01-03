window.alert("Привет!");

let buttonSend = document.getElementById('send');
let errors = document.querySelectorAll('.errorMessage');

let name = document.getElementById('name');
let password = document.getElementById('password');
let age = document.getElementById('age');
let gender = document.querySelectorAll('.Gender');
let languages = document.querySelectorAll('.languages');
let instruction = document.getElementById('instruction');

let lettersRegEx = /^[A-Za-z]+$/;

buttonSend.addEventListener('click', (prop) => {
  prop.preventDefault();

  let errorsCount = 0;

  if ((name.value.length >= 1) && name.value.match(lettersRegEx))
    errors[0].style.visibility = "hidden";
  else{
    errorsCount++;
    errors[0].style.visibility = "visible";
  }
    

  if (!(password.value.length >= 6)){
    errorsCount++;
    errors[1].style.visibility = "visible";
  }
  else
    errors[1].style.visibility = "hidden";

    let isSelected = false;
    gender.forEach(radio => {
      if (radio.checked) 
        isSelected = true;
    });
  
    if (!isSelected) {
      errorsCount++;
      errors[2].style.visibility = "visible";
    }
    else 
      errors[2].style.visibility = "hidden";

  let isCheked = false;
  languages.forEach(lang => {
    if (lang.checked){
      isCheked = true;
    }
  });

  if (!isCheked) {
    errorsCount++;
    errors[3].style.visibility = "visible";
  }
  else 
    errors[3].style.visibility = "hidden";

  if (instruction.value.length >= 1)
    errors[4].style.visibility = "hidden";
  else{
    errorsCount++;
    errors[4].style.visibility = "visible";
  }

  if(errorsCount == 0){
    let name = document.getElementById('name');
    let password = document.getElementById('password');
    let age = document.getElementById('age');
    let gender = document.querySelectorAll('.Gender');
    let languages = document.querySelectorAll('.languages');
    let instruction = document.getElementById('instruction');

    localStorage.setItem('name', name.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('age', age.options[document.getElementById('age').selectedIndex].text);

    gender.forEach(radio => {
      if (radio.checked) 
      localStorage.setItem('gender', radio.value);
    });

    let languagesText = "";
    languages.forEach(lang => {
      if (lang.checked){
        languagesText += lang.value + ",";
      }
    });
    localStorage.setItem('languages', languagesText);
    localStorage.setItem('instruction', instruction.value);

    window.open("WindowToOpen.html");
  }
});

