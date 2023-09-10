
score = JSON.parse(localStorage.getItem('score')) || {
  "win": 0,
  "lose": 0,
  "tie": 0
};

// showScore();
function resetScore(s) {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  showScore();

}



function computerMove(yourMove) {

  let computerMove = Math.random();

  if (computerMove > 0 && computerMove < 1 / 3) { return (`ROCK`); }
  if (computerMove > 1 / 3 && computerMove < 2 / 3) { return (`PAPER`); }
  if (computerMove > 2 / 3 && computerMove < 1) { return (`SCISSOR`); }

}

function showScore() {
  document.querySelector(".scored").innerHTML = `WIN : ${score.win}  LOSE : ${score.lose}  TIE : ${score.tie}`;
}


let counter = 0
let interval;
function autoPlay() {
  if (counter == 0) {
    playGame(computerMove());
    interval = setInterval(() => {
      playGame(computerMove());
      counter = 1;
    }, 1000);
  }

  if (counter == 1) {
    clearInterval(interval);
    counter = 0;

  }



}


function playGame(yourMove) {

  let computer = computerMove();
  let result = "";

  if (yourMove === "ROCK") {

    if (computer === "ROCK") {
      result = ("TIE");
      score.tie++;
    }
    if (computer === "PAPER") {
      result = ("LOSE");
      score.lose++;
    }
    if (computer === "SCISSOR") {
      result = ("WIN");
      score.win++;
    }

  }
  if (yourMove === "PAPER") {

    if (computer === "ROCK") {
      result = ("WIN");
      score.win++;
    }
    if (computer === "PAPER") {
      result = ("TIE");
      score.tie++;
    }
    if (computer === "SCISSOR") {
      result = ("LOSE");
      score.lose++;
    }

  }

  if (yourMove === "SCISSOR") {

    if (computer === "ROCK") {
      result = ("LOSE");
      score.lose++;
    }
    if (computer === "PAPER") {
      result = ("WIN");
      score.win++;
    }
    if (computer === "SCISSOR") {
      result = ("TIE ");
      score.tie++;
    }

  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector(".result").innerHTML = `${result}`;
  document.querySelector(".moves").innerHTML = `You : ${yourMove} -|- ${computer} : Computer`;
  showScore();
}