let scoreHome = 0;
let scoreGuest = 0;
let game = 0;
let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEl = document.getElementById("scoreGuest");
let gameWinEl = document.getElementById("gameWin");
const add1tohome = () => {
  scoreHome += 1;
  scoreHomeEl.textContent = scoreHome;
  gameWinEl.textContent = "";
};
const add2tohome = () => {
  scoreHome += 2;
  scoreHomeEl.textContent = scoreHome;
  gameWinEl.textContent = "";
};
const add3tohome = () => {
  scoreHome += 3;
  scoreHomeEl.textContent = scoreHome;
  gameWinEl.textContent = "";
};
const add1toguest = () => {
  scoreGuest += 1;
  scoreGuestEl.textContent = scoreGuest;
  gameWinEl.textContent = "";
};
const add2toguest = () => {
  scoreGuest += 2;
  scoreGuestEl.textContent = scoreGuest;
  gameWinEl.textContent = "";
};
const add3toguest = () => {
  scoreGuest += 3;
  scoreGuestEl.textContent = scoreGuest;
  gameWinEl.textContent = "";
};
const resetScores = () => {
  if (scoreHome > scoreGuest) {
    gameWinEl.textContent = "HOME TEAM WINS!";
  } else if (scoreGuest > scoreHome) {
    gameWinEl.textContent = "GUEST TEAM WINS!";
  } else {
    gameWinEl.textContent = "IT'S A TIE!";
  }
  scoreHome = 0;
  scoreGuest = 0;
  scoreHomeEl.textContent = scoreHome;
  scoreGuestEl.textContent = scoreGuest;
};
