// Ejercicio 5 — Filtrar y volver a renderizar

const personajesSimpsons = [
  { nombre: "Homero", edad: 39, rol: "Padre" },
  { nombre: "Marge", edad: 36, rol: "Madre" },
  { nombre: "Bart", edad: 10, rol: "Hijo" },
  { nombre: "Lisa", edad: 8, rol: "Hija" },
  { nombre: "Maggie", edad: 1, rol: "Hija" },
  { nombre: "Ned", edad: 35, rol: "Vecino" },
  { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
  { nombre: "Milhouse", edad: 10, rol: "Amigo" },
  { nombre: "Nelson", edad: 12, rol: "Bravucón" },
  { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];
const edadLimite = 18;
const listaPersonajes = document.querySelector('#personajes');
const botonMenores = document.querySelector('#menores');

function mostrarPersonajes(array) {
  listaPersonajes.innerHTML = '';

  array.forEach(function (personaje) {
    const li = document.createElement('li');
    li.textContent = personaje.nombre;
    listaPersonajes.appendChild(li);
  });
}

mostrarPersonajes(personajesSimpsons);

botonMenores.addEventListener('click', function () {
  const menores = personajesSimpsons.filter(function (personaje) {
    return personaje.edad < edadLimite;
  });
  mostrarPersonajes(menores);
});