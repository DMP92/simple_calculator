import Calc from "./Calc";
import printToScreen from "./printToScreen";

let calculator = new Calc();

// State
let mathematics = {
    operand1: '',
    operator: '',
    operand2: '',
    total: 0
}

function formatNumbers (text, operand) {
    if (text === '.' && operand === '') {
        return operand.concat('0', '.')
    }

    return operand === '0' && text != '.'
    ? operand.replace('0', '').concat(text)
    : operand.concat(text);
}

function resetMath() {
    mathematics.operand1 = '';
    mathematics.operand2 = '';
    mathematics.operator = '';
    mathematics.total = '';
}

function handleBackspace() {
    switch(false) {
        case mathematics.operand2 == '':
            return mathematics.operand2 = mathematics.operand2.slice(0, -1);
        case mathematics.operator == '':
            return mathematics.operator = mathematics.operator.slice(0, -1);
        case mathematics.operand1 == '':
            return mathematics.operand1 = mathematics.operand1.slice(0, -1);
        default:
            return resetMath()
    }
}

function updateOperator(operator) {
    // If operand2 is full: make operand1 the total, reset operand2, update operator
    if(mathematics.operand2 != '') {
        mathematics.operand1 = mathematics.total;
        mathematics.operand2 = '';
        mathematics.operator = operator.textContent;
    }
    mathematics.operator = operator.textContent;
    handleMath()
    printToScreen(mathematics.operator, mathematics)
}

function handleCalculatorUtilityButtons(util) {
    util.textContent === 'Clear'
    ? resetMath()
    : handleBackspace()
    
    handleMath()
    printToScreen(mathematics.operator, mathematics)
}

function preventIncorrectOperandInput(operand, str) {
    if(str === '0') {
        return operand === '0'
        ? false
        : true
    } else if (str === '.') {
        return operand.indexOf('.') === -1
        ? true
        : false
    } else {
        return true;
    }
}

function handleOperandButtons(operand) {
    // Start from scratch if no operator was chosen
    if (mathematics.operator === '=') {
        resetMath()
    }
    
    if (mathematics.operator === '') { // Update operand1 if no operator is ''
        if (preventIncorrectOperandInput(mathematics.operand1, operand.textContent)) {
            mathematics.operand1 = formatNumbers(operand.textContent, mathematics.operand1)
        }
    } else { // If operator is detected, update operand2
        if (preventIncorrectOperandInput(mathematics.operand2, operand.textContent)) {
            mathematics.operand2 = formatNumbers(operand.textContent, mathematics.operand2)
        }
    }
    
    handleMath()
    printToScreen(mathematics.operator, mathematics)
}


// Call Calculator module
function handleMath() {
    let a = Number(mathematics.operand1);
    let b = Number(mathematics.operand2);

    switch(true) {
        case mathematics.operator == '/':
            mathematics.total = calculator.divide(a, b).toString();
            break
        case mathematics.operator == '*':
            mathematics.total = calculator.multiply(a, b).toString();
            break
        case mathematics.operator == '-':
            mathematics.total = calculator.subtract(a, b).toString();
            break
        case mathematics.operator == '+':
            mathematics.total = calculator.add(a, b).toString();
            break
        }
}

export { handleOperandButtons, updateOperator, handleCalculatorUtilityButtons }