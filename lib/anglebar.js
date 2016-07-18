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
  let spriteFrame = Math.floor(angle / 5 - 9);
  if (angle < 45) {
    spriteFrame += 16;
  }
  spriteFrame = spriteFrame % 16;
  this.entity.sprite(spriteFrame, 0);
};

module.exports = AngleDial;
