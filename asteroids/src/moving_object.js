class MovingObject{
    constructor(pos, vel, radius, color){
        this.pos = pos; //array like [x,y]
        this.vel = vel; //array like [x,y]
        this.radius = radius;
        this.color = color;
    }

    draw(ctx){
        // ctx.clearRect(0,0,500,500);

        //WE NEED TO JUST USE THE REGULAR DRAW FUNCTION FROM THE ASTEROID CLASS.
        //NO SUCH THING AS POS[0] HERE


        // ctx.beginPath();
        // ctx.arc(this.pos[0],this.pos[1],this.radius,0,2* Math.PI);
        // ctx.fillStyle = this.color;
        // ctx.strokeStyle = "red";
        // ctx.stroke();
        // ctx.fill();
    }

    move(ctx){
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.draw(ctx);
    }
}
// export default MovingObject;
module.exports = MovingObject;
