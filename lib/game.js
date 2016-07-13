const gameCanvas = document.getElementById("game-canvas");
const world = boxbox.createWorld(gameCanvas);

const ash = world.createEntity({
  name: "Ash",
  type: "static",
  image: "assets/images/ash-sprite-throw.png",
  spriteSheet: true,
  spriteWidth: 51,
  spriteHeight: 60,
  x: 1,
  y: 8.25,
});

const ground = world.createEntity({
  name: "Ground",
  type: "static",
  shape: "square",
  width: 30,
  height: 0.5,
  y: 10,

});
