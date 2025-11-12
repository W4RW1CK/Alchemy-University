const Hero = require('./Hero');

class Warrior extends Hero{
    constructor(health) {
        super (health);
        this.rage = 0;
    }

    takeDamage(takeDamage) {
        super.takeDamage(takeDamage);
        this.rage += 1;
    }
}


module.exports = Warrior;
