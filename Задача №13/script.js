"use strict";

let num = Number(prompt("Введите трёхзначное число"));

let hundreds = (num / 100) |0;
let tens = ((num / 10) |0) % 10;
let units = (num % 10);

let sum = (hundreds + tens + units);
let reverse = (units * 100 + tens * 10 + hundreds);

alert(`${hundreds} ${tens} ${units} ${sum} ${reverse}`);