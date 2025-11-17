function addScore(players) {
    return players.map((players, i) => {
        if (i < 3) {
            return {
                id: players.id,
                score: players.score += 10
            }
        }
        return players;
    });
}

module.exports = addScore;
