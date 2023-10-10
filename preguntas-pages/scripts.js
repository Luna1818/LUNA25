// scripts.js

// Función para mostrar una alerta cuando se envía el formulario
function mostrarAlerta() {
    alert("¡Gracias por enviar el formulario!");
}

// Agregar un evento de escucha al formulario para llamar a la función mostrarAlerta cuando se envíe
document.querySelector("form").addEventListener("submit", mostrarAlerta);
