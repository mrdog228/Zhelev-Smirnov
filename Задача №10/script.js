"use strict";

let students = Number(prompt("Сколько всего студентов"));
let mandarins = Number(prompt("Сколько всего мандаринов"));

let equally = (mandarins / students) |0;
let inVase = (mandarins % students);

alert(`Каждому студенту: ${equally}, остаток в вазе ${inVase}`)
