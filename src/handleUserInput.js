// Handles formatting
import { formatTotal } from './handleRunningTotal.js';

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
let firstValue;
let secondValue;
let mode = ''

/* 
** Event Listeners 
*/

numericButtons.forEach(button => {
    button.addEventListener('click', () => {
        groupInput(button.textContent);
        printScreen(runningTotal)
    })
})

mathematicButtons.forEach(button => {
    button.addEventListener('click', () => {
        mode = button.textContent;
        console.log(runningTotal == '' ? '' : firstValue = formatTotal(runningTotal))
    })
})

runComputation.addEventListener('click', () => {

})



/*
** Functions
*/

function groupInput(num) {
    runningTotal.push(num)
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
    formatTotal(runningTotal)
    switch(true) {
        case mode == '/':
            console.log()
            break
        case mode == '*':
            console.log()
            break
        case mode == '-':
            console.log()
            break
        case mode == '+':
            break
    }
}