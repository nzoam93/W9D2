const DEFAULT = {COLOR: 'brown', RADIUS: 10}
const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

class Asteroid extends MovingObject {

    constructor(pos) {
        super("HI")
        this.color = DEFAULT.COLOR;
        this.radius = DEFAULT.RADIUS;
        this.pos = pos;
        this.vel = Util.randomVec(10);
    }
}

module.exports = Asteroid;