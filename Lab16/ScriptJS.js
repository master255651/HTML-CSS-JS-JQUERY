let checkBoxes = document.querySelectorAll('.checkSum');
let sumNumber = document.getElementById('sum');

checkBoxes.forEach(checkBox => {
  checkBox.addEventListener('change', () => {
    if(checkBox.checked)
      sumNumber.value = +sumNumber.value + +checkBox.value;
    else
      sumNumber.value = +sumNumber.value - +checkBox.value;
  })
})

let buttonSend = document.getElementById('send');
let errors = document.querySelectorAll('.errorMessage');
let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password1');
let repeatPassword = document.getElementById('password2');
let hobbies = document.querySelectorAll('.hobby');
let date = document.getElementById('dateBirth');
let country = document.getElementById('country');
let mailing = document.querySelectorAll('.mailing');

buttonSend.addEventListener('click', (prop) => {
  prop.preventDefault();

  if (!name.validity.valid)
    errors[0].style.visibility = "visible";
  else
    errors[0].style.visibility = "hidden";


  if (!email.validity.valid)
        errors[1].style.visibility = "visible";
  else
    errors[1].style.visibility = "hidden";

  if (!password.validity.valid) 
    errors[2].style.visibility = "visible";
  else 
    errors[2].style.visibility = "hidden";
    

  if (repeatPassword.value != password.value) 
     errors[3].style.visibility = "visible";
  else
    errors[3].style.visibility = "hidden";


  let isCheked = false;
  hobbies.forEach(checkbox => {
    if (checkbox.checked)
      isCheked = true;
  });


  if (!isCheked) 
    errors[4].style.visibility = "visible";
  else 
    errors[4].style.visibility = "hidden";


  if (!date.validity.valid) 
    errors[5].style.visibility = "visible";
  else 
    errors[5].style.visibility = "hidden";


  if (country.selectedIndex == 0) 
    errors[6].style.visibility = "visible";
  else 
    errors[6].style.visibility = "hidden";

  let isSelected = false;
  mailing.forEach(radio => {
    if (radio.checked) 
      isSelected = true;
  });

  if (!isSelected) 
    errors[7].style.visibility = "visible";
  else 
    errors[7].style.visibility = "hidden";
});