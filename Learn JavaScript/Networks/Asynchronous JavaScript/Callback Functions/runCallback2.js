function runCallback(callbackFunction) {
    setTimeout(() => {
        callbackFunction();
    }, 1000);
}

module.exports = runCallback;
