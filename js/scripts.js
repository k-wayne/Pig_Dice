//Global scope: variable
var scores, roundScore, activePlayer, gamePlaying, player1, player2;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // Random number
    var dice = Math.floor(Math.random() * 6) + 1;

  
