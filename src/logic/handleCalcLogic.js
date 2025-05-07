import Calc from "./Calc";
import printToScreen from "../components/printToScreen";

// Calculator logic
const calculator = new Calc();

// Calculator state
let mathematics = {
    operand1: '',
    operator: '',
    operand2: '',
    total: 0
}

function formatNumbers (text, operand) {
    let concatTextToOperand = operand.concat(text);
    let updatedOperand;
    if (text === '.' && operand === '') { // If operand is empty & the first value entered is a decimal point
        return operand.concat('0', '.')
    } else if (text === '.' && operand != '') { // If the operand isn't empty and a decimal is added
        text = '.'
        updatedOperand = concatTextToOperand;
    } else if (text === '0' && operand.indexOf('0.') != -1) {
        updatedOperand = concatTextToOperand;
    } else { // Switch value to a number to clip off improper formatting
        updatedOperand = Number(concatTextToOperand);
    }

    return updatedOperand.toString();
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

function flipNumberSign(number) {
    const sign = Math.sign(number) 
    let flippedNumber;
    if(sign === 1) {
        flippedNumber = number * -1;
        return flippedNumber.toString();
    } else if (sign === -1) {
        flippedNumber = number * -1;
        return flippedNumber.toString();
    } else {
        console.log(mathematics)
        return '';
    }
}

function stageNumberSignFlip(operand) {
    if (operand === 'is operand #1' && mathematics.operand1 === '') {
        mathematics.operand1 = '-';
    } else if (operand === 'is operand #1' || mathematics.operator === '=') {
        return mathematics.operand1 = flipNumberSign(mathematics.operand1)
    } else if (operand === 'is operand #2' && mathematics.operand2 === '') {
        mathematics.operand2 = '-';
    } else {
        return mathematics.operand2 = flipNumberSign(mathematics.operand2)
    }
}

function updateOperator(operator) {
    if(mathematics.operand1 === '') return;
    let sign;
    typeof operator === 'string' ? sign = operator : sign = operator.textContent;
    // If operand2 is full: make operand1 the total, reset operand2, update operator
    if(mathematics.operand2 != '') {
        mathematics.operand1 = mathematics.total;
        mathematics.operand2 = '';
        mathematics.operator = sign;
    }
    mathematics.operator = sign;
    handleMath()
    printToScreen(mathematics.operator, mathematics)
}

function handleCalculatorUtilityButtons(util) {
    let button;
    typeof util === 'string' ? button = util : button = util.textContent;

    button === 'Clear'
    ? resetMath()
    : handleBackspace()
    
    handleMath()
    printToScreen(mathematics.operator, mathematics)
}

function preventIncorrectOperandInput(operand, str) {
    if(str === '0') {
        return operand === '0' || operand.charAt(0) === '-' && operand.charAt(1) === '0' && operand.length === 2
        ? false
        : true
    } else if (str === '.') {
        return operand.indexOf('.') === -1
        ? true
        : false
    } else if (operand.charAt(0) === '0' && operand.indexOf('.') === -1 && operand.length >= 2) {
        return true
    } else if (operand.charAt(1) === '0' && operand.indexOf('.') === -1 && operand.length >= 2) {
        return true;
    } else {
        return true;
    }
}

function handleOperandButtons(operand) {
    let num;
    typeof operand === 'string' ? num = operand : num = operand.textContent;
    // Start from scratch if no operator was chosen
    if (mathematics.operator === '=' && operand !== '- / +') {
        resetMath()
    }
    
    if (mathematics.operator === '') { // Update operand1 if no operator is ''
        if (preventIncorrectOperandInput(mathematics.operand1, num)) {
            if (operand === '- / +') {
                stageNumberSignFlip('is operand #1')
            } else {
                mathematics.operand1 = formatNumbers(num, mathematics.operand1)
            }
        }
    } else { // If operator is detected, update operand2
        if (preventIncorrectOperandInput(mathematics.operand2, num)) {
            if (operand === '- / +') {
                stageNumberSignFlip('is operand #2')
            } else {
                mathematics.operand2 = formatNumbers(num, mathematics.operand2)
            }
        }
    }
    
    handleMath()
    printToScreen(mathematics.operator, mathematics)
}


// Call Calculator module
function handleMath() {
    const a = Number(mathematics.operand1);
    const b = Number(mathematics.operand2);

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