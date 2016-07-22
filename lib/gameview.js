const SweetAlert = require('sweetalert');
const Game = require('./game');
const GameCanvas = document.getElementById("game-canvas");

  SweetAlert({
    title: "Instructions",
    text: "Hold the Space bar to control power. \n ⇧ ⇩ to control angle. \n Don't waste any pokeballs on the Zubat or else it's Game Over!",
    type: "info",
    animation: "slide-from-top",
    confirmButtonColor: "lightblue",
    confirmButtonText: "Ready!"
  });


const newGame = new Game(GameCanvas);
newGame.start();
