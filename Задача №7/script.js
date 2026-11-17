"use strict";

let num = Number(prompt("Введите целое число"));
let lustNumber = (num % 10);
let lust = (num % 2);

alert(`Последняя цифра: ${lustNumber}`);
alert(`Остаток от деления на 2: ${lust}`);