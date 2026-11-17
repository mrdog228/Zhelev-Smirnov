"use strict";

let a = Number(prompt("Введите длинну комнаты в метрах:"));
let b = Number(prompt("Введите ширину комнаты в метрах:"));

let S = (a * b);
let P = (2 * (a + b));

alert(`Площадь комнаты = ${S}м.кв`);
alert(`Периметр комнаты = ${P}м`);