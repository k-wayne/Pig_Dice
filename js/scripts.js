//Global scope: variable
var scores, roundScore, activePlayer, gamePlaying, player1, player2;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // result rounded to integer
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";

    // refresh if value is 1
        if (dice !== 1) {
          // Add Score
          roundScore += dice;
          document.querySelector(
            "#current-" + activePlayer
          ).textContent = roundScore;

        } else {
    // Next player
    nextPlayer();
  }
}
});

/Hold button instructions

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    //  Add current score to global score
    scores[activePlayer] += roundScore;

    // Refresh after hold
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
