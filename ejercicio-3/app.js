// Ejercicio 3 — Mostrar datos de un objeto

const personaje = {
  nombre: "Lisa",
  edad: 8,
  rol: "Hija"
};

const elementoNombre = document.querySelector('#nombre');
const elementoEdad = document.querySelector('#edad');
const elementoRol = document.querySelector('#rol');

elementoNombre.textContent = personaje.nombre;
elementoEdad.textContent = personaje.edad;
elementoRol.textContent = personaje.rol;
/*
//podria llegar desde una api
const personaje = {
    nombre: "Lisa",
    edad: 8,
    rol: "hija"
}

const nodoNombre = document.getElementById("nombre")
nodoNombre.textContent = personaje.nombre

const nodoEdad = document.getElementById("edad")
nodoEdad.textContent = personaje.edad

const nodoRol = document.getElementById("rol")
nodoRol.textContent = personaje.rol

*/