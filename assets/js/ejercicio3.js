const valor1Input = document.getElementById('valor1');
const valor2Input = document.getElementById('valor2');
const resultadoSpan = document.querySelector('.resultado');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');


function sumar() {
    const valor1 = parseFloat(valor1Input.value) || 0;
    const valor2 = parseFloat(valor2Input.value) || 0;
    const resultado = valor1 + valor2;
    mostrarResultado(resultado);
}


function restar() {
    const valor1 = parseFloat(valor1Input.value) || 0;
    const valor2 = parseFloat(valor2Input.value) || 0;
    const resultado = Math.max(valor1 - valor2, 0);
    mostrarResultado(resultado);
}


function mostrarResultado(resultado) {
    resultadoSpan.textContent = resultado;
}


btnSumar.addEventListener('click', sumar);
btnRestar.addEventListener('click', restar);