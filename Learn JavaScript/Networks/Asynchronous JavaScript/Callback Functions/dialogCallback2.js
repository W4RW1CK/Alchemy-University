class Dialog {
    onClose(callbackFunction) {
        this.callbackFunction = callbackFunction();
        callbackFunction++;
    }

    close() {
        this.callbackFunction;
    }
}

module.exports = Dialog;
