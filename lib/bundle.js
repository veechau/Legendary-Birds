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
	const PowerBar = __webpack_require__(4);
	const AngleDial = __webpack_require__(5);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Pokeball = __webpack_require__(2);
	const PowerBar = __webpack_require__(4);
	const AngleDial = __webpack_require__(5);
	
	function Trainer(world, powerBar, angleDial) {
	  this.world = world;
	  this.powerBar = powerBar;
	  this.angleDial = angleDial;
	  this.initEntity();
	  this.bindKeys();
	  this.power = 0;
	  this.angle = 45;
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
	    y: 15.5
	  });
	};
	
	Trainer.prototype.bindKeys = function() {
	  this.entity.onKeydown(function(e) {
	    if (e.keyCode === 32){
	      if (this.power >= 100) {
	        this.power = 0;
	      }
	      this.power += 10;
	      this.powerBar.updatePower(this.power);
	    }
	
	    if (e.keyCode === 38) {
	      this.angle += 5;
	      this.angleDial.updateAngle(this.angle);
	    }
	
	    if (e.keyCode === 40) {
	      this.angle -= 5;
	      if (this.angle <= 0) {
	        this.angle = this.angle + 360;
	      }
	      this.angleDial.updateAngle(this.angle);
	    }
	  }.bind(this));
	
	  this.entity.sprite(0, 0);
	  this.entity.onKeyup( function(e) {
	    if (e.keyCode === 32){
	      this.isAnimate = true;
	      let pokeball = new Pokeball(this.world);
	      pokeball.throw(this.power, this.angle);
	      this.power = 0;
	      this.powerBar.updatePower(this.power);
	      this.angle = 45;
	      this.angleDial.updateAngle(this.angle);
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
	  this.initEntity();
	  this.animate();
	}
	const POKEDEX = [
	  "Zapdos-Left",
	  "Zapdos-Right",
	  "Articuno-Left",
	  "Articuno-Right",
	  "Moltress-Left",
	  "Moltress-Right"
	];
	
	Pokeball.prototype.initEntity = function() {
	  this.entity = this.world.createEntity({
	    name: "Pokeball",
	    image: "assets/images/pokeball-red.png",
	    spriteSheet: true,
	    spriteWidth: 16,
	    spriteHeight: 23,
	    x: 2,
	    y: 15,
	    onImpact: this.checkImpact.bind(this)
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
	  this.entity.applyImpulse(power, angle);
	};
	
	Pokeball.prototype.checkImpact = function(targetHit, normalForce, tangentialForce) {
	  if (targetHit.name() === "Ground"){
	    this.entity.destroy();
	  } else if (POKEDEX.indexOf(targetHit.name()) !== -1){
	    // this.entity.clearVelocity("initialVelocity");
	    this.entity.destroy();
	  }  else if (targetHit.name() === "PowerBar") {
	    this.entity.destroy();
	  }
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
	    onImpact: this.checkImpact.bind(self)
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
	
	Pokemon.prototype.checkImpact = function(target, normalForce, tangentialForce){
	  if (target.name() === "Pokeball") {
	    // this.entity.clearVelocity("initialVelocity");
	    this.entity.destroy();
	  } else if (target.name() === "Ground") {
	    this.entity.destroy();
	  } else if (target.name() === "Ash") {
	    this.entity.destroy();
	  } else if (target.name() === "PowerBar") {
	    this.entity.destroy();
	  }
	};
	
	module.exports = Pokemon;


/***/ },
/* 4 */
/***/ function(module, exports) {

	function PowerBar(world) {
	  this.world = world;
	  this.initEntity();
	}
	
	PowerBar.prototype.initEntity = function(){
	  this.entity = this.world.createEntity({
	  name: "PowerBar",
	  type: "static",
	  active: false,
	  image: "assets/images/powerbar.png",
	  spriteSheet: true,
	  spriteWidth: 18,
	  spriteHeight: 100,
	  x: 1,
	  y: 14
	  });
	};
	
	PowerBar.prototype.updatePower = function(power) {
	  let spriteFrame = Math.floor(power / 10);
	  this.entity.sprite(spriteFrame, 0);
	};
	
	module.exports = PowerBar;


/***/ },
/* 5 */
/***/ function(module, exports) {

	function AngleDial(world) {
	  this.world = world;
	  this.initEntity();
	}
	
	AngleDial.prototype.initEntity = function(){
	  this.entity = this.world.createEntity({
	  name: "AngleDial",
	  type: "static",
	  active: false,
	  image: "assets/images/angle-dial.png",
	  spriteSheet: true,
	  spriteWidth: 31.5,
	  spriteHeight: 29,
	  x: 2.5,
	  y: 14
	  });
	};
	
	AngleDial.prototype.updateAngle = function(angle) {
	  if (angle <= 45) {
	    angle += 360;
	  }
	  let spriteFrame = Math.floor(angle / 5 - 9);
	  spriteFrame = spriteFrame % 16;
	  this.entity.sprite(spriteFrame, 0);
	};
	
	module.exports = AngleDial;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map