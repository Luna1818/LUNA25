// scripts.js

// Función para mostrar una alerta cuando se hace clic en un botón
function mostrarAlerta() {
    alert("Has hecho clic en el botón.");
}

// Asociar la función a los botones
const botones = document.querySelectorAll('button');
botones.forEach((boton) => {
    boton.addEventListener('click', mostrarAlerta);
});
