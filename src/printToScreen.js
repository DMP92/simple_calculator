const screen = document.querySelector('.calc_user_input');
const total = document.querySelector('.calc_total');

// Handle printing data to screen
export default function printToScreen(option, mathematics) {
    if (mathematics.operand1 == '' && mathematics.total == '') {
        screen.textContent = '0';
        total.textContent = '0'
        return
    }

    if (option != '=' && option != '') {
        screen.textContent = `${mathematics.operand1} ${mathematics.operator} ${mathematics.operand2}`;
        total.textContent = `${mathematics.total}`
    } else if (option == '') {
        screen.textContent = `${mathematics.operand1} ${mathematics.operator}`
        total.textContent = `${mathematics.operand1}`
    } else if (option == '=' && mathematics.operand2 == ''){
        screen.textContent = `${mathematics.operand1}`
        total.textContent = ``
    } else {
        screen.textContent = `${mathematics.total}`
        total.textContent = ``
    }
}