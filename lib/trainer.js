function Trainer(world) {
  this.world = world;
  this.initEntity();
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
        this.stopAnimation();
      }
    }.bind(this));
};

// Trainer.prototype.onKeyup = function() {
//   let self = this.entity;
//   this.entity.onKeyup( function(e) {
//     if (e.keyCode === 32){
//       self.stopAnimation();
//     }
//   });
// };

Trainer.prototype.stopAnimation = function() {
  this.world.unbindOnTick(this.entity);
  this.onKeyup();
};

module.exports = Trainer;
