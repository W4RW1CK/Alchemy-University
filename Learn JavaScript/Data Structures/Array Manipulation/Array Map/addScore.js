function addScore(players) {
    return players.map((players, i) => {
        return {
            id: players.id,
            score: players.score += 10
        }
    });
}

module.exports = addScore;
