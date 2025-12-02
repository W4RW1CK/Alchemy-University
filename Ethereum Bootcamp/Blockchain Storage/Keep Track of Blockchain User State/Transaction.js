class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        this.inputUTXOs.forEach(input => {
            if (input.spent) {
                throw new Error("Double-spending detected!");
            }
        });
    }
}

module.exports = Transaction;
