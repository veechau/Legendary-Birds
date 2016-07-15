/* global boxbox */
/* eslint max-len: "off" */
const Trainer = require('./trainer');
const Pokeball = require('./pokeball');
const Pokemon = require('./pokemon');

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

const ZAPDOS = {
    name: "Zapdos",
    image: "./assets/images/zapdos.png",
    spriteWidth: 73,
    spriteHeight: 78
};

const ARTICUNOL = {
  name: "Articuno-Left",
  image: "assets/images/articuno-fly-left.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65
};

const ARTICUNOR = {
  name: "Articuno-Right",
  image: "assets/images/articuno-fly-right.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65
};

const MOLTRESSL = {
  name: "Moltress-Left",
  image: "assets/images/moltress-fly-left.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65
};

const MOLTRESSR = {
  name: "Moltress-Right",
  image: "assets/images/moltress-fly-right.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65
};

for (let i = 0; i < 1; i++) {
  new Pokemon(
    world,
    ZAPDOS.name,
    ZAPDOS.image,
    ZAPDOS.spriteWidth,
    ZAPDOS.spriteHeight,
    40,
    5,
    5,
    -90
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




let ash = new Trainer(world);
ash.onKeyup();

let pokeball = new Pokeball(world);

//
// let zapdos1 = new Pokemon(world, `${ZAPDOS.name}`, ZAPDOS.image, ZAPDOS.spriteWidth, ZAPDOS.spriteHeight, Math.random() * (100 - 45 + 1) + 45, Math.random() * (5 - 0 + 1) + 1, 5, -90);
//
// let zapdos2 = new Pokemon(world, `${ZAPDOS.name}`, ZAPDOS.image, ZAPDOS.spriteWidth, ZAPDOS.spriteHeight, Math.random() * (100 - 45 + 1) + 45, Math.random() * (5 - 0 + 1) + 1, 5, -90);
//
// let zapdos3 = new Pokemon(world, `${ZAPDOS.name}`, ZAPDOS.image, ZAPDOS.spriteWidth, ZAPDOS.spriteHeight, Math.random() * (100 - 45 + 1) + 45, Math.random() * (5 - 0 + 1) + 1, 5, -90);

// let articunol1 = new Pokemon(world, ARTICUNOL.name, ARTICUNOL.image, ARTICUNOL.spriteWidth, ARTICUNOL.spriteHeight, Math.random() * (100 - 45 + 1) + 45, Math.random() * (4 - 0 + 2) + 1, 5, -90);
//
// let articunol2 = new Pokemon(world, ARTICUNOL.name, ARTICUNOL.image, ARTICUNOL.spriteWidth, ARTICUNOL.spriteHeight, Math.random() * (100 - 45 + 1) + 45, Math.random() * (4 - 0 + 2) + 1, 5, -90);
//
// let articunor1 = new Pokemon(world, ARTICUNOR.name, ARTICUNOR.image, ARTICUNOR.spriteWidth, ARTICUNOR.spriteHeight, Math.random() * (-45) + -45, Math.random() * (6 - 0 + 2) + 1, 5, 90);
//
// let articunor2 = new Pokemon(world, ARTICUNOR.name, ARTICUNOR.image, ARTICUNOR.spriteWidth, ARTICUNOR.spriteHeight, Math.random() * (-45) + -45, Math.random() * (6 - 0 + 2) + 1, 5, 90);
//
// let moltressl1 = new Pokemon(world, MOLTRESSL.name, MOLTRESSL.image, MOLTRESSL.spriteWidth, MOLTRESSL.spriteHeight, Math.random() * (100 - 45 + 1) + 45, Math.random() * (6 - 0 + 2) + 1, 5, -90);
//
// let moltressl2 = new Pokemon(world, MOLTRESSL.name, MOLTRESSL.image, MOLTRESSL.spriteWidth, MOLTRESSL.spriteHeight, Math.random() * (100 - 45 + 1) + 45, Math.random() * (6 - 0 + 2) + 1, 5, -90);
//
// let moltressr1 = new Pokemon(world, MOLTRESSR.name, MOLTRESSR.image, MOLTRESSR.spriteWidth, MOLTRESSR.spriteHeight, Math.random() * (-30) + -30, Math.random() * (4 - 0 + 2) + 1, 5, 90);
//
// let moltressr2 = new Pokemon(world, MOLTRESSR.name, MOLTRESSR.image, MOLTRESSR.spriteWidth, MOLTRESSR.spriteHeight, Math.random() * (-30) + -30, Math.random() * (4 - 0 + 2) + 1, 5, 90);


// Pokeball spin
//
// let pokeballFrame = 1;
// const pokeballSpin = function (){
//   pokeballFrame ++;
//   pokeball.sprite(pokeballFrame, 0);
//   if (pokeballFrame > 8) {
//     pokeballFrame = 0;
//   }
// };


// Zapdos Movements
//
// let zapdosFrame = 0;
// const zapdosFlap = function (){
//   zapdosFrame ++;
//   zapdos.sprite(zapdosFrame, 0);
//   if (zapdosFrame > 4) {
//     zapdosFrame = 0;
//   }
// };
//
// zapdos.setVelocity("initialVelocity", 5, -89);
// zapdos.onTick(zapdosFlap);

// Articuno Movements
//
// let articunoFrame = 1;
// const articunoFlapL = function (){
//   articunoFrame ++;
//   articunoLeft.sprite(articunoFrame, 0);
//   if (articunoFrame > 3) {
//     articunoFrame = 0;
//   }
// };
//
// const articunoFlapR = function (){
//   articunoFrame ++;
//   articunoRight.sprite(articunoFrame, 0);
//   if (articunoFrame > 3) {
//     articunoFrame = 0;
//   }
// };
//
// articunoLeft.setVelocity("initialVelocity", 5, -90);
// articunoLeft.onTick(articunoFlapL);
//
// articunoRight.setVelocity("initialVelocity", 4, 90);
// articunoRight.onTick(articunoFlapR);

// Moltress Movements

//
// let moltressFrame = 1;
// const moltressFlapL = function (){
//   moltressFrame ++;
//   moltressLeft.sprite(moltressFrame, 0);
//   if (moltressFrame > 3) {
//     moltressFrame = 0;
//   }
// };
//
// const moltressFlapR = function (){
//   moltressFrame ++;
//   moltressRight.sprite(moltressFrame, 0);
//   if (moltressFrame > 3) {
//     moltressFrame = 0;
//   }
// };
//
// moltressLeft.setVelocity("initialVelocity", 3, -95);
// moltressLeft.onTick(moltressFlapL);
//
// moltressRight.setVelocity("initialVelocity", 5, 95);
// moltressRight.onTick(moltressFlapR);
