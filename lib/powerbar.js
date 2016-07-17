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
