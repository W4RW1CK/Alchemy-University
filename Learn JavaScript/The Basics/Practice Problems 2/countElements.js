function countElements(elements) {
    let a = {};
    for (let i = 0; i < elements.length; i ++) {
        if (!(elements[i] in a)){
            a[elements[i]] = 1
        }
        else {
            a[elements[i]] += 1
        }
    }
    return a;
}

module.exports = countElements;
