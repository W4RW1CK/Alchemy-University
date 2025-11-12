class Hero {
    constructor() {
        this.health = 50;
    }
    takeDamage(takeDamage) {
        if(takeDamage) {
            this.health -= takeDamage;
        }
    }
}

module.exports = Hero;
