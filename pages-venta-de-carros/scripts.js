// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia a todos los botones de "Comprar"
    const buttons = document.querySelectorAll(".car button");

    // Agrega un evento click a cada botón
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Obtén el título del carro de la sección
            const carTitle = this.parentNode.querySelector("h2").textContent;

            // Muestra un mensaje de confirmación de compra
            const confirmationMessage = `¡Has comprado un ${carTitle}! Gracias por tu compra.`;
            alert(confirmationMessage);
        });
    });
});
