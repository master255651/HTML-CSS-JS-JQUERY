let name = document.getElementById('name');
let password = document.getElementById('password');
let age = document.getElementById('age');
let gender = document.getElementById('Gender');
let languages = document.getElementById('languages');
let instruction = document.getElementById('instruction');

let Rname = localStorage.getItem('name');
let Rpassword = localStorage.getItem('password');
let Rage = localStorage.getItem('age');
let Rgender = localStorage.getItem('gender');
let Rlanguages = localStorage.getItem('languages');
let Rinstruction = localStorage.getItem('instruction');

name.textContent = Rname;
password.textContent = Rpassword;
age.textContent = Rage;
gender.textContent = Rgender;
languages.textContent = Rlanguages;
instruction.textContent = Rinstruction;

instruction.readOnly = true;