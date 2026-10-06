// Ejercicio 2 — Responder a una acción del usuario

let contador = 0;

const elementoContador = document.querySelector('#contador');
const boton = document.querySelector('#boton');

boton.addEventListener('click', function () {
  contador = contador + 1;
  elementoContador.textContent = contador;
});

/////////////////////////
/*
const botonSumar = document.getElementById('boton');//buscamos el boton sumar
botonSumar.addEventListener('click', function() {//agregamos un evento click al boton sumar
    const elementoContador = document.getElementById('contador')
    const valorDeContador = elementoContador.textContent
    console.log("valor de contador",parseInt(valorDeContador))
    elementoContador.textContent = parseInt(valorDeContador) + 1
});
*/
