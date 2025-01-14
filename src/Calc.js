export default class Calc {
    constructor() {
        this.total = 0;
    }

    multiply(a, b) {
        this.total += a * b;
        return this.total;
    }

    addition(a, b) {
        this.total += a + b;
        return this.total;
    }

    subtraction(a, b) {
        this.total += a - b;
        return this.total;
    }
}