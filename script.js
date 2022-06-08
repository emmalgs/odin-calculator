const console = document.querySelector('.console');
const numbers = document.querySelector('.number');
const button = document.querySelector('button');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear');



function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b
}

function operate(operator,a,b) {
    if (operator === 'add') return add(a,b);
    if (operator === 'subtract') return subtract(a,b);
    if (operator === 'multiply') return multiply(a,b);
    if (operator === 'divide') return divide(a,b);
}

function populate()
        


