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

// function formatNumbers (num) {
//     let tailFigure = ''
//     if(total.length != 0) {
//         let headFigure = total[0].toString()
//         tailFigure = Number(tailFigure.concat(headFigure, num))
//         return total[0] = tailFigure.toString();
//     } else {
//         return total[0] = num;
//     }
// }

function formatNumbers (num) {
    let tailFigure = ''
    if(mathematics.operand1 == '' && num == '.') {
        let headFigure = '0'
        tailFigure = tailFigure.concat(headFigure, num)
        return tailFigure.toString();
    }
    if(mathematics.operator == '') {
        let headFigure = mathematics.operand1.toString()
        tailFigure = tailFigure.concat(headFigure, num)
        console.log(mathematics)
        return tailFigure.toString();
    } if(mathematics.operand2 == '' && num == '.') {
        let headFigure = mathematics.operand2.toString()
        tailFigure = tailFigure.concat(headFigure, num)
        console.log(mathematics)
        return tailFigure.toString();
    }
    else {
        let headFigure = mathematics.operand2.toString()
        tailFigure = tailFigure.concat(headFigure, num)
        console.log(mathematics)
        return tailFigure.toString();
    }
}

function resetMath() {
    mathematics.operand1 = '';
    mathematics.operand2 = '';
    mathematics.operator = '';
    mathematics.total = '';
    runningTotal.pop()
}

function handleBackspace() {
    switch(false) {
        case mathematics.operand2 == '':
            runningTotal = [Number(runningTotal.toString().slice(0, -1))]
            return mathematics.operand2 = mathematics.operand2.slice(0, -1);
        case mathematics.operator == '':
            return mathematics.operator = mathematics.operator.slice(0, -1);
        case mathematics.operand1 == '':
            runningTotal = [Number(runningTotal.toString().slice(0, -1))]
            return mathematics.operand1 = mathematics.operand1.slice(0, -1);
    }
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
            if(textContent == '0' && mathematics.operand1 == '0') {
               return;
            } else if (mathematics.operand1 == '0' && textContent != '.') {
                console.log(mathematics)
                mathematics.operand1 = textContent;
            } else {
                mathematics.operand1 = formatNumbers(textContent)
            }
        } else {
            if(textContent == '.') { // limit decimal points
                if(mathematics.operand2.toString().indexOf('.') != -1) return
            }
            if(textContent == '0' && mathematics.operand2 == '0') {
                return;
            } else if (mathematics.operand2 == '0' && textContent != '.') {
                mathematics.operand2 = textContent;
            } else {
                mathematics.operand2 = formatNumbers(textContent);
                handleMath(mathematics)
            }
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
    } else if (type =='undo') {
        handleBackspace()
        handleMath(mathematics)
    }
    else {
        mode = ''
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

