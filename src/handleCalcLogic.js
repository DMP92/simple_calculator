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
        return total[0] = tailFigure;
    } else {
        return total[0] = num;
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
        
        if(mathematics.operator == '') { // If this is the first use of the calculator
            if(textContent == '.') { // limit decimal points
                if(mathematics.operand1.toString().indexOf('.') != -1) return
            }
            mathematics.operand1 = formatNumbers(textContent, runningTotal)
        } else {
                if(textContent == '.') { // limit decimal points
                    if(mathematics.operand2.toString().indexOf('.') != -1) return
                }
                mathematics.operand2 = formatNumbers(textContent, runningTotal);
                handleMath(mathematics)
            }
    } else if (type == 'operator' & mathematics.operand1 != '') {
        mode = textContent;
        if (mathematics.operand2 != '') {
            mathematics.operator = textContent;
            runningTotal[0] = '';
            mathematics.operand1 = mathematics.total
            mathematics.operand2 = ''
        } else {
            if(mode == '=') { resetMath(); }
            mathematics.operator = textContent;
            runningTotal[0] = '';
        }
    } else if (type == 'equalSign') {
        handleMath(mathematics)
        mode = '='
        mathematics.operator = '='
    }
    else {
        mathematics.operand1 = '';
        mathematics.operand2 = '';
        mathematics.operator = '';
        mathematics.total = '';
        runningTotal = []
    }
    printToScreen(mode, mathematics)
}

// Call Calculator module
function handleMath() {
    let a = Number(mathematics.operand1);
    let b = Number(mathematics.operand2);

    switch(true) {
        case mathematics.operator == '/':
            mathematics.total = calculator.divide(a, b);
            break
        case mathematics.operator == '*':
            mathematics.total = calculator.multiply(a, b);
            break
        case mathematics.operator == '-':
            mathematics.total = calculator.subtract(a, b);
            break
        case mathematics.operator == '+':
            mathematics.total = calculator.add(a, b);
            break
        }
}

