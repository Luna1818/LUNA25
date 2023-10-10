// Función para mostrar una alerta cuando se hace clic en el botón
function mostrarAlerta() {
    alert("Gracias por visitar Estética Bella. ¡Esperamos verte pronto!");
}

// Agregar un evento de clic al botón
const botonContacto = document.querySelector('button');
botonContacto.addEventListener('click', mostrarAlerta);
