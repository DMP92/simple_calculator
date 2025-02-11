import { handleOperandButtons, updateOperator, handleCalculatorUtilityButtons } from './handleCalcLogic.js';
import { animateButtonPress, animateDarkModeToggle } from './animate.js';

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
    let pressedKeyText;

    window.addEventListener('keydown', (e) => {
        if(!isNaN(e.key)) {
            handleOperandButtons(e.key)
            pressedKeyText = e.key;
        } else if(e.key === '.') {
            handleOperandButtons(e.key)
            pressedKeyText = e.key;
        } else if (['+', '-', '*', '/', '=', 'Enter'].includes(e.key)) {
            if(e.key === 'Enter') {
                updateOperator('=')
                pressedKeyText = '=';
            } else {
                updateOperator(e.key)
                pressedKeyText = e.key;
            }
        } else if (['Backspace', 'Escape'].includes(e.key)) {
            if(e.key === 'Escape') {
                handleCalculatorUtilityButtons('Clear');
                pressedKeyText = 'Clear';
            } else {
                handleCalculatorUtilityButtons('Undo');
                pressedKeyText = 'Undo';
            }
        } else {
            pressedKeyText = '';
        }
        
        tieKeyPressToButtonElements(pressedKeyText)
    })
}

function tieKeyPressToButtonElements(pressedKey) {
    const calcButtons = document.querySelectorAll('.calc_button');
    calcButtons.forEach(button => {
        // console.log(button.textContent === pressedKey, button.textContent, pressedKey)
        return button.textContent === pressedKey ? animateButtonPress(button) : undefined;
    })
}

function handleLightAndDarkMode() {
    const chosenMode = document.querySelector('.toggle');
    const body = document.body;
    
    chosenMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    })

    window.onload = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
    }
}

handleLightAndDarkMode()

/**
 * Darkmode Toggle
 */
function handleDarkModeToggle() {
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener('click', () => {
        animateDarkModeToggle(toggle)
        toggle.classList.toggle('is-active')
    })
}

handleDarkModeToggle()

export { handleOperandClicks, handleOperatorClicks, handleUtilClicks, handleKeyPress }