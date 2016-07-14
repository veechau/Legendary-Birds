function Pokeball(world) {
  this.world = world;
  this.initEntity();
}

Pokeball.prototype.initEntity = function() {
  this.entity = this.world.createEntity({
    name: "Pokeball",
    image: "assets/images/pokeball-red.png",
    spriteSheet: true,
    spriteWidth: 16,
    spriteHeight: 23,
    x: 2,
    y: 15
  });
};

let pokeballFrame = 1;
Pokeball.prototype.pokeballSpin = function() {
  pokeballFrame ++;
  this.entity.sprite(pokeballFrame, 0);
  if (pokeballFrame > 8) {
    pokeballFrame = 0;
  }
};

module.exports = Pokeball;
