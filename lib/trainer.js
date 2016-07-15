function Trainer(world) {
  this.world = world;
  this.initEntity();
}

Trainer.prototype.initEntity = function() {
  let self = this;
  this.entity = this.world.createEntity({
    name: "Ash",
    type: "static",
    active: "false",
    image: "assets/images/ash-sprite-throw.png",
    spriteSheet: true,
    spriteWidth: 80,
    spriteHeight: 51,
    x: 2,
    y: 15.5
  });
};

Trainer.prototype.onKeyup = function() {
  this.entity.sprite(0, 0);
  this.entity.onKeyup( function(e) {
    if (e.keyCode === 32){
      this.trainerCapture();
    }
  }.bind(this));
};

let trainerFrame = 1;
Trainer.prototype.trainerCapture = function() {
  this.entity.onTick(function() {
    this.entity.sprite(trainerFrame, 0);
      trainerFrame ++;
      if (trainerFrame > 4) {
        this.stopAnimation().bind(this);
      }
    }.bind(this));
};

Trainer.prototype.stopAnimation = function() {
  this.world.unbindOnTick(this.entity);
  this.onKeyup();
};

module.exports = Trainer;
