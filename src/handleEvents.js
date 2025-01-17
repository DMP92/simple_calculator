import handleCalculatorLogic from './handleCalcLogic.js';

function handleClicks() {
    const calcButtons = document.querySelectorAll('.calc_button');
    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleCalculatorLogic(button)
        })
    })
}

export { handleClicks }