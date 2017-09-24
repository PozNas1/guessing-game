class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.curva = Math.floor((this.max + 1 + this.min) / 2);
        return this.curva;
    }

    lower() {
        this.max = this.curva;
    }

    greater() {
        this.min = this.curva;
    }
}

module.exports = GuessingGame;
