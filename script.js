let calcDisplay = document.querySelector('#display')
let displayValue = '';
let currentValue = '';
let storedValue = 0;
let ops = '';

document.querySelectorAll('.number').forEach(button => 
    button.addEventListener('click', () => display(button.textContent)))

function display(num) {
    if(ops === '=') {
        storedValue = 0;
    }
    if(num === '0' && ops === '/' && currentValue === '') {
        calcDisplay.textContent = 'STOP IT';
        storedValue = NaN;
    } else if(currentValue != '0') {
        currentValue = currentValue + num;
        calcDisplay.textContent = currentValue
    }
}

document.querySelectorAll('.operator').forEach(button => 
    button.addEventListener('click', () => storeOperator(button.textContent)));

function storeOperator(type) {
    if(storedValue === 0 && currentValue > 0) {
        storedValue = parseFloat(currentValue);
        currentValue = '';
    } else if(storedValue === 0 && currentValue < 0) {
        storedValue = parseFloat(currentValue);
        currentValue = '';
    }
    if(ops != '') {
        operate();
        ops = type;
    } else {
        calcDisplay.textContent = type;
        ops = type;
    }
}
document.querySelector('.equals').addEventListener('click', equals);

function equals() {
    if(ops!== '') {
        operate();
        ops = '=';
    }
}

document.querySelector('.clear').addEventListener('click', clear);

function clear() {
    currentValue = '';
    storedValue = 0;
    ops = '';
    calcDisplay.textContent = '0';
}
   
function add(a,b) {
    storedValue = parseFloat(a + b);
}

function subtract(a,b) {
    storedValue = parseFloat(a-b);
}

function multiply(a,b) {
    storedValue = parseFloat(a*b);
}

function divide(a,b) {
    storedValue = parseFloat(a/b)
}

function operate() {
    if (ops === '+') {
        result = add(storedValue, parseFloat(currentValue));
    } else if (ops === '-') {
        result = subtract(storedValue, parseFloat(currentValue));
    } else if (ops === '*') {
        result = multiply(storedValue, parseFloat(currentValue));
    } else if (ops === '/') {
        result = divide(storedValue, parseFloat(currentValue));
    }
    calcDisplay.textContent = storedValue;
    currentValue = '';
}



