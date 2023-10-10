// scripts.js

// Esta función se ejecutará cuando se cargue la página
document.addEventListener('DOMContentLoaded', function () {
    // Agregar un evento de clic a todos los elementos con la clase "ramo"
    const ramos = document.querySelectorAll('.ramo');
    ramos.forEach(function (ramo) {
        ramo.addEventListener('click', function () {
            // Obtener el nombre y el precio del ramo
            const nombreRamo = ramo.querySelector('h3').textContent;
            const precioRamo = parseFloat(ramo.querySelector('p').textContent.replace('$', '').replace('.pesos', ''));

            // Llamar a la función para agregar el ramo al carrito
            agregarAlCarrito(nombreRamo, precioRamo);
        });
    });
});

// Función para agregar ramos al carrito
function agregarAlCarrito(nombre, precio) {
    // Aquí puedes agregar tu lógica para manejar los ramos en el carrito
    // Por ejemplo, podrías almacenarlos en una variable global o enviarlos a un servidor
    // En este ejemplo, simplemente mostraremos una alerta
    alert(`Añadiste "${nombre}" al carrito por $${precio}.pesos`);
}
