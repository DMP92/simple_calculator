// Handles formatting
import { groupInput } from './handleRunningTotal.js';

// Handles calculations
import Calc from './Calc.js';
let calculator = new Calc();


// DOM Variables
const numericButtons = document.querySelectorAll('.num_button');
const mathematicButtons = document.querySelectorAll('.math_button');
const runComputation = document.querySelector('.calculate');
const screen = document.querySelector('.calc_screen');

// Value variables
let runningTotal = [];
let mathematics = {
    operand1: 0,
    operator: '',
    operand2: 0
}

/* 
** Event Listeners 
*/
function watchForButtonPress() {
    // Print to screen
    numericButtons.forEach(button => {
        button.addEventListener('click', () => {
            groupInput(button.textContent, runningTotal, mathematics.operator);
            printScreen(runningTotal)
        })
    })
    
    mathematicButtons.forEach(button => {
        button.addEventListener('click', () => {
            mathematics.operator = button.textContent;
            updateOperands()
        })
    })
    
    runComputation.addEventListener('click', () => {
        console.log(runningTotal)
        console.table(runningTotal)
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
        let combineTotal = '';
        for (let i = 0; i <= num.length - 1; i++) {
            combineTotal += num[i]
        }
        if(combineTotal != '') screen.textContent = combineTotal

        screen.textContent = combineTotal;
    }
}

function handleMathButtons(button) {
    switch(true) {
        case mathematics.operator == '/':
            mathematics.operand1 = runningTotal[0];
            console.log('does this even work')
            console.log(mathematics)
            break
        case mathematics.operator == '*':
            console.log()
            break
        case mathematics.operator == '-':
            console.log()
            break
        case mathematics.operator == '+':
            break
    }
}