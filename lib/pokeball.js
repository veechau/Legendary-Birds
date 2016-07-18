function Pokeball(world) {
  this.world = world;
  this.initEntity();
  this.animate();
}
const POKEDEX = [
  "Zapdos-Left",
  "Zapdos-Right",
  "Articuno-Left",
  "Articuno-Right",
  "Moltress-Left",
  "Moltress-Right"
];

Pokeball.prototype.initEntity = function() {
  this.entity = this.world.createEntity({
    name: "Pokeball",
    image: "assets/images/pokeball-red.png",
    spriteSheet: true,
    spriteWidth: 16,
    spriteHeight: 23,
    x: 2,
    y: 15,
    onImpact: this.checkImpact.bind(this)
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
  this.entity.applyImpulse(power, angle);
};

Pokeball.prototype.checkImpact = function(targetHit, normalForce, tangentialForce) {
  if (targetHit.name() === "Ground"){
    this.entity.destroy();
  } else if (targetHit.name() === "Zubat") {
    this.entity.destroy();
  } else if (POKEDEX.indexOf(targetHit.name()) !== -1){
    this.entity.destroy();
  }  else if (targetHit.name() === "PowerBar") {
    this.entity.destroy();
  }
};

module.exports = Pokeball;
