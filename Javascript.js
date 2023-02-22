const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btncalcular');
const aresultado = document.querySelector('#result');

btn.addEventListener('click', sumarInputsValores)

function sumarInputsValores(event) {
    //console.log({event});
    //event.preventDefault();
    const sumaInputs = +input1.value + +input2.value;
    aresultado.innerHTML ='resultado '  +  sumaInputs;
}
