// Handles formatting
import { formatOperandOne } from './formatNumbers.js';

// Handles calculations
import Calc from './Calc.js';
let calculator = new Calc();


// DOM Variables
const numericButtons = document.querySelectorAll('.num_button');
const mathematicButtons = document.querySelectorAll('.math_button');
const runComputation = document.querySelector('.calculate');
const screen = document.querySelector('.calc_user_input');
const total = document.querySelector('.calc_total');

// Value variables
let runningTotal = [];
let mathematics = {
    operand1: 0,
    operator: '',
    operand2: 0,
    total: 0
}

/* 
** Event Listeners 
*/
function watchForButtonPress() {
    // Print to screen
    numericButtons.forEach(button => {
        button.addEventListener('click', () => {
            if(mathematics.operator == '') {
                mathematics.operand1 = formatOperandOne(button.textContent, runningTotal, mathematics.operator);
                printScreen(runningTotal)
                console.log(runningTotal, mathematics.operand1, mathematics.operand2)
            } else {
                mathematics.operand2 = formatOperandOne(button.textContent, runningTotal, mathematics.operator);
                printScreen(runningTotal)
                console.log(runningTotal, mathematics.operand1, mathematics.operand2)
            }
        })
    })
    
    mathematicButtons.forEach(button => {
        button.addEventListener('click', () => {
            mathematics.operator = button.textContent;
            updateOperands()
            runningTotal[0] = 0;
            printScreen(runningTotal)
        })
    })
    
    runComputation.addEventListener('click', () => {
        console.log(mathematics)
        handleMathButtons()
    })
}
watchForButtonPress()

/*
** Functions
*/


function updateOperands() {
    if (runningTotal[0] == undefined) return;
    mathematics.operand1 = runningTotal[0];
    console.log(mathematics);
}

function printScreen(num) {
    if (Array.isArray(num)) {
        let combineTotal = ``;
        for (let i = 0; i <= num.length - 1; i++) {
            combineTotal += num[i]
        }
        if(combineTotal != '') screen.textContent = combineTotal
        
        if(mathematics.operator != '') {
            screen.textContent = `${mathematics.operand1} ${mathematics.operator} ${mathematics.operand2}`;
            handleMathButtons(mathematics.operator)
        } else {
            screen.textContent = `${mathematics.operand1}`;
            handleMathButtons(mathematics.operator)
        }
    }
}

function handleMathButtons(button) {
    switch(true) {
        case mathematics.operator == '/':
            total.textContent = calculator.divide(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '*':
            total.textContent = calculator.multiply(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '-':
            total.textContent = calculator.subtract(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '+':
            total.textContent = calculator.add(mathematics.operand1, mathematics.operand2);
            break
    }
}