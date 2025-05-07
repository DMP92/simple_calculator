import { handleOperandButtons, updateOperator, handleCalculatorUtilityButtons } from '../logic/handleCalcLogic.js';
import { animateButtonPress } from './animate.js';
import { handleLightAndDarkMode, handleDarkModeToggle } from '../theme/darkMode.js'

// Handle operand button clicks (1, 2, 3, 4, ...)
function handleOperandClicks() {
    const operand = document.querySelectorAll('[button-type="operand"]');
    operand.forEach(op => {
        op.addEventListener('click', () => {
            handleOperandButtons(op.children[1].textContent)
        })
    })
}

// Handle operator button clicks (*, +, /, -)
function handleOperatorClicks() {
    const operator = document.querySelectorAll('[button-type="operator"]')
    operator.forEach(op => {
        op.addEventListener('click', (e) => {
            updateOperator(op.children[1].textContent)
        })
    })
}

// Handle utility button clicks (Clear, Undo)
function handleUtilClicks() {
    const utils = document.querySelectorAll('[button-type="util"]')
    utils.forEach(util => {
        util.addEventListener('click', () => {
            handleCalculatorUtilityButtons(util.children[1].textContent)
        })
    })
}

// Handles all key press events - regardless of if they are supported or not
function handleKeyPress() {
    let pressedKeyText;
    window.addEventListener('keydown', (e) => {
        if(!isNaN(e.key)) { // Handle number keys
            console.log(e.key);
            handleOperandButtons(e.key)
            pressedKeyText = e.key;
        } else if(e.key === '.') { // Handle decimal point key
            handleOperandButtons(e.key)
            pressedKeyText = e.key;
        } else if (['+', '-', '*', '/', '=', 'Enter'].includes(e.key)) { // Handle operator keys
            if(e.key === 'Enter') {
                updateOperator('=')
                pressedKeyText = '=';
            } else {
                updateOperator(e.key)
                pressedKeyText = e.key;
            }
        } else if (['Backspace', 'Escape'].includes(e.key)) { // If backspace or escape is pressed
            if(e.key === 'Escape') {
                handleCalculatorUtilityButtons('Clear');
                pressedKeyText = 'Clear';
            } else {
                handleCalculatorUtilityButtons('Undo');
                pressedKeyText = 'Undo';
            }
        } else { // Handle non-supported keys
            pressedKeyText = '';
        }
        
        tieKeyPressToButtonElements(pressedKeyText)
    })
}

// Prepare button animation
function tieKeyPressToButtonElements(pressedKey) {
    const calcButtons = document.querySelectorAll('.calc_button');
    calcButtons.forEach(button => {
        let buttonText = button.querySelector('.button-text')?.textContent.trim();

        if(buttonText === pressedKey) {
            return animateButtonPress(button)
        }
    })
}

// Dark mode 
handleLightAndDarkMode()
handleDarkModeToggle()

export { handleOperandClicks, handleOperatorClicks, handleUtilClicks, handleKeyPress }