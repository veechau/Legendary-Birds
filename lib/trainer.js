const Pokeball = require('./pokeball');
const PowerBar = require('./powerbar');
const AngleDial = require('./anglebar');

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
