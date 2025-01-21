const screen = document.querySelector('.calc_user_input');
const total = document.querySelector('.calc_total');

// Handle printing data to screen
export default function printToScreen(option, mathematics) {
    if (option != '=') {
        screen.textContent = `${mathematics.operand1} ${mathematics.operator} ${mathematics.operand2}`;
        total.textContent = `${mathematics.total}`
    } else if (option == '') {
        screen.textContent = `${mathematics.total}`
        total.textContent = ``
    } else {
        screen.textContent = `${mathematics.total}`
        total.textContent = ``
    }
}