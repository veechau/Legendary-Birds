const Pokeball = require('./pokeball.js');

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
