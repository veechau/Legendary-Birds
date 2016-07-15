/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global boxbox */
	/* eslint max-len: "off" */
	const Trainer = __webpack_require__(1);
	const Pokeball = __webpack_require__(2);
	const Pokemon = __webpack_require__(3);
	
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Pokeball = __webpack_require__(2);
	
	function Trainer(world) {
	  this.world = world;
	  this.initEntity();
	  this.bindKeys();
	  this.power = 0;
	  this.isAnimate = false;
	  this.entity.onTick(this.trainerThrowFrames.bind(this));
	}
	
	Trainer.prototype.initEntity = function() {
	  let self = this;
	  this.entity = this.world.createEntity({
	    name: "Ash",
	    type: "static",
	    image: "assets/images/ash-sprite-throw.png",
	    spriteSheet: true,
	    spriteWidth: 80,
	    spriteHeight: 51,
	    x: 2,
	    y: 15.5,
	    // onKeydown: function(e) {
	    //   if (e.keyCode === 32){
	    //     self.trainerCapture();
	    //   }
	    // }
	  });
	};
	
	Trainer.prototype.bindKeys = function() {
	  this.entity.onKeydown(function(e) {
	    this.power += 1;
	  }.bind(this));
	
	  this.entity.sprite(0, 0);
	  this.entity.onKeyup( function(e) {
	    if (e.keyCode === 32){
	      this.power = 0;
	      this.isAnimate = true;
	    }
	  }.bind(this));
	};
	
	
	let frame = 0;
	Trainer.prototype.trainerThrowFrames = function() {
	  this.entity.sprite(frame, 0);
	  if (this.isAnimate) {
	    frame ++;
	    if (frame > 4) {
	      this.isAnimate = false;
	      frame = 0;
	
	    }
	  }
	};
	
	module.exports = Trainer;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function Pokeball(world) {
	  this.world = world;
	  this.impulsePower = 0;
	  this.initEntity();
	  this.animate();
	}
	
	Pokeball.prototype.initEntity = function() {
	  this.entity = this.world.createEntity({
	    name: "Pokeball",
	    image: "assets/images/pokeball-red.png",
	    spriteSheet: true,
	    spriteWidth: 16,
	    spriteHeight: 23,
	    x: 2,
	    y: 15,
	    // onKeydown: this.power.bind(this),
	    // onKeyup: this.release.bind(this)
	  });
	};
	
	let pokeballFrame = 1;
	Pokeball.prototype.animate = function() {
	  this.entity.onTick(function(){
	    this.entity.sprite(pokeballFrame, 0);
	    pokeballFrame ++;
	    if (pokeballFrame > 8) {
	      pokeballFrame = 0;
	    }
	  }.bind(this));
	};
	
	Pokeball.prototype.throw = function(power, angle) {
	  this.applyImpulse(power, angle);
	};
	
	module.exports = Pokeball;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function Pokemon(world, name, image, spriteWidth, spriteHeight, x, y, velocity, angle){
	  this.world = world;
	  this.name = name;
	  this.image = image;
	  this.spriteWidth = spriteWidth;
	  this.spriteHeight = spriteHeight;
	  this.x = x;
	  this.y = y;
	  this.velocity = velocity;
	  this.angle = angle;
	  this.initEntity();
	  this.setVelocity(velocity, angle);
	  this.animate();
	}
	
	// const POKEDEX = [
	//   "Zapdos",
	//   "Articuno-Left",
	//   "Articuno-Right",
	//   "Moltress-Left",
	//   "Moltress-Right"
	// ];
	
	Pokemon.prototype.initEntity = function() {
	  let self = this;
	  this.entity = this.world.createEntity({
	    name: this.name,
	    image: this.image,
	    fixedRotation: true,
	    spriteSheet: true,
	    spriteWidth: this.spriteWidth,
	    spriteHeight: this.spriteHeight,
	    x: this.x,
	    y: this.y,
	    // onImpact: this.collisions.bind(self)
	  });
	};
	
	Pokemon.prototype.setVelocity = function(velocity, angle) {
	  this.entity.setVelocity("initialVelocity", velocity, angle);
	};
	
	let frame = 0;
	Pokemon.prototype.animate = function(nFrames){
	  this.entity.onTick(function() {
	    this.checkPosition();
	  	this.entity.sprite(frame, 0);
	      frame ++;
	      if (frame > 3) {
	        frame = 0;
	      }
	  }.bind(this));
	};
	
	Pokemon.prototype.checkPosition = function(){
	  let currentPosition = this.entity.position();
	  if (this.x < 0 && currentPosition["x"] > 30) {
	    this.entity.position({x: this.x, y: this.y});
	  } else if (this.x > 30 && currentPosition["x"] < 0) {
	    this.entity.position({x: this.x, y: this.y});
	  }
	};
	
	Pokemon.prototype.collisions = function(target, normalForce, tangentialForce){
	  if (target.name() === "Pokeball") {
	    target.clearVelocity("initialVelocity");
	  }
	};
	
	module.exports = Pokemon;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map