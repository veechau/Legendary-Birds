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
    onKeydown: this.power.bind(this),
    onKeyup: this.release.bind(this)
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
