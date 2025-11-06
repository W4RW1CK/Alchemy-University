function sumTogether(arr1, arr2) {
    let a = [];
    for (let i = 0; i < arr1.length; i++) {
        a.push(arr1[i] + arr2[i]);
    }
    return a;
}

module.exports = sumTogether;
