#Legendary Bird

[Legendary Bird Live][githubPages]

[githubPages]: https://veechau.github.io/

## About the Game

This game is built using JavaScript, HTML5 Canvas and BoxBox Physics Engine that is built on top of Box2D Physics Engine. The game features a Pokemon Trainer who's objective is to capture all the Legendary Pokemons (Zapdos, Articuno and Moltress). However, there is a pesky Zubat flying around that will end the game when captured.

## Instructions

The objective of this game is to catch the legendary birds (red, blue and yellow). Try to avoid the tiny Zubat (purple) roaming around. The game is over as soon as you catch one!
- Hold space bar to increase power
- Up and Down arrows to change angle
- Release the space bar to apply impulse to launch Pokeball

## About the code

Due to the implementation of the BoxBox Physics Engine, there were some limitations to the design of the classes in this game. The Game class created the 'entities' along with the 'world', which resulted in the GameView having difficulties rendering a new game after a previous game was over. Once a 'world' is created, it cannot be destroyed, only the entities within the world can be destroyed. This conflicts with the the game's logic to check for win/losses by counting the number and name of the entities remaining. In order to avoid that conflict, a new game selection would invoke a window refresh callback.

In addition, sprites would not render when too many entities were created in the BoxBox world, this limiting the ability to add additional levels of difficulties in the game.

### Libraries/Plugins

* BoxBox Physics Engine
* SweetAlert

### More to come
* Sprites to include more obvious capture animation
* Integration of a different Physics engine to eliminate issues that exist while using BoxBox.
* Different levels of difficulties
  * Increasing ball density
  * Increasing number of Zubats
  * Increasing speed of Zubats
