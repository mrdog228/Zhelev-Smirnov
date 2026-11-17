"use strict";

let day = Number(prompt("Сколько дней не мыта кружка:"));
let bacteria = 5;
let result = (bacteria * (2 **day));

alert(`Через ${day} дн. бактерий станет: ${result}`);