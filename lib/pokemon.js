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

Pokemon.prototype.initEntity = function() {
  let self = this;
  this.entity = this.world.createEntity({
    name: this.name,
    image: this.image,
    fixedRotation: true,
    spriteSheet: true,
    spriteWidth: this.spriteWidth,
    spriteHeight: this.spriteHeight,
    x: this.x,
    y: this.y,
    // onImpact: this.collisions.bind(self)
  });
};

Pokemon.prototype.setVelocity = function(velocity, angle) {
  this.entity.setVelocity("initialVelocity", velocity, angle);
};

let frame = 0;
Pokemon.prototype.animate = function(nFrames){
  this.entity.onTick(function() {
    this.checkPosition();
  	this.entity.sprite(frame, 0);
      frame ++;
      if (frame > 3) {
        frame = 0;
      }
  }.bind(this));
};

Pokemon.prototype.checkPosition = function(){
  let currentPosition = this.entity.position();
  if (this.x < 0 && currentPosition["x"] > 30) {
    this.entity.position({x: this.x, y: this.y});
  } else if (this.x > 30 && currentPosition["x"] < 0) {
    this.entity.position({x: this.x, y: this.y});
  }
};

Pokemon.prototype.collisions = function(target, normalForce, tangentialForce){
  if (target.name() === "Pokeball") {
    target.clearVelocity("initialVelocity");
  }
};

module.exports = Pokemon;
