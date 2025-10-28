function numberOfPizzas(orders) {
    let a = 0;
    for (let i = 0; i < orders.length; i++) {
            a += orders[i].pizzas;
    }
    return a;
}

module.exports = numberOfPizzas;
