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
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map