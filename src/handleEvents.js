import { handleOperandButtons, updateOperator, handleCalculatorUtilityButtons } from './handleCalcLogic.js';

// Handle operand button clicks
function handleOperandClicks() {
    const operand = document.querySelectorAll('[button-type="operand"]');
    operand.forEach(op => {
        op.addEventListener('click', () => {
            handleOperandButtons(op)
        })
    })
}

// Handle operator button clicks
function handleOperatorClicks() {
    const operator = document.querySelectorAll('[button-type="operator"]')
    operator.forEach(op => {
        op.addEventListener('click', (e) => {
            updateOperator(op)
        })
    })
}

// Handle utility button clicks
function handleUtilClicks() {
    const utils = document.querySelectorAll('[button-type="util"]')
    utils.forEach(util => {
        util.addEventListener('click', () => {
            handleCalculatorUtilityButtons(util)
        })
    })
}

function handleKeyPress() {
    window.addEventListener('keydown', (e) => {
        if(!isNaN(e.key)) {
            handleOperandButtons(e.key)
        } else if(e.key === '.') {
            handleOperandButtons(e.key)
        } else if (['+', '-', '*', '/', '=', 'Enter'].includes(e.key)) {
            e.key === 'Enter' ? updateOperator('=') : updateOperator(e.key)
        } else if (['Backspace', 'Escape']) {
            e.key === 'Escape' ? handleCalculatorUtilityButtons('Clear') : handleCalculatorUtilityButtons('Undo')
        }
    })
}


export { handleOperandClicks, handleOperatorClicks, handleUtilClicks, handleKeyPress }