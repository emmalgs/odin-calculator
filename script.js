let displayValue = '0';
let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

const buttons = document.querySelectorAll('button');

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
                inputNum(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                
                updateDisplay();
            } else if(buttons[i].classList.contains('clear'))
            clearDisplay();
            updateDisplay();
        }
   )}
}

clickButton();

function inputNum(number) {
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    } else {
        if(displayValue === firstNum) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
}

function inputOperator(operator) {
    if(firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(firstOperator, Number(firstNum), Number(secondNum));
        firstNum = displayValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null) {
        secondNum = displayValue;
        result = operate(secondOperator, Number(firstNum), Number(secondNum));
        secondOperator = operator;
        firstNum = displayValue;
        result = null;
    } else {
        firstOperator = operator;
        firstNum = displayValue;
    }
}
/*
function inputEquals() {
    if(firstOperator === null) {
        displayValue = displayValue;
    } else if(secondOperator != null) {    
            secondNum = displayValue; 
            result = operate(secondOperator, Number(firstNum), Number(secondNum)); 
            if(result === 'lmao') {
                displayValue = 'lmao';
        } else {
            firstNum = displayValue;
            secondNum = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
    } 
}else {
        secondNum = displayValue;
        result = operate(firstOperator, Number(firstNum), Number(secondNum));
        if(result === 'lmao') {
            displayValue = 'lmao';
        } else {
            firstNum = displayValue;
            secondNum = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
} 
*/
function clearDisplay() {
    displayValue = '0';
    firstNum = null;
    secondNum = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
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


