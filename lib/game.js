/* global boxbox */
/* eslint max-len: "off" */
const Trainer = require('./trainer');
const Pokeball = require('./pokeball');
const Pokemon = require('./pokemon');
const PowerBar = require('./powerbar');
const AngleDial = require('./anglebar');
const GameCanvas = document.getElementById("game-canvas");

const world = boxbox.createWorld(GameCanvas, {
  tickFrequency: 100
});

const background = world.createEntity({
  name: "Background",
  type: "static",
  active: false,
  image: "assets/images/background.png",
  x: 0,
  y: 0
});

const ground = world.createEntity({
  name: "Ground",
  type: "static",
  shape: "square",
  color: "#99cc00",
  borderColor: "#99cc00",
  width: 35,
  height: 0.5,
  y: 16.66
});

const ZAPDOSL = {
  name: "Zapdos-Left",
  image: "assets/images/zapdos-left.png",
  spriteWidth: 74,
  spriteHeight: 77
};

const ZAPDOSR = {
  name: "Zapdos-Right",
  image: "assets/images/zapdos-right.png",
  spriteWidth: 84,
  spriteHeight: 77
};

const ARTICUNOL = {
  name: "Articuno-Left",
  image: "assets/images/articuno-fly-left.png",
  spriteWidth: 97,
  spriteHeight: 65
};

const ARTICUNOR = {
  name: "Articuno-Right",
  image: "assets/images/articuno-fly-right.png",
  spriteWidth: 97,
  spriteHeight: 65
};

const MOLTRESSL = {
  name: "Moltress-Left",
  image: "assets/images/moltress-fly-left.png",
  spriteWidth: 97,
  spriteHeight: 65
};

const MOLTRESSR = {
  name: "Moltress-Right",
  image: "assets/images/moltress-fly-right.png",
  spriteWidth: 97,
  spriteHeight: 65
};

for (let i = 0; i < 1; i++) {
  new Pokemon(
    world,
    ZAPDOSL.name,
    ZAPDOSL.image,
    ZAPDOSL.spriteWidth,
    ZAPDOSL.spriteHeight,
    40,
    7,
    5,
    -90
  );
}

for (let i = 0; i < 1; i++) {
  new Pokemon(
    world,
    ZAPDOSR.name,
    ZAPDOSR.image,
    ZAPDOSR.spriteWidth,
    ZAPDOSR.spriteHeight,
    -15,
    4,
    5,
    90
  );
}

for (let i = 0; i < 1; i++) {
  new Pokemon(world,
    ARTICUNOL.name,
    ARTICUNOL.image,
    ARTICUNOL.spriteWidth,
    ARTICUNOL.spriteHeight,
    50,
    7,
    5,
    -90
  );
}

for (let i = 0; i < 1; i++) {
  new Pokemon(
    world,
    ARTICUNOR.name,
    ARTICUNOR.image,
    ARTICUNOR.spriteWidth,
    ARTICUNOR.spriteHeight,
    -5,
    3,
    5,
    90
  );
}

for (let i = 0; i < 1; i++) {
  new Pokemon(
    world,
    MOLTRESSL.name,
    MOLTRESSL.image,
    MOLTRESSL.spriteWidth,
    MOLTRESSL.spriteHeight,
    48,
    9,
    5,
    -90
  );
}

for (let i = 0; i < 1; i++) {
  new Pokemon(
    world,
    MOLTRESSR.name,
    MOLTRESSR.image,
    MOLTRESSR.spriteWidth,
    MOLTRESSR.spriteHeight,
    -10,
    2,
    5,
    90
  );
}

let powerBar = new PowerBar(world);
let angleDial = new AngleDial(world);
let ash = new Trainer(world, powerBar, angleDial);
