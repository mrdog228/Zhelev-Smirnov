"use strict";

let num = Number(prompt("Введите количество минут, прошедших с начала суток"));

let num2 = (num / 60) |0;
let num3 = (num % 60);

alert(`Сейчас время: ${num2}:${num3}`);




