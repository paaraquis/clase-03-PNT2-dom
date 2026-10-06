/////////////////////////////////////////////////////////
// Ejercicio 1 — Modificar contenido desde JavaScript

const elementoNombre = document.querySelector('#nombre');
const elementoRol = document.querySelector('#rol');

elementoNombre.textContent = 'Bart';
elementoRol.textContent = 'Hijo';

/*
const elementoNombre = document.getElementById("nombre");
const elementoRol = document.getElementById("rol");

elementoNombre.textContent = "Bart";
elementoRol.textContent = "Hijo";

console.log(elementoNombre.textContent);
console.log(elementoRol.textContent);
*/