// scripts.js

// Función para mostrar una alerta cuando se hace clic en el encabezado
function mostrarAlerta() {
    alert("¡Gracias por visitar Zapateria 3 Hermanos!");
}

// Agregar un evento de clic al encabezado principal
const encabezadoPrincipal = document.querySelector('header');
encabezadoPrincipal.addEventListener('click', mostrarAlerta);
