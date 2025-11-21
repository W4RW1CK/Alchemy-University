class Pact {
    constructor(func) {
        this.resolve = (value) => {
            this.thenFunct(value);
        }
        this.reject = () => {

        }
        func(this.resolve, this.reject)
    }
    catch() {

    }
    then($then) {
        this.thenFunct = $then;
    }
}

module.exports = Pact;
