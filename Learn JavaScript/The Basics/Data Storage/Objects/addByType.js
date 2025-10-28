function numberOfPizzas(orders) {
    let a = 0;
    const ORDER_TYPES = require('./orderTypes');
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            a += orders[i].pizzas;
        }
    }
    return a;
}

module.exports = numberOfPizzas;
