class Pact {
    constructor(func) {
        this.resolve = () => {

        }
        this.reject = () => {

        }
        func(this.resolve, this.reject)
    }
    catch() {

    }
    then() {

    }
}

module.exports = Pact;
