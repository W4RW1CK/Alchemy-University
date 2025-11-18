// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        accumulator.indexOf(currentValue) === -1 
        ? accumulator.push(currentValue) 
        : null;
        return accumulator;
    } , [] /* TODO: add initial value */ );
}

module.exports = removeDuplicates;
