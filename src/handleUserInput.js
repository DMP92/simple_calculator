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
    operand1: 0,
    operator: '',
    operand2: 0,
    total: 0
}

/* 
** Event Listeners 
*/
function handleCalculatorButtonClicks() {
    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            let type = button.getAttribute('button-type');
            let textContent = button.textContent;
            if(type == 'num') {
                updateOperand(textContent)
            } else if (type == 'math') {
                updateOperator(textContent)
            } else {
                handleMathButtons()
            }
        })
    })
}

handleCalculatorButtonClicks()

// Update mathematics object
function updateOperand(text) {
        mathematics.operator == '' 
        ? mathematics.operand1 = formatNumbers(text, runningTotal, mathematics.operator) : 
        mathematics.operand2 = formatNumbers(text, runningTotal, mathematics.operator);
        printScreen(runningTotal)
        console.log(mathematics)
}

function updateOperator(text) {
    mathematics.operator = text;
    runningTotal[0] = 0;
    printScreen(runningTotal)
    console.log(mathematics)
}

// Handle printing data to screen
function printScreen() {
    if(mathematics.operator != '') {
        screen.textContent = `${mathematics.operand1} ${mathematics.operator} ${mathematics.operand2}`;
    } else {
        screen.textContent = `${mathematics.operand1}`;
    }
}

// Call Calculator module
function handleMathButtons() {
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