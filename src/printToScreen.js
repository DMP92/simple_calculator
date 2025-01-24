const screen = document.querySelector('.calc_user_input');
const total = document.querySelector('.calc_total');

// Handle printing data to screen
export default function printToScreen(option, mathematics) {
    if (option != '=' && option != '') {
        console.log(option, 'printToScreen - if', mathematics)
        screen.textContent = `${mathematics.operand1} ${mathematics.operator} ${mathematics.operand2}`;
        total.textContent = `${mathematics.total}`
    } else if (option == '') {
        console.log(option, 'printToScreen - else if', mathematics)
        screen.textContent = `${mathematics.operand1} ${mathematics.operator}`
        total.textContent = `${mathematics.operand1}`
    } else {
        console.log(option, 'printToScreen - else', mathematics)
        screen.textContent = `${mathematics.total}`
        total.textContent = ``
    }
}