const casilla = document.getElementById("inicioPrueba");
const botonAcepto = document.getElementById("botonAcepto");

const ventanaEmergente = document.getElementById("ventanaEmergente");
const botonAceptar = document.getElementById("botonAceptar");

let nivelColor = 0;

// Cambiar el estado y el color al seleccionar la casilla
casilla.addEventListener("change", function () {
    botonAcepto.disabled = !casilla.checked;

    // Eliminar los colores anteriores
    botonAcepto.classList.remove(
        "color-1",
        "color-2",
        "color-3",
        "color-4"
    );

    if (casilla.checked) {
        nivelColor = (nivelColor % 4) + 1;
        botonAcepto.classList.add(`color-${nivelColor}`);
    }
});

// Mostrar la ventana emergente
botonAcepto.addEventListener("click", function () {
    if (!botonAcepto.disabled) {
        ventanaEmergente.hidden = false;
        botonAceptar.focus();
    }
});

// Cerrar la ventana emergente
botonAceptar.addEventListener("click", function () {
    ventanaEmergente.hidden = true;
    botonAcepto.focus();
});