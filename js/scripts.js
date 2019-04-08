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

      // Declaration of the winner
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next Player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

// Refresh to New Game

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

//document.querySelector('#current-' + activePlayer).textContent = dice

if('#current-0' > '#current-1') {
  document.getElementById('current-0').style.color = 'red'
}
