const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();
    }

    addOperation(operation) {
        this.operations.push(operation);
    }

    undo() {
        const op = this.operations.pop();
        this.undos.push(op);
    }

    redo() {
        const op = this.undos.pop();
        this.operations.push(op);
    }

    redoAll() {
        while (!this.undos.isEmpty()) {
            const op = this.undos.pop();
            this.operations.push(op);
        }
    }
}

module.exports = OperationManager;
