// Handles formatting
import { formatNumbers } from './formatNumbers.js';

// Handles calculations
import Calc from './Calc.js';
let calculator = new Calc();

// DOM Variables
const calcButtons = document.querySelectorAll('.calc_button');
const screen = document.querySelector('.calc_user_input');
const total = document.querySelector('.calc_total');

// Value variables
let runningTotal = [];

// State
let mathematics = {
    operand1: '',
    operator: '',
    operand2: '',
    total: 0
}

/* 
** Event Listeners 
*/
function handleButtonClicks() {
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
    printScreen(mode)
}

// Handle printing data to screen
function printScreen(option) {
    console.log(mathematics)
    if (option == 'generalComputations') {
        screen.textContent = `${mathematics.operand1} ${mathematics.operator} ${mathematics.operand2}`;
        total.textContent = `${mathematics.total}`
    } else if (option == 'total') {
        screen.textContent = `${mathematics.total}`
        total.textContent = ``
    }
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
        total.textContent = mathematics.total;
}