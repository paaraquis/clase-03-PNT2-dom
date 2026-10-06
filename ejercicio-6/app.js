// Ejercicio 6 — Crear una función render

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

const listaPersonajes = document.querySelector('#personajes');
const botonMenores = document.querySelector('#menores');
const botonTodos = document.querySelector('#todos');

function render(array) {
  listaPersonajes.innerHTML = '';

  array.forEach(function (personaje) {
    const li = document.createElement('li');
    li.textContent = personaje.nombre;
    listaPersonajes.appendChild(li);
  });
}

render(personajesSimpsons);

botonMenores.addEventListener('click', function () {
  const menores = personajesSimpsons.filter(personaje => personaje.edad < 18);
  render(menores);
});

botonTodos.addEventListener('click', function () {
  render(personajesSimpsons);
});