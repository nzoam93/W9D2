console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
// import MovingObject from "./moving_object.js";

const Util = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require('./game.js')

window.MovingObject = MovingObject;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const test = new MovingObject([30,30],[10,10],5,"blue");
test.draw(ctx); //what is the context here?
setInterval(() => test.move(ctx),1000);

const ast = new Asteroid([250, 250]);
ast.draw(ctx); //what is the context here?
setInterval(() => ast.move(ctx),1000);

const g = new Game();
g.draw(ctx); //what is the context here?
setInterval(() => g.move(ctx),1000);
