
function groupInput(num, total, operator) {
    let tailFigure = ''
    
    if(total.length != 0) {
        let headFigure = total[0].toString()
        tailFigure = tailFigure.concat(headFigure, num)
        total[0] = parseInt(tailFigure)
        console.log(total, operator)
    } else {
        total[0] = parseInt(num)
        console.log(total, operator)
    }
}

export { groupInput }