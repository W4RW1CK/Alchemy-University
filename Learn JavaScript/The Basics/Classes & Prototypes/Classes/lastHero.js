class Hero {
    constructor(health) {
        this.health = health;
    }
    takeDamage(takeDamage) {
        if(takeDamage) {
            this.health -= takeDamage;
        }
    }
}

module.exports = Hero;
