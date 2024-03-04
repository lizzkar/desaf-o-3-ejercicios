
const formulario = document.getElementById('formulario');
const resultadoElement = document.querySelector('.resultado');


function validarTexto(texto) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(texto);
}

function mostrarError(elemento, mensaje) {
    const errorElement = document.querySelector(elemento);
    errorElement.innerText = mensaje;
    errorElement.style.display = 'block';
}


function ocultarError(elemento) {
    const errorElement = document.querySelector(elemento);
    errorElement.innerText = '';
    errorElement.style.display = 'none';
}


function mostrarExito(mensaje) {
    resultadoElement.innerText = mensaje;
}


function limpiarErrores() {
    ocultarError('.errorNombre');
    ocultarError('.errorAsunto');
    ocultarError('.errorMensaje');
    resultadoElement.innerText = '';
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();


    limpiarErrores();

    const nombre = document.getElementById('nombre').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;


    if (!nombre.trim() || !validarTexto(nombre)) {
        mostrarError('.errorNombre', 'Ingrese un nombre válido (solo letras)');
        return;
    }


    if (!asunto.trim() || !validarTexto(asunto)) {
        mostrarError('.errorAsunto', 'Ingrese un asunto válido (solo letras)');
        return;
    }


    if (!mensaje.trim() || !validarTexto(mensaje)) {
        mostrarError('.errorMensaje', 'Ingrese un mensaje válido (solo letras)');
        return;
    }


    mostrarExito('Formulario enviado con éxito!');
});



