let title = document.querySelector('h1');
title.innerHTML = 'Hora del Desafío'

function btn_userConsole(){
    console.log('El botón fue clicado');
}

let ciudad = '';
function btn_userPrompt(){
    ciudad = prompt('Introduce una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function btn_userAlert(){
    alert(`Yo amo JS`);
}

let num1, num2;
function btn_userSuma(){
    alert(`Suma de 2 numeros`);
    num1 = parseInt(prompt('Introduce un valor para el primer numero'));
    num2 = parseInt(prompt('Introduce un valor para el segundo numero'));
    alert(`La suma de los dos valores es ${num1+num2}.`);
}