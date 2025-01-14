export default class Calc {
    constructor() {
        this.total = 0;
    }

    multiply(a, b) {
        this.total += a * b;
        return this.total;
    }

    add(a, b) {
        this.total += a + b;
        return this.total;
    }

    subtract(a, b) {
        this.total += a - b;
        return this.total;
    }

    divide(a, b) {
        this.total += (a / b)
        return this.total;
    }
}