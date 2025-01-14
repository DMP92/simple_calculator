
function formatTotal(arr) {
    let newTotal = '';

    while (arr.length > 0) {
        newTotal += arr.shift();
    }

    return parseInt(newTotal);
}

export { formatTotal }