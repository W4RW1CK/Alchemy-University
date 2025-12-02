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

        const inputTotal =  this.inputUTXOs.reduce((sum, input) => sum + input.amount, 0);
        const outputTotal = this.outputUTXOs.reduce((sum, output) => sum + output.amount, 0);

        if(inputTotal < outputTotal) {
            throw new Error("Not enough Funds");
        }

        this.inputUTXOs.forEach(input => {
            input.spent = true;
        });
    }
}

module.exports = Transaction;
