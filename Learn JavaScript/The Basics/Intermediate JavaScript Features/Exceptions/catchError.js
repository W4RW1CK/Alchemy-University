function catchError(fn) {
    try {
        fn();;
    }
    catch(ex) {
        return(ex);
    }
}

module.exports = catchError;
