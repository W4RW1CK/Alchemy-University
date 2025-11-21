class Pact {
    constructor(fn) {
        this.thenFuncs = [];
        this.catchFuncs = [];
        this.resolve = (value) => {
            this.thenFuncs.forEach((fn) => fn(value));
        }
        this.reject = (value) => {
            this.catchFuncs.forEach((fn) => fn(value));
        }
        fn(this.resolve, this.reject);
    }
    then(_then) {
        this.thenFuncs.push(_then);
    }
    catch(_catch) {
        this.catchFuncs.push(_catch);
    }
}

module.exports = Pact;
