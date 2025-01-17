import './style.css';
import printToScreen from './printToScreen.js';

// Handles formatting
import { formatNumbers } from './formatNumbers.js';

// Handles calculations
import Calc from './Calc.js';
let calculator = new Calc();

// Value variables
let runningTotal = [];

// State
let mathematics = {
    operand1: '',
    operator: '',
    operand2: '',
    total: 0
}

// Event Listeners
function handleButtonClicks() {
    const calcButtons = document.querySelectorAll('.calc_button');
    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleCalculatorLogic(button)
        })
    })
}
handleButtonClicks()

// Handle logic behind key press
function handleCalculatorLogic(button) {
    let type = button.getAttribute('button-type');
    let textContent = button.textContent;
    let mode = 'generalComputations'
    if(type == 'operand') {
        if(mathematics.operator == '') {
            mathematics.operand1 = formatNumbers(textContent, runningTotal, mathematics.operator)
        } else {
            mathematics.operand2 = formatNumbers(textContent, runningTotal, mathematics.operator);
            handleMath()
        }
        mode = 'generalComputations'
    } else if (type == 'operator') {
        if (mathematics.operand2 != '') {
            mathematics.operator = textContent;
            runningTotal[0] = 0;
            mathematics.operand1 = mathematics.total
            mathematics.operand2 = ''
            mode = 'generalComputations'
        } else {
            mathematics.operator = textContent;
            runningTotal[0] = 0;
            mode = 'generalComputations'
        }
    } else {
        handleMath()
        mode = 'total'
    }
    printToScreen(mode, mathematics)
}

// Call Calculator module
function handleMath() {
    switch(true) {
        case mathematics.operator == '/':
            mathematics.total = calculator.divide(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '*':
            mathematics.total = calculator.multiply(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '-':
            mathematics.total = calculator.subtract(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '+':
            mathematics.total = calculator.add(mathematics.operand1, mathematics.operand2);
            break
        }
}