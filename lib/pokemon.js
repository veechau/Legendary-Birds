function Pokemon(world, name, image, spriteWidth, spriteHeight, x, y, velocity, angle){
  this.world = world;
  this.name = name;
  this.image = image;
  this.spriteWidth = spriteWidth;
  this.spriteHeight = spriteHeight;
  this.x = x;
  this.y = y;
  this.velocity = velocity;
  this.angle = angle;
  this.initEntity();
  this.setVelocity(velocity, angle);
  this.animate();
}

const POKEDEX = [
  "Zapdos",
  "Articuno-Left",
  "Articuno-Right",
  "Moltress-Left",
  "Moltress-Right"
];

Pokemon.prototype.initEntity = function() {
  this.entity = this.world.createEntity({
    name: this.name,
    image: this.image,
    fixedRotation: true,
    spriteSheet: true,
    spriteWidth: this.spriteWidth,
    spriteHeight: this.spriteHeight,
    x: this.x,
    y: this.y,
    onImpact: this.collisions
  });
};

Pokemon.prototype.setVelocity = function(velocity, angle) {
  this.entity.setVelocity("initialVelocity", velocity, angle);
};

let frame = 0;
Pokemon.prototype.animate = function(nFrames){
  this.entity.onTick(function() {
  	this.entity.sprite(frame, 0);
      frame ++;
      if (frame > 3) {
        frame = 0;
      }
  }.bind(this));
};

Pokemon.prototype.collisions = function(otherBird, normalForce, tangentialForce){
  if (POKEDEX.indexOf(otherBird.name()) !== -1) {

  }
};


module.exports = Pokemon;
