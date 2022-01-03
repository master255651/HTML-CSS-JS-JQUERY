let buttonSend = document.getElementById('send');
let errors = document.querySelectorAll('.error');
let login = document.getElementById('login');
let email = document.getElementById('email');
let password = document.getElementById('password1');
let repeatPassword = document.getElementById('password2');
let comments = document.getElementById('comments');


buttonSend.addEventListener('click', (prop) => {
  prop.preventDefault();

  if (!login.validity.valid) {
    errors[0].style.display = "block";
    login.style.borderColor = "red";
  } 
  else {
    errors[0].style.display = "none";
    login.style.borderColor = "transparent";
  }

  if (!password.validity.valid) {
    errors[1].style.display = "block";
    password.style.borderColor = "red";
  } 
  else {
    errors[1].style.display = "none";
    password.style.borderColor = "transparent";
  }


  if (repeatPassword.value != password.value) {
    errors[2].style.display = "block";
    repeatPassword.style.borderColor = "red";
  } 
  else {
    errors[2].style.display = "none";
    repeatPassword.style.borderColor = "transparent";
  }


  if (!email.validity.valid) {
    errors[3].style.display = "block";
    email.style.borderColor = "red";
  } 
  else {
    errors[3].style.display = "none";
    email.style.borderColor = "transparent";
  }


  if (!comments.validity.valid) {
    errors[4].style.display = "block";
    comments.style.borderColor = "red";
  } 
  else {
    errors[4].style.display = "none";
    comments.style.borderColor = "transparent";
  }
});