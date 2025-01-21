import Calc from "./Calc";
import printToScreen from "./printToScreen";

let calculator = new Calc();

// Value variables
let runningTotal = [];

// State
let mathematics = {
    operand1: '',
    operator: '',
    operand2: '',
    total: 0
}

function formatNumbers (num, total) {
    let tailFigure = ''
    
    if(total.length != 0) {
        let headFigure = total[0].toString()
        tailFigure = tailFigure.concat(headFigure, num)
        return total[0] = parseInt(tailFigure)
    } else {
        return total[0] = parseInt(num)
    }
}

function resetMath() {
    mathematics.operand1 = '';
    mathematics.operand2 = '';
    mathematics.operator = '';
    mathematics.total = '';
    runningTotal.pop()
}

// Handle calc logic
export default function handleCalculatorLogic(button) {
    let type = button.getAttribute('button-type');
    let textContent = button.textContent;
    let mode = mathematics.operator
    if(type == 'operand') {
        if(mode == '=') { // if the last operation was the equal sign
            resetMath(); 
            mathematics.operator = ''
            mode = ''
        } 
        if(mathematics.operator == '') {
            mathematics.operand1 = formatNumbers(textContent, runningTotal)
        } else {
            mathematics.operand2 = formatNumbers(textContent, runningTotal);
            handleMath(mathematics)
        }
    } else if (type == 'operator' & mathematics.operand1 != '') {
        if (mathematics.operand2 != '') {
            mathematics.operator = textContent;
            runningTotal[0] = 0;
            mathematics.operand1 = mathematics.total
            mathematics.operand2 = ''
        } else {
            if(mode == '=') { resetMath(); }
            mathematics.operator = textContent;
            runningTotal[0] = 0;
        }
    } else if (type == 'equalSign') {
        handleMath(mathematics)
        mode = '='
        mathematics.operator = '='
    } else if(type == 'decimal') {

    }
    else {
        mathematics.operand1 = '0';
        mathematics.operand2 = '';
        mathematics.operator = '';
        mathematics.total = '0';
        runningTotal = []
    }
    printToScreen(mode, mathematics)
}

// Call Calculator module
function handleMath() {
    switch(true) {
        case mathematics.operator == '/':
            mathematics.total = calculator.divide(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '*':
            mathematics.total = calculator.multiply(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '-':
            mathematics.total = calculator.subtract(mathematics.operand1, mathematics.operand2);
            break
        case mathematics.operator == '+':
            mathematics.total = calculator.add(mathematics.operand1, mathematics.operand2);
            break
        }
}