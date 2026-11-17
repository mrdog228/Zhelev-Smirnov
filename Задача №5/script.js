"use strict";

const uName = prompt("Введите ваше имя:");
const saveName = uName;

const password = prompt("Ваш пароль:");
const passwordlength = password.length;

const fullstring = (saveName + passwordlength);

const fullLength = fullstring.length;

alert(`Длинна пароля: ${passwordlength}`);
alert(`Всего символов: ${fullLength}`);





