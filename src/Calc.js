export default class Calc {
    constructor() {
        this.total = 0;
    }

    multiply(a, b) {
        this.total = a * b;
        return this.total.toFixed(2);
    }

    add(a, b) {
        this.total = a + b;
        return this.total.toFixed(2);
    }

    subtract(a, b) {
        this.total = a - b;
        return this.total.toFixed(2);
    }

    divide(a, b) {
        this.total = (a / b)
        return this.total.toFixed(2);
    }
}