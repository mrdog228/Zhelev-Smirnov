"use strict";

let weight = Number(prompt("Введите вес посылки в кг:"));
let insurance = confirm("Оформить страховку за 150 руб.?");

let price = (200 + 30 * weight + 150 * insurance);

alert(`${price} руб.`);
