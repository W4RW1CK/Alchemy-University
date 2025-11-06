function playerHandScore(hand) {
    let score = 0;
    for(let i = 0; i < hand.length; i++) {
        if(hand[i] === "K") {
            score += 4;
        }
        else if(hand[i] === "Q") {
            score += 3;
        }
        else if(hand[i] === "J") {
            score += 2;
        }
    }
    return score;
}

module.exports = playerHandScore;
