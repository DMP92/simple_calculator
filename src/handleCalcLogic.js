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

function formatNumbers (num) {
    let tailFigure = ''
    let headFigure;
    if(mathematics.operand1 == '' && num == '.') {
        headFigure = '0'
        tailFigure = tailFigure.concat(headFigure, num)
        return tailFigure.toString();
    }
    if(mathematics.operator == '') {
        headFigure = mathematics.operand1.toString()
        tailFigure = tailFigure.concat(headFigure, num)
        console.log(mathematics)
        return tailFigure.toString();
    } if(mathematics.operand2 == '' && num == '.') {
        headFigure = mathematics.operand2.toString()
        tailFigure = tailFigure.concat(headFigure, num)
        console.log(mathematics)
        return tailFigure.toString();
    }
    else {
        headFigure = mathematics.operand2.toString()
        tailFigure = tailFigure.concat(headFigure, num)
        console.log(mathematics)
        return tailFigure.toString();
    }
}
// function formatNumbers (num) {
//     let tailFigure = ''
//     return function (runningTotal) {

//     }
// }

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
        console.log(operand === '0')
    } else if (str === '.') {
        return operand.indexOf('.') === -1
        ? true
        : false
    } else {
        console.log('sup')
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
            mathematics.operand1 = formatNumbers(operand.textContent)
            console.log(preventIncorrectOperandInput(mathematics.operand1, operand.textContent))
        }
    } else { // If operator is detected, update operand2
        if (preventIncorrectOperandInput(mathematics.operand2, operand.textContent)) {
            mathematics.operand2 = formatNumbers(operand.textContent)
        }
    }
    
    handleMath()
    printToScreen(mathematics.operator, mathematics)
}

// Handle calc logic
// function handleCalculatorLogic(button) {
//     let type = button.getAttribute('button-type');
//     let textContent = button.textContent;
//     let mode = mathematics.operator

//     if(type == 'operand') {
//         if(mode == '=') { // if the last operation was the equal sign
//             resetMath(); 
//             mode = ''
//         } 
        
//         if(mathematics.operator == '') { // If this is the first use of the calculator
//             if(textContent == '.') { // limit decimal points
//                 if(mathematics.operand1.toString().indexOf('.') != -1) return
//             }
//             if(textContent == '0' && mathematics.operand1 == '0') {
//                return;
//             } else if (mathematics.operand1 == '0' && textContent != '.') {
//                 console.log(mathematics)
//                 mathematics.operand1 = textContent;
//             } else {
//                 mathematics.operand1 = formatNumbers(textContent)
//             }
//         } else {
//             if(textContent == '.') { // limit decimal points
//                 if(mathematics.operand2.toString().indexOf('.') != -1) return
//             }
//             if(textContent == '0' && mathematics.operand2 == '0') {
//                 return;
//             } else if (mathematics.operand2 == '0' && textContent != '.') {
//                 mathematics.operand2 = textContent;
//             } else {
//                 mathematics.operand2 = formatNumbers(textContent);
//                 handleMath(mathematics)
//             }
//         }
//     } else if (type == 'operator' & mathematics.operand1 != '') {
//         mode = textContent;
//         if (mathematics.operand2 != '') {
//             mathematics.operator = textContent;
//             mathematics.operand1 = mathematics.total
//             mathematics.operand2 = ''
//         } else {
//             if(mode == '=') { resetMath(); }
//             mathematics.operator = textContent;
//         }
//     } else if (type == 'equalSign') {
//         handleMath(mathematics)
//         mode = '='
//         mathematics.operator = '='
//     } else if (type =='undo') {
//         handleBackspace()
//         handleMath(mathematics)
//     }
//     else {
//         mode = ''
//         mathematics.operand1 = '';
//         mathematics.operand2 = '';
//         mathematics.operator = '';
//         mathematics.total = '';
//     }
//     printToScreen(mode, mathematics)
// }

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