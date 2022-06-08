let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
    if(displayValue.length > 9) {
        display.textContent = displayValue.substring(0,9);
    }
}

updateDisplay();

function clickButton() {
    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('number')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('clear'))
            clearDisplay();
            updateDisplay();
        }
   )}
}

clickButton();

function inputOperand(number) {
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    } else {
        if(displayValue === firstOperand) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
}

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


