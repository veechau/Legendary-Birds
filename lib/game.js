const gameCanvas = document.getElementById("game-canvas");
const world = boxbox.createWorld(gameCanvas, {
  tickFrequency: 100
});

// creating entities

const background = world.createEntity({
  name: "Background",
  type: "static",
  image: "assets/images/background.png",
  x: 0,
  y: 0
});

const ash = world.createEntity({
  name: "Ash",
  type: "static",
  image: "assets/images/ash-sprite-throw.png",
  spriteSheet: true,
  spriteWidth: 80,
  spriteHeight: 51,
  x: 2,
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
  y: 16.9,
});

const pokeball = world.createEntity({
  name: "Pokeball:",
  image: "assets/images/pokeball-red.png",
  spriteSheet: true,
  spriteWidth: 73,
  spriteHeight: 78,
  x: 45,
  y: 4
});

const zapdos = world.createEntity({
  name: "Zapdos",
  image: "assets/images/zapdos.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 73,
  spriteHeight: 78,
  x: 45,
  y: 4
});

const articunoLeft = world.createEntity({
  name: "Articuno-Left",
  image: "assets/images/articuno-fly-left.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65,
  x: 30,
  y: 1
});


const articunoRight = world.createEntity({
  name: "Articuno-Right",
  image: "assets/images/articuno-fly-right.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65,
  x: 0,
  y: 5
});


const moltressLeft = world.createEntity({
  name: "Articuno-Left",
  image: "assets/images/moltress-fly-left.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65,
  x: 40,
  y: 2
});


const moltressRight = world.createEntity({
  name: "Articuno-Right",
  image: "assets/images/moltress-fly-right.png",
  fixedRotation: true,
  spriteSheet: true,
  spriteWidth: 97,
  spriteHeight: 65,
  x: 0,
  y: -1
});

//Ash throwing motion

let frame = 1;
const ashCapture = function (){
  frame ++;
  ash.sprite(frame, 0);
  pokeball.sprite(frame, 0);
  if (frame > 3) {
    frame = 0;
  }
};

// ash.onTick(ashCapture);


// Zapdos Movements

let zapdosFrame = 0;
const zapdosFlap = function (){
  zapdosFrame ++;
  zapdos.sprite(zapdosFrame, 0);
  if (zapdosFrame > 4) {
    zapdosFrame = 0;
  }
};

zapdos.setVelocity("initialVelocity", 5, -89);
zapdos.onTick(zapdosFlap);

// Articuno Movements

let articunoFrame = 1;
const articunoFlapL = function (){
  articunoFrame ++;
  articunoLeft.sprite(articunoFrame, 0);
  if (articunoFrame > 3) {
    articunoFrame = 0;
  }
};

const articunoFlapR = function (){
  articunoFrame ++;
  articunoRight.sprite(articunoFrame, 0);
  if (articunoFrame > 3) {
    articunoFrame = 0;
  }
};

articunoLeft.setVelocity("initialVelocity", 5, -90);
articunoLeft.onTick(articunoFlapL);

articunoRight.setVelocity("initialVelocity", 4, 90);
articunoRight.onTick(articunoFlapR);

// Moltress Movements


let moltressFrame = 1;
const moltressFlapL = function (){
  moltressFrame ++;
  moltressLeft.sprite(moltressFrame, 0);
  if (moltressFrame > 3) {
    moltressFrame = 0;
  }
};

const moltressFlapR = function (){
  moltressFrame ++;
  moltressRight.sprite(moltressFrame, 0);
  if (moltressFrame > 3) {
    moltressFrame = 0;
  }
};

moltressLeft.setVelocity("initialVelocity", 3, -95);
moltressLeft.onTick(moltressFlapL);

moltressRight.setVelocity("initialVelocity", 5, 95);
moltressRight.onTick(moltressFlapR);
