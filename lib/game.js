/* global boxbox */
/* eslint max-len: "off" */
const Trainer = require('./trainer');
const Pokeball = require('./pokeball');
const Pokemon = require('./pokemon');
const PowerBar = require('./powerbar');
const AngleDial = require('./anglebar');
const SweetAlert = require('sweetalert');


function Game(gameCanvas) {
  this.gameCanvas = gameCanvas;
  this.score = 0;
  this.pokemons = [];
}

Game.prototype.start = function() {
  this.world = boxbox.createWorld(this.gameCanvas, {
    tickFrequency: 100,
  });

  this.world.onTick(this.checkGameStatus.bind(this));

  const background = this.world.createEntity({
    name: "Background",
    type: "static",
    active: false,
    image: "assets/images/background.png",
    x: 0,
    y: 0
  });

  const ground = this.world.createEntity({
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

  const ZUBATL = {
    name: "Zubat",
    image: "assets/images/zubat-left.png",
    spriteWidth: 39,
    spriteHeight: 36
  };

  // for (let i = 0; i < 1; i++) {
    const zapdos1 = new Pokemon(
      this.world,
      ZAPDOSL.name,
      ZAPDOSL.image,
      ZAPDOSL.spriteWidth,
      ZAPDOSL.spriteHeight,
      40,
      7,
      5,
      -90
    );
  // }
  this.pokemons.push(zapdos1);
  // for (let i = 0; i < 1; i++) {
    const zapdos2 = new Pokemon(
      this.world,
      ZAPDOSR.name,
      ZAPDOSR.image,
      ZAPDOSR.spriteWidth,
      ZAPDOSR.spriteHeight,
      -15,
      4,
      5,
      90
    );
  // }
  this.pokemons.push(zapdos2);

  // for (let i = 0; i < 1; i++) {
    const articuno1 = new Pokemon(this.world,
      ARTICUNOL.name,
      ARTICUNOL.image,
      ARTICUNOL.spriteWidth,
      ARTICUNOL.spriteHeight,
      50,
      7,
      5,
      -90
    );
  // }
  this.pokemons.push(articuno1);


  // for (let i = 0; i < 1; i++) {
    const articuno2 = new Pokemon(
      this.world,
      ARTICUNOR.name,
      ARTICUNOR.image,
      ARTICUNOR.spriteWidth,
      ARTICUNOR.spriteHeight,
      -5,
      3,
      5,
      90
    );
    this.pokemons.push(articuno2);

  // }

  // for (let i = 0; i < 1; i++) {
    const moltress1 = new Pokemon(
      this.world,
      MOLTRESSL.name,
      MOLTRESSL.image,
      MOLTRESSL.spriteWidth,
      MOLTRESSL.spriteHeight,
      48,
      9,
      5,
      -90
    );
    // }
    this.pokemons.push(moltress1);


  // for (let i = 0; i < 1; i++) {
    const moltress2 = new Pokemon(
      this.world,
      MOLTRESSR.name,
      MOLTRESSR.image,
      MOLTRESSR.spriteWidth,
      MOLTRESSR.spriteHeight,
      -10,
      2,
      5,
      90
    );
  // }
  this.pokemons.push(moltress2);


  // for (let i = 0; i < 1; i++) {
    const zubat = new Pokemon(
      this.world,
      ZUBATL.name,
      ZUBATL.image,
      ZUBATL.spriteWidth,
      ZUBATL.spriteHeight,
      35,
      12,
      8,
      -90
    );
  // }


  this.legendaryBirdsCount = [zapdos1, zapdos2, articuno1, articuno2, moltress1, moltress2];
  this.zubatCount = [zubat];

  let powerBar = new PowerBar(this.world);
  let angleDial = new AngleDial(this.world);
  let ash = new Trainer(this.world, powerBar, angleDial);
};

Game.prototype.checkGameStatus = function() {
  this.zubatCount.forEach( (zubat) => {
    if (!zubat.isActive()){
      this.gameLost();
    }
  });

  this.legendaryBirdsCount.forEach( (bird) => {
    if (!bird.isActive()) {
      this.score += 1;
      if (this.score === 6) {
        this.gameWon();
      }
    }
  });
  this.score = 0;
};


Game.prototype.gameLost = function() {
  let self = this;
  SweetAlert({
    title: "You Lost!",
    text: "You wasted a pokeball on a Zubat  \n Would you like to play again?",
    type: "error",
    // showCancelButton: true,
    // cancelButtonText: "No",
    confirmButtonColor: "light-blue",
    confirmButtonText: "Yes",
    closeOnConfirm: true },
    function(){
      window.location.reload();
    }
  );
};

Game.prototype.gameWon = function() {
  SweetAlert({
    title: "You're a Pokemon Master.",
    text: "You caught them all! \n Would you like to play again?",
    imageUrl: "assets/images/winningmessage.png",
    // showCancelButton: true,
    // cancelButtonText: "No",
    confirmButtonColor: "light-blue",
    confirmButtonText: "Yes",
    closeOnConfirm: true },
    function(){
      window.location.reload();
    }
  );
};

module.exports = Game;
