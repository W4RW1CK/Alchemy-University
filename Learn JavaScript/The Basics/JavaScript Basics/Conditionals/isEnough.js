function isEnough(cost, money) {
    if(cost <= money) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = isEnough;
