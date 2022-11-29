const Asteroid = require('./asteroid.js')
const DEFAULT = {DIM_X: 500, DIM_Y: 500, NUM_ASTEROIDS: 5}
const Util = require("./utils.js");

class Game extends Asteroid{
    constructor(hello) {
        super("HI")
        this.dim_x = DEFAULT.DIM_X;
        this.dim_y = DEFAULT.DIM_Y;
        this.num_asteroids = DEFAULT.NUM_ASTEROIDS;
        this.asteroids = [];
        for (let i = 0; i < this.num_asteroids; i++){
            this.addAsteroids()
        } 
    }

    addAsteroids() {
        let ast = new Asteroid(this.randomPosition())
        this.asteroids.push(ast)
    }

    randomPosition() {
        let xCoordinate = Math.floor(Math.random() * this.dim_x);
        let yCoordinate = Math.floor(Math.random() * this.dim_y);
        return [xCoordinate, yCoordinate];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],this.radius,0,2* Math.PI);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fill(); 
    }


    moveObject(ctx) {
        ctx.clearRect(0,0,500,500)
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].move(ctx)
        }
    }
}


module.exports = Game;