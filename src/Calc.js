export default class Calc {
    constructor() {
        this.total = 0;
    }

    multiply(a, b) {
        this.total = a * b;
        return this.total;
    }

    add(a, b) {
        this.total = a + b;
        return this.total;
    }

    subtract(a, b) {
        this.total = a - b;
        return this.total;
    }

    divide(a, b) {
        let total = (a / b)
        if(b === 0) {
            return this.total;
        } else {
            this.total = total;
            return Math.ceil(this.total);
        }
    }
}