
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