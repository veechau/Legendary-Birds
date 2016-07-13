const gameCanvas = document.getElementById("game-canvas");
const world = boxbox.createWorld(gameCanvas);


const background = world.createEntity({
  name: "Background",
  type: "static",
  image: "assets/images/background.png",
  imageOffsetY: -7
});

const ash = world.createEntity({
  name: "Ash",
  type: "static",
  image: "assets/images/ash-sprite-throw.png",
  spriteSheet: true,
  spriteWidth: 80,
  spriteHeight: 51,
  x: 1,
  y: 15.5,
});

const ground = world.createEntity({
  name: "Ground",
  type: "static",
  shape: "square",
  color: "#99cc00",
  borderColor: "#99cc00",
  width: 35,
  height: 0.5,
  y: 17,
});

const zapdos = world.createEntity({
  name: "Zapdos",
  image: "assets/images/zapdos.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 73,
  spriteHeight: 78,
  x: 40,
  y: 3
});

ash.sprite(1, 0);
zapdos.setVelocity("initialVelocity", 5, -90);
