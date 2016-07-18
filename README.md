#Legendary Bird

[Legendary Bird Live][githubPages]

[githubPages]: https://veechau.github.io/

## About the Game

This game is built using JavaScript, HTML5 Canvas and BoxBox Physics Engine that is built on top of Box2D Physics Engine. The game features a Pokemon Trainer who's objective is to capture all the Legendary Pokemons (Zapdos, Articuno and Moltress). However, there is a pesky Zubat flying around that will end the game when captured.

Game Preview:
![alt text](https://github.com/veechau/Legendary-Birds/blob/master/assets/images/game-preview.png "Birds spawn and fly across the screen from left and right")


## Instructions

The objective of this game is to catch the legendary birds (red, blue and yellow). Try to avoid the tiny Zubat (purple) roaming around. The game is over as soon as you catch one!
- Hold space bar to increase power
- Up and Down arrows to change angle
- Release the space bar to apply impulse to launch Pokeball

## About the code

Due to the implementation of the BoxBox Physics Engine, there were some limitations to the design of the classes in this game. The Game class created the 'entities' along with the 'world', which resulted in the GameView having difficulties rendering a new game after a previous game was over. Once a 'world' is created, it cannot be destroyed, only the entities within the world can be destroyed. This conflicts with the the game's logic to check for win/losses by counting the number and name of the entities remaining. In order to avoid that conflict, a new game selection would invoke a window refresh callback.

In addition, sprites would not render when too many entities were created in the BoxBox world, this limiting the ability to add additional levels of difficulties in the game.

### Class Breakdown

* GameView
* Game
* Trainer
* PowerBar
* AngleDial
* Pokeball
* Pokemon

#### GameView
  Responsible for introducing the game and initializing a new Game object.

#### Game
  Responsible for initializing a BoxBox world and calls on initialize BoxBox entities such as Trainer, PowerBar, AngleDial and Pokemon classes. It also serves as a parent class to check on the game status on every tick of the game (100 ms tick frequency). It checks on the number of Legendary Pokemons remaining and for the presence of a Zubat. Lack of a Zubat presence results in a Loss. A Win occurs when all Legendary Pokemons is captured and the Zubat remains.

  ```
  Game.prototype.checkGameStatus = function() {
    this.zubatCount.forEach( (zubat) => {
      if (!zubat.isActive()){
        this.gameLost();
      }
    });

    this.legendaryBirdsCount.forEach( (bird) => {
      if (!bird.isActive()) {
        this.score += 1;
        if (this.score === 6) {
          this.gameWon();
        }
      }
    });
    this.score = 0;
  };
  ```
  There are a total of 6 Legendary Pokemons, therefore a Win is declared when `Game.prototype.checkGameStatus` returns with a score of 6 inactive (captured) Pokemons.

#### Trainer, PowerBar, and AngleDial
  These classes act as static objects that do not participate in collisions. The Trainer class is responsible for initializing a Pokeball entity depending on Keyup and Keydown events. The PowerBar and AngleDial serves as visual cues for the user to determine their current impulse power and angle, respectively.

### Pokeball and Pokemons
  These two classes are dynamic entities and participate in collisions. Due to the fact that BoxBox's `.onImpact` method is indiscriminate of the object. Logic had to be written in to check for the entity's name in order to produce the correct results. Pokeball and Pokemon entities are destroyed from the world when they collide. Once destroyed, `Game.prototype.checkGameStatus` checks on the `_destroyed` property of an entity in `Pokemon.prototype.isActive` method to determine the state of the game.

  ```
  Pokemon.prototype.isActive = function() {
    return !this.entity._destroyed;
  };
  ```

### Libraries/Plugins

* BoxBox Physics Engine
* SweetAlert

### Sprite Credits

* [Pokemon Sprites][pokemonSpritesResource]
* [Angle Dial Sprites][DialsSprite]
* [Ash Sprites][ashResource]
* [Sunny Background][sunnyBackgroundResource]
* [Pikachu Background][pikachuBGResource]
[pokemonSpritesResource]: http://www.spriters-resource.com/ds/pokemonrangertol/?source=genre
[DialsSprite]: http://sircornedbeef.portfoliobox.me/
[ashResource]: http://www.pokecommunity.com/
[sunnyBackgroundResource]: http://www.keyword-suggestions.com/
[pikachuBGResource]: http://www.easyfreepatterns.com/

### More to come
* Sprites to include more obvious capture animation
* Integration of a different Physics engine to eliminate issues that exist while using BoxBox.
* Different levels of difficulties
  * Increasing ball density
  * Increasing number of Zubats
  * Increasing speed of Zubats
