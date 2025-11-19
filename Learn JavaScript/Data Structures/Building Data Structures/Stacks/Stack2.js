const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === MAX_STACK_SIZE) throw new Error("PUSH Error!");
        this.items.push(item);
    }
    pop() {
        if (this.items.length < 1) throw new Error(" POP Error!");
        return this.items.pop();
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

module.exports = Stack;
