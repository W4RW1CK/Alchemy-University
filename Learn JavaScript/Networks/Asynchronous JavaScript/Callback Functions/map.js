function map(arr, callback) {
    const myArr = [];
    for(let i = 0; i < arr.length; i++){
        myArr[i] = callback(arr[i], i);
    }
    return myArr;
}

module.exports = map;
