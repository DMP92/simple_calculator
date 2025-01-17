
function formatNumbers (num, total, operator) {
    let tailFigure = ''
    
    if(total.length != 0) {
        let headFigure = total[0].toString()
        tailFigure = tailFigure.concat(headFigure, num)
        return total[0] = parseInt(tailFigure)
    } else {
        return total[0] = parseInt(num)
    }
}

export { formatNumbers }