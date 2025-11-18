// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        const key = currentValue.type;
        const value = currentValue.food;

        if (accumulator[key]) {
            accumulator[key].push(value);
        } else {
            accumulator[key] = [value];
        }

        return accumulator;
    }, {} );
}

module.exports = group;
