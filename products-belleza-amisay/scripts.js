let contadorProductosSeleccionados = 0;

function mostrarMensaje(nombreProducto, precioProducto) {
    alert(`Has seleccionado: ${nombreProducto}\nPrecio: ${precioProducto}`);
    contadorProductosSeleccionados++;
    actualizarContador();
}

function actualizarContador() {
    const contadorElemento = document.getElementById('contador');
    if (contadorElemento) {
        contadorElemento.textContent = `Productos seleccionados: ${contadorProductosSeleccionados}`;
    }
}
